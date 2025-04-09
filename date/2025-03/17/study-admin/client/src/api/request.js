
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:7666',
    timeout: 5000
});


request.interceptors.request.use((config) => {


    // 请求放行
    return config;
})

request.interceptors.response.use(
    (response) => {
        return response;
    },
    // 第二个函数,对错误进行处理
    (error) => {
        return Promise.reject(error);
    }
);

export default request;