import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/index";
import {
  GetPrincipalData,
  ModifyPrincipalData,
} from "../../../redux/actions/principal";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../../components/header/index2";
import Group8918 from "../../../assets/Group8918.svg";
import "./style.css";

function AdminPrincipal() {
  const principalData = useSelector(
    (state) => state.pricipal?.getPrincipalData
  );
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [formData, setformData] = useState({});
  const [fileOneValue, setFileOneValue] = useState("");
  const [fileOne, setFileOne] = useState("");
  useEffect(() => {
    dispatch(GetPrincipalData())
      .then((res) => {
        console.log(res);
        setId(res?.data[0]?._id);
        setformData({
          heading: res?.data[0]?.heading,
          points: res?.data[0]?.points,
          principalName: res?.data[0]?.principalName,
          text: res?.data[0]?.text,
          thankText: res?.data[0]?.thankText,
        });
        setFileOne(imageUrl + res?.data[0]?.img);
      })
      .catch(() => {});
  }, []);
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  function modifyItem(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.points];
    values[index].point = newValue;
    setformData({
      ...formData,
      points: values,
    });
  }
  function updateData() {
    dispatch(ModifyPrincipalData(id, formData))
      .then((response) => {
        dispatch(GetPrincipalData())
          .then((res) => {
            console.log(imageUrl + res?.data[0]?.img);
            setId(res?.data[0]?._id);
            setformData({
              heading: res?.data[0]?.heading,
              points: res?.data[0]?.points,
              principalName: res?.data[0]?.principalName,
              text: res?.data[0]?.text,
              thankText: res?.data[0]?.thankText,
            });
            setFileOne(imageUrl + res?.data[0]?.img);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <>
      {principalData ? (
        <div className="customContainer">
          <Sidebar />
          <div className="pricipalDesk pb-5">
            <div className="pb-lg-5 pb-1">
              <Header img={Group8918} heading="FROM THE PRINCIPAL’S DESK" />
            </div>
            <div className="container">
              <div className="row pt-5 px-lg-4 px-md-5">
                <div className="align-items-center align-items-lg-start justify-content-lg-center px-md-5 px-4 px-lg-4 flex-column d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                  <img
                    className="principalImage"
                    src={fileOne}
                    alt={fileOne}
                  ></img>
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFileOne(URL.createObjectURL(e?.target?.files[0]));
                        toBase64(e?.target?.files[0]).then((res) => {
                          setFileOneValue(res);
                          setformData({
                            ...formData,
                            img: res,
                          });
                        });
                      }
                    }}
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    className="my-4 principalImage"
                    name="Principal Image"
                  />
                  <input
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        principalName: e.target.value,
                      });
                    }}
                    value={formData?.principalName}
                    type="text"
                    className="my-2"
                    placeholder="Principal Name"
                  />
                  <p className="pb-3">Principal</p>
                </div>
                <div className="col-12 col-md-12 col-lg-8 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <textarea
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          heading: e.target.value,
                        });
                      }}
                      value={formData?.heading}
                      className="h-400"
                      placeholder=""
                    ></textarea>
                  </p>
                </div>
              </div>
              <div className="row pt-1 pb-3 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <textarea
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          text: e.target.value,
                        });
                      }}
                      value={formData?.text}
                      className="h-200"
                    ></textarea>
                    <p>
                      <ul>
                        {formData?.points && formData?.points.length > 0
                          ? formData?.points.map((val, index) => {
                              return (
                                <input
                                  onChange={(e) => {
                                    modifyItem(e, index);
                                  }}
                                  value={val?.point}
                                  key={index}
                                  className="my-2"
                                  type="text"
                                  placeholder={`Point-${index + 1}`}
                                />
                              );
                            })
                          : ""}
                      </ul>
                    </p>
                    <textarea
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          thankText: e.target.value,
                        });
                      }}
                      value={formData?.thankText}
                      className="h-200 my-4"
                      placeholder="Enter Thank Note"
                    ></textarea>
                    <p>Sincerely</p>
                    <input
                      onChange={(e) => {
                        setformData({
                          ...formData,
                          principalName: e.target.value,
                        });
                      }}
                      value={formData?.principalName}
                      type="text"
                      className="my-4"
                      placeholder="Principal Name"
                    />
                  </p>
                </div>
                <button onClick={updateData} className="btn btn-primary my-4">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminPrincipal;
