import React from "react";
import { Link } from "react-router-dom";
import "./confirme.css";
import FooterSection from "../5-FooterSection/FooterSection";

const Filed = () => {
  return (
    <div>
      <div className="order-confirmed-page">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/" className="bc-home">
            HOME
          </Link>
          &gt;
          <Link to="/Cart" className="bc-home">
            Cart
          </Link>
          &gt;
          <Link to="/checkoutpage" className="bc-home">
            Checkout
          </Link>
          &gt;
          <span className="bc-current">FAILED</span>
        </div>

        {/* Main Content */}
        <div className="order-confirmed-wrap ">
          <div>
            <img
              src="/img/filed.png"
              alt="Order Confirmed"
              className="confirmed-img"
            />
            <h2 className="confirmed-title">YOUR ORDER IS failed</h2>
            <Link to="/" className="back-home-btn">
              PLEASE CONTACT US TO ASSIST YOU
            </Link>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Filed;
