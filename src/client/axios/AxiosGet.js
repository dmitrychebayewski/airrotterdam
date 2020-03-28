import axios from "axios";

class AxiosGet {
    static get(url) {
        // console.log(url);
        return axios({
            "method": "GET",
            "url": url,
        }).then(response => response.data)
            .catch((error) => {
                // console.log(error)
            });
    }
}

export default AxiosGet