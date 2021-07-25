import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../header/index";
import purpleBg from "../../../assets/purple-bg.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetAboutData, ModifyAboutData } from "../../../redux/actions/about";
import { imageUrl } from "../../../redux/api/index";

import "./style.css";

function AdminAbout() {
  const [postOne, setPostOne] = useState([]);
  const [postTwo, setPostTwo] = useState([]);
  const [postThree, setPostThree] = useState([]);
  const [postFour, setPostFour] = useState([]);
  const [fileOne, setFileOne] = useState("");
  const [fileTwo, setFileTwo] = useState("");
  const [fileThree, setFileThree] = useState("");
  const [fileFour, setFileFour] = useState("");

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const handleChange = (e, pointId) => {
    let updatePoints = [];
    postOne?.points.map((poi) => {
      if (poi._id === pointId) {
        updatePoints.push({
          ...poi,
          [e.target.name]: e.target.value,
        });
      } else {
        updatePoints.push(poi);
      }
    });
    setPostOne({
      ...postOne,
      points: updatePoints,
    });
  };
  const aboutData = useSelector((state) => state?.about?.getAboutData);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAboutData())
      .then((res) => {
        setId(res.data[0]._id);
        setPostOne(res.data[0].posts[0]);
        setPostTwo(res.data[0].posts[1]);
        setPostThree(res.data[0].posts[2]);
        setPostFour(res.data[0].posts[3]);
        setFileOne(imageUrl + res.data[0]?.posts[0].img);
        setFileTwo(imageUrl + res.data[0]?.posts[1].img);
        setFileThree(imageUrl + res.data[0]?.posts[2].img);
        setFileFour(imageUrl + res.data[0]?.posts[3].img);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  function updateData() {
    dispatch(ModifyAboutData(id, [postOne, postTwo, postThree, postFour]))
      .then(() => {
        dispatch(GetAboutData())
          .then((res) => {
            setId(res.data[0]._id);
            setPostOne(res.data[0].posts[0]);
            setPostTwo(res.data[0].posts[1]);
            setPostThree(res.data[0].posts[2]);
            setPostFour(res.data[0].posts[3]);
          })
          .catch(() => {});
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <div className="customContainer">
      <Sidebar />
      <div className="pb-lg-5 pb-1">
        <Header img={purpleBg} heading="ABOUT US" />
      </div>
      {aboutData && aboutData?.data?.length > 0 && (
        <div className="container">
          {postOne && (
            <>
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Heading"
                    name="heading"
                    value={postOne?.heading}
                    onChange={(e) =>
                      setPostOne({
                        ...postOne,
                        heading: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row pt-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  {postOne.points && postOne.points.length > 0 && (
                    <>
                      {postOne?.points?.map((poi, index) => (
                        <div key={poi._id}>
                          <textarea
                            className="form-control mt-3"
                            rows="3"
                            placeholder={`Point-${index + 1}`}
                            value={poi.point}
                            name="point"
                            onChange={(e) => {
                              let updatePoints = [];
                              postOne?.points.map((p) => {
                                if (p._id === poi?._id) {
                                  updatePoints.push({
                                    ...p,
                                    [e.target.name]: e.target.value,
                                  });
                                } else {
                                  updatePoints.push(p);
                                }
                              });
                              console.log(updatePoints);
                              setPostOne({
                                ...postOne,
                                points: updatePoints,
                              });
                            }}
                          ></textarea>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 px-md-5 px-4">
                  <img src={fileOne} className="img-fluid" />
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFileOne(URL.createObjectURL(e?.target?.files[0]));
                        toBase64(e?.target?.files[0]).then((res) => {
                          setPostOne({
                            ...postOne,
                            img: res,
                          });
                        });
                      }
                    }}
                    type="file"
                    className="form-control py-0 mt-3"
                    accept=".png, .jpg, .jpeg"
                    max-size="2000"
                  />
                </div>
              </div>
              <div className="hr mt-5 mb-2"></div>
            </>
          )}
          {postTwo && (
            <>
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Heading"
                    name="heading"
                    value={postTwo?.heading}
                    onChange={(e) =>
                      setPostTwo({
                        ...postTwo,
                        heading: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row pt-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  {postTwo.points && postTwo.points.length > 0 && (
                    <>
                      {postTwo?.points?.map((poi, index) => (
                        <div key={poi._id}>
                          <textarea
                            className="form-control mt-3"
                            rows="3"
                            placeholder={`Point-${index + 1}`}
                            value={poi.point}
                            name="point"
                            onChange={(e) => {
                              let updatePoints = [];
                              postTwo?.points.map((p) => {
                                if (p._id === poi?._id) {
                                  updatePoints.push({
                                    ...p,
                                    [e.target.name]: e.target.value,
                                  });
                                } else {
                                  updatePoints.push(p);
                                }
                              });
                              setPostTwo({
                                ...postTwo,
                                points: updatePoints,
                              });
                            }}
                          ></textarea>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 px-md-5 px-4">
                  <img src={fileTwo} className="img-fluid" />
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFileTwo(URL.createObjectURL(e?.target?.files[0]));
                        toBase64(e?.target?.files[0]).then((res) => {
                          setPostTwo({
                            ...postTwo,
                            featureTwo: res,
                          });
                        });
                      }
                    }}
                    type="file"
                    className="form-control py-0 mt-3"
                    accept=".png, .jpg, .jpeg"
                    max-size="2000"
                  />
                </div>
              </div>
              <div className="hr mt-5 mb-2"></div>
            </>
          )}
          {postThree && (
            <>
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Heading"
                    name="heading"
                    value={postThree?.heading}
                    onChange={(e) =>
                      setPostThree({
                        ...postThree,
                        heading: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row pt-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  {postThree.points && postThree.points.length > 0 && (
                    <>
                      {postThree?.points?.map((poi, index) => (
                        <div key={poi._id}>
                          <textarea
                            className="form-control mt-3"
                            rows="3"
                            placeholder={`Point-${index + 1}`}
                            value={poi.point}
                            name="point"
                            onChange={(e) => {
                              let updatePoints = [];
                              postThree?.points.map((p) => {
                                if (p._id === poi?._id) {
                                  updatePoints.push({
                                    ...p,
                                    [e.target.name]: e.target.value,
                                  });
                                } else {
                                  updatePoints.push(p);
                                }
                              });
                              setPostThree({
                                ...postThree,
                                points: updatePoints,
                              });
                            }}
                          ></textarea>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 px-md-5 px-4">
                  <img src={fileThree} className="img-fluid" />
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFileThree(URL.createObjectURL(e?.target?.files[0]));
                        toBase64(e?.target?.files[0]).then((res) => {
                          setPostThree({
                            ...postThree,
                            img: res,
                          });
                        });
                      }
                    }}
                    type="file"
                    className="form-control py-0 mt-3"
                    accept=".png, .jpg, .jpeg"
                    max-size="2000"
                  />
                </div>
              </div>
              <div className="hr mt-5 mb-2"></div>
            </>
          )}
          {postFour && (
            <>
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Heading"
                    name="heading"
                    value={postFour?.heading}
                    onChange={(e) =>
                      setPostFour({
                        ...postFour,
                        heading: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row pt-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  {postFour.points && postFour.points.length > 0 && (
                    <>
                      {postFour?.points?.map((poi, index) => (
                        <div key={poi._id}>
                          <textarea
                            className="form-control mt-3"
                            rows="3"
                            placeholder={`Point-${index + 1}`}
                            value={poi.point}
                            name="point"
                            onChange={(e) => {
                              let updatePoints = [];
                              postFour?.points.map((p) => {
                                if (p._id === poi?._id) {
                                  updatePoints.push({
                                    ...p,
                                    [e.target.name]: e.target.value,
                                  });
                                } else {
                                  updatePoints.push(p);
                                }
                              });
                              setPostFour({
                                ...postFour,
                                points: updatePoints,
                              });
                            }}
                          ></textarea>
                        </div>
                      ))}
                    </>
                  )}
                </div>
                <div className="col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 px-md-5 px-4">
                  <img src={fileFour} className="img-fluid" />
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setFileFour(URL.createObjectURL(e?.target?.files[0]));
                        toBase64(e?.target?.files[0]).then((res) => {
                          setPostFour({
                            ...postFour,
                            img: res,
                          });
                        });
                      }
                    }}
                    type="file"
                    className="form-control py-0 mt-3"
                    accept=".png, .jpg, .jpeg"
                    max-size="2000"
                  />
                </div>
              </div>
              <div className="hr mt-5 mb-2"></div>
            </>
          )}
          <button onClick={updateData} className="btn btn-primary my-5 w-100">
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default AdminAbout;
