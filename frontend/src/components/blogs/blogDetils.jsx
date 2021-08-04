import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../redux/api/index";
import { getBlogs } from "../../redux/actions/blogs";
import Header from "../header/index";
import Group8921 from "../../assets/Group8921.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./style.css";

const Addmission = () => {
    const history = useHistory();
    const location = useLocation();
    const id = new URLSearchParams(location.search).get("id");
    console.log(id);
    const blogs = useSelector(state => {return state?.blogs?.getBlogsData?.data});
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs())
    }, []);
  return (
    <>
          <h1 id="covid" className=" text-center center">
            <div>
              <div className="text-white main-heading">BLOG DETAILS</div>
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
                  View All Blogs
                </div>
              </div>
            </div>
          </h1>
          <div>

          </div>
    </>
  );
};

export default Addmission;
