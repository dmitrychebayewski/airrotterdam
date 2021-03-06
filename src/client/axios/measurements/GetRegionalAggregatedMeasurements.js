import moment from 'moment';
import {AIR_QUALITY_API_URL, API_VERSION, DEFAULT_PORT} from '../../Api';
import {HOURS_BACK} from '../../../config/Constants';
import AxiosGet from '../AxiosGet';

const MEASUREMENT_STATION_ENDPOINT = 'api/measurement/station';
const MEASUREMENT_REGION_ENDPOINT = 'api/measurement/region';

export default class GetRegionalAggregatedMeasurements {

    /**
     * http://{url}/v1/api/measurements/NL01488
     * @param station_number
     * @param aggr
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getMeasurementsByStation(station_number = 'NL01487', aggr = 'avg', date = new Date()) {
        const end = moment(date).format();
        const start = moment(date).subtract(HOURS_BACK, 'hours').add('1', 'seconds').format();
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${MEASUREMENT_STATION_ENDPOINT}/${station_number}?start=${start}&end=${end}&aggr=${aggr}`;
        return AxiosGet.get(url);
    }

    /**
     * http://{url}/v1/api/measurements/region/rd?aggr=avg
     * @param region
     * @param formula
     * @param aggr
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getMeasurementByRegion(region = 'RD', formula = 'FN', aggr = 'avg', date = new Date()) {
        const end = moment(date).format();
        const start = moment(date).subtract(HOURS_BACK, 'hours').add('1', 'seconds').format();
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${MEASUREMENT_REGION_ENDPOINT}/${region}?formula=${formula}&start=${start}&end=${end}&aggr=${aggr}`;
        return AxiosGet.get(url);
    }
}
