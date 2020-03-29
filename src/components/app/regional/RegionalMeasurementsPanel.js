import React from 'react';
import RegionalMeasurementElement from "./RegionalMeasurementElement";
import moment from "moment";
import {HOURS_BACK} from '../../../config/Constants';
import ComponentsInfo from "../../../metadata/ComponentsInfo";
import ErrorBoundary from "../error_boundaries/ErrorBoundary";

const className = 'GeneralStatsPanel w3-panel';

const title = ` average of ${HOURS_BACK} most recent concentrations until`;
const error = 'Measurements are not available. Please, visit us later';

class RegionalMeasurementsPanel extends React.Component {

    render() {
        return (
            <div className={className}>
                <h5>{ComponentsInfo.get(this.props.currentFormula).name.en}: {title} {moment().format('DD/MM/YYYY HH:mm')} </h5>
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
