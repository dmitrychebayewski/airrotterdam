import GetRegionalAggregatedMeasurements from "../client/axios/measurements/GetRegionalAggregatedMeasurements";

export function update(date, reactComponent) {
    GetRegionalAggregatedMeasurements.getMeasurementsByStation('NL01487', 'avg', date).then(res => {
        reactComponent.setState(() => {
            return {
                measurements: res,
                dateOfMeasurement: date
            }
        });
    });
}