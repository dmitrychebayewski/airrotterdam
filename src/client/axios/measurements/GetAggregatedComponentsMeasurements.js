import moment from 'moment';
import {AIR_QUALITY_API_URL, API_VERSION, DEFAULT_PORT} from '../../Api';
import {HOURS_BACK} from '../../../config/Constants';
import AxiosGet from '../AxiosGet';

const MEASUREMENT_COMPONENTS_ENDPOINT = 'api/measurement/components';

export default class GetAggregatedComponentsMeasurements {

    /**
     * http://{url}/v1/api/measurement/components
     * @param components
     * @param aggr
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getComponentsMeasurements(components = ['NO2'], aggr = 'max', date = new Date()) {
        const end = moment(date).format();
        const start = moment(date).subtract(HOURS_BACK, 'hours').subtract('5', 'minutes').format();
        const parameters = '&formula=' + components.reduce((acc, component) =>
            acc += `&formula=${encodeURIComponent(component)}`
        );
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${MEASUREMENT_COMPONENTS_ENDPOINT}/?start=${start}&end=${end}${parameters}&aggr=${aggr}`;
        return AxiosGet.get(url);
    }

}
