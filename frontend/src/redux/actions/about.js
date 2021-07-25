import * as api from "../api";
import { GET_ABOUT_DATA, POST_ABOUT_DATA } from "../constants";
import swal from "sweetalert";

export const GetAboutData = () => async (dispatch) => {
  try {
    const { data } = await api.getAboutData();
    dispatch({ type: GET_ABOUT_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyAboutData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyAboutData(id, {posts: formData});
    dispatch({ type: POST_ABOUT_DATA, data });
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
