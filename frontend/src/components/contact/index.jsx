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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5450831368353!2d77.35827651455917!3d28.61342119169757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5992452d761%3A0xaaa44725147c1507!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1579253775872!5m2!1sen!2sin"
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
