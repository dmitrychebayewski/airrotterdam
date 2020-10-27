import React from 'react';
import RegionalMeasurementElement from "./RegionalMeasurementElement";
import ComponentsInfo from "../../../metadata/ComponentsInfo";
import ErrorBoundary from "../error_boundaries/ErrorBoundary";

const className = 'GeneralStatsPanel w3-panel';

const error = 'Measurements are not available. Please, visit us later';


class RegionalMeasurementsPanel extends React.Component {

    margin(value) {
        return {
            'margin-top': `${value}%`,
            'margin-bottom': `${value}%`
        }
    }

    render() {
        return (
            <div className={className}>
                <h5 style={this.margin(0)}>{ComponentsInfo.get(this.props.currentFormula).name.en} </h5>
                <ErrorBoundary text={error}>
                    <RegionalMeasurementElement
                        dateOfMeasurement={this.props.dateOfMeasurement}
                        currentFormula={this.props.currentFormula}
                        name={'Rotterdam'}
                        region={'RD'}
                        value={this.props.value}/>
                    <RegionalMeasurementElement
                        dateOfMeasurement={this.props.dateOfMeasurement}
                        currentFormula={this.props.currentFormula}
                        name={'Zuid Holland'}
                        region={'ZH'}
                        value={this.props.value}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default RegionalMeasurementsPanel;
