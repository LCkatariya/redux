
import axios from 'axios';
import { HOST_URL, IS_LIVE } from './api'
const IS = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODg5OTgsImVtYWlsSWQiOiJoYXJwYWwueUB0YWdnYm94LmNvbSIsImlhdCI6MTY1MjI2ODkxMywiZXhwIjoxNjYwMDQ0OTEzfQ.Vmk3zesYIY85nmDecL2tB0z3CHSTLpZsUPAMihFP0TY'


const requestInterceptor = (config) => {
    var headers = {}
    headers = (IS_LIVE && localStorage.getItem("token")) ? { 'authorization': `Bearer ${localStorage.getItem("token")}` } : { 'authorization': 'Bearer ' + IS, }
    return {
        ...config,
        headers: {
            ...config.headers,
            ...headers

        },
    }
};

class HttpClient {
    constructor() {
        const options = { baseURL: HOST_URL };
        const instance = axios.create(options);
        instance.interceptors.request.use(requestInterceptor);
        axios.interceptors.response.use(
            function (response) {
                return response;
            },
            function (error) {
                return Promise.reject(error);
            }
        );
        return instance;
    }
}
export default HttpClient;
