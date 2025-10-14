import React from "react";
import "./Error404.css";
import FooterSection from "../5-FooterSection/FooterSection";

const Error404 = () => {
  return (
    <div>
      <section className="error-page">
        <div className="error-content">
          {/* صورة العيون */}
          <div className="error-eyes">
            <img src="/img/eys.png" alt="Crying eyes" />
          </div>

          {/* صورة 404 */}
          <div className="error-number">
            <img src="/img/404.png" alt="404 Error" />
          </div>

          {/* النص */}
          <h2 className="error-text">PAGE NOT FOUNDED</h2>

          {/* الزر */}
          <button
            className="back-btn"
            onClick={() => (window.location.href = "/products")}
          >
            BACK TO SHOP PAGE
          </button>
        </div>
      </section>
      <FooterSection />{" "}
    </div>
  );
};

export default Error404;
