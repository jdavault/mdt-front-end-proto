import { AuthActionTypes } from "../types/actionTypes";
import AuthService from "../../services/auth.service";

export const register = (username, email, password, role) => (dispatch) => {
  return AuthService.register(username, email, password, role).then(
    (response) => {
      dispatch({
        type: AuthActionTypes.REGISTER_SUCCESS,
      });
      dispatch({
        type: AuthActionTypes.SET_MESSAGE,
        payload: response.data.message
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: AuthActionTypes.REGISTER_FAIL,
      });
      dispatch({
        type: AuthActionTypes.SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      console.log("Data from LOGIN", data)
      dispatch({
        type: AuthActionTypes.LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      dispatch({
        type: AuthActionTypes.LOGIN_FAIL,
      });
      dispatch({
        type: AuthActionTypes.SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: AuthActionTypes.LOGOUT,
  });
};