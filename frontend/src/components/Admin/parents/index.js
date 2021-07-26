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
  // const schoolNewslaterData = useSelector(
  //   (state) => state.parent?.getSchoolNewslaterData
  // );
  // console.log(schoolNewslaterData);
  // const calender = useSelector((state) => state.parent?.getCalender);
  // console.log(calender);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [schoolPolicyformData, setschoolPolicyFormData] = useState({
    title: "",
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
  const [schoolNewslaterformData, setschoolNewslaterFormData] = useState({});
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
  function updateSchoolPolicy(id, data) {
    dispatch(ModifySchoolPolicy(id, data))
      .then((response) => {
        dispatch(GetSchoolPolicy())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateSchoolNewslater(id, data) {
    dispatch(ModifySchoolNewslater(id, data))
      .then((response) => {
        dispatch(GetSchoolNewslater())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
  }
  function updateCalender(id, data) {
    dispatch(ModifyCalender(id, data))
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
  function addSchoolNewslater(data) {
    dispatch(AddSchoolNewslater(data))
      .then((response) => {
        dispatch(GetSchoolNewslater())
          .then((res) => {})
          .catch(() => {});
      })
      .catch(() => {});
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
      {console.log(schoolPolicyformData)}
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
                  name="fullName"
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
              <button
                onClick={handleShow}
                className="px-5 mx-4 my-2 btn btn-primary"
              >
                Add +
              </button>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div class="row mb-5 mt-3 user-table table-responsive">
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
                              <button className="btn btn-primary btn-sm">
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
              <button className="px-5 mx-4 my-2 btn btn-primary">Add +</button>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat
              lectus, varius pulvinar diam eros in elit. Pellentesque convallis
              laoreet laoreet.
            </Typography>
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
