import { combineReducers } from "redux";

import auth from "./auth";
import admin from "./admin";
import contact from "./contact";

export default combineReducers({
  auth,
  admin,
  contact
});
