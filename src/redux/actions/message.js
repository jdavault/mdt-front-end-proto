import * as ActionTypes from "../types/actionTypes";

export const setMessage = (message) => ({
  type: ActionTypes.SET_MESSAGE,
  payload: message,
});
export const clearMessage = () => ({
  type: ActionTypes.CLEAR_MESSAGE,
});