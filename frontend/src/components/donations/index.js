import React from "react";
import "./style.css";

function Donation() {
  return (
    <>
      <div className="home">
        <div className="donation-banner">
          <div className="home-heading text-white text-center">
            <div className="main-heading" style={{ paddingTop: "45vh" }}>
              DONATE
            </div>
            <div className="home-sub-heading text-white">
              SUPPORT OUR PROGRAMS
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="row carousel-flex">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="card py-5 px-4">
                    <i class="fas fa-coins fa-5x text-blue text-center"></i>
                    <p className="text-center h2 text-blue mt-4">Give Now</p>
                    <p className="text-center mt-2">
                      Take action by making a tax-deductible donation to
                      invisible children
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donation;
