import * as api from "../api";
import {
  ADD_SCHOOL_POLICY,
  ADD_SCHOOL_NEWSLATER,
  ADD_CALENDER,
  GET_SCHOOL_POLICY,
  GET_SCHOOL_NEWSLATER,
  GET_CALENDER,
  UPDATE_SCHOOL_POLICY,
  UPDATE_SCHOOL_NEWSLATER,
  UPDATE_CALENDER,
  DELETE_SCHOOL_POLICY,
  DELETE_SCHOOL_NEWSLATER,
  DELETE_CALENDER,
} from "../constants";
import swal from "sweetalert";
export const DeleteSchoolPolicy = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteSchoolPolicy(id);
    dispatch({ type: DELETE_SCHOOL_POLICY, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const DeleteSchoolNewslater = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteSchoolNewslater(id);
    dispatch({ type: DELETE_SCHOOL_NEWSLATER, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const DeleteCalender = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteCalender(id);
    dispatch({ type: DELETE_CALENDER, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};

export const AddSchoolPolicy = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addSchoolPolicy(formData);
    dispatch({ type: ADD_SCHOOL_POLICY, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const AddSchoolNewslater = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addSchoolNewslater(formData);
    dispatch({ type: ADD_SCHOOL_NEWSLATER, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const AddCalender = (formData) => async (dispatch) => {
  try {
    const { data } = await api.addCalender(formData);
    dispatch({ type: ADD_CALENDER, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const GetSchoolPolicy = () => async (dispatch) => {
  try {
    const { data } = await api.getSchoolPolicy();
    dispatch({ type: GET_SCHOOL_POLICY, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const GetSchoolNewslater = () => async (dispatch) => {
  try {
    const { data } = await api.getSchoolNewslater();
    dispatch({ type: GET_SCHOOL_NEWSLATER, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const GetCalender = () => async (dispatch) => {
  try {
    const { data } = await api.getCalender();
    dispatch({ type: GET_CALENDER, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifySchoolPolicy = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifySchoolPolicy(id, formData);
    dispatch({ type: UPDATE_SCHOOL_POLICY, data });
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
export const ModifySchoolNewslater = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifySchoolNewslater(id, formData);
    dispatch({ type: UPDATE_SCHOOL_NEWSLATER, data });
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
export const ModifyCalender = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyCalender(id, formData);
    dispatch({ type: UPDATE_CALENDER, data });
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
