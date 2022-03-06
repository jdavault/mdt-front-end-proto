import axios from "axios";
import { APP_CONFIG } from "../config";

const API_URL = APP_CONFIG.BACKEND_API_URL + "/auth/";
const register = (username, email, password, role) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
    role: [role]
  });
};
const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;