import {
  combineReducers
} from "redux";

import header from "../views/header/headerReducer";
import login from "../views/login/loginReducer";
import register from "../views/register/registerReducer";

import * as formAction from "./shared/formManagerActions";

export const actions = {
  ...formAction
};

export const reducers = combineReducers({
  header,
  login,
  register
});
