import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../redux/api/index";
import { GetAdmissionData } from "../../redux/actions/admission";
import Header from "../header/index";
import Group8921 from "../../assets/Group8921.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Addmission = () => {
  const admissionlData = useSelector(
    (state) => state.admission?.getadmissionData
  );
  console.log(admissionlData?.data, "s");
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});
  const [fileOne, setFileOne] = useState("");
  useEffect(() => {
    dispatch(GetAdmissionData())
      .then((res) => {
        console.log(res, "res");
        setformData(res?.data[0]);
        setFileOne(imageUrl + res?.data[0]?.img);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      {admissionlData && admissionlData?.data?.length > 0 ? (
        <div className="addmission">
          <div className="pb-lg-5 pb-1">
            <Header img={Group8921} heading="ADMISSIONS" />
          </div>
          <div className="container">
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">{formData?.heading}</p>
              </div>
            </div>
            <div className="row pt-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p>{formData?.paragraph1}</p>
                  <p>{formData?.paragraph2}</p>
                </p>
              </div>
              <div className="align-items-center d-flex col-12 col-md-12 col-lg-5 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                <img
                  className="img-responsive-addmission addmissionHeadingImage"
                  src={fileOne}
                  alt={fileOne}
                ></img>
              </div>
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <p className="h2">Steps to follow</p>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <p className="pt-2">
                      <span className="font-weight-bold">STEP 1. </span>{" "}
                      {formData?.step1Text}
                    </p>
                    <p>
                      {formData?.step1Links && formData?.step1Links.length > 0
                        ? formData?.step1Links.map((val, index) => {
                            return (
                              <>
                                <p>
                                  <Link to={val.link}>{val.text}</Link>
                                </p>
                              </>
                            );
                          })
                        : ""}
                    </p>
                    <p></p>
                    {formData?.step1Points && formData?.step1Points.length > 0
                      ? formData?.step1Points.map((val, index) => {
                          return <p>{val.point}</p>;
                        })
                      : ""}
                    <p className="pt-4">
                      <span className="font-weight-bold">STEP 2.</span>
                      {formData?.step2Text}
                    </p>
                    <p>
                      <ul>
                        {formData?.step2Points &&
                        formData?.step2Points.length > 0
                          ? formData?.step2Points.map((val, index) => {
                              return <li>{val.point}</li>;
                            })
                          : ""}
                      </ul>
                    </p>
                    <p>
                      {formData?.step2Links && formData?.step2Links.length > 0
                        ? formData?.step2Links.map((val, index) => {
                            return (
                              <>
                                <p>
                                  <Link to={val.link}>{val.text}</Link>
                                </p>
                              </>
                            );
                          })
                        : ""}
                    </p>
                    <p className="pt-4">
                      <span className="font-weight-bold">STEP 3. </span>
                      {formData?.step3Text}
                    </p>
                    <p>
                      <ul>
                        {formData?.step3Points &&
                        formData?.step3Points.length > 0
                          ? formData?.step3Points.map((val, index) => {
                              return <li>{val.point}</li>;
                            })
                          : ""}
                      </ul>
                    </p>
                    <p>
                      {formData?.step3Links && formData?.step3Links.length > 0
                        ? formData?.step3Links.map((val, index) => {
                            return (
                              <>
                                <p>
                                  <Link to={val.link}>{val.text}</Link>
                                </p>
                              </>
                            );
                          })
                        : ""}
                    </p>
                    <p className="py-5">
                      For More information click here to see{" "}
                      {formData?.links && formData?.links.length > 0
                        ? formData?.links.map((val, index) => {
                            return (
                              <>
                                <Link to={val.link}>{val.text} </Link>
                              </>
                            );
                          })
                        : ""}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default Addmission;
