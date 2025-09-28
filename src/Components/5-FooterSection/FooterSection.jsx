import React from "react";
import "./FooterSection.css";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function FooterSection() {
  return (
    <div className="footer-wrapper">
      {/* 🔸 Newsletter Bar */}
      <section className="newsletter-bar">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h3>SUBSCRIBE NEWSLETTER</h3>
            <p>
              Get all the latest information on Events,
              <br /> Sales and Offers.
            </p>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Email address..."
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      {/* 🔸 Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo */}
          <div className="footer-logo ">
            <img src="../../../public/img/logo.svg" alt="Loova Logo" />
            <div className="footer-social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTiktok />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            {/* Links */}
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>

            {/* Info */}
            <div className="footer-info">
              <p>
                <EmailIcon /> Email: info@NNGHT.com
              </p>
              <p>
                <LocationOnIcon /> Address: 1234 Main St, Moonstone City.
              </p>
              <p>
                <PhoneInTalkIcon /> Phone: 555-567-8901
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2023 Loova. All Rights Reserved. Made with ❤️ by <u>PIKY HOST</u>
            <a style={{ marginLeft: "20px" }} href="#">
              {" "}
              <u>Privacy Policy</u>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
