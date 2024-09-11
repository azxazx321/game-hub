import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];

  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd8bcc2e90adf4abf85ca85f77d28b898'
    },

})



