import React from "react";
import "./style.css";
import Discover from "../../assets/discover.svg";
import Kindergarten from "../../assets/kindergarten.svg";
import featureOne from "../../assets/featureOne.svg";
import featureTwo from "../../assets/featureTwo.svg";
import featureThree from "../../assets/featureThree.svg";
import { Carousel } from "react-bootstrap";
import person from "../../assets/person.svg";

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
        <div className="row carousel-flex">
          <div className="col-lg-10 col-md-12 col-sm-12 col-12">
            <div className="new-updates">
              <div className="update-home-heading">New & Updates</div>
              <div className="update-sub-heading">
                We have been working with clients around the world
              </div>
              <div className="row mt-md-5 mt-3">
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
                        <div className="color-red mt-3">read more&nbsp;&nbsp;&nbsp; <i className="fas fa-arrow-right"></i></div>
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
                        <div className="color-purple mt-3">read more&nbsp;&nbsp;&nbsp; <i className="fas fa-arrow-right"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                  <div className="update-card update-green">
                    <div className="d-flex justify-content-between py-5 px-4">
                      <div>
                        <div className="dates date-green">09</div>
                        <div className="month text-center mt-2">Apr</div>
                      </div>
                      <div style={{ paddingLeft: "1.5rem" }}>
                        <div className="update-head">Jane Cooper</div>
                        <div className="text-muted">
                          Please join our school and help Heart...
                        </div>
                        <div className="color-green mt-3">read more&nbsp;&nbsp;&nbsp; <i className="fas fa-arrow-right"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comprehensive-head mt-md-5 mt-3 pt-4">
                Comprehensive and coherent curricula
              </div>
              <div className="comprehensive-sub-head">
                English language arts, mathematics, and science programs that
                support strategic instruction across a variety of grade bands
                from K–12.
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
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                  <img src={Discover} alt="" className="img-fluid px-4" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 center">
                  <div className="wrapper text-white">
                    <h1 className="text-white mt-4">Discover more</h1>
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
          <div className="row carousel-flex">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-5 col-md-12 col-sm-12 col-12 center">
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
          <div className="row carousel-flex">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12 wrapper">
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
          <div className="row carousel-flex">
            <div className="col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="feature-image text-center mt-3">
                    <img
                      src={featureOne}
                      alt="features"
                      className="img-fluid feature-image"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="feature-image text-center mt-3">
                    <img
                      src={featureTwo}
                      alt="features"
                      className="img-fluid feature-image"
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                  <div className="feature-image text-center mt-3">
                    <img
                      src={featureThree}
                      alt="features"
                      className="img-fluid feature-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="home-carousel">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-flex container py-5 my-5">
              <img src={person} className="img-fluid" alt="First slide" />
              <div className="flex-content">
                <p>
                  We pride ourselves using the holistic approach to develop
                  students academically, socially and emotionally. Students
                  experience inquiry-based learning with real-life, hands-on
                  workshops and lessons to enrich their understanding both in
                  and outside of the classroom. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h5 className="mt-3">John Doe</h5>
                <p className="mt-0 pt-0">Instructor</p>
              </div>
            </div>
          </Carousel.Item>
         <Carousel.Item>
            <div className="carousel-flex container py-5 my-5">
              <img src={person} className="img-fluid" alt="Third slide" />
              <div className="flex-content">
                <p>
                  We pride ourselves using the holistic approach to develop
                  students academically, socially and emotionally. Students
                  experience inquiry-based learning with real-life, hands-on
                  workshops and lessons to enrich their understanding both in
                  and outside of the classroom. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to
                  make a type specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h5 className="mt-3">John Doe</h5>
                <p className="mt-0 pt-0">Instructor</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
