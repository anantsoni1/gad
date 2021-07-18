import { GET_HOME_DATA, POST_HOME_DATA } from "../constants";

export default function HomeReducer(
  state = { getHomeData: null, postHomeDate: null },
  action
) {
  switch (action.type) {
    case GET_HOME_DATA:
      console.log(action?.data);
      return { ...state, getHomeData: action?.data };
    case POST_HOME_DATA:
      console.log(action?.data);
      return { ...state, postHomeDate: action?.data };
    default:
      return state;
  }
}
