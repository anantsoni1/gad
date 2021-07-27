import * as api from "../api";
import { GET_INFO_DATA, UPDATE_INFO_DATA } from "../constants";
import swal from "sweetalert";

export const GetInfoData = () => async (dispatch) => {
  try {
    const { data } = await api.getInfoData();
    dispatch({ type: GET_INFO_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyInfoData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyInfoData(id, formData);
    dispatch({ type: UPDATE_INFO_DATA, data });
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
