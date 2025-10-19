import React, { useState } from "react";
import "./ProductInfoSection.css";

const ProductInfoSection = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="tab-content">
            <p className="desc-text">
              Button-up shirt sleeves and a relaxed silhouette. It’s tailored
              with drapey, crinkle-texture fabric that’s made from LENZING™
              ECOVERO™ Viscose — responsibly sourced wood-based fibres produced
              through a process that reduces impact on forests, biodiversity and
              water supply.
            </p>

            <div className="info-sections">
              <div className="info-column">
                <h4>Features</h4>
                <ul>
                  <li>Front button placket</li>
                  <li>Adjustable sleeve tabs</li>
                  <li>Babaton embroidered crest at placket and hem</li>
                </ul>

                <h4>Materials Care</h4>
                <ul>
                  <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                  <li>Care: Hand wash</li>
                  <li>Imported</li>
                </ul>
              </div>

              <div className="info-column">
                <h4 style={{marginLeft:"17px"}}>Materials Care</h4>
                <ul className="icons-list">
                  <li>
                    <img src="/img/Border1.svg" /> Machine wash max. 30°C. Short
                    spin.
                  </li>
                  <li>
                    <img src="/img/Border2.svg" /> Iron maximum 110°C.
                  </li>
                  <li>
                    <img src="/img/Border3.svg" /> Do not bleach/bleach.
                  </li>
                  <li>
                    <img src="/img/Border4.svg" /> Do not dry clean.
                  </li>
                  <li>
                    <img src="/img/Border5.svg" /> Tumble dry, medium heat.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "additional":
        return (
          <div className="tab-content">
            <p>
              Additional information about sizing, materials, or fit can go
              here.
            </p>
          </div>
        );

      case "shipping":
        return (
          <div className="tab-content">
            <p>
              Shipping details: Orders are processed within 2–3 business days.
            </p>
          </div>
        );

      case "returns":
        return (
          <div className="tab-content">
            <p>Return Policy: Returns accepted within 14 days of delivery.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="product-info-section">
      <div className="tabs">
        <button
          className={activeTab === "description" ? "active" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={activeTab === "additional" ? "active" : ""}
          onClick={() => setActiveTab("additional")}
        >
          Additional Information
        </button>
        <button
          className={activeTab === "shipping" ? "active" : ""}
          onClick={() => setActiveTab("shipping")}
        >
          Shipping
        </button>
        <button
          className={activeTab === "returns" ? "active" : ""}
          onClick={() => setActiveTab("returns")}
        >
          Return Policies
        </button>
      </div>

      {renderContent()}
    </div>
  );
};

export default ProductInfoSection;
