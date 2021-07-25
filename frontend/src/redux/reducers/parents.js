import { GET_PARENTS_DATA, UPDATE_PARENTS_DATA } from "../constants";

export default function PARENTSReducer(
  state = { getParentsData: null, updateParentsData: null },
  action
) {
  switch (action.type) {
    case GET_PARENTS_DATA:
      console.log(action?.data);
      return { ...state, getParentsData: action?.data };
    case UPDATE_PARENTS_DATA:
      console.log(action?.data);
      return { ...state, updateParentsData: action?.data };
    default:
      return state;
  }
}
