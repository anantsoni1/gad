import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetHomeData, ModifyHomeData } from "../../../redux/actions/home";
import { imageUrl } from "../../../redux/api/index";

const Dashboard = () => {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const initialState = {
    id: "",
    heading: "",
    subHeading: "",
    blogsHeading: "",
    blogsSubHeading: "",
    curriculaHeading: "",
    curriculaSubHeading: "",
    discoverHeading: "",
    discoverSubHeading: "",
    discoverText: "",
    discoverImg: "",
    kindergarten: "",
    kindergartenImg: "",
    discoverMoreHeading: "",
    discoverMoreSubHeading: "",
    discoverMoreText: "",
    featureOne: "",
    featureTwo: "",
    featureThree: "",
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const homeData = useSelector((state) => state.home?.getHomeData);
  const [formData, setFormData] = useState(initialState);
  const [fileOne, setFileOne] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const [fileThree, setFileThree] = useState("");
  const [fileFour, setFileFour] = useState("");
  const [fileFive, setFileFive] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetHomeData())
      .then((res) => {
        const data = res.slots[0];
        setFileOne(imageUrl + data?.featureOne);
        setFileTwo(imageUrl + data?.featureTwo);
        setFileThree(imageUrl + data?.featureThree);
        setFileFour(imageUrl + data?.discoverImg);
        setFileFive(imageUrl + data?.kindergartenImg);
        return setFormData(() => ({
          ...formData,
          id: data?._id,
          heading: data?.heading,
          subHeading: data?.subHeading,
          blogsHeading: data?.blogsHeading,
          blogsSubHeading: data?.blogsSubHeading,
          curriculaHeading: data?.curriculaHeading,
          curriculaSubHeading: data?.curriculaSubHeading,
          discoverHeading: data?.discoverHeading,
          discoverSubHeading: data?.discoverSubHeading,
          discoverText: data?.discoverText,
          discoverImg: data?.discoverImg,
          kindergarten: data?.kindergarten,
          kindergartenImg: data?.kindergartenImg,
          discoverMoreHeading: data?.discoverMoreHeading,
          discoverMoreSubHeading: data?.discoverMoreSubHeading,
          discoverMoreText: data?.discoverMoreText,
          featureOne: data?.featureOne,
          featureTwo: data?.featureTwo,
          featureThree: data?.featureThree,
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  function updateData() {
    dispatch(ModifyHomeData(formData.id, formData))
      .then(() => {
        dispatch(GetHomeData())
          .then((res) => {
            const data = res.slots[0];
            return setFormData(() => ({
              ...formData,
              id: data?._id,
              heading: data?.heading,
              subHeading: data?.subHeading,
              curriculaHeading: data?.curriculaHeading,
              curriculaSubHeading: data?.curriculaSubHeading,
              discoverHeading: data?.discoverHeading,
              discoverSubHeading: data?.discoverSubHeading,
              discoverText: data?.discoverText,
              kindergarten: data?.kindergarten,
              discoverMoreHeading: data?.discoverMoreHeading,
              discoverMoreSubHeading: data?.discoverMoreSubHeading,
              discoverMoreText: data?.discoverMoreText,
            }));
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <div>
      <Sidebar />
      {homeData && (
        <div className="sidebar-left-margin my-5">
          <div className="container">
            <h1>Home</h1>
            <h4 className="text-lowercase">
              PLEASE UPLOAD ALL THE IMAGES, IN CASE OF IMAGE UPDATION
            </h4>
            <div className="home">
              <div className="home-banner">
                <div className="home-heading text-white text-center">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Heading"
                    name="heading"
                    value={formData.heading}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Enter Sub-heading"
                    name="subHeading"
                    value={formData.subHeading}
                    onChange={(e) => handleChange(e)}
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
                        name="blogsHeading"
                        value={formData.blogsHeading}
                        onChange={(e) => handleChange(e)}
                      />
                      <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="Enter sub-heading"
                        name="blogsSubHeading"
                        value={formData.blogsSubHeading}
                        onChange={(e) => handleChange(e)}
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
                          className="form-control mt-3"
                          type="text"
                          placeholder="Enter curricula-heading"
                          name="curriculaHeading"
                          value={formData.curriculaHeading}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="comprehensive-sub-head">
                        <textarea
                          className="form-control mt-3"
                          rows="3"
                          name="curriculaSubHeading"
                          value={formData.curriculaSubHeading}
                          onChange={(e) => handleChange(e)}
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
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                          <img className="img-fluid" src={fileFour} />
                          <input
                            onChange={(e) => {
                              if (e.target.files[0]) {
                                setFileFour(
                                  URL.createObjectURL(e?.target?.files[0])
                                );
                                toBase64(e?.target?.files[0]).then((res) => {
                                  setFormData({
                                    ...formData,
                                    discoverImg: res,
                                  });
                                });
                              }
                            }}
                            accept=".png, .jpg, .jpeg"
                            type="file"
                            className="my-4"
                            name="kindergartenImg"
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Enter Heading"
                            name="discoverHeading"
                            value={formData.discoverHeading}
                            onChange={(e) => handleChange(e)}
                          />
                          <input
                            className="form-controls mt-3"
                            type="text"
                            placeholder="Enter sub-heading"
                            name="discoverSubHeading"
                            value={formData.discoverSubHeading}
                            onChange={(e) => handleChange(e)}
                          />
                          <p className="text-white mt-3">
                            <textarea
                              className="form-control"
                              rows="9"
                              name="discoverText"
                              value={formData.discoverText}
                              onChange={(e) => handleChange(e)}
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
                        <div className="col-lg-5 col-md-12 col-sm-12 col-12 text-center">
                          <img className="img-fluid" src={fileFive} />
                          <input
                            onChange={(e) => {
                              if (e.target.files[0]) {
                                setFileFive(
                                  URL.createObjectURL(e?.target?.files[0])
                                );
                                toBase64(e?.target?.files[0]).then((res) => {
                                  setFormData({
                                    ...formData,
                                    kindergartenImg: res,
                                  });
                                });
                              }
                            }}
                            accept=".png, .jpg, .jpeg"
                            type="file"
                            className="my-4"
                            name="kindergartenImg"
                          />
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                          <textarea
                            className="form-control"
                            rows="7"
                            name="kindergarten"
                            value={formData.kindergarten}
                            onChange={(e) => handleChange(e)}
                          ></textarea>
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
                        name="discoverMoreHeading"
                        value={formData.discoverMoreHeading}
                        onChange={(e) => handleChange(e)}
                      />
                      <input
                        className="form-control mt-3"
                        type="text"
                        placeholder="Enter sub-Heading"
                        name="discoverMoreSubHeading"
                        value={formData.discoverMoreSubHeading}
                        onChange={(e) => handleChange(e)}
                      />
                      <textarea
                        className="form-control mt-3"
                        rows="9"
                        name="discoverMoreText"
                        value={formData.discoverMoreText}
                        onChange={(e) => handleChange(e)}
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
                            <img className="img-fluid" src={fileOne}></img>
                            <input
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  setFileOne(
                                    URL.createObjectURL(e?.target?.files[0])
                                  );
                                  toBase64(e?.target?.files[0]).then((res) => {
                                    setFormData({
                                      ...formData,
                                      featureOne: res,
                                    });
                                  });
                                }
                              }}
                              accept=".png, .jpg, .jpeg"
                              type="file"
                              className="my-4"
                              name="Principal Image"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="feature-image text-center mt-3">
                            <img className="img-fluid" src={fileTwo} />
                            <input
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  setFileTwo(
                                    URL.createObjectURL(e?.target?.files[0])
                                  );
                                  toBase64(e?.target?.files[0]).then((res) => {
                                    setFormData({
                                      ...formData,
                                      featureTwo: res,
                                    });
                                  });
                                }
                              }}
                              accept=".png, .jpg, .jpeg"
                              type="file"
                              className="my-4"
                              name="Feature"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                          <div className="feature-image text-center mt-3">
                            <img className="img-fluid" src={fileThree} />
                            <input
                              onChange={(e) => {
                                if (e.target.files[0]) {
                                  setFileThree(
                                    URL.createObjectURL(e?.target?.files[0])
                                  );
                                  toBase64(e?.target?.files[0]).then((res) => {
                                    setFormData({
                                      ...formData,
                                      featureThree: res,
                                    });
                                  });
                                }
                              }}
                              accept=".png, .jpg, .jpeg"
                              type="file"
                              className="my-4"
                              name="Principal Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={updateData} className="btn btn-primary my-5 w-100">
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
