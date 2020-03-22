import moment from "moment";
import {AIR_QUALITY_API_URL, API_VERSION, DEFAULT_PORT} from "../../Api";
import AxiosGet from "../AxiosGet";

const MEASUREMENTS_ENDPOINT = 'api/measurements';
const AREA_PATH = 'region';

class GetRegionalAggregatedMeasurements {

    /**
     * http://localhost:8080/v1/api/measurements/NL01488
     * @param station_number
     * @param aggr
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getMeasurementsByStation(station_number = 'NL01487', aggr = 'avg', date = new Date()) {
        const end = moment(date).format();
        const start = moment(date).subtract(4, 'hours').format();
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${MEASUREMENTS_ENDPOINT}/${station_number}?start=${start}&end=${end}&aggr=${aggr}`;
        return AxiosGet.get(url);
    }

    /**
     * http://localhost:8080/v1/api/measurements/region/rd?aggr=avg
     * @param region
     * @param formula
     * @param aggr
     * @param date
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getMeasurementByRegion(region = 'RD', formula = 'FN', aggr = 'avg', date = new Date()) {
        const end = moment(date).format();
        const start = moment(date).subtract(4, 'hours').format();
        const url = `${AIR_QUALITY_API_URL}:${DEFAULT_PORT}/${API_VERSION}/${MEASUREMENTS_ENDPOINT}/${AREA_PATH}/${region}?formula=${formula}&start=${start}&end=${end}&aggr=${aggr}`;
        console.log(url);
        return AxiosGet.get(url);
    }
}

export default GetRegionalAggregatedMeasurements
