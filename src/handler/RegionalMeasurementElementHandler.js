import GetRegionalAggregatedMeasurements from "../client/axios/measurements/GetRegionalAggregatedMeasurements";

export function update(reactComponent) {
    GetRegionalAggregatedMeasurements.getMeasurementByRegion(reactComponent.props.region,
        reactComponent.props.currentFormula, 'avg')
        .then(
            response => {
                const value = response.length ? response[0].value : 0;
                reactComponent.setState({
                    formula: reactComponent.props.currentFormula,
                    value: value,
                    dateOfMeasurement: reactComponent.props.dateOfMeasurement
                })
            }
        );
}