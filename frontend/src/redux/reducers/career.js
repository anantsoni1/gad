import { GET_CAREER_DATA, POST_CAREER_DATA } from "../constants";

export default function CareerReducer(
  state = { getCareerData: null, postCareerDate: null },
  action
) {
  switch (action.type) {
    case GET_CAREER_DATA:
      console.log(action?.data);
      return { ...state, getCareerData: action?.data };
    case POST_CAREER_DATA:
      console.log(action?.data);
      return { ...state, postCareerDate: action?.data };
    default:
      return state;
  }
}
