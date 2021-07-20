import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../header/index";
import purpleBg from "../../../assets/purple-bg.svg";
import { useDispatch, useSelector } from "react-redux";
import { GetAboutData, ModifyAboutData } from "../../../redux/actions/about";
import { imageUrl } from "../../../redux/api/index";

import "./style.css";

function AdminAbout() {
  const [posts, setPosts] = useState([]);
  const handleChange = (e, id, pointId) => {
    let updatePost = [];
    posts.forEach((post) => {
      if (post._id === id) {
        updatePost.push({
          ...post,
          [e.target.name]: e.target.value,
        });
      } else {
        updatePost.push(post);
      }
    });
    setPosts(updatePost);
  };
  console.log(posts);
  const aboutData = useSelector((state) => state?.about?.getAboutData);
  const [id, setId] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAboutData())
      .then((res) => {
        setId(res.data[0].id);
        setPosts(res.data[0].posts);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  function updateData() {
    dispatch(ModifyAboutData(id, posts))
      .then(() => {
        dispatch(GetAboutData())
          .then((res) => {
            console.log(res);
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
          {posts && posts.length > 0 && (
            <>
              {posts.map((post) => (
                <>
                  <div
                    className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5"
                    key={post?._id}
                  >
                    <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter Heading"
                        name="heading"
                        value={post?.heading}
                        onChange={(e) => handleChange(e, post?._id)}
                      />
                    </div>
                  </div>
                  <div className="row pt-1 px-lg-4 px-md-5">
                    <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                      {post?.points && post?.points?.length > 0 && (
                        <>
                          {post?.points?.map((point, index) => (
                            <div key={point._id}>
                              <textarea
                                className="form-control mt-3"
                                rows="3"
                                placeholder={`Point-${index + 1}`}
                                value={point.point}
                                onChange={(e) =>
                                  handleChange(e, post?._id, point?._id)
                                }
                              ></textarea>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 px-md-5 px-4">
                      <img
                        src={`${imageUrl}${post.img}`}
                        className="img-fluid"
                      />
                      <input
                        type="file"
                        className="form-control py-0 mt-3"
                        accept=".png, .jpg, .jpeg"
                        max-size="2000"
                      />
                    </div>
                  </div>
                  <div className="hr mt-5 mb-2"></div>
                </>
              ))}
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
