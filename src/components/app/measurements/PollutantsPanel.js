import React from 'react';
import LocationMapImage from './map/LocationMapImage';
import OnTheSpotMonitorTable from './on_the_spot/OnTheSpotMonitorTable';
import DateTimePicker from 'react-datetime-picker';
import GetRegionalAggregatedMeasurements from '../../../client/axios/measurements/GetRegionalAggregatedMeasurements';
import {MONITOR, TOP_POLLUTANTS} from "../ApplicationMode";
import TopPollutantsTable from "./top_pollutants/TopPollutantsTable";
import {ROTTERDAM_ZUIDPLEIN} from "../../../metadata/Geolocations";
import {update} from "../../../handler/PollutantsPanelHandler";
import GetStation from "../../../client/axios/stations/GetStation";


const topPollutantsTitle = 'Top Air Pollutants, μg/m3';
const pollutantsMonitorTitle = 'Air Pollutants Monitor, μg/m3';

const className = 'PollutantsPanel w3-panel';
const margin = {
    margin: '0 -10px'
};

const initPollutantsToShow = 3;

class PollutantsPanel extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            dateOfMeasurement: this.props.dateOfMeasurement,
            measurements: this.props.measurements,
            coordinates: ROTTERDAM_ZUIDPLEIN
        };
    }

    componentDidMount() {
        GetRegionalAggregatedMeasurements.getMeasurementsByStation('NL01487', 'avg', this.state.dateOfMeasurement).then(res => {
            this.setState(() => {
                return {
                    formula: res[0].formula,
                    measurements: res
                }
            });
        });
        this.interval = setInterval(() => {
            update(new Date(), this)
        }, 240000);
    }

    latLngChangeHandler = (LatLng) => {
        GetStation.getComponentUpperLimit(LatLng.lat, LatLng.lng).then(
            res => {
                const data = res[0];
                GetRegionalAggregatedMeasurements.getMeasurementsByStation(data.number, 'avg', this.state.dateOfMeasurement).then(res => {
                    this.setState(() => {
                        return {
                            formula: res[0].formula,
                            measurements: res,
                            stationNr: data.number,
                            coordinates: {
                                lat: data.coordinates.lat,
                                lng: data.coordinates.lng,
                                where: data.location
                            }
                        }
                    });
                });
            }
        );
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onChange = dateOfMeasurement => {
        update(dateOfMeasurement, this);
    };

    render() {
        const applicationMode = this.props.applicationMode;
        return (
            <div className={className + ' w3-row-padding'}
                 style={margin}>
                <LocationMapImage
                    mode={applicationMode}
                    latLngHandler={this.latLngChangeHandler}
                    coordinates={applicationMode === MONITOR ? this.state.coordinates : this.props.coordinates}
                />
                <div className="w3-twothird">
                    {applicationMode === MONITOR &&
                    <React.Fragment>
                        <h5>{pollutantsMonitorTitle}&nbsp;&nbsp;&nbsp;
                            <DateTimePicker onChange={this.onChange}
                                            value={this.state.dateOfMeasurement}>
                            </DateTimePicker>
                        </h5>
                        <OnTheSpotMonitorTable
                            applicationMode={this.props.applicationMode}
                            dateOfMeasurement={this.state.dateOfMeasurement}
                            measurements={this.state.measurements}
                            pollutantsToShow={initPollutantsToShow}
                            formulaHandler={this.props.formulaHandler}
                            handleToggleMode={this.props.handleToggleMode}

                        />
                    </React.Fragment>
                    }
                    {applicationMode === TOP_POLLUTANTS &&
                    <React.Fragment>
                        <h5>{topPollutantsTitle}</h5>
                        <TopPollutantsTable
                            applicationMode={this.props.applicationMode}
                            dateOfMeasurement={this.state.dateOfMeasurement}
                            measurements={this.props.componentsMeasurements}
                            pollutantsToShow={initPollutantsToShow}
                            formulaHandler={this.props.topPollutantsFormulaHandler}
                            handleToggleMode={this.props.handleToggleMode}

                        />
                    </React.Fragment>
                    }
                </div>
            </div>
        );
    }

}

export default PollutantsPanel;
