import React from "react";
import "./style.css";
import Discover from "../../assets/discover.svg";
import Kindergarten from "../../assets/kindergarten.svg";
import featureOne from "../../assets/featureOne.svg";
import featureTwo from "../../assets/featureTwo.svg";
import featureThree from "../../assets/featureThree.svg";

function Home() {
  return (
    <div className="home">
      <div className="home-banner">
        <div className="home-heading text-white text-center">
          <div className="main-heading" style={{ paddingTop: "45vh" }}>
            GAD Elementary School
          </div>
          <div className="home-sub-heading text-white">LEARN, LEAD, SERVE</div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="new-updates">
              <div className="update-home-heading">New & Updates</div>
              <div className="update-sub-heading">
                We have been working with clients around the world
              </div>
              <div className="row mt-5">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                  <div className="update-card update-red">
                    <div className="d-flex justify-content-between py-5 px-4">
                      <div>
                        <div className="dates date-red">27</div>
                        <div className="month text-center mt-2">Apr</div>
                      </div>
                      <div style={{ paddingLeft: "1.5rem" }}>
                        <div className="update-head">Jane Cooper</div>
                        <div className="text-muted">
                          Please join our school and help Heart...
                        </div>
                        <div className="color-red mt-3">read more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                  <div className="update-card update-purple">
                    <div className="d-flex justify-content-between py-5 px-4">
                      <div>
                        <div className="dates date-purple">17</div>
                        <div className="month text-center mt-2">Apr</div>
                      </div>
                      <div style={{ paddingLeft: "1.5rem" }}>
                        <div className="update-head">Jane Cooper</div>
                        <div className="text-muted">
                          Please join our school and help Heart...
                        </div>
                        <div className="color-purple mt-3">read more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                  <div className="update-card">
                    <div className="d-flex justify-content-between update-green py-5 px-4">
                      <div>
                        <div className="dates date-green">09</div>
                        <div className="month text-center mt-2">Apr</div>
                      </div>
                      <div style={{ paddingLeft: "1.5rem" }}>
                        <div className="update-head">Jane Cooper</div>
                        <div className="text-muted">
                          Please join our school and help Heart...
                        </div>
                        <div className="color-green mt-3">read more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comprehensive-head mt-5 pt-4">
                Comprehensive and coherent curricula
              </div>
              <div className="comprehensive-sub-head">
                English language arts, mathematics, and science programs that
                support strategic instruction across a variety of grade bands
                from K–12.
              </div>
              <div className="d-flex justify-content-center">
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
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <img src={Discover} alt="" className="img-fluid px-4" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 center">
                  <div className="wrapper text-white">
                    <h1 className="text-white">Discover more</h1>
                    <h4>
                      Find out about life at GAD School, inside and outside the
                      classroom.
                    </h4>
                    <p className="text-white mt-lg-5">
                      We pride ourselves using the holistic approach to develop
                      students academically, socially and emotionally. Students
                      experience inquiry-based learning with real-life, hands-on
                      workshops and lessons to enrich their understanding both
                      in and outside of the classroom. Regular field trips and
                      extracurricular activities are arranged to provide
                      students with the opportunity to collaborate and connect
                      with the community, developing their social
                      responsibility. Additionally, We regularly promote and
                      maintain a safe, caring and respectful environment for
                      all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kindergarten">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                  <img src={Kindergarten} alt="" className="img-fluid px-4" />
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 col-12 center">
                  <div className="wrapper ">
                    <div className="kindergarten-head">
                      We are now accepting applications for our{" "}
                      <span className="color-green">Kindergarten</span> program
                      for the 2020-2021 school year.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discover-bg-home text-white">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <h1>Discover more</h1>
              <p>
                Find out about life at GAD School, inside and outside the
                classroom.
              </p>
              <p className="mt-5">
                We pride ourselves using the holistic approach to develop
                students academically, socially and emotionally. Students
                experience inquiry-based learning with real-life, hands-on
                workshops and lessons to enrich their understanding both in and
                outside of the classroom. Regular field trips and
                extracurricular activities are arranged to provide students with
                the opportunity to collaborate and connect with the community,
                developing their social responsibility. Additionally, We
                regularly promote and maintain a safe, caring and respectful
                environment for all.
              </p>
              <p className="mt-4">
                Students experience inquiry-based learning with real-life,
                hands-on workshops and lessons to enrich their understanding
                both in and outside of the classroom.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="feature-image text-center mt-3">
                    <img
                      src={featureOne}
                      alt=""
                      className="img-fluid feature-image"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="feature-image text-center mt-3">
                    <img
                      src={featureTwo}
                      alt=""
                      className="img-fluid feature-image"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="feature-image text-center mt-3">
                    <img
                      src={featureThree}
                      alt=""
                      className="img-fluid feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
