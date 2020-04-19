import {AIR_QUALITY_API_URL, API_VERSION, DEFAULT_PORT} from "../../Api";
import AxiosGet from "../AxiosGet";
import {ROTTERDAM_ZUIDPLEIN} from "../../../metadata/Geolocations";

const STATIONS_COORDINATES_ENDPOINT = 'api/stations/coordinates';


/**
 * http://{url}/v1/api/stations/coordinates/?lng={4.815944219547257}&lat={52.45030615}
 */
export default class GetStation {
    static getComponentUpperLimit(lat= ROTTERDAM_ZUIDPLEIN.lat, lng=ROTTERDAM_ZUIDPLEIN.lng) {
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${STATIONS_COORDINATES_ENDPOINT}?lat=${lat}&lng=${lng}`;
        return AxiosGet.get(url);
    }
}
