import axios from "axios";

const url = "http://felipe-ranek.000webhostapp.com/wp-json";
const baseURL = `${url}/api`;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    const login = axios.post(`${url}/jwt-auth/v1/token`, body);
    return login;
  },
  validateToken() {
    return axiosInstance.post(`${url}/jwt-auth/v1/token/validate`);
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json`);
}
