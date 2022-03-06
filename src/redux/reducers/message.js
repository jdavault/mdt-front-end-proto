/* eslint-disable import/no-anonymous-default-export */
import * as ActionTypes from "../types/actionTypes";

const initialState = {};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_MESSAGE:
      return { message: payload };
    case ActionTypes.CLEAR_MESSAGE:
      return { message: "" };
    default:
      return state;
  }
}