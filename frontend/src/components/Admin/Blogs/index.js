import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Sidebar from "../Sidebar/Sidebar";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory ,useLocation } from "react-router-dom";
import { Link, Router } from "react-router-dom";
import "./blogs.css";
import { getBlogs } from "../../../redux/actions/blogs";

function BlogsTable(props) {
    const dispatch = useDispatch();
    const blogs = useSelector(state => {return state?.blogs?.getBlogsData?.data});
    useEffect(() => {
        dispatch(getBlogs());
    }, [])
    console.log(blogs);
    // const handleShow = () => setShowModal(true);
    // const handleClose = () => setShowModal(false);
    const history = useHistory();
    return (
        <div>
          <Sidebar />
          <div class="d-flex justify-content-between align-items-center blogs-heading">
          <h3>Blogs</h3>
          <button class="btn btn-primary" onClick={()=>{
            history.push('/admin/blogs/addNew');
          }}>
            Add Blog
          </button>
        </div>
            <Table className="table styled-table" striped borderless hover responsive>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Author</th>
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                    { blogs && blogs.length>0? (
                        blogs.map(b=>{
                            return (
                                <tr>
                                    <td></td>
                                    <td>{b.title}</td>
                                    <td>{b.author}</td>
                                    <td >
                                        <Link to={'/admin/blogs/edit?id=' + b._id}>
                                            <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-3" style={{ border: "none" }}>Edit</button>
                                        </Link>
                                        <Link >
                                            <button className="text-white btn-danger font-demi rounded w-40 mr-1 ml-5" style={{ border: "none" }}>Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    ) : ''}
                  {/* <tr>
                    <td></td>
                    <td>Blog 1</td>
                    <td >
                        <Link to={'/admin/blogs'}>
                            <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                        </Link>
                    </td>
                  </tr> */}
                    {/* {users ? (
                        users.map(u => {
                            return (
                                <tr>
                                    <td></td>
                                    <td>{u.fullName}</td>
                                    <td>{u.email}</td>
                                    <td>+{u.phone}</td>
                                    <td>{u.role}</td>
                                    {u.rejected ? (
                                        <td class="text-red">Rejected</td>
                                    ) : (
                                        u.isIdApproved ? (
                                            <td class="text-green">Approved</td>
                                        ) : (
                                            <td class="text-yellow">Pending</td>
                                        )
                                    )}
                                    <td >
                                        <Link to={'/admin/users/'+u._id}>
                                            <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        ''
                    )} */}
                </tbody>
            </Table>
        </div>
    );
}

export default BlogsTable;
