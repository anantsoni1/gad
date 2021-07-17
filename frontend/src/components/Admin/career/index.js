import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../header/index";
import Group8922 from "../../../assets/Group8922.svg";
import { GetCareerData, ModifyCareerData } from "../../../redux/actions/career";
import "./style.css";

function AdminCareer() {
  const careerData = useSelector((state) => state.careeer?.getCareerData);
  const [id, setId] = useState("");
  const [headingText, setheadingText] = useState("");
  const [headingPoints, setheadingPoints] = useState([]);
  const [requirementsPoints, setrequirementsPoints] = useState([]);
  const [attachPoints, setattachPoints] = useState([]);
  const [subHeadingText, setsubHeadingText] = useState("");
  const [attachText, setattachText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCareerData())
      .then((res) => {
        setId(res?.data[0]?._id);
        setheadingText(res?.data[0]?.headingText);
        setheadingPoints(res?.data[0]?.headingPoints);
        setrequirementsPoints(res?.data[0]?.requirementsPoints);
        setattachPoints(res?.data[0]?.attachPoints);
        setsubHeadingText(res?.data[0]?.subHeadingText);
        setattachText(res?.data[0]?.attachText);
      })
      .catch(() => {});
  }, []);
  function modifyItem(e, index) {
    const newValue = e.target.value;
    const values = [...headingPoints];
    values[index].point = newValue;
    console.log(values);
    setheadingPoints(values);
  }
  function modifyItem2(e, index) {
    const newValue = e.target.value;
    const values = [...attachPoints];
    values[index].point = newValue;
    console.log(values);
    setattachPoints(values);
  }
  function modifyItem3(e, index) {
    const newValue = e.target.value;
    const values = [...requirementsPoints];
    values[index].point = newValue;
    console.log(values);
    setrequirementsPoints(values);
  }
  function updateData() {
    dispatch(
      ModifyCareerData(id, {
        headingText,
        headingPoints,
        requirementsPoints,
        attachPoints,
        subHeadingText,
        attachText,
      })
    )
      .then(() => {
        dispatch(GetCareerData())
          .then((res) => {
            setId(res?.data[0]?._id);
            setheadingText(res?.data[0]?.headingText);
            setheadingPoints(res?.data[0]?.headingPoints);
            setrequirementsPoints(res?.data[0]?.requirementsPoints);
            setattachPoints(res?.data[0]?.attachPoints);
            setsubHeadingText(res?.data[0]?.subHeadingText);
            setattachText(res?.data[0]?.attachText);
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <>
      {careerData && careerData?.data.length > 0 ? (
        <div className="customContainer">
          <Sidebar />
          <div className="career">
            <div className="pb-lg-5 pb-1">
              <Header img={Group8922} heading="CAREERS" />
            </div>
            <div className="container pb-5">
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <textarea
                      onChange={(e) => {
                        setheadingText(e.target.value);
                      }}
                      value={headingText}
                      className="h-200 my-4"
                      placeholder=""
                    ></textarea>
                    <p>
                      <ul>
                        {headingPoints && headingPoints.length > 0
                          ? headingPoints.map((val, index) => {
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
                    <p>
                      <textarea
                        onChange={(e) => {
                          setsubHeadingText(e.target.value);
                        }}
                        value={subHeadingText}
                        className="h-200 my-4"
                        placeholder=""
                      ></textarea>
                    </p>
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <p className="h2">Attach:</p>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <p>
                      <ul>
                        {attachPoints && attachPoints.length > 0
                          ? attachPoints.map((val, index) => {
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
                    <textarea
                      onChange={(e) => {
                        setattachText(e.target.value);
                      }}
                      value={attachText}
                      className="h-200 my-4"
                      placeholder=""
                    ></textarea>
                  </p>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <p className="h2">Requirements:</p>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <p>
                      <ul>
                        {requirementsPoints && requirementsPoints.length > 0
                          ? requirementsPoints.map((val, index) => {
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
                  </p>
                </div>
              </div>
              <button onClick={updateData} className="btn btn-primary my-4">
                Update
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminCareer;
