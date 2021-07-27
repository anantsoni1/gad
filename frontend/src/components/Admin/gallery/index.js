import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  GetGalleryData,
  DeleteGalleryData,
  AddGalleryData,
  ModifyGalleryData,
} from "../../../redux/actions/gallery";
import { imageUrl } from "../../../redux/api/index";
import { Modal } from "react-bootstrap";

function Gallery() {
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [file, setFile] = useState("");
  const [fileEdit, setFileEdit] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    caption: "",
    img: "",
  });
  const [id, setId] = useState("");
  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    caption: "",
    img: "",
  });
  const galleryData = useSelector((state) => state?.gallery?.getGalleryData);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = (e, id, name, caption, img) => {
    setId(id);
    setFileEdit(`${imageUrl}${img}`);
    setFormDataEdit({
      ...formDataEdit,
      name,
      caption,
      img,
    });
    setShowEdit(true);
  };
  useEffect(() => {
    dispatch(GetGalleryData())
      .then((res) => {})
      .catch(() => {});
  }, []);
  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(DeleteGalleryData(id));
    dispatch(GetGalleryData()).then((res) => {});
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleEditChange = (e) => {
    e.preventDefault();
    setFormDataEdit({
      ...formDataEdit,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddGalleryData(formData));
    dispatch(GetGalleryData()).then((res) => {});
    setShow(false);
  };
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(ModifyGalleryData(id, formDataEdit));
    dispatch(GetGalleryData()).then((res) => {});
    setShow(false);
  };
  return (
    <>
      <Sidebar />
      <div className="my-5">
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Add Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="mb-5" onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData.name}
                className="form-control mt-4"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                value={formData.caption}
                className="form-control mt-4"
                placeholder="Enter caption"
                name="caption"
                onChange={handleChange}
              />
              <img className="img-fluid mt-4" src={file} />
              <input
                type="file"
                className="form-control mt-4"
                required
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFile(URL.createObjectURL(e?.target?.files[0]));
                    toBase64(e?.target?.files[0]).then((res) => {
                      setFormData({
                        ...formData,
                        img: res,
                      });
                    });
                  }
                }}
              />
              <button className="btn btn-primary mt-4" type="submit">
                Add Image
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      <div className="my-5">
        <Modal show={showEdit} onHide={handleCloseEdit} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="mb-5" onSubmit={handleSubmitEdit}>
              <input
                type="text"
                value={formDataEdit.name}
                className="form-control mt-4"
                placeholder="Enter name"
                name="name"
                onChange={handleEditChange}
              />
              <input
                type="text"
                value={formDataEdit.caption}
                className="form-control mt-4"
                placeholder="Enter caption"
                name="caption"
                onChange={handleEditChange}
              />
              <img className="img-fluid mt-4" src={fileEdit} />
              <input
                type="file"
                className="form-control mt-4"
                onChange={(e) => {
                  if (e.target.files[0]) {
                    setFileEdit(URL.createObjectURL(e?.target?.files[0]));
                    toBase64(e?.target?.files[0]).then((res) => {
                      setFormDataEdit({
                        ...formDataEdit,
                        img: res,
                      });
                    });
                  }
                }}
              />
              <button className="btn btn-primary mt-4" type="submit">
                Edit Image
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
      {galleryData && galleryData?.data?.length > 0 && (
        <div className="sidebar-left-margin my-5">
          <div className="container">
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" onClick={handleShow}>
                Add
              </button>
            </div>
            <div className="row">
              {galleryData?.data?.map((val) => (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-12 mt-4">
                    <div className="card">
                      <img
                        className="card-img-top img-fluid"
                        src={`${imageUrl}${val.img}`}
                        alt=""
                      />
                      <div className="card-body">
                        <h4 className="card-title">{val?.name}</h4>
                        <p>{val?.caption}</p>
                        <p className="card-text mt-4">
                          <button
                            className="btn btn-primary"
                            onClick={(e) =>
                              handleShowEdit(e, val._id, val.name, val.caption, val.img)
                            }
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            style={{ marginLeft: "10px" }}
                            onClick={(e) => handleDelete(e, val._id)}
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
