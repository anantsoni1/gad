import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GetCovidData } from "../../redux/actions/covid";
import "./style.css";

function Covid() {
  const dispatch = useDispatch();
  const history = useHistory();
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
              <div className="text-white main-heading">COVID 19 UPDATES</div>
              <div className="text-center text-white mt-3 sub-heading px-3">
                If you have any questions about COVID-19, please see the
                following links:
              </div>
              <div className="text-center text-white mt-5 sub-heading carousel-flex">
                {/* <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2"
                style={{"cursor": "pointer"}}>
                  QUICK LINKS: COVID-19 Resources
                </div> */}
                <div
                  className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push("/covid-links");
                  }}
                >
                  LINKS
                </div>
                <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                  <a
                    href="https://www.fraserhealth.ca/covid19#.X7b_YnBKi70"
                    style={{ color: "white" }}
                    target="_blank"
                  >
                    COVID19 SAFETY
                  </a>
                </div>
              </div>
            </div>
          </h1>
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-md-12 my-5">
                <div className="font-regular my-md-5 wrapper">
                  <p>{covidData.slots[0].paragraphOne}</p>
                  <p>{covidData.slots[0].paragraphTwo}</p>
                  <p>{covidData.slots[0].paragraphThree}</p>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn text-white text-center btn-covid-purple mt-3">
                    <a
                      href="https://backend.gadschool.com:8082/files/disease2.pdf"
                      style={{ color: "white" }}
                      target="_blank"
                    >
                      Communicable Disease Plan 2021 (new updated)
                    </a>
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn text-white text-center btn-covid-purple mt-3">
                    <a
                      href="https://backend.gadschool.com:8082/files/disease.pdf"
                      style={{ color: "white" }}
                      target="_blank"
                    >
                      Communicable Disease Plan 2021 (updated)
                    </a>
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn text-white text-center btn-covid-purple mt-3">
                    <a
                      href="https://backend.gadschool.com:8082/files/disease1.pdf"
                      style={{ color: "white" }}
                      target="_blank"
                    >
                      Communicable Disease Plan 2021
                    </a>
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn text-white text-center btn-covid-blue my-3">
                    <a
                      href="https://backend.gadschool.com:8082/files/FH-Back-to-school_winter-21_QA.pdf"
                      style={{ color: "white" }}
                      target="_blank"
                    >
                      Fraser Health Back to School Plan-Winter 2021
                    </a>
                  </button>
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
