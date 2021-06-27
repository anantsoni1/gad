import React from "react";
import Header from "../header/index";
import Group8922 from "../../assets/Group8922.svg";
import "./style.css";

const Career = () => {
  return (
    <>
      <div className="career">
        <div className="pb-lg-5 pb-1">
          <Header img={Group8922} heading="CAREERS" />
        </div>
        <div className="container pb-5">
          <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <p className="pt-2">
                  G.A.D. Elementary is a Kindergarten – Grade 9 independent
                  school located in the Newton area of Surrey with an enrollment
                  of over 600 students. We offer a very conducive environment
                  for the children where they can develop skills to become
                  productive and responsible citizens. G.A.D, an equal
                  opportunity employer, is now accepting applications for the
                  2021- 2022 school year to join our highly qualified, committed
                  and dedicated staff:
                </p>
                <p>
                  <ul>
                    <li>Teacher (Primary – Grades K to 3 )</li>
                    <li>Teacher (Intermediate- Grades 4 to 9)</li>
                    <li>Kirtan Teacher</li>
                    <li>French Teacher</li>
                    <li>Teacher-on Call</li>
                  </ul>
                </p>
                <p>
                  Please see requirements on next page and e-mail your
                  application to:{" "}
                  <span className="font-weight-bold">
                    careers@gadschool.com
                  </span>
                </p>
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <p className="h2">Attach:</p>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <p>
                  <ul>
                    <li>Cover letter</li>
                    <li>Resume</li>
                    <li> Letters of reference.</li>
                    <li> A copy of valid BC Teaching Certificate</li>
                  </ul>
                </p>
                <p>
                  We thank all applicants for their interest in G.A.D.
                  Elementary, but only suitable applicants will be called for an
                  interview.
                </p>
              </p>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
              <p className="h2">Requirements:</p>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <p>
                  <ul>
                    <li>
                      Ability to foster and maintain a safe positive learning
                      environment
                    </li>
                    <li>
                      Strong interpersonal skills. Has the ability to
                      communicate effectively with students, colleagues and
                      parents
                    </li>
                    <li>
                      Team player – participates in team building and planning,
                      instructional activities focused on improving
                      instructional practices and student learning
                    </li>
                    <li>
                      Plan, implement, and evaluate effective classroom
                      instruction
                    </li>
                    <li>
                      Ability to develop, modify, adjust and adapt curriculum to
                      meet the individual needs of the students
                    </li>
                    <li>
                      Recognize individual students’ needs and provide
                      appropriate strategies and interventions
                    </li>
                    <li>
                      Proficiency in use of PC’s Microsoft Office, email, and
                      integrating technology in the classroom
                    </li>
                    <li>
                      Previous teaching experience is an asset. However, new
                      graduates are also welcome.
                    </li>
                  </ul>
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
