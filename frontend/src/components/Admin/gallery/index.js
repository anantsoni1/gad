import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { GetGalleryData } from "../../../redux/actions/gallery";
import { imageUrl } from "../../../redux/api/index";

function Gallery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetGalleryData())
      .then((res) => {})
      .catch(() => {});
  }, []);
  const galleryData = useSelector((state) => state?.gallery?.getGalleryData);
  console.log(galleryData);
  return (
    <>
      <Sidebar />

      {galleryData && galleryData?.data?.length > 0 && (
        <div className="sidebar-left-margin my-5">
          <div className="container">
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary">Add</button>
            </div>
            <div className="row">
              {galleryData?.data[0]?.images?.map((val) => (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                    <div className="card">
                      <img
                        className="card-img-top img-fluid"
                        src={`${imageUrl}${val.img}`}
                        alt=""
                      />
                      <div className="card-body">
                        <h4 className="card-title">{val.name}</h4>
                        <p className="card-text mt-4">
                          <button className="btn btn-primary">Edit</button>
                          <button
                            className="btn btn-danger"
                            style={{ marginLeft: "10px" }}
                          >
                            Delete
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
