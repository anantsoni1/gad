import { combineReducers } from "redux";

import contact from "./contact";
import careeer from "./career";
import pricipal from "./principal";
import home from "./home";
import about from "./about";
import covid from "./covid";
import admission from "./admission";
import team from "./team";
import auth from "./auth";
import parent from "./parents";
import gallery from "./gallery";
import blogs from "./blogs";
import info from "./info";

export default combineReducers({
  contact,
  careeer,
  pricipal,
  home,
  about,
  covid,
  admission,
  team,
  auth,
  gallery,
  parent,
  blogs,
  info,
});
