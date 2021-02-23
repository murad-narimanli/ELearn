import axios from "axios";
import siteUrl from "./const";
import {logOut} from "../redux/actions";

export const admin = axios.create({
  baseURL: `${siteUrl}api`,
  headers: { "Content-Type": "application/json" },
});

admin.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null;
    config.headers["accept-language"] = localStorage.getItem("locale")
      ? localStorage.getItem("locale")
      : "az";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

admin.interceptors.response.use(
    (response) => {
        if(response.status === 402){
            logOut()
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default admin;
