import { handleActions } from "redux-actions";

import { hex_md5 } from "../../ThirdParty/md5";

const PASSWORD_SALT = "**SDsv_-vva8923~-&?";

export enum AUTH_ACTIONS {
  QUICK_REGISTER = "QUICK_REGISTER",
  LOGIN_KEY = "LOGIN_KEY",
  LOGOUT = "LOGOUT",
}

/**
 * AuthReducer Model Interface
 */
export interface IAuthReducerModel {
  response: string;
  params?: Record<string, string>;
}

/**
 * AuthReducer State Interface
 */
export interface IAuthReducerState {
  uid: string | null;
  pass: string | null;
  loginKey: string | null;
  passwordKey: string | null;
}

/**
 * AuthReducer Initial State Interface
 */
const initialState: IAuthReducerState = {
  uid: localStorage.getItem("uid"),
  pass: localStorage.getItem("pass"),
  loginKey: null,
  passwordKey: null,
};

function Salty(pass: string) {
  return hex_md5(pass + PASSWORD_SALT);
}

/**
 * Auth Reducer
 */
export const AuthReducer = handleActions<IAuthReducerState, IAuthReducerModel>(
  {
    [AUTH_ACTIONS.LOGOUT]: (state) => {
      localStorage.removeItem("uid");
      localStorage.removeItem("pass");
      return { ...state, uid: "", pass: "" };
    },
    [AUTH_ACTIONS.QUICK_REGISTER]: (state, action) => {
      const { payload } = action;

      const [status, uid] = payload.response.split("|");
      if (status !== "done") {
        // GotServerError(payload);
        return state;
      }

      const password = payload.params?.pass ?? "";
      localStorage.setItem("uid", uid);
      localStorage.setItem("pass", password);

      return {
        ...state,
        uid,
        pass: password,
      };
    },
    [AUTH_ACTIONS.LOGIN_KEY]: (state, action) => {
      const { payload } = action;

      const [status, key] = payload.response.split("|");
      if (status !== "done") {
        // GotServerError(payload);
        return state;
      }

      return {
        ...state,
        loginKey: key,
        passwordKey: hex_md5(Salty(state.pass || "") + key),
      };
    },
  },
  initialState
);