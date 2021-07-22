import { GET_TEAM_DATA, UPDATE_TEAM_DATA } from "../constants";

export default function TEAMReducer(
  state = { getTeamData: null, updateTeamData: null },
  action
) {
  switch (action.type) {
    case GET_TEAM_DATA:
      console.log(action?.data);
      return { ...state, getTeamData: action?.data };
    case UPDATE_TEAM_DATA:
      console.log(action?.data);
      return { ...state, updateTeamData: action?.data };
    default:
      return state;
  }
}
