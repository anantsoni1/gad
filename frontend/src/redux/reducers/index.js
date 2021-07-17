import { combineReducers } from "redux";

import auth from "./auth";
import contact from "./contact";
import careeer from "./career";

export default combineReducers({
  auth,
  contact,
  careeer,
});
