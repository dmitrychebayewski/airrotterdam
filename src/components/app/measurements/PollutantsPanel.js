import React from 'react';
import LocationMapImage from './map/LocationMapImage';
import OnTheSpotMonitorTable from './on_the_spot/OnTheSpotMonitorTable';
import DateTimePicker from 'react-datetime-picker';
import GetRegionalAggregatedMeasurements from '../../../client/axios/measurements/GetRegionalAggregatedMeasurements';
import {MONITOR, TOP_POLLUTANTS} from "../ApplicationMode";
import TopPollutantsTable from "./top_pollutants/TopPollutantsTable";
import {ROTTERDAM_ZUIDPLEIN} from "../../../metadata/Geolocations";


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
            measurements: this.props.measurements
        };
    }

    update(date) {
        GetRegionalAggregatedMeasurements.getMeasurementsByStation('NL01487', 'avg', date).then(res => {
            this.setState(() => {
                return {
                    formula: res[0].formula,
                    measurements: res,
                    dateOfMeasurement: date
                }
            });
        });
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
            this.update(new Date())
        }, 240000);
    }

    onChange = dateOfMeasurement => {
        GetRegionalAggregatedMeasurements.getMeasurementsByStation('NL01487', 'avg', dateOfMeasurement).then(response => {
            this.setState({
                dateOfMeasurement: dateOfMeasurement,
                measurements: response
            })
        });
    };

    render() {
        const applicationMode = this.props.applicationMode;
        return (
            <div className={className + ' w3-row-padding'}
                 style={margin}>
                {applicationMode === MONITOR &&
                <LocationMapImage coordinates={ROTTERDAM_ZUIDPLEIN}/>
                }
                {applicationMode === TOP_POLLUTANTS &&
                <LocationMapImage coordinates={this.props.coordinates}/>
                }
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
