import { GET_CONTACT_DATA, UPDATE_CONTACT_DATA } from "../constants";

export default function ContactReducer(
  state = { getContactData: null, updateContactData: null },
  action
) {
  switch (action.type) {
    case GET_CONTACT_DATA:
      console.log(action?.data);
      return { ...state, getContactData: action?.data };
    case UPDATE_CONTACT_DATA:
      console.log(action?.data);
      return { ...state, updateContactData: action?.data };
    default:
      return state;
  }
}
