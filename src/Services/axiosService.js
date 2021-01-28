import axios from "axios";

export default class AxiosServices {

    post = (url, data, isHeaderRequired = false) => {
        return axios.post(url, data, isHeaderRequired)
    }
}