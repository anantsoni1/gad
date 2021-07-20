import { combineReducers } from "redux";

import contact from "./contact";
import careeer from "./career";
import pricipal from "./principal";
import home from "./home";
import about from "./about";
import covid from "./covid";

export default combineReducers({
  contact,
  careeer,
  pricipal,
  home,
  about,
  covid
});
