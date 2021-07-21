import { GET_ADMISSION_DATA, UPDATE_ADMISSION_DATA } from "../constants";

export default function ADMISSIONReducer(
  state = { getadmissionData: null, updateadmissionData: null },
  action
) {
  switch (action.type) {
    case GET_ADMISSION_DATA:
      console.log(action?.data);
      return { ...state, getadmissionData: action?.data };
    case UPDATE_ADMISSION_DATA:
      console.log(action?.data);
      return { ...state, updateadmissionData: action?.data };
    default:
      return state;
  }
}
