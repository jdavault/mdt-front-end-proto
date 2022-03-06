/* eslint-disable import/no-anonymous-default-export */
import * as ActionTypes from "../types/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state, isLoggedIn: true, user: payload.user,
      };
    case ActionTypes.LOGIN_FAIL:
      return {
        ...state, isLoggedIn: false, user: null,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state, isLoggedIn: false, user: null,
      };
    default:
      return state;
  }
}