import * as api from "../api";
import { GET_CAREER_DATA, POST_CAREER_DATA } from "../constants";
import swal from "sweetalert";

export const GetCareerData = () => async (dispatch) => {
  try {
    const { data } = await api.getCareerData();
    dispatch({ type: GET_CAREER_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyCareerData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyCareerData(id, formData);
    dispatch({ type: POST_CAREER_DATA, data });
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
