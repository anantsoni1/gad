import * as api from "../api";
import { ADD_NEW_BLOG } from "../constants";
import swal from "sweetalert";

export const addNewBlog = (formData , history) => async (dispatch) => {
  try {
    const { data } = await api.addNewBlog(formData);
    dispatch({ type: ADD_NEW_BLOG, data });
    swal({
        text: "New Blog added Successfully!",
        icon: "info",
    });
    history.push("/admin/blogs")
    return data;
  } catch (e) {
    console.log(e);
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
