import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../../components/header/index2";
import Group8918 from "../../../assets/Group8918.svg";
import "./style.css";

function AdminPrincipal() {
  return (
    <div className="customContainer">
      <Sidebar />
      <div className="pricipalDesk pb-5">
        <div className="pb-lg-5 pb-1">
          <Header img={Group8918} heading="FROM THE PRINCIPAL’S DESK" />
        </div>
        <div className="container">
          <div className="row pt-5 px-lg-4 px-md-5">
            <div className="align-items-center align-items-lg-start justify-content-lg-center px-md-5 px-4 px-lg-4 flex-column d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <input type="file" className="my-4" name="Principal Image" />
              <input
                type="text"
                className="my-4"
                placeholder="Principal Name"
              />
              <p className="pb-3">Principal</p>
            </div>
            <div className="col-12 col-md-12 col-lg-8 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <textarea className="h-200 my-4" placeholder=""></textarea>
              </p>
            </div>
          </div>
          <div className="row pt-1 pb-3 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <textarea className="h-200"></textarea>

                <textarea
                  className="h-200 my-4"
                  placeholder="Enter Thank Note"
                ></textarea>
                <p>Sincerely</p>
                <input type="text" placeholder="Principal Name" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPrincipal;
