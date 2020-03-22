import {AIR_QUALITY_API_URL, API_VERSION, DEFAULT_PORT} from "../../Api";
import AxiosGet from "../AxiosGet";

const COMPONENTS_ENDPOINT = 'api/components';


/**
 * http://localhost:8080/v1/api/components/:formula
 */
class GetComponentInfo {
    static getComponentUpperLimit(formula = 'O3') {
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${COMPONENTS_ENDPOINT}/${formula}/limit`;
        return AxiosGet.get(url);
    }
}

export default GetComponentInfo
