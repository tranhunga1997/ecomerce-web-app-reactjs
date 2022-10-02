import axios from "axios";
import {stringify} from "query-string";

const { REACT_APP_API_URL, REACT_APP_FAKE_API_URL } = process.env;

const clientAxios = axios.create({
    baseURL: REACT_APP_FAKE_API_URL,
    paramsSerializer: params => stringify(params)
})

clientAxios.interceptors.response.use(function (response) {
    try {
        if (response.data) return response.data;
        return response;
    } catch (error) {
        throw new Error(error);
    }
});

export default clientAxios;