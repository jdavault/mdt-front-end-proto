/* eslint-disable import/no-anonymous-default-export */
import { AuthActionTypes } from "../types/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case AuthActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state, isLoggedIn: true, user: payload.user,
      };
    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...state, isLoggedIn: false, user: null,
      };
    case AuthActionTypes.LOGOUT:
      return {
        ...state, isLoggedIn: false, user: null,
      };
    default:
      return state;
  }
}