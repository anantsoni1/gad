import React from "react";
import Header from "../header/index";
import purpleBg from "../../assets/purple-bg.svg";
import pointer from "../../assets/pointer.svg";
import phone from "../../assets/phone.svg";
import mail from "../../assets/mail.svg";
import "./style.css";

function Contact() {
  return (
    <>
      <Header img={purpleBg} heading="CONTACT US" />
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 mt-lg-5 px-3">
            <p className="h2 mt-5">Send Us a Message</p>
            <div className="sub-head-contact">
              Contact us or give us a call to discover how we can help.
            </div>
            <form>
              <div className="mt-5">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="mt-4">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="mt-4">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="mt-4">
                <textarea rows="5" placeholder="Message"></textarea>
              </div>
              <button
                type="submit"
                className="btn-contact text-white btn mt-5 px-5"
              >
                Send Messgae
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 mt-5">
            <p className="h2 mt-lg-5">Reach Us At</p>
            <iframe
              src="https://maps.google.com/maps?q=Guru%20Angad%20Dev%20Elementary%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              frameborder="0"
              allowfullscreen
              loading="lazy"
              title="map"
              className="mt-5"
            />
            <div className="mt-lg-5 mt-3">
              <div className="d-flex mt-2">
                <div className="logo">
                  <img src={pointer} alt="contact" className="img-fluid pt-2" />
                </div>
                <div className="contact-details" style={{ marginLeft: "2rem" }}>
                  Address: 13479 77 Ave, Surrey, BC V3W 6Y1
                </div>
              </div>
              <div className="d-flex">
                <div className="logo">
                  <img src={phone} alt="contact" className="img-fluid pt-2" />
                </div>
                <div className="contact-details" style={{ marginLeft: "2rem" }}>
                  Phone: +1(604) 595-0888
                </div>
              </div>
              <div className="d-flex">
                <div className="logo">
                  <img src={mail} alt="contact" className="img-fluid pt-2" />
                </div>
                <div className="contact-details" style={{ marginLeft: "2rem" }}>
                  Email: info@gadschool.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
