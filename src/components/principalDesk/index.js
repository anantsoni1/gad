import React from "react";
import Header from "../header/index2";
import Group8918 from "../../assets/Group8918.svg";
import PrincipalImage from "../../assets/principal.jpg";
import "./style.css";
const PrincipalDesk = () => {
  return (
    <>
      <div className="pricipalDesk pb-5">
        <div className="pb-lg-5 pb-1">
          <Header img={Group8918} heading="FROM THE PRINCIPAL’S DESK" />
        </div>
        <div className="container">
          <div className="row pt-5 px-lg-4 px-md-5">
            <div className="align-items-center align-items-lg-start justify-content-lg-center px-md-5 px-4 px-lg-4 flex-column d-flex col-12 col-md-12 col-lg-4 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
              <img src={PrincipalImage} alt={PrincipalImage}></img>
              <p className="font-weight-bold pt-5">Manjit Aulakh</p>
              <p className="pb-3">Principal</p>
            </div>
            <div className="col-12 col-md-12 col-lg-8 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <p className="py-1">
                  Thank you for visiting the G.A.D. Elementary School website. I
                  hope you find our website informative and easy to navigate!
                </p>
                <p className="py-1">
                  This coming year (2020-2021) will be very different from any
                  we’ve had in the ten years history of G.A.D. What will not be
                  different this year will be our commitment to provide a
                  diverse curriculum and extra-curricular activities to our
                  students. Despite the pandemic, our teachers will continue to
                  collaborate on instructional strategies and lesson plans to
                  provide our students with a quality education. While realizing
                  the tumultuous conditions created by COVID-19, our staff also
                  recognizes the students’ unique talents, needs, skills, and
                  potential. Therefore, our school will give each and every
                  student the attention necessary to achieve their goals and
                  succeed no matter what the conditions.
                </p>
                <p className="py-1">
                  Academics are only one part of our children’s development.
                  Simultaneously, we are also committed to helping all our
                  students become productive and responsible members of the
                  community. We create a safe learning environment that fosters
                  the social-emotional, physical, and intellectual growth of
                  students. Here at G.A.D., the opportunities offered not only
                  expose our students to different ways of learning but the
                  level of activities and coaching also helps them further hone
                  their skills.
                </p>
              </p>
            </div>
          </div>
          <div className="row pt-1 pb-3 px-lg-4 px-md-5">
            <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
              <p className="about-text">
                <p className="py-4">
                  I want to thank each and every one of you for supporting us
                  and your children through the difficult times last school
                  year. With your continued support and partnership, we know we
                  can tackle anything this year throws our way. Your role in
                  your child’s education has never been more important! Let’s
                  aim to keep communication open, put our children first, and
                  ensure that we are only playing a positive role in the
                  education and growth of our students. Here are some ways you
                  can support your child this coming year:
                </p>
                <li className="py-1">
                  Be open and honest about the health of your child
                </li>
                <li className="py-1">
                  Ensure consistent school attendance for your child
                </li>
                <li className="py-1">
                  Communicate with your child about their day, including what
                  they learned, their fears, what they enjoyed, and what they
                  look forward to
                </li>
                <li className="py-1">
                  Check your child’s planner and newsletters for upcoming events
                  and important information
                </li>
                <li className="py-1">
                  Encourage your child to read every day for twenty minutes at
                  home or read to them.
                </li>
                <li className="py-1">
                  Help your child complete his/her homework.
                </li>
                <li className="py-1">
                  Contact the school, or e-mail/phone the principal or teacher
                  with your questions or concerns
                </li>
                <li className="py-1">
                  Attend parent teacher conference to learn about your child’s
                  progress
                </li>
                <li className="py-1">
                  Sign up to help and volunteer at school events and field trips
                </li>
                <p className="py-4">
                  I want to welcome back our returning students and look forward
                  to meeting our new students and their families for the
                  2020-2021 school year. We are committed to providing a safe,
                  respectful, caring and nurturing learning environment for
                  every student. We hope to collaborate and keep our
                  communication open to help them succeed as lifelong learners.
                </p>
                <p>Sincerely</p>
                <p>Manjit Aulakh</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrincipalDesk;
