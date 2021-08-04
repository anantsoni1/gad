import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../redux/api/index";
import { getBlogs } from "../../redux/actions/blogs";
import Header from "../header/index";
import Group8921 from "../../assets/Group8921.svg";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

const Addmission = () => {
    const history = useHistory();
    const blogs = useSelector(state => {return state?.blogs?.getBlogsData?.data});
    console.log(blogs, "s");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs())
    }, []);
  return (
    <>
      {blogs && blogs?.length > 0 ? (
        <div className="addmission">
            <div className="pb-lg-5 pb-1">
                <Header img={Group8921} heading="BLOGS" />
            </div>
            <div className="mb-5 row col-lg-10 col-12 mx-auto">
            {blogs.map((b,i)=>{
                if ((i+1)%3 == 2) {
                    return (
                    <div className="col-lg-4 col-md-8 col-sm-10 col-10 my-4 px-3 mx-auto">
                    <div className="update-card update-red">
                        <div className="d-flex justify-content-between py-5 px-4">
                        <div>
                            <div className="dates date-red">{(new Date(b.date)).getDate()}</div>
                            <div className="month text-center mt-2">{(new Date(b.date)).toLocaleString('default', { month: 'short' })}</div>
                        </div>
                        <div style={{ paddingLeft: "1.5rem" }}>
                            <div className="update-head">{b.title}</div>
                            <p className="text-muted">
                            {b.shortDescription.substr(0,36)}...
                            </p>
                            <div className="color-red mt-3"
                            style={{"cursor": "pointer"}} 
                            onClick={()=>{
                                history.push(`/blog-details?id=${b._id}`)
                            }}>
                            read more&nbsp;&nbsp;&nbsp;{" "}
                            <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                }
                if ((i+1)%3 == 1) {
                    return (
                    <div className="col-lg-4 col-md-8 col-sm-10 col-10 my-4 px-3 mx-auto">
                    <div className="update-card update-purple">
                        <div className="d-flex justify-content-between py-5 px-4">
                        <div>
                        <div className="dates date-purple">{(new Date(b.date)).getDate()}</div>
                            <div className="month text-center mt-2">{(new Date(b.date)).toLocaleString('default', { month: 'short' })}</div>
                        </div>
                        <div style={{ paddingLeft: "1.5rem" }}>
                        <div className="update-head">{b.title}</div>
                            <p className="text-muted">
                            {b.shortDescription.substr(0,36)}...
                            </p>
                            <div className="color-purple mt-3"
                                style={{"cursor": "pointer"}}
                                onClick={()=>{
                                    history.push(`/blog-details?id=${b._id}`)
                                }}>
                            read more&nbsp;&nbsp;&nbsp;{" "}
                            <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                }
                if ((i+1)%3 == 0) {
                    return (
                    <div className="col-lg-4 col-md-8 col-sm-10 col-10 my-4 px-3 mx-auto mb-5">
                    <div className="update-card update-green">
                        <div className="d-flex justify-content-between py-5 px-4">
                        <div>
                        <div className="dates date-green">{(new Date(b.date)).getDate()}</div>
                            <div className="month text-center mt-2">{(new Date(b.date)).toLocaleString('default', { month: 'short' })}</div>
                        </div>
                        <div style={{ paddingLeft: "1.5rem" }}>
                        <div className="update-head">{b.title}</div>
                            <p className="text-muted">
                            {b.shortDescription.substr(0,36)}...
                            </p>
                            <div className="color-green mt-3"
                            style={{"cursor": "pointer"}}
                            onClick={()=>{
                                history.push(`/blog-details?id=${b._id}`)
                            }}>
                            read more&nbsp;&nbsp;&nbsp;{" "}
                            <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    )}
                })
            } 
            </div>    
        </div>
        ) : '' 
      }
    </>
  );
};

export default Addmission;
