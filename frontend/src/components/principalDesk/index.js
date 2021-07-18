import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../redux/api/index";
import { GetPrincipalData } from "../../redux/actions/principal";
import Header from "../header/index2";
import Group8918 from "../../assets/Group8918.svg";
import "./style.css";
const PrincipalDesk = () => {
  const principalData = useSelector(
    (state) => state.pricipal?.getPrincipalData
  );
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});
  const [fileOne, setFileOne] = useState("");
  useEffect(() => {
    dispatch(GetPrincipalData())
      .then((res) => {
        console.log(res);
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
  return (
    <>
      {principalData ? (
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
                <p className="font-weight-bold pt-5">
                  {formData?.principalName}
                </p>
                <p className="pb-3">Principal</p>
              </div>
              <div className="col-12 col-md-12 col-lg-8 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">{formData?.heading}</p>
              </div>
            </div>
            <div className="row pt-1 pb-3 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p className="py-4">{formData?.text}</p>
                  {formData?.points
                    ? formData?.points.map((val) => {
                        return (
                          <li key={val._id} className="py-1">
                            {val.point}
                          </li>
                        );
                      })
                    : ""}
                  <p className="py-4">{formData?.thankText}</p>
                  <p>Sincerely</p>
                  <p>{formData?.principalName}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PrincipalDesk;
