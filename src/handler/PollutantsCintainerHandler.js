import GetAggregatedComponentsMeasurements from "../client/axios/measurements/GetAggregatedComponentsMeasurements";
import {TOP_POLLUTANTS_LIST} from "../metadata/TopPollutants";

export function updateComponentsMeasurements(reactComponent) {
    GetAggregatedComponentsMeasurements.getComponentsMeasurements(TOP_POLLUTANTS_LIST).then(response => {
            reactComponent.setState(() => {
                return {
                    componentsMeasurements: response,
                    coordinates: {
                        lat: response[0].coordinates[1],
                        lng: response[0].coordinates[0],
                        where: response[0].whereMeasured
                    }
                }
            });
        }
    );
}