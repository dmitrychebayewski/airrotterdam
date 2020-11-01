import GetAggregatedComponentsMeasurements from "../client/axios/measurements/GetAggregatedComponentsMeasurements";
import {TOP_POLLUTANTS_LIST} from "../metadata/TopPollutants";

export function updateComponentsMeasurements(reactComponent) {
    GetAggregatedComponentsMeasurements.getComponentsMeasurements(TOP_POLLUTANTS_LIST).then(response => {
            reactComponent.setState(() => {
                return response && response.length? {
                    componentsMeasurements: response,
                    coordinates: {
                        lat: response[0].coordinates[1],
                        lng: response[0].coordinates[0],
                        where: response[0].whereMeasured
                    }
                } :newFunction(reactComponent)
            });
        }
    );

    function newFunction(reactComponent) {
        return {
            componentsMeasurements: reactComponent.state.componentsMeasurements,
            coordinates: {
                lat: reactComponent.state.coordinates.lat,
                lng: reactComponent.state.coordinates.lng,
                where: reactComponent.state.coordinates.where
            }
        };
    }
}