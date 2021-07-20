import * as api from "../api";
import { GET_COVID_DATA, POST_COVID_DATA } from "../constants";
import swal from "sweetalert";

export const GetCovidData = () => async (dispatch) => {
  try {
    const { data } = await api.getCovidData();
    dispatch({ type: GET_COVID_DATA, data });
    return data;
  } catch (e) {
    swal({
      text: e?.response?.data?.msg,
      icon: "error",
    });
  }
};
export const ModifyCovidData = (id, formData) => async (dispatch) => {
  try {
    console.log(id, formData);
    const { data } = await api.modifyCovidData(id, formData);
    dispatch({ type: POST_COVID_DATA, data });
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
