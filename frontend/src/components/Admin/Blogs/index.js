import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Sidebar from "../Sidebar/Sidebar";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { Link, Router } from "react-router-dom";
import "./blogs.css";
// import { getUsers } from "../../../../redux/actions/admin";

function BlogsTable(props) {
    // const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUsers());
    // }, [])
    // const users = useSelector(state => state.admin?.adminData?.users);
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
                        <th >Action</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Blog 1</td>
                    <td >
                        <Link to={'/admin/blogs'}>
                            <button className="text-white bg-secondaryColor font-demi rounded w-40 mr-1" style={{ border: "none" }}>View Details</button>
                        </Link>
                    </td>
                  </tr>
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
