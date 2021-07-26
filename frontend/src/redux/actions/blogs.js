import * as api from "../api";
import { ADD_NEW_BLOG, GET_BLOGS , GET_BLOGS_BY_ID , UPDATE_NEW_BLOG} from "../constants";
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

export const updateNewBlog = (formData ,id, history) => async (dispatch) => {
  try {
    const { data } = await api.updateNewBlog(formData,id);
    dispatch({ type: UPDATE_NEW_BLOG, data });
    swal({
        text: "Blog updated Successfully!",
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

export const getBlogs = () => async (dispatch) => {
  try {
    const { data } = await api.getBlogs();
    dispatch({ type: GET_BLOGS, data });
    return data;
  } catch (e) {
    console.log(e);
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};

export const getBlogsById = (id) => async (dispatch) => {
  try {
    const { data } = await api.getBlogsById(id);
    dispatch({ type: GET_BLOGS_BY_ID, data });
    return data;
  } catch (e) {
    console.log(e);
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
