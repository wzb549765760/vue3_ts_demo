import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

axios.defaults.baseURL = `http://www.fullstackjavascript.cn:3000`;

axios.interceptors.request.use((config:AxiosRequestConfig)=>{
  return config;
});

axios.interceptors.response.use((respons:AxiosResponse)=>{
  if(respons.data.err == 1){
    return Promise.reject(respons.data.data)
  }
  return respons.data.data
},err=>{
  return Promise.reject(err)
});

export default axios;