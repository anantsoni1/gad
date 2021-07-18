import * as api from "../api";
import { GET_CONTACT_DATA, UPDATE_CONTACT_DATA } from "../constants";
import swal from "sweetalert";

export const GetContactData = () => async (dispatch) => {
  try {
    const { data } = await api.getContactData();
    dispatch({ type: GET_CONTACT_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyContactData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyContactData(id, formData);
    dispatch({ type: UPDATE_CONTACT_DATA, data });
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
