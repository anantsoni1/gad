import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { fileUrl } from "../../../redux/api/index";
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
import Header from "../../header/index";
import background from "../../../assets/Group8921.svg";
import "./style.css";

function AdminParents() {
  const schoolPolicyData = useSelector(
    (state) => state.parent?.getSchoolPolicyData
  );
  const schoolNewslaterData = useSelector(
    (state) => state.parent?.getSchoolNewslaterData
  );
  const calender = useSelector((state) => state.parent?.getCalender);
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

  const [showModal3, setShowModal3] = useState(false);
  const [editShowModal3, seteditShowModal3] = useState(false);
  const [calenderData, setcalenderData] = useState({
    title: "",
    uploadedFile: null,
  });
  const [editcalenderData, seteditcalenderData] = useState({
    title: "",
    id: "",
    url: "",
    uploadedFile: null,
  });
  const handleShow3 = () => setShowModal3(true);
  const handleClose3 = () => {
    setShowModal3(false);
    setcalenderData({
      title: "",
      uploadedFile: null,
    });
  };
  const editHandleShow3 = () => seteditShowModal3(true);
  const editHandleClose3 = () => {
    seteditShowModal3(false);
    seteditcalenderData({
      title: "",
      url: "",
      id: "",
      uploadedFile: null,
    });
  };
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
  const EditCalender = (title, URL, _id) => {
    seteditcalenderData({
      title: title,
      url: URL,
      id: _id,
      uploadedFile: null,
    });
    editHandleShow3();
  };

  const EditSchoolPolicy = (title, URL, _id) => {
    seteditSchoolPolicyFormData({
      title: title,
      url: URL,
      id: _id,
      uploadedFile: null,
    });
    editHandleShow();
  };
  const EditNewsLater = (title, URL, _id) => {
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
        swal({
          title: "Data Deleted",
          icon: "success",
          type: "success",
          timer: 2000,
        });
        dispatch(GetCalender())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateSchoolPolicy(e) {
    e.preventDefault();
    const id = editSchoolPolicyformData.id;
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
    const id = editcalenderData.id;
    if (id !== "") {
      const data = new FormData();
      const data2 = {
        title: editcalenderData.title,
        url: editcalenderData.url,
      };
      data.append("title", editcalenderData.title);
      data.append("uploadedFile", editcalenderData.uploadedFile);
      if (editcalenderData.uploadedFile === null) {
        dispatch(ModifyCalender(id, data2))
          .then((response) => {
            editHandleClose3();
            dispatch(GetCalender())
              .then((res) => {})
              .catch(() => {});
          })
          .catch(() => {});
      } else {
        dispatch(ModifyCalender(id, data))
          .then((response) => {
            editHandleClose3();
            dispatch(GetCalender())
              .then((res) => {})
              .catch(() => {});
          })
          .catch(() => {});
      }
    }
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
  function addCalender(e) {
    e.preventDefault();
    if (calenderData.uploadedFile === null) {
      swal({
        text: "Upload a file!",
        icon: "info",
      });
    } else {
      const data = new FormData();
      data.append("title", calenderData.title);
      data.append("uploadedFile", calenderData.uploadedFile);
      dispatch(AddCalender(data))
        .then((response) => {
          if (response.calendar) {
            swal({
              text: "Data Added Succesfully!",
              icon: "success",
              type: "success",
              timer: 2000,
            });
            handleClose3();
            dispatch(GetCalender())
              .then((res) => {})
              .catch(() => {});
          }
        })
        .catch(() => {});
    }
  }
  return (
    <div className="customContainer">
      <div className="pb-lg-5 pb-1">
        <Header img={background} heading="PARENTS" />
      </div>
      {editShowModal3 ? (
        <Modal
          className="mt-5 modal-card"
          show={editShowModal3}
          onHide={editHandleClose3}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Update Calender</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Title</label>
                <input
                  required
                  value={editcalenderData.title}
                  onChange={(e) => {
                    seteditcalenderData({
                      ...editcalenderData,
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
                    seteditcalenderData({
                      ...editcalenderData,
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
                  onClick={updateCalender}
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
      {showModal3 ? (
        <Modal
          className="mt-5 modal-card"
          show={showModal3}
          onHide={handleClose3}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <div className="font-bold ml-1">Add Calender</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group mt-4">
                <label className="font-20 py-2">Title</label>
                <input
                  required
                  value={calenderData.title}
                  onChange={(e) => {
                    setcalenderData({
                      ...calenderData,
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
                    setcalenderData({
                      ...calenderData,
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
                  onClick={addCalender}
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
              <p className="h5">Add calender</p>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="user-table">
              <div class="d-flex justify-content-end align-items-center">
                <button class="btn btn-primary px-4" onClick={handleShow3}>
                  Add calender
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
                    {calender?.data?.calendars &&
                    calender?.data?.calendars.length > 0
                      ? calender?.data?.calendars.map((item, index) => {
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
                                    EditCalender(
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
                                    deleteCalender(item._id);
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
      </div>
    </div>
  );
}

export default AdminParents;
