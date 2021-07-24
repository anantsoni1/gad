import { SIGN_IN, LOGOUT } from "../constants";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
      action.data.token && localStorage.setItem("token", action?.data.token);
      console.log(action?.data);
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};
