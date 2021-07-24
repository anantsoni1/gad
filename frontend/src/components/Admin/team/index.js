import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetTeamData, ModifyTeamData } from "../../../redux/actions/team";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";

function AdminTeam() {
  const teamlData = useSelector((state) => state.team?.getTeamData);
  console.log(teamlData);
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [formData, setformData] = useState({});
  useEffect(() => {
    dispatch(GetTeamData())
      .then((res) => {
        console.log(res);
        setId(res?.data[0]?._id);
        setformData(res?.data[0]);
      })
      .catch(() => {});
  }, []);
  function updateData() {
    dispatch(ModifyTeamData(id, formData))
      .then((response) => {
        dispatch(GetTeamData())
          .then((res) => {
            console.log(res);
            setId(res?.data[0]?._id);
            setformData(res?.data[0]);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <div>
      {console.log(formData)}
      <Sidebar />
    </div>
  );
}

export default AdminTeam;
