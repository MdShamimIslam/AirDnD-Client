import axios from "axios";
import { clearCookie } from "./auth";

 const axiosSecure = axios.create({
    baseURL : import.meta.env.VITE_URL,
    withCredentials : true
})

axiosSecure.interceptors.response.use(res => res, async error =>{
    if(error.response?.status === 401 || error.response?.status === 403){
        await clearCookie();
        window.location.replace('/login');
    }
    return Promise.reject(error);
})

export default axiosSecure;