import {AIR_QUALITY_API_URL, API_VERSION, DEFAULT_PORT} from "../../Api";
import AxiosGet from "../AxiosGet";

const COMPONENTS_ENDPOINT = 'api/component/limit';


/**
 * http://{url}/v1/api/component/limit/{formula}
 */
class GetComponentInfo {
    static getComponentUpperLimit(formula = 'O3') {
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${COMPONENTS_ENDPOINT}/${formula}`;
        return AxiosGet.get(url);
    }
}

export default GetComponentInfo
