import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="sidebar-left-margin my-5">
        <div className="container">
          <h1 className="px-lg-4 px-md-5">Home</h1>
          <div className="home">
            <div className="home-banner">
              <div className="home-heading text-white text-center">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Heading"
                />
              </div>
            </div>
            <div className="container">
              <div className="row carousel-flex">
                <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="new-updates">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Heading"
                    />
                    <input
                      className="form-control mt-3"
                      type="text"
                      placeholder="Enter sub-heading"
                    />
                    <div className="row mt-md-5 mt-3">
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                        <div className="update-card update-red">
                          <div className="d-flex justify-content-between py-5 px-4">
                            <div>
                              <div className="dates date-red">
                                <input className="form-control" type="text" />
                              </div>
                              <div className="month text-center mt-2">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div style={{ paddingLeft: "1.5rem" }}>
                              <div className="update-head">
                                <input className="form-control" type="text" />
                              </div>
                              <div className="text-muted">
                                <input
                                  className="form-control mt-3"
                                  type="text"
                                />
                              </div>
                              <div className="color-red mt-3">
                                read more&nbsp;&nbsp;&nbsp;{" "}
                                <i className="fas fa-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                        <div className="update-card update-purple">
                          <div className="d-flex justify-content-between py-5 px-4">
                            <div>
                              <div className="dates date-purple">
                                <input className="form-control" type="text" />
                              </div>
                              <div className="month text-center mt-2">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div style={{ paddingLeft: "1.5rem" }}>
                              <div className="update-head">
                                <input className="form-control" type="text" />
                              </div>
                              <div className="text-muted">
                                <input
                                  className="form-control mt-3"
                                  type="text"
                                />
                              </div>
                              <div className="color-purple mt-3">
                                read more&nbsp;&nbsp;&nbsp;{" "}
                                <i className="fas fa-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                        <div className="update-card update-green">
                          <div className="d-flex justify-content-between py-5 px-4">
                            <div>
                              <div className="dates date-green">
                                <input className="form-control" type="text" />
                              </div>
                              <div className="month text-center mt-2">
                                <input className="form-control" type="text" />
                              </div>
                            </div>
                            <div style={{ paddingLeft: "1.5rem" }}>
                              <div className="update-head">
                                <input className="form-control" type="text" />
                              </div>
                              <div className="text-muted">
                                <input
                                  className="form-control mt-3"
                                  type="text"
                                />
                              </div>
                              <div className="color-green mt-3">
                                read more&nbsp;&nbsp;&nbsp;{" "}
                                <i className="fas fa-arrow-right"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comprehensive-head mt-md-5 mt-3 pt-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Heading"
                      />
                    </div>
                    <div className="comprehensive-sub-head">
                      <textarea
                        className="form-control mt-3"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="center">
                      <button className="text-center text-white btn mt-5 comprehensive-btn">
                        Explore Curricula
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-discover">
              <div className="container">
                <div className="row carousel-flex">
                  <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center center">
                        <input type="file" className="form-control py-0" />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter Heading"
                        />
                        <input
                          className="form-controls mt-3"
                          type="text"
                          placeholder="Enter sub-heading"
                        />
                        <p className="text-white mt-3">
                          <textarea
                            className="form-control"
                            rows="7"
                          ></textarea>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kindergarten">
              <div className="container">
                <div className="row carousel-flex">
                  <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-lg-5 col-md-12 col-sm-12 col-12 center">
                        <input type="file" className="form-control py-0" />
                      </div>
                      <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                        <textarea className="form-control" rows="7"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="discover-bg-home text-white">
              <div className="container">
                <div className="row carousel-flex">
                  <div className="col-lg-10 col-md-12 col-sm-12 col-12 wrapper">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Heading"
                    />
                    <textarea
                      className="form-control mt-3"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="features">
              <div className="container">
                <div className="row carousel-flex">
                  <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="feature-image text-center mt-3">
                          <input type="file" className="form-control py-0" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="feature-image text-center mt-3">
                          <input type="file" className="form-control py-0" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="feature-image text-center mt-3">
                          <input type="file" className="form-control py-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
