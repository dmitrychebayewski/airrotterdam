import React from 'react';

import PollutantsPanel from './PollutantsPanel';
import GetRegionalAggregatedMeasurements from '../../../client/axios/measurements/GetRegionalAggregatedMeasurements';
import RegionalMeasurementsPanel from '../regional/RegionalMeasurementsPanel';
import PollutantInfoPanel from '../info/PollutantInfoPanel';

const className = 'PollutantsContainer w3-container';

class PollutantsContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleFormulaSelection = this.handleFormulaSelection.bind(this);
        this.state = {
            measurements: {},
            formula: 'FN',
            componentInfo: {},
            dateOfMeasurement: new Date(),
        }
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
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleFormulaSelection(event) {
        this.setState({
            formula: event.target.attributes['formula'].value
        });
    }

    render() {
        return (
            <div className={className}>
                <PollutantsPanel
                    dateOfMeasurement={this.state.dateOfMeasurement}
                    formulaHandler={this.handleFormulaSelection}
                    measurements={this.state.measurements}/>
                <hr/>
                <RegionalMeasurementsPanel
                    dateOfMeasurement={this.state.dateOfMeasurement}
                    currentFormula={this.state.formula}
                    value={this.state.value}
                />
                <hr/>
                <PollutantInfoPanel
                    currentFormula={this.state.formula}/>
            </div>
        );
    }
}

export default PollutantsContainer