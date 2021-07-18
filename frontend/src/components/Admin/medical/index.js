import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";

function AdminMedical() {
  return (
    <div className="customContainer">
      <Sidebar />
      <div className="covid">
        <h1 id="covid" className=" text-center center">
          <div>
            <div className="text-white main-heading">COVID 19 UPDATES</div>
            <div className="text-center text-white mt-3 sub-heading px-3">
              If you have any questions about COVID-19, please see the following
              links:
            </div>
            <div className="text-center text-white mt-5 sub-heading carousel-flex">
              <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                QUICK LINKS: COVID-19 Resources
              </div>
              <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                LINKS
              </div>
              <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                COVID19 SAFETY
              </div>
            </div>
          </div>
        </h1>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 my-5">
              <div className="font-regular my-md-5 wrapper">
                <textarea className="h-200 my-4"></textarea>{" "}
              </div>
              <div className="d-flex justify-content-center">
                <button className="btn text-white text-center btn-covid-purple mt-3">
                  Updated COVID-19 Health and Safety Plan 2021
                </button>
              </div>
              <p>
                <input type="text" className="my-2" />
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn text-white text-center btn-covid-blue my-3">
                  Fraser Health Back to School Plan-Winter 2021
                </button>
              </div>
              <p>
                <input type="text" className="my-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMedical;
