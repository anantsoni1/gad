import { combineReducers } from "redux";

import contact from "./contact";
import careeer from "./career";
import pricipal from "./principal";
import home from "./home";

export default combineReducers({
  contact,
  careeer,
  pricipal,
  home
});
