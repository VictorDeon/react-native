import axios from "../../config/axios";

export function loginAPI(data) {
  const url = "/auth";
  return axios.post(url, data);
}

export function updateUserAPI(data) {
  const url = "/user";
  return axios.put(url, data);
}

export function createUserAPI(data) {
  const url = "/user";
  return axios.post(url, data);
}

export function listUserAPI() {
  const url = "/users";
  return axios.get(url);
}
