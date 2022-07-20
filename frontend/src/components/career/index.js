import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCareerData, ModifyCareerData } from "../../redux/actions/career";
import Header from "../header/index";
import Group8922 from "../../assets/Group8922.svg";
import "./style.css";

const Career = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCareerData())
      .then((res) => {})
      .catch(() => {});
  }, []);
  const careerData = useSelector((state) => state.careeer?.getCareerData);
  // test commit
  return (
    <>
      {careerData && careerData?.data.length > 0 ? (
        <div className="career">
          <div className="pb-lg-5 pb-1">
            <Header img={Group8922} heading="CAREERS" />
          </div>
          <div className="container pb-5">
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p className="pt-2">{careerData?.data[0]?.headingText}</p>
                  <p>
                    <ul>
                      {careerData?.data[0]?.headingPoints.map((val) => {
                        return val.point === "Teacher (Intermediate- Grades 4 to 9)" ? <>
                        <li key={val._id}>{val.point}</li>
                        <li key={"abcde"}>STEMS  (Computers)/ADST (Grades 4 to 9)</li>
                        </> : <li key={val._id}>{val.point}</li>;;
                      })}
                    </ul>
                  </p>
                  <p>{careerData?.data[0]?.subHeadingText}</p>
                </p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">Attach:</p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p>
                    <ul>
                      {careerData?.data[0]?.attachPoints.map((val) => {
                        return <li key={val._id}>{val.point}</li>;
                      })}
                    </ul>
                  </p>
                  <p>{careerData?.data[0]?.attachText}</p>
                </p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">Requirements:</p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p>
                    <ul>
                      {careerData?.data[0]?.requirementsPoints.map((val) => {
                        return <li key={val._id}>{val.point}</li>;
                      })}
                    </ul>
                  </p>
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

export default Career;
