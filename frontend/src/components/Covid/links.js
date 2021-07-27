import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCovidData } from "../../redux/actions/covid";
import "./style.css";

function Covid() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCovidData())
      .then((res) => {})
      .catch(() => {});
  }, []);
  const covidData = useSelector((state) => state.covid?.getCovidData);
  console.log(covidData);
  return (
    <>
      {covidData && covidData.slots.length > 0 && (
        <div className="covid">
          <h1 id="covid" className=" text-center center">
            <div>
              <div className="text-white main-heading">COVID 19 LINKS</div>
            </div>
          </h1>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-12 my-5">
            <div className="row pt-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 px-lg-1 py-md-3 py-sm-5 py-xs-5 px-md-1 px-3">
              <p className="about-text font-weight-bold">
                <span className="vertical-ruler">|</span> 
                    <a href="https://www2.gov.bc.ca/gov/content/education-training/k-12/covid-19-safe-schools" target="_blank">
                        Back To School Plan
                    </a>
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 px-lg-1 py-md-3 py-sm-5 py-xs-5 px-md-1 px-3">
              <p className="about-text font-weight-bold">
                <span className="vertical-ruler">|</span> 
                <a href="https://www2.gov.bc.ca/assets/gov/education/administration/kindergarten-to-grade-12/safe-caring-orderly/k-12-covid-19-health-safety-guidlines.pdf" target="_blank">
                        Public Health GuideLines
                </a>
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 px-lg-1 py-md-3 py-sm-5 py-xs-5 px-md-1 px-3">
              <p className="about-text font-weight-bold">
                <span className="vertical-ruler">|</span>
                <a href="https://www.worksafebc.com/en/covid-19/bcs-four-step-restart" target="_blank">
                        Work Safe BC
                </a>
              </p>
            </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Covid;
