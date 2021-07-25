import * as api from "../api";
import { GET_GALLERY_DATA, POST_GALLERY_DATA } from "../constants";
import swal from "sweetalert";

export const GetGalleryData = () => async (dispatch) => {
  try {
    const { data } = await api.getGalleryData();
    dispatch({ type: GET_GALLERY_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyGalleryData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyGalleryData(id, { posts: formData });
    dispatch({ type: POST_GALLERY_DATA, data });
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
