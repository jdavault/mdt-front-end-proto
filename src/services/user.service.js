import axios from "axios";
import { APP_CONFIG } from "../config";

import authHeader from "./auth-header";

const API_URL = APP_CONFIG.BACKEND_API_URL + "/public/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};
const getRequestPage = () => {
  return axios.get(API_URL + "request", { headers: authHeader() });
};
const getSalesRepPage = () => {
  return axios.get(API_URL + "sales", { headers: authHeader() });
};
const getAdminPage = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getRequestPage,
  getSalesRepPage,
  getAdminPage,
};

export default UserService;
