import { GET_COVID_DATA, POST_COVID_DATA } from "../constants";

export default function CareerReducer(
  state = { getCovidData: null, postCovidData: null },
  action
) {
  switch (action.type) {
    case GET_COVID_DATA:
      console.log(action?.data);
      return { ...state, getCovidData: action?.data };
    case POST_COVID_DATA:
      console.log(action?.data);
      return { ...state, postCovidData: action?.data };
    default:
      return state;
  }
}
