import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { fileUrl } from "../../../redux/api/index";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  DeleteSchoolPolicy,
  DeleteSchoolNewslater,
  DeleteCalender,
  AddSchoolPolicy,
  AddSchoolNewslater,
  AddCalender,
  GetSchoolPolicy,
  GetSchoolNewslater,
  GetCalender,
  ModifySchoolPolicy,
  ModifySchoolNewslater,
  ModifyCalender,
} from "../../../redux/actions/parents";
import swal from "sweetalert";
import { Modal } from "react-bootstrap";
import "./style.css";

function AdminParents() {
  const schoolPolicyData = useSelector(
    (state) => state.parent?.getSchoolPolicyData
  );
  console.log(schoolPolicyData?.data, "test");
  const schoolNewslaterData = useSelector(
    (state) => state.parent?.getSchoolNewslaterData
  );
  console.log(schoolNewslaterData);
  // const calender = useSelector((state) => state.parent?.getCalender);
  // console.log(calender);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editShowModal, seteditShowModal] = useState(false);
  const [schoolPolicyformData, setschoolPolicyFormData] = useState({
    title: "",
    uploadedFile: null,
  });
  const [editSchoolPolicyformData, seteditSchoolPolicyFormData] = useState({
    title: "",
    id: "",
    url: "",
    uploadedFile: null,
  });
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setschoolPolicyFormData({
      title: "",
      uploadedFile: null,
    });
  };
  const editHandleShow = () => seteditShowModal(true);
  const editHandleClose = () => {
    seteditShowModal(false);
    seteditSchoolPolicyFormData({
      title: "",
      url: "",
      id: "",
      uploadedFile: null,
    });
  };
  const [showModal2, setShowModal2] = useState(false);
  const [editShowModal2, seteditShowModal2] = useState(false);
  const [schoolNewslaterformData, setschoolNewslaterFormData] = useState({
    title: "",
    uploadedFile: null,
  });
  const [editSchoolNewslaterformData, seteditSchoolNewslaterFormData] =
    useState({
      title: "",
      id: "",
      url: "",
      uploadedFile: null,
    });
  const handleShow2 = () => setShowModal2(true);
  const handleClose2 = () => {
    setShowModal2(false);
    setschoolNewslaterFormData({
      title: "",
      uploadedFile: null,
    });
  };
  const editHandleShow2 = () => seteditShowModal2(true);
  const editHandleClose2 = () => {
    seteditShowModal2(false);
    seteditSchoolNewslaterFormData({
      title: "",
      url: "",
      id: "",
      uploadedFile: null,
    });
  };

  const [calenderformData, setcalenderFormData] = useState({});
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(GetSchoolPolicy())
      .then((res) => {})
      .catch(() => {});
    dispatch(GetSchoolNewslater())
      .then((res) => {})
      .catch(() => {});
    dispatch(GetCalender())
      .then((res) => {})
      .catch(() => {});
  }, []);
  const EditSchoolPolicy = (title, URL, _id) => {
    console.log(title, URL, _id, "sonal");
    seteditSchoolPolicyFormData({
      title: title,
      url: URL,
      id: _id,
      uploadedFile: null,
    });
    editHandleShow();
  };
  const EditNewsLater = (title, URL, _id) => {
    console.log(title, URL, _id, "sonal");
    seteditSchoolNewslaterFormData({
      title: title,
      url: URL,
      id: _id,
      uploadedFile: null,
    });
    editHandleShow2();
  };

  function deleteSchoolPolicy(id) {
    dispatch(DeleteSchoolPolicy(id))
      .then((response) => {
        swal({
          title: "Data Deleted",
          icon: "success",
          type: "success",
          timer: 2000,
        });
        dispatch(GetSchoolPolicy())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function deleteSchoolNewslater(id) {
    dispatch(DeleteSchoolNewslater(id))
      .then((response) => {
        swal({
          title: "Data Deleted",
          icon: "success",
          type: "success",
          timer: 2000,
        });
        dispatch(GetSchoolNewslater())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function deleteCalender(id) {
    dispatch(DeleteCalender(id))
      .then((response) => {
        dispatch(GetCalender())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateSchoolPolicy(e) {
    e.preventDefault();
    const id = editSchoolPolicyformData.id;
    console.log(id);
    if (id !== "") {
      const data = new FormData();
      const data2 = {
        title: editSchoolPolicyformData.title,
        url: editSchoolPolicyformData.url,
      };
      data.append("title", editSchoolPolicyformData.title);
      data.append("uploadedFile", editSchoolPolicyformData.uploadedFile);
      if (editSchoolPolicyformData.uploadedFile === null) {
        dispatch(ModifySchoolPolicy(id, data2))
          .then((response) => {
            editHandleClose();
            dispatch(GetSchoolPolicy())
              .then((res) => {})
              .catch(() => {});
          })
          .catch(() => {});
      } else {
        dispatch(ModifySchoolPolicy(id, data))
          .then((response) => {
            editHandleClose();
            dispatch(GetSchoolPolicy())
              .then((res) => {})
              .catch(() => {});
          })
          .catch(() => {});
      }
    }
  }
  function updateSchoolNewslater(e) {
    e.preventDefault();
    const id = editSchoolNewslaterformData.id;
    console.log(id);
    if (id !== "") {
      const data = new FormData();
      const data2 = {
        title: editSchoolNewslaterformData.title,
        url: editSchoolNewslaterformData.url,
      };
      data.append("title", editSchoolNewslaterformData.title);
      data.append("uploadedFile", editSchoolNewslaterformData.uploadedFile);
      if (editSchoolNewslaterformData.uploadedFile === null) {
        dispatch(ModifySchoolNewslater(id, data2))
          .then((response) => {
            editHandleClose2();
            dispatch(GetSchoolNewslater())
              .then((res) => {})
              .catch(() => {});
          })
          .catch(() => {});
      } else {
        dispatch(ModifySchoolNewslater(id, data))
          .then((response) => {
            editHandleClose2();
            dispatch(GetSchoolNewslater())
              .then((res) => {})
              .catch(() => {});
          })
          .catch(() => {});
      }
    }
  }
  function updateCalender(e) {
    e.preventDefault();
    dispatch(ModifyCalender(e))
      .then((response) => {
        dispatch(GetCalender())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function addSchoolPolicy(e) {
    e.preventDefault();
    if (schoolPolicyformData.uploadedFile === null) {
      swal({
        text: "Upload a file!",
        icon: "info",
      });
    } else {
      const data = new FormData();
      data.append("title", schoolPolicyformData.title);
      data.append("uploadedFile", schoolPolicyformData.uploadedFile);
      dispatch(AddSchoolPolicy(data))
        .then((response) => {
          if (response.schoolPolicy) {
            swal({
              text: "Data Added Succesfully!",
              icon: "success",
              type: "success",
              timer: 2000,
            });
            handleClose();
            dispatch(GetSchoolPolicy())
              .then((res) => {})
              .catch(() => {});
          }
        })
        .catch(() => {});
    }
  }
  function addSchoolNewslater(e) {
    e.preventDefault();
    if (schoolNewslaterformData.uploadedFile === null) {
      swal({
        text: "Upload a file!",
        icon: "info",
      });
    } else {
      const data = new FormData();
      data.append("title", schoolNewslaterformData.title);
      data.append("uploadedFile", schoolNewslaterformData.uploadedFile);
      dispatch(AddSchoolNewslater(data))
        .then((response) => {
          if (response.schoolNewsletter) {
            swal({
              text: "Data Added Succesfully!",
              icon: "success",
              type: "success",
              timer: 2000,
            });
            handleClose2();
            dispatch(GetSchoolNewslater())
              .then((res) => {})
              .catch(() => {});
          }
        })
        .catch(() => {});
    }
  }
  function addCalender(data) {
    dispatch(AddCalender(data))
      .then((response) => {
        dispatch(GetCalender())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <div className="customContainer">
      {editShowModal ? (
        <Modal
          className="mt-5 modal-card"
          show={editShowModal}
          onHide={editHandleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Update School Policy</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Title</label>
                <input
                  required
                  value={editSchoolPolicyformData.title}
                  onChange={(e) => {
                    seteditSchoolPolicyFormData({
                      ...editSchoolPolicyformData,
                      title: e.target.value,
                    });
                  }}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label className="font-20 py-2">Upload File</label>
                <input
                  onChange={(e) => {
                    seteditSchoolPolicyFormData({
                      ...editSchoolPolicyformData,
                      uploadedFile: e.target.files[0],
                    });
                  }}
                  type="file"
                  class="hidden"
                  id="uploading"
                  placeholder="Instructor Image"
                  required
                />
              </div>
              <div className="text-center mt-5">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={updateSchoolPolicy}
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      {showModal ? (
        <Modal
          className="mt-5 modal-card"
          show={showModal}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add School Policy</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Title</label>
                <input
                  required
                  value={schoolPolicyformData.title}
                  onChange={(e) => {
                    setschoolPolicyFormData({
                      ...schoolPolicyformData,
                      title: e.target.value,
                    });
                  }}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label className="font-20 py-2">Upload File</label>
                <input
                  onChange={(e) => {
                    setschoolPolicyFormData({
                      ...schoolPolicyformData,
                      uploadedFile: e.target.files[0],
                    });
                  }}
                  type="file"
                  class="hidden"
                  id="uploading"
                  placeholder="Instructor Image"
                  required
                />
              </div>
              <div className="text-center mt-5">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={addSchoolPolicy}
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      {editShowModal2 ? (
        <Modal
          className="mt-5 modal-card"
          show={editShowModal2}
          onHide={editHandleClose2}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Update School Newslater</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Title</label>
                <input
                  required
                  value={editSchoolNewslaterformData.title}
                  onChange={(e) => {
                    seteditSchoolNewslaterFormData({
                      ...editSchoolNewslaterformData,
                      title: e.target.value,
                    });
                  }}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label className="font-20 py-2">Upload File</label>
                <input
                  onChange={(e) => {
                    seteditSchoolNewslaterFormData({
                      ...editSchoolNewslaterformData,
                      uploadedFile: e.target.files[0],
                    });
                  }}
                  type="file"
                  class="hidden"
                  id="uploading"
                  placeholder="Instructor Image"
                  required
                />
              </div>
              <div className="text-center mt-5">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={updateSchoolNewslater}
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      {showModal2 ? (
        <Modal
          className="mt-5 modal-card"
          show={showModal2}
          onHide={handleClose2}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add School Newslater</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Title</label>
                <input
                  required
                  value={schoolNewslaterformData.title}
                  onChange={(e) => {
                    setschoolNewslaterFormData({
                      ...schoolNewslaterformData,
                      title: e.target.value,
                    });
                  }}
                  name="title"
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label className="font-20 py-2">Upload File</label>
                <input
                  onChange={(e) => {
                    setschoolNewslaterFormData({
                      ...schoolNewslaterformData,
                      uploadedFile: e.target.files[0],
                    });
                  }}
                  type="file"
                  class="hidden"
                  id="uploading"
                  placeholder="Instructor Image"
                  required
                />
              </div>
              <div className="text-center mt-5">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={addSchoolNewslater}
                >
                  Submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
      <Sidebar />
      <div className="container">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="d-flex flex-lg-row flex-column align-items-center ">
              <p className="h5">Add School Policy</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="user-table">
              <div class="d-flex justify-content-end align-items-center">
                <button class="btn btn-primary px-4" onClick={handleShow}>
                  Add Policy
                </button>
              </div>
              <div class="row mb-5 mt-3 table-responsive">
                <table class="table table-striped font-bold">
                  <thead>
                    <tr className="font-16  align-middle">
                      <th scope="col">S.No</th>
                      <th scope="col">title</th>
                      <th scope="col">URL</th>
                      <th scope="col">Action</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schoolPolicyData?.data && schoolPolicyData?.data.length > 0
                      ? schoolPolicyData?.data.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.title}</td>
                              <td>
                                <a
                                  className="btn btn-success"
                                  href={fileUrl + item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View
                                </a>
                              </td>
                              <td>
                                <button
                                  onClick={() => {
                                    EditSchoolPolicy(
                                      item.title,
                                      item.url,
                                      item._id
                                    );
                                  }}
                                  className="btn btn-primary btn-sm"
                                >
                                  Edit
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => {
                                    deleteSchoolPolicy(item._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <div className="d-flex flex-lg-row flex-column align-items-center ">
              <p className="h5">Add School Newslater</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="user-table">
              <div class="d-flex justify-content-end align-items-center">
                <button class="btn btn-primary px-4" onClick={handleShow2}>
                  Add Newslater
                </button>
              </div>
              <div class="row mb-5 mt-3 table-responsive">
                <table class="table table-striped font-bold">
                  <thead>
                    <tr className="font-16  align-middle">
                      <th scope="col">S.No</th>
                      <th scope="col">title</th>
                      <th scope="col">URL</th>
                      <th scope="col">Action</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schoolNewslaterData?.data &&
                    schoolNewslaterData?.data.length > 0
                      ? schoolNewslaterData?.data.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{item.title}</td>
                              <td>
                                <a
                                  className="btn btn-success"
                                  href={fileUrl + item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View
                                </a>
                              </td>
                              <td>
                                <button
                                  onClick={() => {
                                    EditNewsLater(
                                      item.title,
                                      item.url,
                                      item._id
                                    );
                                  }}
                                  className="btn btn-primary btn-sm"
                                >
                                  Edit
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => {
                                    deleteSchoolNewslater(item._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="d-flex flex-lg-row flex-column align-items-center ">
              <p className="h5">Add Calender</p>
              <button className="px-5 mx-4 my-2 btn btn-primary">Add +</button>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <></>
    </div>
  );
}

export default AdminParents;
