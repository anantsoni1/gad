import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";

function AdminAbout() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    address: "",
  });
  return (
    <div>
      <Sidebar />
      <div className="container">
        <p className="h2">Contact Details</p>
        <form>
          <div class="form-group col-md-6 py-2">
            <label class="py-2">Email</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  email: e.target.value,
                });
              }}
              value={formData.email}
              type="email"
              class="form-control"
              placeholder="Email"
            />
          </div>
          <div class="form-group col-md-6 py-2">
            <label class="py-2">Phone</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  phone: e.target.value,
                });
              }}
              value={formData.phone}
              type="text"
              class="form-control"
              placeholder="Phone"
            />
          </div>
          <div class="form-group col-md-6 py-2">
            <label class="py-2">Address</label>
            <input
              onChange={(e) => {
                setFormData({
                  ...formData,
                  address: e.target.value,
                });
              }}
              value={formData.address}
              type="text"
              class="form-control"
              placeholder="Address"
            />
          </div>
          <button type="submit" class="btn btn-primary my-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminAbout;
