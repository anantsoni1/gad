import * as api from "../api";
import { GET_PRINCIPAL_DATA, UPDATE_PRINCIPAL_DATA } from "../constants";
import swal from "sweetalert";

export const GetPrincipalData = () => async (dispatch) => {
  try {
    const { data } = await api.getPrincipalData();
    dispatch({ type: GET_PRINCIPAL_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyPrincipalData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyPrincipalData(id, formData);
    dispatch({ type: UPDATE_PRINCIPAL_DATA, data });
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
