import axios from 'axios';
import { FetchResponse } from '../hookers/useData';
import { Genre } from '../hookers/useGenres';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd8bcc2e90adf4abf85ca85f77d28b898'
    },

})

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd8bcc2e90adf4abf85ca85f77d28b898'
    },

})

export class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getGenres = () => {
        return axiosInstance
        .get<FetchResponse<Genre>>(this.endpoint)
        .then(res => res.data)
    }

}

