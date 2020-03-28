import React from 'react';
import GetRegionalAggregatedMeasurements from "../../../client/axios/measurements/GetRegionalAggregatedMeasurements";
import ComponentsInfo from "../../../metadata/ComponentsInfo";

class RegionalMeasurementElement extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 0,
            dateOfMeasurement: this.props.dateOfMeasurement
        }
    }

    updateValue() {
        GetRegionalAggregatedMeasurements.getMeasurementByRegion(this.props.region,
            this.props.currentFormula, 'avg')
            .then(
                response => {
                    const value = response.length ? response[0].value : 0;
                    this.setState({
                        formula: this.props.currentFormula,
                        value: value,
                        dateOfMeasurement: this.props.dateOfMeasurement
                    })
                }
            );
    }

    w3Colour(value) {
        return ['w3-light-grey', 'w3-pale-blue', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-purple'][value];
    }


    style(value) {
        return {
            width: `${value}%`
        }
    }

    render() {
        if (this.state.formula !== this.props.currentFormula) {
            this.updateValue();
        }
        const measurementValue = this.state.value;
        const rating = ComponentsInfo.rating(this.props.currentFormula, measurementValue);
        const scaleFactor = ComponentsInfo.limit(this.props.currentFormula) / 100;
        return (
            <div>
                <p>{this.props.name}</p>
                <div className={this.props.currentFormula + " w3-grey"}>
                    <div className={"w3-container w3-center w3-padding " + this.w3Colour(rating)}
                         style={this.style(measurementValue / scaleFactor)}>{measurementValue}&nbsp;μg/m3
                    </div>
                </div>
            </div>
        )
    }
}

export default RegionalMeasurementElement;
