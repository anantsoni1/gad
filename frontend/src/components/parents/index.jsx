import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileUrl } from "../../redux/api/index";
import {
  GetSchoolPolicy,
  GetSchoolNewslater,
  GetCalender,
} from "../../redux/actions/parents";
import Header from "../header/index";
import background from "../../assets/Group8921.svg";
import "./style.css";

function Parents() {
  const schoolPolicyData = useSelector(
    (state) => state.parent?.getSchoolPolicyData
  );
  const schoolNewslaterData = useSelector(
    (state) => state.parent?.getSchoolNewslaterData
  );
  const calender = useSelector((state) => state.parent?.getCalender);
  const dispatch = useDispatch();
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
  return (
    <>
      {console.log(schoolPolicyData, schoolNewslaterData, calender)}
      <div className="parents">
        <div className="pb-lg-5 pb-1">
          <Header img={background} heading="PARENTS" />
        </div>
        <div className="container">
          <div className="row pt-lg-5 pt-4">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <h1>School Policies</h1>
            </div>
          </div>
          {schoolPolicyData?.data && schoolPolicyData?.data.length > 0
            ? schoolPolicyData?.data.map((item, index) => {
                return (
                  <div key={item._id} className="row mt-5 mb-4">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                      <div className="text">
                        <p className="h3">{item.title}</p>
                        {/* <p>
                          To view the Parent – Student handbook, please click on
                          the button below:
                        </p> */}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-start justify-content-lg-end">
                      <a
                        href={fileUrl + item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="submit"
                          className="btn-contact text-white btn px-5"
                        >
                          View File
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="hr-parents mt-5 mb-2"></div>
        <div className="container pb-5">
          <div className="row pt-lg-5 pt-4">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <h1>2021-2022 CALENDAR</h1>
            </div>
          </div>
          {calender?.data?.calendars && calender?.data?.calendars.length > 0
            ? calender?.data?.calendars.map((item, index) => {
                return (
                  <div key={item._id} className="row mt-5 mb-4">
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                      <div className="text">
                        <p className="h3">{item.title}</p>
                        {/* <p>
                          To view the Parent – Student handbook, please click on
                          the button below:
                        </p> */}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-start justify-content-lg-end">
                      <a
                        href={fileUrl + item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          type="submit"
                          className="btn-contact text-white btn px-5"
                        >
                          View File
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })
            : ""}
          {/* <div className="row mt-5 mb-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade K.G.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 1</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 2</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 3</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 4</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 5</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 6</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 7</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-lg-6 col-md-8 col-sm-12 col-12">
              <div className="text">
                <p className="h3">Grade 8</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-sm-start justify-content-lg-end ">
              <button type="submit" className="btn-contact text-white btn px-5">
                Download
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Parents;

//  <div className="hr-parents mt-5 mb-2"></div>
//         <div className="container">
//           <div className="row pt-lg-5 pt-4">
//             <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
//               <h1>School Newsletters</h1>
//               <ul>
//                 <li className="h4 mt-5">June 2021 Newsletter</li>
//                 <li className="h4 mt-4">May 2021 Newsletter</li>
//                 <li className="h4 mt-4">April 2021 Newsletter</li>
//                 <li className="h4 mt-4">March 2021 Newsletter</li>
//                 <li className="h4 mt-4">February 2021 Newsletter</li>
//                 <li className="h4 mt-4">January 2021 Newsletter</li>
//                 <li className="h4 mt-4">December Newsletter</li>
//                 <li className="h4 mt-4">November Newsletter</li>
//               </ul>
//               {schoolNewslaterData?.data && schoolNewslaterData?.data.length > 0
//                 ? schoolNewslaterData?.data.map((item, index) => {
//                     return (
//                       <div key={item._id} className="row mt-5 mb-4">
//                         <div className="col-lg-6 col-md-8 col-sm-12 col-12">
//                           <div className="text">
//                             <p className="h3">{item.title}</p>
//                             {/* <p>
//                           To view the Parent – Student handbook, please click on
//                           the button below:
//                         </p> */}
//                           </div>
//                         </div>
//                         <div className="col-lg-6 col-md-8 col-sm-12 col-12 d-flex justify-content-start justify-content-lg-end">
//                           <a
//                             href={fileUrl + item.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <button
//                               type="submit"
//                               className="btn-contact text-white btn px-5"
//                             >
//                               View File
//                             </button>
//                           </a>
//                         </div>
//                       </div>
//                     );
//                   })
//                 : ""}
//             </div>
//           </div>
//         </div>
