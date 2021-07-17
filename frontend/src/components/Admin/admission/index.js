import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../header/index";
import Group8921 from "../../../assets/Group8921.svg";
import "./style.css";

function AdminAdmission() {
  return (
    <div className="customContainer">
      <Sidebar />
      <div className="addmission">
        <div className="pb-lg-5 pb-1">
          <Header img={Group8921} heading="ADMISSIONS" />
        </div>
        <div className="container">
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <input type="text" placeholder="Heading"></input>
            </div>
          </div>
          <div className="row pt-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <textarea className="h-200 my-4" placeholder=""></textarea>
              </p>
            </div>
            <div className="align-items-center d-flex col-12 col-md-12 col-lg-5 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <input className="" type="file" />
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
                        className="my-2"
                        type="text"
                        placeholder="Enter Step-1 text"
                      ></input>
                    </p>
                  </p>
                  <p>
                    Click here to download New Application Form
                    <p>
                      {" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Enter Application Form Link"
                      ></input>
                    </p>
                  </p>
                  <p>
                    Click here to download Re-enrollment Form
                    <p>
                      {" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Enter Re-enrollment Form Link"
                      ></input>
                    </p>
                  </p>
                  <p>Sign and date it.</p>
                  <p className="pt-4">
                    <span className="font-weight-bold">STEP 2.</span>
                    <p>
                      {" "}
                      <input
                        type="text"
                        placeholder="Enter Step-2 text"
                      ></input>
                    </p>
                  </p>
                  <p>
                    <ul>
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-1"
                      />
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-2"
                      />
                    </ul>
                  </p>
                  <p className="pt-4">
                    <span className="font-weight-bold">STEP 3. </span>{" "}
                    <p>
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Enter Step-3 text"
                      ></input>
                    </p>
                  </p>
                  <p>
                    <ul>
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-1"
                      />
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-2"
                      />{" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-3"
                      />{" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-4"
                      />{" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-5"
                      />{" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-6"
                      />{" "}
                      <input
                        className="my-2"
                        type="text"
                        placeholder="Point-7"
                      />
                    </ul>
                  </p>
                  <p className="py-5">
                    For More information click here to see{" "}
                    <p>
                      <input
                        type="text"
                        placeholder="Enter admission policy Link"
                      ></input>{" "}
                      &
                      <input
                        type="text"
                        placeholder="EnterTution & Donation Policy Link"
                      ></input>
                    </p>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAdmission;
