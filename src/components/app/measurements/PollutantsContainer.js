import React from 'react';
import ApplicationMode, {MONITOR, TOP_POLLUTANTS} from '../ApplicationMode'

import PollutantsPanel from './PollutantsPanel';
import GetRegionalAggregatedMeasurements from '../../../client/axios/measurements/GetRegionalAggregatedMeasurements';
import RegionalMeasurementsPanel from '../regional/RegionalMeasurementsPanel';
import PollutantInfoPanel from '../info/PollutantInfoPanel';
import GetAggregatedComponentsMeasurements
    from "../../../client/axios/measurements/GetAggregatedComponentsMeasurements";
import {TOP_POLLUTANTS_LIST} from "../../../metadata/TopPollutants";
import {ROTTERDAM_ZUIDPLEIN} from "../../../metadata/Geolocations";

const className = 'PollutantsContainer w3-container';

class PollutantsContainer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.handleMonitorFormulaSelection = this.handleMonitorFormulaSelection.bind(this);
        this.handleTopPollutantsFormulaSelection = this.handleTopPollutantsFormulaSelection.bind(this);
        this.handleToggleAppMode = this.handleToggleAppMode.bind(this);
        this.state = {
            measurements: {},
            componentsMeasurements: {},
            formula: 'FN',
            componentInfo: {},
            dateOfMeasurement: new Date(),
            applicationMode: MONITOR,
            coordinates: ROTTERDAM_ZUIDPLEIN
        }
    }

    handleMonitorFormulaSelection(event) {
        this.setState({
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
        switch (nextMode) {
            case TOP_POLLUTANTS:
                GetAggregatedComponentsMeasurements.getComponentsMeasurements(TOP_POLLUTANTS_LIST).then(response => {
                        this.setState(() => {
                            return {
                                applicationMode: nextMode,
                                componentsMeasurements: response
                            }
                        });
                    }
                );
                return;
            case MONITOR:
                this.setState({
                    applicationMode: nextMode
                });
                return;
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