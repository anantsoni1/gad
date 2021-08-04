import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../redux/api/index";
import { getBlogsById } from "../../redux/actions/blogs";
import Header from "../header/index";
import Group8921 from "../../assets/Group8921.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./style.css";

const Addmission = () => {
    const history = useHistory();
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");
    console.log(id);
    const blog = useSelector(state => {return state?.blogs?.getBlogById?.data});
    const date = new Date(blog?.date);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogsById(id))
    }, []);
  return (
    <>
          <h1 id="covid" className=" text-center center">
            <div>
              <div className="text-white main-heading">{blog?.title}</div>
              <div className="text-center text-white mt-5 sub-heading carousel-flex">
                {/* <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2"
                style={{"cursor": "pointer"}}>
                  QUICK LINKS: COVID-19 Resources
                </div> */}
                <div className="text-white text-center px-lg-0 mt-md-0 mx-3 pb-2">
                  By : <span style={{'fontWeight' : 'bold'}}>{blog?.author} </span>
                </div>
                <div className="text-white text-center px-lg-0 mt-md-0 mx-3 pb-2">
                  {date.getDate()} {date.toLocaleString('default', { month: 'short' })} {date.getFullYear()}
                </div>
              </div>
              <div className="text-center text-white mt-5 sub-heading carousel-flex">
                {/* <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2"
                style={{"cursor": "pointer"}}>
                  QUICK LINKS: COVID-19 Resources
                </div> */}
                <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2"
                  style={{"cursor": "pointer"}}
                 onClick={()=>{
                   history.push('/blogs')
                 }}>
                  View All Blogs and Articles
                </div>
              </div>
            </div>
          </h1>
          <div dangerouslySetInnerHTML={{__html:blog?.desc}} className="col-lg-10 col-md-10 col-sm-12 col-12 mx-auto mt-5">

          </div>
    </>
  );
};

export default Addmission;
