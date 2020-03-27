import React from 'react';
import LocationMapImage from './map/LocationMapImage';
import PollutantTable from '../../../components/app/measurements/table/PollutantTable';
import DateTimePicker from 'react-datetime-picker';
import GetRegionalAggregatedMeasurements from '../../../client/axios/measurements/GetRegionalAggregatedMeasurements';


const majorPollutantsTitle = 'Major Air Pollutants, μg/m3';

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
        return (
            <div className={className + ' w3-row-padding'}
                 style={margin}
            >
                <LocationMapImage/>
                <div className="w3-twothird">
                    <h5>{majorPollutantsTitle}&nbsp;&nbsp;&nbsp;
                        <DateTimePicker onChange={this.onChange}
                                        value={this.state.dateOfMeasurement}>
                        </DateTimePicker>
                    </h5>
                    <PollutantTable dateOfMeasurement={this.state.dateOfMeasurement}
                                    measurements={this.state.measurements}
                                    pollutantsToShow={initPollutantsToShow}
                                    formulaHandler={this.props.formulaHandler}
                    />
                </div>
            </div>
        );
    }

}

export default PollutantsPanel;
