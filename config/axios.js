/* eslint-disable indent */
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

let baseURL = "http://192.168.3.116:5000";

switch(process.env.NODE_ENV) {
  case "staging":
    baseURL = "https://api.staging.com.br";
    break;
  case "production":
    baseURL = "https://api.com.br";
    break;
  case "sandbox":
    baseURL = "https://api.sandbox.com.br";
    break;
  default:
    break;
}

axios.defaults.baseURL = baseURL;

axios.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, error => {
  console.error(error);
  return Promise.reject(error);
});


axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, async error => {
  if (error.response) {
    if (error.response.status === 401) {
      if (error.response.data.code === "token_not_valid") {
        console.error("Ops... Sua sessão expirou.")
        await AsyncStorage.removeItem('token');
      }
    }

    let msg = "Erro desconhecido!";
    try {
      msg = error.response.data.non_field_errors[0];
    } catch(e) {
      if (error.response.data.detail) {
        msg = error.response.data.detail;
      } else {
        msg = error.response.data.message;
      }
    }

    console.error(msg);
    return Promise.reject(msg);
  }
  if (error.message === "Network Error") {
    return Promise.reject(new Error("Erro de conexão, verifique sua internet ou tente novamente mais tarde."));
  }

  return Promise.reject(error);
});

export default axios;
