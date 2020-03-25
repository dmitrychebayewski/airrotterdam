import React from 'react';
import RegionalMeasurementElement from "./RegionalMeasurementElement";
import moment from "moment";
import {HOURS_BACK} from '../../../config/Constants';
import ComponentsInfo from "../../../metadata/ComponentsInfo";

const className = 'GeneralStatsPanel w3-container';

const title = `averaged measurements, recent ${HOURS_BACK} hours until`;

class RegionalMeasurementsPanel extends React.Component {

    render() {
        return (
            <div className={className}>
                <h5>{ComponentsInfo.get(this.props.currentFormula).name.en}: {title} {moment().format('DD/MM/YYYY HH:mm')} </h5>
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
            </div>
        );
    }
}

export default RegionalMeasurementsPanel;
