import * as ActionTypes from "../types/actionTypes";
import AuthService from "../../services/auth.service";

export const register = (username, email, password, role) => (dispatch) => {
  return AuthService.register(username, email, password, role).then(
    (response) => {
      dispatch({
        type: ActionTypes.REGISTER_SUCCESS,
      });
      dispatch({
        type: ActionTypes.SET_MESSAGE,
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
        type: ActionTypes.REGISTER_FAIL,
      });
      dispatch({
        type: ActionTypes.SET_MESSAGE,
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
        type: ActionTypes.LOGIN_SUCCESS,
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
        type: ActionTypes.LOGIN_FAIL,
      });
      dispatch({
        type: ActionTypes.SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: ActionTypes.LOGOUT,
  });
};