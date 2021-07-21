import * as api from "../api";
import { GET_ADMISSION_DATA, UPDATE_ADMISSION_DATA } from "../constants";
import swal from "sweetalert";

export const GetAdmissionData = () => async (dispatch) => {
  try {
    const { data } = await api.getAdmissionData();
    dispatch({ type: GET_ADMISSION_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyAdmissionData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyAdmissionData(id, formData);
    dispatch({ type: UPDATE_ADMISSION_DATA, data });
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
