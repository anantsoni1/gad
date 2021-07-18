import { GET_ABOUT_DATA, POST_ABOUT_DATA } from "../constants";

export default function HomeReducer(
  state = { getAboutData: null, postAboutDate: null },
  action
) {
  switch (action.type) {
    case GET_ABOUT_DATA:
      console.log(action?.data);
      return { ...state, getAboutData: action?.data };
    case POST_ABOUT_DATA:
      console.log(action?.data);
      return { ...state, postAboutDate: action?.data };
    default:
      return state;
  }
}
