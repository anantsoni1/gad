import * as api from "../api";
import { GET_HOME_DATA, POST_HOME_DATA } from "../constants";
import swal from "sweetalert";

export const GetHomeData = () => async (dispatch) => {
  try {
    const { data } = await api.getHomeData();
    dispatch({ type: GET_HOME_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyHomeData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyHomeData(id, formData);
    dispatch({ type: POST_HOME_DATA, data });
    swal({
      text: "Data Updated!",
      icon: "success",
    });
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
