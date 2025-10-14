import React from "react";
import "./Error404.css";
import FooterSection from "../5-FooterSection/FooterSection";

const Error419 = () => {
  return (
    <div>
      <section className="error-page">
        <div className="error-content">
          {/* صورة العيون */}
          <div className="error-eyes  eys2">
            <img src="/img/eys2.png" alt="Crying eyes" />
          </div>

          {/* صورة 404 */}
          <div className="error-number 419-Error">
            <img src="/img/419.png" alt="419 Error" />
          </div>
 
          {/* النص */}
          <h2 className="error-text">session Expired</h2>
          <p className="time">00:05</p>
          <p className="Reload-text">Page will Reload Automaticlly </p>

         
        </div>
      </section>
      <FooterSection />{" "}
    </div>
  );
};

export default Error419;
