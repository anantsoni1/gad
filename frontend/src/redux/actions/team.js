import * as api from "../api";
import { GET_TEAM_DATA, UPDATE_TEAM_DATA } from "../constants";
import swal from "sweetalert";

export const GetTeamData = () => async (dispatch) => {
  try {
    const { data } = await api.getTeamData();
    dispatch({ type: GET_TEAM_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyTeamData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyTeamData(id, formData);
    dispatch({ type: UPDATE_TEAM_DATA, data });
    swal({
      text: "Data Updated!",
      icon: "success",
    });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
