import React from 'react';
import ApplicationMode, {MONITOR, TOP_POLLUTANTS} from '../ApplicationMode'

import PollutantsPanel from './PollutantsPanel';
import RegionalMeasurementsPanel from '../regional/RegionalMeasurementsPanel';
import PollutantInfoPanel from '../info/PollutantInfoPanel';
import {ROTTERDAM_ZUIDPLEIN} from "../../../metadata/Geolocations";
import {updateComponentsMeasurements} from "../../../handler/PollutantsContainerHandler";

const className = 'PollutantsContainer w3-container';

class PollutantsContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleMonitorFormulaSelection = this.handleMonitorFormulaSelection.bind(this);
        this.handleTopPollutantsFormulaSelection = this.handleTopPollutantsFormulaSelection.bind(this);
        this.handleToggleAppMode = this.handleToggleAppMode.bind(this);
        let applicationMode = MONITOR;
        if (ApplicationMode.isTopPollutants(this.props.cookies.get('applicationMode'))) {
            applicationMode = TOP_POLLUTANTS
        }
        this.state = {
            measurements: {},
            componentsMeasurements: {},
            formula: 'FN',
            componentInfo: {},
            dateOfMeasurement: new Date(),
            applicationMode: applicationMode,
            coordinates: ROTTERDAM_ZUIDPLEIN
        }
    }

    handleMonitorFormulaSelection(event) {
       this.setState( {
            formula: event.target.attributes['formula'].value
        });
    }

    handleTopPollutantsFormulaSelection(event) {
        this.setState({
            formula: event.target.attributes['formula'].value,
            coordinates: {
                lat: event.target.attributes['lat'].value,
                lng: event.target.attributes['lng'].value,
                where: event.target.attributes['where'].value
            }
        });
    }

    handleToggleAppMode() {
        const nextMode = ApplicationMode.dispatch(this.state.applicationMode);
        this.props.cookies.set('applicationMode', nextMode);
        switch (nextMode) {
            case TOP_POLLUTANTS:
                updateComponentsMeasurements(this);
                this.setState(() => {
                    return {
                        applicationMode: nextMode,
                    }
                });
                return;
            default:
            case MONITOR:
                this.setState({
                    applicationMode: nextMode
                });
                return;
        }
    }

    componentDidMount() {
        if (ApplicationMode.isTopPollutants(this.state.applicationMode)) {
            updateComponentsMeasurements(this);
        }
    }


    render() {
        return (
            <div className={className}>
                <PollutantsPanel
                    applicationMode={this.state.applicationMode}
                    handleToggleMode={this.handleToggleAppMode}
                    dateOfMeasurement={this.state.dateOfMeasurement}
                    formulaHandler={this.handleMonitorFormulaSelection}
                    topPollutantsFormulaHandler={this.handleTopPollutantsFormulaSelection}
                    measurements={this.state.measurements}
                    componentsMeasurements={this.state.componentsMeasurements}
                    coordinates={this.state.coordinates}
                />
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