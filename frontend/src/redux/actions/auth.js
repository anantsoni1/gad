import * as api from "../api";
import { SIGN_IN } from "../constants";
import jwt from "jwt-decode";
import swal from "sweetalert";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    console.log(jwt(data.token));
    dispatch({ type: SIGN_IN, data });
    const role = jwt(data.token).role;
    swal({
      text: `You are logged in as ${role}`,
      icon: "success",
    });
    localStorage.setItem("role", "admin");
    history.push("/admin/dashboard");
  } catch (e) {
    swal({
      text: e.response.data.msg,
      icon: "error",
    });
  }
};

export const isAuthenticated = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    } else {
      const decoded = jwt(token);
      if (decoded?.email) {
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};

export const userRole = () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return "";
    } else {
      const decoded = jwt(token)?.role;
      return decoded;
    }
  } catch (e) {
    swal({
      text: e.message,
      icon: "error",
    });
  }
};
