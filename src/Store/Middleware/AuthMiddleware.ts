import { Middleware } from "redux";

import { passwordGenerator } from "../../Framework/Password/PasswordGenerator";
import { AUTH_ACTIONS } from "../Reducers/AuthReducer";

export const AuthMiddleware: Middleware =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    const { type, payload } = action;
    if (type !== "AUTH") {
      return next(action);
    }

    if (payload.response) {
      dispatch({
        type: payload.success,
        payload: payload,
      });
    }

    const {
      auth: { uid, pass, loginKey },
    } = getState();

    if (!uid || !pass) {
      dispatch({
        type: "FETCH",
        payload: {
          action: "AUTH",
          success: AUTH_ACTIONS.QUICK_REGISTER,
          params: {
            request: "quick_register",
            pass: passwordGenerator(),
          },
        },
      });
      return;
    }

    if (!loginKey) {
      dispatch({
        type: "FETCH",
        payload: {
          action: "AUTH",
          success: AUTH_ACTIONS.LOGIN_KEY,
          params: {
            request: "login_request_key",
          },
        },
      });
      return;
    }
  };
