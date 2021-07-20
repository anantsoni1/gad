import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCovidData, ModifyCovidData } from "../../../redux/actions/covid";
import Sidebar from "../Sidebar/Sidebar";
import "./style.css";

function AdminMedical() {
  const initialState = {
    id: "",
    paragraphOne: "",
    paragraphTwo: "",
    paragraphThree: "",
  };
  const [formData, setFormData] = useState(initialState);
  const covidData = useSelector((state) => state.covid?.getCovidData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCovidData())
      .then((res) => {
        const data = res.slots[0];
        return setFormData(() => ({
          ...formData,
          id: data?._id,
          paragraphOne: data?.paragraphOne,
          paragraphTwo: data?.paragraphTwo,
          paragraphThree: data?.paragraphThree,
        }));
      })
      .catch(() => {});
  }, []);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  function updateData() {
    dispatch(ModifyCovidData(formData.id, formData))
      .then(() => {
        dispatch(GetCovidData())
          .then((res) => {
            const data = res.slots[0];
            return setFormData(() => ({
              ...formData,
              id: data?._id,
              paragraphOne: data?.paragraphOne,
              paragraphTwo: data?.paragraphTwo,
              paragraphThree: data?.paragraphThree,
            }));
          })
          .catch(() => {});
      })
      .catch(() => {});
  }
  return (
    <>
      {covidData && (
        <div className="customContainer">
          <Sidebar />
          <div className="covid">
            <h1 id="covid" className=" text-center center">
              <div>
                <div className="text-white main-heading">COVID 19 UPDATES</div>
                <div className="text-center text-white mt-3 sub-heading px-3">
                  If you have any questions about COVID-19, please see the
                  following links:
                </div>
                <div className="text-center text-white mt-5 sub-heading carousel-flex">
                  <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                    QUICK LINKS: COVID-19 Resources
                  </div>
                  <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                    LINKS
                  </div>
                  <div className="text-white text-center px-lg-0 mt-md-0 mt-3 mx-3 text-underline pb-2">
                    COVID19 SAFETY
                  </div>
                </div>
              </div>
            </h1>
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12 my-5">
                  <div className="font-regular my-md-5 wrapper">
                    <textarea
                      className="mt-4"
                      rows="5"
                      name="paragraphOne"
                      value={formData.paragraphOne}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                    <textarea
                      className="mt-3"
                      rows="5"
                      name="paragraphTwo"
                      value={formData.paragraphTwo}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                    <textarea
                      className="mt-3"
                      rows="7"
                      name="paragraphThree"
                      value={formData.paragraphThree}
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn text-white text-center btn-covid-purple mt-3">
                      Updated COVID-19 Health and Safety Plan 2021
                    </button>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className="btn text-white text-center btn-covid-blue my-3">
                      Fraser Health Back to School Plan-Winter 2021
                    </button>
                  </div>
                </div>
              </div>
              <button onClick={updateData} className="btn btn-primary w-100">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdminMedical;
