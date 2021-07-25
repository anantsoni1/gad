import {
  ADD_SCHOOL_POLICY,
  ADD_SCHOOL_NEWSLATER,
  ADD_CALENDER,
  GET_SCHOOL_POLICY,
  GET_SCHOOL_NEWSLATER,
  GET_CALENDER,
  UPDATE_SCHOOL_POLICY,
  UPDATE_SCHOOL_NEWSLATER,
  UPDATE_CALENDER,
  DELETE_SCHOOL_POLICY,
  DELETE_SCHOOL_NEWSLATER,
  DELETE_CALENDER,
} from "../constants";

export default function ParentsReducer(
  state = {
    addSchoolPolicyData: null,
    addSchoolNewslaterData: null,
    addCalender: null,
    getSchoolPolicyData: null,
    getSchoolNewslaterData: null,
    getCalender: null,
    updateSchoolPolicyData: null,
    updateSchoolNewslaterData: null,
    updateCalender: null,
    deleteSchoolPolicyData: null,
    deleteSchoolNewslaterData: null,
    deleteCalender: null,
  },
  action
) {
  switch (action.type) {
    case ADD_SCHOOL_POLICY:
      console.log(action?.data);
      return { ...state, addSchoolPolicyData: action?.data };
    case ADD_SCHOOL_NEWSLATER:
      console.log(action?.data);
      return { ...state, addSchoolNewslaterData: action?.data };
    case ADD_CALENDER:
      console.log(action?.data);
      return { ...state, addCalender: action?.data };
    case GET_SCHOOL_POLICY:
      console.log(action?.data);
      return { ...state, getSchoolPolicyData: action?.data };
    case GET_SCHOOL_NEWSLATER:
      console.log(action?.data);
      return { ...state, getSchoolNewslaterData: action?.data };
    case GET_CALENDER:
      console.log(action?.data);
      return { ...state, getCalender: action?.data };
    case UPDATE_SCHOOL_POLICY:
      console.log(action?.data);
      return { ...state, updateSchoolPolicyData: action?.data };
    case UPDATE_SCHOOL_NEWSLATER:
      console.log(action?.data);
      return { ...state, updateSchoolNewslaterData: action?.data };
    case UPDATE_CALENDER:
      console.log(action?.data);
      return { ...state, updateCalender: action?.data };
    case DELETE_SCHOOL_POLICY:
      console.log(action?.data);
      return { ...state, deleteSchoolPolicyData: action?.data };
    case DELETE_SCHOOL_NEWSLATER:
      console.log(action?.data);
      return { ...state, deleteSchoolNewslaterData: action?.data };
    case DELETE_CALENDER:
      console.log(action?.data);
      return { ...state, deleteCalender: action?.data };
    default:
      return state;
  }
}
