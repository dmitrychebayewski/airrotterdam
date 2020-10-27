import React from 'react';
import ComponentsInfo from "../../../metadata/ComponentsInfo";
import {update} from "../../../handler/RegionalMeasurementElementHandler";

class RegionalMeasurementElement extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 0,
            dateOfMeasurement: this.props.dateOfMeasurement
        }
    }

    w3Colour(value) {
        return ['w3-light-grey', 'w3-pale-blue', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-pale-yellow', 'w3-yellow', 'w3-pale-red', 'w3-purple'][value];
    }

    style(width) {
        return {
            width: `${width}%`
        }
    }

    margin(value) {
        return {
            'margin-top': `${value}%`,
            'margin-bottom': `${value}%`
        }
    }

    render() {
        if (this.state.formula !== this.props.currentFormula) {
            update(this);
        }
        const measurementValue = this.state.value;
        const rating = ComponentsInfo.rating(this.props.currentFormula, measurementValue);
        const scaleFactor = ComponentsInfo.limit(this.props.currentFormula) / 100;
        return (
            <div>
                <p style={this.margin(0.9)}>{this.props.name}</p>
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
