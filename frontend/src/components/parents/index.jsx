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
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
const myEventsList = [
  {
    id: 0,
    start: new Date("7-09-2021"),
    end: new Date("7-09-2021"),
    title: "School Opens (Half Day For Students)",
  },
  {
    id: 1,
    start: new Date("27-09-2021"),
    end: new Date("27-09-2021"),
    title: "Pro D Day(School closed for Students)",
  },
  {
    id: 2,
    start: new Date("11-10-2021"),
    end: new Date("11-10-2021"),
    title: "Thanksgiving Day",
  },
  {
    id: 3,
    start: new Date("12-10-2021"),
    end: new Date("12-10-2021"),
    title: "Photo Day",
  },
  {
    id: 4,
    start: new Date("15-10-2021"),
    end: new Date("15-10-2021"),
    title: "Interim Reflections",
  },
  {
    id: 5,
    start: new Date("18-10-2021"),
    end: new Date("18-10-2021"),
    title: "Parent Teacher conference(Early Dismissal)",
  },
  {
    id: 6,
    start: new Date("22-10-2021"),
    end: new Date("22-10-2021"),
    title: "Pro D Day(School closed for Students)",
  },
  {
    id: 7,
    start: new Date("29-10-2021"),
    end: new Date("29-10-2021"),
    title: "Halloween Assembly for students",
  },
  {
    id: 8,
    start: new Date("10-11-2021"),
    end: new Date("10-11-2021"),
    title: "Remembrance Day Assembly",
  },
  {
    id: 9,
    start: new Date("11-11-2021"),
    end: new Date("11-11-2021"),
    title: "Remembrance Day Assembly(Stat Holiday)",
  },
  {
    id: 10,
    start: new Date("12-11-2021"),
    end: new Date("12-11-2021"),
    title: "Pro D Day(School closed for Students)",
  },
  {
    id: 11,
    start: new Date("15-11-2021"),
    end: new Date("15-11-2021"),
    title: "Photo Retakes",
  },
  {
    id: 12,
    start: new Date("26-11-2021"),
    end: new Date("26-11-2021"),
    title: "End of term 1 Assesment",
  },
  {
    id: 13,
    start: new Date("08-12-2021"),
    end: new Date("08-12-2021"),
    title: "Report Cards First Term",
  },
  {
    id: 13,
    start: new Date("10-12-2021"),
    end: new Date("10-12-2021"),
    title: "Parent Teacher's Conference",
  },
  {
    id: 14,
    start: new Date("17-12-2021"),
    end: new Date("17-12-2021"),
    title: "Last Day before School Closes For Winter Break",
  },
  {
    id: 15,
    start: new Date("20-12-2021"),
    end: new Date("31-12-2021"),
    title: "Winter Break",
  },
  {
    id: 16,
    start: new Date("03-01-2022"),
    end: new Date("03-01-2022"),
    title: "School Reopens",
  },
  {
    id: 17,
    start: new Date("21-02-2022"),
    end: new Date("21-02-2022"),
    title: "Family Day",
  },
  {
    id: 18,
    start: new Date("22-02-2022"),
    end: new Date("22-02-2022"),
    title: "Grad Photos",
  },
  {
    id: 19,
    start: new Date("23-02-2022"),
    end: new Date("23-02-2022"),
    title: "Class Photos",
  },
  {
    id: 20,
    start: new Date("24-02-2022"),
    end: new Date("24-02-2022"),
    title: "Pink Shirt Day",
  },
  {
    id: 21,
    start: new Date("25-02-2022"),
    end: new Date("25-02-2022"),
    title: "End of Term 2 Assesment",
  },
  {
    id: 21,
    start: new Date("25-02-2022"),
    end: new Date("25-02-2022"),
    title: "Pro D Day",
  },
  {
    id: 22,
    start: new Date("02-03-2022"),
    end: new Date("02-03-2022"),
    title: "Report Card",
  },
  {
    id: 23,
    start: new Date("04-03-2022"),
    end: new Date("04-03-2022"),
    title: "Parent Teacher Conference",
  },
  {
    id: 24,
    start: new Date("11-03-2022"),
    end: new Date("11-03-2022"),
    title: "Last Day Before School Closes For Spring Break",
  },
  {
    id: 25,
    start: new Date("14-03-2022"),
    end: new Date("25-03-2022"),
    title: "Spring Break",
  },
  {
    id: 26,
    start: new Date("28-03-2022"),
    end: new Date("28-03-2022"),
    title: "School Reopens",
  },
  {
    id: 27,
    start: new Date("15-04-2022"),
    end: new Date("15-04-2022"),
    title: "Good Friday",
  },
  {
    id: 28,
    start: new Date("18-04-2022"),
    end: new Date("18-04-2022"),
    title: "Easter Monday",
  },
  {
    id: 29,
    start: new Date("06-05-2022"),
    end: new Date("06-05-2022"),
    title: "Pro D Day",
  },
  {
    id: 30,
    start: new Date("13-05-2022"),
    end: new Date("13-05-2022"),
    title: "Student Led Conferences",
  },
  {
    id: 31,
    start: new Date("23-05-2022"),
    end: new Date("23-05-2022"),
    title: "Victoria Day",
  },
  {
    id: 32,
    start: new Date("30-05-2022"),
    end: new Date("30-05-2022"),
    title: "Pro D Day",
  },
  {
    id: 33,
    start: new Date("27-05-2022"),
    end: new Date("27-05-2022"),
    title: "Sports Day (Tentative)",
  },
  {
    id: 34,
    start: new Date("16-06-2022"),
    end: new Date("16-06-2022"),
    title: "End of Term 3 Assesment",
  },
  {
    id: 35,
    start: new Date("22-06-2022"),
    end: new Date("22-06-2022"),
    title: "Report Cards (Third Term)",
  },
  {
    id: 36,
    start: new Date("23-06-2022"),
    end: new Date("23-06-2022"),
    title: "Last Day of School",
  },
  {
    id: 37,
    start: new Date("24-06-2022"),
    end: new Date("24-06-2022"),
    title: "Administrative Day (School Closes)",
  },
];
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
  const localizer = momentLocalizer(moment);
  let allViews = Object.keys(Views).map((k) => Views[k]);
  allViews.pop();
  return (
    <>
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
          <Calendar
            events={myEventsList}
            // step={60}
            views={allViews}
            defaultDate={new Date()}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, backgroundColor: "white", border: "solid 1px blue", marginTop: "10px", borderRadius: "5px" }}
          />
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
