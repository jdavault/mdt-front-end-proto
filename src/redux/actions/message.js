import { AuthActionTypes } from "../types/actionTypes";

export const setMessage = (message) => ({
  type: AuthActionTypes.SET_MESSAGE,
  payload: message,
});
export const clearMessage = () => ({
  type: AuthActionTypes.CLEAR_MESSAGE,
});