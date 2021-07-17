import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";

function AdminAbout() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
  });
  return (
    <div>
      <Sidebar />
      <div className="sidebar-left-margin my-5">
        <div className="container">
          <h1 className="px-lg-4 px-md-5">About</h1>
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Heading"
              />
            </div>
          </div>
          <div className="row pt-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <textarea className="form-control" rows="7"></textarea>
            </div>
            <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <input type="file" className="form-control py-0" />
            </div>
          </div>
          <div className="hr mt-5 mb-2"></div>
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Heading"
              />
            </div>
          </div>
          <div className="row pt-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <textarea className="form-control" rows="7"></textarea>
            </div>
            <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <input type="file" className="form-control py-0" />
            </div>
          </div>
          <div className="hr mt-5 mb-2"></div>
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Heading"
              />
            </div>
          </div>
          <div className="row pt-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <textarea className="form-control" rows="7"></textarea>
            </div>
            <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <input type="file" className="form-control py-0" />
            </div>
          </div>
          <div className="hr mt-5 mb-2"></div>
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Heading"
              />
            </div>
          </div>
          <div className="row pt-1 pb-5 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <textarea className="form-control" rows="7"></textarea>
            </div>
            <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <input type="file" className="form-control py-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAbout;
