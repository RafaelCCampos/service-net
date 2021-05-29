import Axios from 'axios';

const BASE_URL = 'https://service-net.herokuapp.com'
//const BASE_URL = 'http://localhost:8080'

const api = Axios.create({
    baseURL: BASE_URL,
})

export default api;