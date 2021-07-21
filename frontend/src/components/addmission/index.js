import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageUrl } from "../../redux/api/index";
import { GetAdmissionData } from "../../redux/actions/admission";
import Header from "../header/index";
import Group8921 from "../../assets/Group8921.svg";
import image22 from "../../assets/image22.jpg";
import { Link } from "react-router-dom";
import "./style.css";

const Addmission = () => {
  const admissionlData = useSelector(
    (state) => state.admission?.getadmissionData
  );
  console.log(admissionlData?.data, "s");
  const dispatch = useDispatch();
  const [formData, setformData] = useState({});
  const [fileOneValue, setFileOneValue] = useState("");
  const [fileOne, setFileOne] = useState("");
  useEffect(() => {
    dispatch(GetAdmissionData())
      .then((res) => {
        console.log(res, "res");
        setformData(res?.data[0]);
        setFileOne(imageUrl + res?.data[0]?.img);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      {admissionlData && admissionlData?.data?.length > 0 ? (
        <div className="addmission">
          <div className="pb-lg-5 pb-1">
            <Header img={Group8921} heading="ADMISSIONS" />
          </div>
          <div className="container">
            <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                <p className="h2">Applying to G.A.D. Elementary School</p>
              </div>
            </div>
            <div className="row pt-1 px-lg-4 px-md-5">
              <div className="col-12 col-md-12 col-lg-7 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                <p className="about-text">
                  <p>
                    Thank you for your interest in G.A.D. Elementary School. We
                    understand that selecting a school for their child is a
                    significant decision for parents. We offer an excellent
                    educational experience in a very conducive environment,
                    where students excel in their academic, athletic and
                    artistic pursuits.
                  </p>
                  <p>
                    Children seeking admission from Grade 1 to 9 will have to
                    take a written Math and English placement test.
                  </p>
                  <p>
                    Note: We also run a Preschool in the campus and accept
                    children who are three years old. The admission to Preschool
                    is ongoing. For more information please contact the main
                    school office (604-595-0888) or visit to see the Preschool
                    in action.
                  </p>
                  <p>
                    We invite all applying families to visit our school while
                    school is in session. We offer tours of the school to
                    families on working days. Interested families may please
                    contact the front desk to schedule a family visit.
                  </p>
                  <p>
                    The following information must be submitted with the
                    application: At GAD, We make our admissions process as
                    simple and as straight forward as possible.
                  </p>
                </p>
              </div>
              <div className="align-items-center d-flex col-12 col-md-12 col-lg-5 col-sm-12 col-xs-12 px-lg-2 py-md-3 py-sm-2 py-xs-2 py-2 px-md-5 px-4">
                <img
                  className="img-responsive-addmission addmissionHeadingImage"
                  src={image22}
                  alt={image22}
                ></img>
              </div>
              <div className="row pt-lg-5 pt-4 pb-1 px-lg-4 px-md-5">
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 pt-md-3 pt-sm-5 pt-xs-5 px-md-5 px-4">
                  <p className="h2">Steps to follow</p>
                </div>
                <div className="col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 px-lg-4 py-md-3 py-sm-5 py-xs-5 px-md-5 px-4">
                  <p className="about-text">
                    <p className="pt-2">
                      <span className="font-weight-bold">STEP 1. </span>{" "}
                      Complete the Application Form
                    </p>
                    <p>
                      <Link href="/">
                        Click here to download New Application Form
                      </Link>
                    </p>
                    <p>
                      <Link href="/">
                        Click here to download Re-enrollment Form
                      </Link>
                    </p>
                    <p>Sign and date it.</p>
                    <p className="pt-4">
                      <span className="font-weight-bold">STEP 2.</span> Make
                      payment of $350 ( non-refundable & non-transferable
                      Registration Fee) payable to G.A.D. Elementary School
                      (re-enrollment registration fee is $200)
                    </p>
                    <p>
                      <ul>
                        <li>By Cash</li>
                        <li>By Credit card</li>
                      </ul>
                    </p>
                    <p className="pt-4">
                      <span className="font-weight-bold">STEP 3. </span>
                      Attach the following documents with application Form
                    </p>
                    <p>
                      <ul>
                        <li>Parents’ Legal Residency Form</li>
                        <li>Health Alert Form</li>
                        <li>A Copy of Child’s Birth Certificate</li>
                        <li>Child’s Medical Card</li>
                        <li>For Kindergarten only: Immunization record</li>
                        <li>
                          Citizenship Cards/PR Cards/Immigrant Visa of the
                          parent
                        </li>
                        <li>Document with proof of Address</li>
                      </ul>
                    </p>
                    <p className="py-5">
                      For More information click here to see{" "}
                      <Link>admission policy</Link> & Tuition Fee & Donation
                      Policy
                      <Link> click here.</Link>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
    </>
  );
};

export default Addmission;
