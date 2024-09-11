import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd8bcc2e90adf4abf85ca85f77d28b898'
    },

})



