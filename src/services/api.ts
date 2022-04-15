import axios from "axios";

const api = axios.create({
    baseURL: 'http:192.168.216.91:3333',
});

export {api};