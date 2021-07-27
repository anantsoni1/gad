import { GET_INFO_DATA, UPDATE_INFO_DATA } from "../constants";

export default function InfoReducer(
  state = { getInfoData: null, updateInfoData: null },
  action
) {
  switch (action.type) {
    case GET_INFO_DATA:
      console.log(action?.data);
      return { ...state, getInfoData: action?.data };
    case UPDATE_INFO_DATA:
      console.log(action?.data);
      return { ...state, updateInfoData: action?.data };
    default:
      return state;
  }
}
