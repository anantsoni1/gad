import React from "react";
import "./style.css";

function Covid() {
  return (
    <div className="covid">
      <h1 id="covid" className=" text-center center">
        <div>
          <div className="text-white main-heading">COVID 19 UPDATES</div>
          <div className="text-center text-white mt-3 sub-heading px-3">
            If you have any questions about COVID-19, please see the following
            links:
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
              <p>
                Our top priority is the health and safety of all of our
                students, staff, and the school community. Under the guidance of
                the Public Health Officials, the Ministry of Education, and
                WorkSafeBC, we are continuing to monitor the ongoing situation
                with regards to COVID-19 and will be providing updated
                information and resources on this page as it becomes available.
              </p>
              <p>
                We are looking forward to welcoming back students to school
                under the new guidelines and safety protocols from the
                Provincial Health Authority and B.C. Centre for Disease Control
                and the Ministry of Education.
              </p>
              <p>
                We have been preparing and planning to ensure the safest
                possible school environment for our G.A.D. students and staff.
                We are taking extensive steps in all areas for the restart of
                school. We feel positive that these measures will help to reduce
                the risk of spreading germs and getting sick and ensure the
                safety of our students and staff. It is also important that all
                G.A.D. families do their part to ensure that the steps taken by
                the school are effective. We encourage you to follow the
                guidelines of the Provincial Health Officer, to minimize your
                social contact, to have your children stay at home if they are
                unwell and to keep open communication with the school.
              </p>
              <p>
                Click here to use the K-12 Daily Health Check website and app –
                an easy way to decide if your child should attend school based
                on their symptoms.
              </p>
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
      </div>
    </div>
  );
}

export default Covid;
