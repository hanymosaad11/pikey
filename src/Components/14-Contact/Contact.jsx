import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FooterSection from "../5-FooterSection/FooterSection";

export default function Contact() {
  return (
    <section className="contact-section">
      {/* Hero */}
      <div className="contact-hero">
        <div className="overlay"></div>
        <nav className="hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="bc-home">
            HOME
          </Link>
          <span className="bc-sep">
            <ArrowForwardIosIcon fontSize="10px" />
          </span>
          <span className="bc-current">CONTACT US</span>
        </nav>
        <h1 className="hero-title">CONTACT US</h1>
      </div>

      {/* Info Cards */}
      <div className="info-cards container">
        <div className="card">
          <img src="/img/phone.svg" alt="" />
          <h4>CALL US</h4>
          <p>+91 0000000</p>
          <p>+91 999999999</p>
        </div>
        <div className="card">
          <img src="/img/message.svg" alt="" />

          <h4>EMAIL</h4>
          <p>info@somemail.com</p>
          <p>name.surname@somemail.com</p>
        </div>
        <div className="card">
          <img src="/img/loc.svg" alt="" />

          <h4>ADDRESS</h4>
          <p>451 Thurn Tower B Sector 62</p>
          <p>Noida 201301, India</p>
        </div>
      </div>

      {/* Map */}
      <div className="map container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.50708580288!2d77.0688972!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5aaf70a3bbb%3A0xf7bb10dbf06a0e76!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1638967844327!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>
          GET IN <span>TOUCH</span>
        </h2>
        <p>
          Whether you’re looking for solutions or want to explore opportunities,
          we’re here to<br/> collaborate with you.
        </p>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First Name*" required />
            <input type="text" placeholder="Last Name*" required />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email Id*" required />
            <input type="tel" placeholder="Phone Number*" required />
          </div>
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">SEND</button>
        </form>
        {/* Follow Us */}
        <div className="follow-us">
          <h3>FOLLOW US</h3>
          <div className="icons">
            <a href="#">
              <img src="/img/insta.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/face.svg" alt="" />
            </a>
            <a href="#">
              <img src="/img/tiktok.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <FooterSection customClass="contact-footer"/>
    </section>
  );
}
