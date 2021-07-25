import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import {
  DeleteSchoolPolicy,
  DeleteSchoolNewslater,
  DeleteCalender,
  AddSchoolPolicy,
  AddSchoolNewslater,
  AddCalender,
  GetSchoolPolicy,
  GetSchoolNewslater,
  GetCalender,
  ModifySchoolPolicy,
  ModifySchoolNewslater,
  ModifyCalender,
} from "../../../redux/actions/parents";
import "./style.css";

function AdminParents() {
  const schoolPolicyData = useSelector(
    (state) => state.parent?.getSchoolPolicyData
  );
  console.log(schoolPolicyData);
  const schoolNewslaterData = useSelector(
    (state) => state.parent?.getSchoolNewslaterData
  );
  console.log(schoolNewslaterData);
  const calender = useSelector((state) => state.parent?.getCalender);
  console.log(calender);
  const dispatch = useDispatch();
  const [schoolPolicyformData, setschoolPolicyFormData] = useState({});
  const [schoolNewslaterformData, setschoolNewslaterFormData] = useState({});
  const [calenderformData, setcalenderFormData] = useState({});
  useEffect(() => {
    dispatch(GetSchoolPolicy())
      .then((res) => {
        setschoolPolicyFormData(res);
      })
      .catch(() => {});
    dispatch(GetSchoolNewslater())
      .then((res) => {
        setschoolNewslaterFormData(res);
      })
      .catch(() => {});
    dispatch(GetCalender())
      .then((res) => {
        setcalenderFormData(res);
      })
      .catch(() => {});
  }, []);

  function deleteSchoolPolicy(id) {
    dispatch(DeleteSchoolPolicy(id))
      .then((response) => {
        dispatch(GetSchoolPolicy())
          .then((res) => {
            setschoolPolicyFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function deleteSchoolNewslater(id) {
    dispatch(DeleteSchoolNewslater(id))
      .then((response) => {
        dispatch(GetSchoolNewslater())
          .then((res) => {
            setschoolNewslaterFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function deleteCalender(id) {
    dispatch(DeleteCalender(id))
      .then((response) => {
        dispatch(GetCalender())
          .then((res) => {
            setcalenderFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateSchoolPolicy(id, data) {
    dispatch(ModifySchoolPolicy(id, data))
      .then((response) => {
        dispatch(GetSchoolPolicy())
          .then((res) => {
            setschoolPolicyFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateSchoolNewslater(id, data) {
    dispatch(ModifySchoolNewslater(id, data))
      .then((response) => {
        dispatch(GetSchoolNewslater())
          .then((res) => {
            setschoolNewslaterFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateCalender(id, data) {
    dispatch(ModifyCalender(id, data))
      .then((response) => {
        dispatch(GetCalender())
          .then((res) => {
            setcalenderFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function addSchoolPolicy(data) {
    dispatch(AddSchoolPolicy(data))
      .then((response) => {
        dispatch(GetSchoolPolicy())
          .then((res) => {
            setschoolPolicyFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function addSchoolNewslater(data) {
    dispatch(AddSchoolNewslater(data))
      .then((response) => {
        dispatch(GetSchoolNewslater())
          .then((res) => {
            setschoolNewslaterFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  function addCalender(data) {
    dispatch(AddCalender(data))
      .then((response) => {
        dispatch(GetCalender())
          .then((res) => {
            setcalenderFormData(res);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default AdminParents;
