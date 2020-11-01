import GetRegionalAggregatedMeasurements from "../client/axios/measurements/GetRegionalAggregatedMeasurements";

export function update(date, stationNr = 'NL01487', reactComponent) {
    GetRegionalAggregatedMeasurements.getMeasurementsByStation(stationNr, 'avg', date).then(res => {
        reactComponent.setState(() => {
            return res && res.length? {
                measurements: res,
                dateOfMeasurement: date
            } : {
                measurements: reactComponent.state.measurements,
                dateOfMeasurement: reactComponent.state.dateOfMeasurement
            }
        });
    });
}