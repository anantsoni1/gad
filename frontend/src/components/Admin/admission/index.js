import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/index";
import {
  GetAdmissionData,
  ModifyAdmissionData,
} from "../../../redux/actions/admission";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../header/index";
import Group8921 from "../../../assets/Group8921.svg";
import "./style.css";

function AdminAdmission() {
  const admissionlData = useSelector(
    (state) => state.admission?.getadmissionData
  );
  console.log("----------------------------------");
  console.log(admissionlData, "state value");
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [formData, setformData] = useState({});
  const [fileOneValue, setFileOneValue] = useState("");
  const [fileOne, setFileOne] = useState("");
  useEffect(() => {
    dispatch(GetAdmissionData())
      .then((res) => {
        console.log(res, "res");
        setId(res?.data[0]?._id);
        setformData(res?.data[0]);
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
  function modifyItem1(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step1Points];
    values[index].point = newValue;
    setformData({
      ...formData,
      step1Points: values,
    });
  }
  function modifyItem2(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step2Points];
    values[index].point = newValue;
    setformData({
      ...formData,
      step2Points: values,
    });
  }
  function modifyItem3(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step3Points];
    values[index].point = newValue;
    setformData({
      ...formData,
      step3Points: values,
    });
  }
  function modifyItemLinks1(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step1Links];
    values[index].link = newValue;
    setformData({
      ...formData,
      step1Links: values,
    });
  }
  function modifyItemLinks2(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step2Links];
    values[index].link = newValue;
    setformData({
      ...formData,
      step2Links: values,
    });
  }
  function modifyItemLinks3(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step3Links];
    values[index].link = newValue;
    setformData({
      ...formData,
      step3Links: values,
    });
  }
  function modifyItemLinks4(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.links];
    values[index].link = newValue;
    setformData({
      ...formData,
      links: values,
    });
  }
  function modifyItemLinksText1(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step1Links];
    values[index].text = newValue;
    setformData({
      ...formData,
      step1Links: values,
    });
  }
  function modifyItemLinksText2(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step2Links];
    values[index].text = newValue;
    setformData({
      ...formData,
      step2Links: values,
    });
  }
  function modifyItemLinksText3(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.step3Links];
    values[index].text = newValue;
    setformData({
      ...formData,
      step3Links: values,
    });
  }
  function modifyItemLinksText4(e, index) {
    const newValue = e.target.value;
    const values = [...formData?.links];
    values[index].text = newValue;
    setformData({
      ...formData,
      links: values,
    });
  }
  function updateData() {
    dispatch(ModifyAdmissionData(id, formData))
      .then((response) => {
        dispatch(GetAdmissionData())
          .then((res) => {
            console.log(res, "res");
            setId(res?.data[0]?._id);
            setformData(res?.data[0]);
            setFileOne(imageUrl + res?.data[0]?.img);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <div className="customContainer">
      {console.log(formData, "formData")}
      <Sidebar />
      <div className="addmission">
        <div className="pb-lg-5 pb-1">
          <Header img={Group8921} heading="ADMISSIONS" />
        </div>
        <div className="container">
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <input
                onChange={(e) => {
                  setformData({
                    ...formData,
                    heading: e.target.value,
                  });
                }}
                value={formData?.heading}
                type="text"
                placeholder="Heading"
              ></input>
            </div>
          </div>
          <div className="row pt-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <textarea
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      paragraph1: e.target.value,
                    });
                  }}
                  value={formData?.paragraph1}
                  className="h-200 my-4"
                  placeholder=""
                ></textarea>
                <textarea
                  onChange={(e) => {
                    setformData({
                      ...formData,
                      paragraph2: e.target.value,
                    });
                  }}
                  value={formData?.paragraph2}
                  className="h-200 my-4"
                  placeholder=""
                ></textarea>
              </p>
            </div>
            <div className="align-items-center flex-column d-flex col-12 col-md-12 col-lg-5 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <img className="principalImage" src={fileOne} alt={fileOne}></img>
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
                className="my-3"
                type="file"
              />
            </div>
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">Steps to follow</p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p className="pt-2">
                    <span className="font-weight-bold">STEP 1. </span>
                    <p>
                      <input
                        onChange={(e) => {
                          setformData({
                            ...formData,
                            step1Text: e.target.value,
                          });
                        }}
                        value={formData?.step1Text}
                        className="my-2"
                        type="text"
                        placeholder="Enter Step-1 text"
                      ></input>
                    </p>
                  </p>
                  <p>
                    {formData?.step1Links && formData?.step1Links.length > 0
                      ? formData?.step1Links.map((val, index) => {
                          return (
                            <>
                              <p>Link: {index + 1} </p>
                              <input
                                onChange={(e) => {
                                  modifyItemLinksText1(e, index);
                                }}
                                value={val?.text}
                                key={index + 1 * 999}
                                className="my-2"
                                type="text"
                                placeholder={`Text-${index + 1}`}
                              />
                              <input
                                onChange={(e) => {
                                  modifyItemLinks1(e, index);
                                }}
                                value={val?.link}
                                key={index}
                                className="my-2"
                                type="text"
                                placeholder={`Link-${index + 1}`}
                              />
                            </>
                          );
                        })
                      : ""}
                  </p>
                  <p>
                    Points:{" "}
                    {formData?.step1Points && formData?.step1Points.length > 0
                      ? formData?.step1Points.map((val, index) => {
                          return (
                            <input
                              onChange={(e) => {
                                modifyItem1(e, index);
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
                  </p>
                  <p className="pt-4">
                    <span className="font-weight-bold">STEP 2.</span>
                    <p>
                      {" "}
                      <input
                        onChange={(e) => {
                          setformData({
                            ...formData,
                            step2Text: e.target.value,
                          });
                        }}
                        value={formData?.step2Text}
                        type="text"
                        placeholder="Enter Step-2 text"
                      ></input>
                    </p>
                  </p>
                  <p>
                    {formData?.step2Links && formData?.step2Links.length > 0
                      ? formData?.step2Links.map((val, index) => {
                          return (
                            <>
                              <p>Link: {index + 1} </p>
                              <input
                                onChange={(e) => {
                                  modifyItemLinksText2(e, index);
                                }}
                                value={val?.text}
                                key={index + 1 * 999}
                                className="my-2"
                                type="text"
                                placeholder={`Text-${index + 1}`}
                              />
                              <input
                                onChange={(e) => {
                                  modifyItemLinks2(e, index);
                                }}
                                value={val?.link}
                                key={index}
                                className="my-2"
                                type="text"
                                placeholder={`Link-${index + 1}`}
                              />
                            </>
                          );
                        })
                      : ""}
                    <ul>
                      {formData?.step2Points && formData?.step2Points.length > 0
                        ? formData?.step2Points.map((val, index) => {
                            return (
                              <input
                                onChange={(e) => {
                                  modifyItem2(e, index);
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
                  <p className="pt-4">
                    <span className="font-weight-bold">STEP 3. </span>{" "}
                    <p>
                      <input
                        onChange={(e) => {
                          setformData({
                            ...formData,
                            step3Text: e.target.value,
                          });
                        }}
                        value={formData?.step3Text}
                        className="my-2"
                        type="text"
                        placeholder="Enter Step-3 text"
                      ></input>
                    </p>
                  </p>
                  <p>
                    {formData?.step3Links && formData?.step3Links.length > 0
                      ? formData?.step3Links.map((val, index) => {
                          return (
                            <>
                              <p>Link: {index + 1} </p>
                              <input
                                onChange={(e) => {
                                  modifyItemLinksText3(e, index);
                                }}
                                value={val?.text}
                                key={index + 1 * 999}
                                className="my-2"
                                type="text"
                                placeholder={`Text-${index + 1}`}
                              />
                              <input
                                onChange={(e) => {
                                  modifyItemLinks3(e, index);
                                }}
                                value={val?.link}
                                key={index}
                                className="my-2"
                                type="text"
                                placeholder={`Link-${index + 1}`}
                              />
                            </>
                          );
                        })
                      : ""}
                    <ul>
                      {formData?.step3Points && formData?.step3Points.length > 0
                        ? formData?.step3Points.map((val, index) => {
                            return (
                              <input
                                onChange={(e) => {
                                  modifyItem3(e, index);
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
                  <p className="py-5">
                    For More information click here to see{" "}
                    <p>
                      {formData?.links && formData?.links.length > 0
                        ? formData?.links.map((val, index) => {
                            return (
                              <>
                                <p>Link: {index + 1} </p>
                                <input
                                  onChange={(e) => {
                                    modifyItemLinksText4(e, index);
                                  }}
                                  value={val?.text}
                                  key={index + 1 * 999}
                                  className="my-2"
                                  type="text"
                                  placeholder={`Text-${index + 1}`}
                                />
                                <input
                                  onChange={(e) => {
                                    modifyItemLinks4(e, index);
                                  }}
                                  value={val?.link}
                                  key={index}
                                  className="my-2"
                                  type="text"
                                  placeholder={`Link-${index + 1}`}
                                />
                              </>
                            );
                          })
                        : ""}
                    </p>
                  </p>
                </p>
              </div>
              <button onClick={updateData} className="btn btn-primary my-4">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAdmission;
