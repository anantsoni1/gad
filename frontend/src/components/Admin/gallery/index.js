import React from "react";
import Sidebar from "../Sidebar/Sidebar";

function Gallery() {
  return (
    <>
      <Sidebar />
      {true && (
        <div className="sidebar-left-margin my-5">
          <div className="container"></div>
        </div>
      )}
    </>
  );
}

export default Gallery;
