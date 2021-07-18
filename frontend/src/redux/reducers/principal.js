import { GET_PRINCIPAL_DATA, UPDATE_PRINCIPAL_DATA } from "../constants";

export default function PrincipalReducer(
  state = { getPrincipalData: null, updatePrincipalData: null },
  action
) {
  switch (action.type) {
    case GET_PRINCIPAL_DATA:
      console.log(action?.data);
      return { ...state, getPrincipalData: action?.data };
    case UPDATE_PRINCIPAL_DATA:
      console.log(action?.data);
      return { ...state, updatePrincipalData: action?.data };
    default:
      return state;
  }
}
