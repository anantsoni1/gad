import React from "react";
import SunEditor from "suneditor-react";
import Sidebar from "../Sidebar/Sidebar";
import "suneditor/dist/css/suneditor.min.css";

const AdminBlogs = () => {
  return (
    <div>
      <Sidebar />
      <div className="sidebar-left-margin my-5">
        <div className="container pt-5">
          <SunEditor
            name="Blogs"
            height="70vh"
            autoFocus={true}
            placeholder="Please type here..."
          />
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;