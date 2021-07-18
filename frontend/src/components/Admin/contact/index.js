import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetContactData,
  ModifyContactData,
} from "../../../redux/actions/contact";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../../header/index";
import purpleBg from "../../../assets/purple-bg.svg";
import "./style.css";

function AdminContact() {
  const contactData = useSelector((state) => state.contact?.getContactData);
  const [id, setId] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetContactData())
      .then((res) => {
        setId(res?.data[0]?._id);
        setFormData({
          email: res?.data[0]?.email,
          phone: res?.data[0]?.phone,
          address: res?.data[0]?.address,
        });
      })
      .catch(() => {});
  }, []);
  function UpdateData(e) {
    e.preventDefault();
    dispatch(ModifyContactData(id, formData)).then(() => {
      dispatch(GetContactData())
        .then((res) => {
          setFormData(res?.data[0]);
        })
        .catch(() => {});
    });
  }
  return (
    <>
      {contactData ? (
        <div className="customContainer">
          {console.log(formData)}
          <Sidebar />
          <Header img={purpleBg} heading="CONTACT" />
          <div className="container">
            <p className="h2 my-2">Contact Details</p>
            <form>
              <div className="form-group col-md-6 py-2">
                <label className="py-2">Email</label>
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    });
                  }}
                  value={formData?.email}
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6 py-2">
                <label className="py-2">Phone</label>
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    });
                  }}
                  value={formData?.phone}
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group col-md-6 py-2">
                <label className="pUpdateDatay-2">Address</label>
                <input
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      address: e.target.value,
                    });
                  }}
                  value={formData?.address}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <button
                onClick={UpdateData}
                type="submit"
                className="btn btn-primary my-3"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminContact;
