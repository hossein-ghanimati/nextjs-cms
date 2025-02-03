/* eslint-disable prettier/prettier */
import axios from "axios";

const sendApiReq = () => {
  const sendRequest = axios.create({
    baseURL: "/api",    
  });
  
  sendRequest.interceptors.request.use((config) => {
    return config;
  });
  
  sendRequest.interceptors.response.use(
    (response) => {
      console.log(`${response.config.url} response ->`, response)
      return response?.data;
    },
    (err) => {
      console.warn("Your Req Has An Err :", err);
      throw Error(err?.response?.data?.message || err.message);
    },
  );
  return sendRequest
}
export default sendApiReq;
