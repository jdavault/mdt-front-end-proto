/* eslint-disable import/no-anonymous-default-export */
import { AuthActionTypes } from "../types/actionTypes";

const initialState = {
  message: ""
};

export default function (state = initialState, action) {

  const { type, payload } = action;

  switch (type) {
    case AuthActionTypes.SET_MESSAGE:
      return { message: payload };
    case AuthActionTypes.CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}