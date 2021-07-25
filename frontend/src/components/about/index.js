import React, { useEffect } from "react";
import Header from "../header/index";
import purpleBg from "../../assets/purple-bg.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetAboutData } from "../../redux/actions/about";
import { imageUrl } from "../../redux/api/index";
import "./style.css";

const About = () => {
  const dispatch = useDispatch();
  const aboutData = useSelector((state) => state.about?.getAboutData);
  useEffect(() => {
    dispatch(GetAboutData())
      .then((res) => {})
      .catch(() => {});
  }, []);
  console.log(aboutData);
  return (
    <>
      {aboutData && aboutData?.data?.length > 0 && (
        <div className="about">
          <div className="pb-lg-5 pb-1">
            <Header img={purpleBg} heading="ABOUT US" />
          </div>
          <div className="container">
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">{aboutData?.data[0]?.posts[0]?.heading}</p>
              </div>
            </div>
            <div className="row pt-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                {aboutData?.data[0]?.posts[0]?.points &&
                  aboutData?.data[0]?.posts[0]?.points?.length > 0 && (
                    <>
                      {aboutData?.data[0]?.posts[0]?.points?.map(
                        (poi, index) => (
                          <p className="about-text" key={index}>
                            {poi?.point}
                          </p>
                        )
                      )}
                    </>
                  )}
              </div>
              <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                <img
                  src={`${imageUrl}${aboutData?.data[0]?.posts[0]?.img}`}
                  alt="post"
                ></img>
              </div>
            </div>
            <div className="hr mt-5 mb-2"></div>
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">{aboutData?.data[0]?.posts[1]?.heading}</p>
              </div>
            </div>
            <div className="row pt-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                {aboutData?.data[0]?.posts[1]?.points &&
                  aboutData?.data[0]?.posts[1]?.points?.length > 0 && (
                    <>
                      {aboutData?.data[0]?.posts[1]?.points?.map(
                        (poi, index) => (
                          <p className="about-text" key={index}>
                            {poi?.point}
                          </p>
                        )
                      )}
                    </>
                  )}
              </div>
              <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                <img
                  src={`${imageUrl}${aboutData?.data[0]?.posts[1]?.img}`}
                  alt="post"
                ></img>
              </div>
            </div>
            <div className="hr mt-5 mb-2"></div>
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">{aboutData?.data[0]?.posts[2]?.heading}</p>
              </div>
            </div>
            <div className="row pt-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                {aboutData?.data[0]?.posts[2]?.points &&
                  aboutData?.data[0]?.posts[2]?.points?.length > 0 && (
                    <>
                      {aboutData?.data[0]?.posts[2]?.points?.map(
                        (poi, index) => (
                          <p className="about-text" key={index}>
                            {poi?.point}
                          </p>
                        )
                      )}
                    </>
                  )}
              </div>
              <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                <img
                  src={`${imageUrl}${aboutData?.data[0]?.posts[2]?.img}`}
                  alt="post"
                ></img>
              </div>
            </div>
            <div className="hr mt-5 mb-2"></div>
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">{aboutData?.data[0]?.posts[3]?.heading}</p>
              </div>
            </div>
            <div className="row pt-1 pb-5 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                {aboutData?.data[0]?.posts[3]?.points &&
                  aboutData?.data[0]?.posts[3]?.points?.length > 0 && (
                    <>
                      {aboutData?.data[0]?.posts[3]?.points?.map(
                        (poi, index) => (
                          <p className="about-text" key={index}>
                            {poi?.point}
                          </p>
                        )
                      )}
                    </>
                  )}
              </div>
              <div className="align-items-center d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                <img
                  src={`${imageUrl}${aboutData?.data[0]?.posts[3]?.img}`}
                  alt="post"
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
