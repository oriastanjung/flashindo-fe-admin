import axios from "axios";
import Cookies from "js-cookie";

const headers = {
  Accept: "application/json",
  "Content-type": "application/json",
};

const headersMultipart = {
  Accept: "application/json",
  "Content-Type": "multipart/form-data",
};


export const ENDPOINT = {
  USERS: "/users",
  AUTH: "/auth",
  PRODUCTS: "/products",
  CATEGORIES: "/categories",
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}/api`, // http://localhost:1337/api
  headers,
});

const apiMultiPart = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BACKEND_URL}/api`, // http://localhost:1337/api
  headersMultipart,
});

// Set the AUTH token for any request
api.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// Set the AUTH token for any request
apiMultiPart.interceptors.request.use(
  function (config) {
    const token = Cookies.get("token") ? JSON.parse(Cookies.get("token")) : "";
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export {
  apiMultiPart
}
export default api;
