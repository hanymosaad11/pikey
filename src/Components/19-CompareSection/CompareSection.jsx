import React from "react";
import "./CompareSection.css";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FooterSection from "../5-FooterSection/FooterSection";

const CompareSection = () => {
  const products = [
    {
      id: 1,
      name: "Boxy T-shirt",
      price: 7.99,
      image: "/img/compar1.png",
      vendor: "Ecomus",
      colors: ["Grey", "Pink", "Light Pink", "White"],
      availability: "In Stock",
    },
    {
      id: 2,
      name: "Drawstring-detail Sports Tank Top",
      price: 8.99,
      oldPrice: 14.99,
      image: "/img/compar2.png",
      vendor: "M&H",
      colors: [],
      availability: "In Stock",
    },
    {
      id: 3,
      name: "Ribbed Tank Top",
      price: 7.99,
      image: "/img/compar1.png",
      vendor: "Ecomus",
      colors: ["Orange", "Black", "White"],
      availability: "In Stock",
    },
  ];

  return (
    <section className="compare">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="bc-home">
          HOME
        </Link>
        &gt;
        <span className="bc-current">COMPARE</span>
      </div>
      <div className="container" style={{marginBottom:"70px"}}>
        {/* ===== PRODUCTS ROW ===== */}
        <div className="compare-products">
          <div className="column-title"></div>
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-wrapper">
                <img src={product.image} alt={product.name} />
              </div>

              {/* زرار الريموف */}
              {product.id === 1 ? (
                <button className="remove-btn first-remove">Remove</button>
              ) : (
                <button className="remove-btn">Remove</button>
              )}

              <p className="product-name">{product.name}</p>

              <div className="price">
                {product.oldPrice ? (
                  <>
                    <span className="old-price">${product.oldPrice}</span>
                    <span className="new-price">${product.price}</span>
                  </>
                ) : (
                  <span className="regular-price">${product.price}</span>
                )}
              </div>
              <button className="quick-add-btn flex">
                <img
                  src="/img/bag1.svg"
                  alt=""
                  style={{ marginRight: "4px", fontSize: "9px" }}
                />{" "}
                QUICK ADD
              </button>
            </div>
          ))}
        </div>
        {/* ===== TABLE SECTION ===== */}
        <div className="compare-table">
          <div className="row-title">Availability</div>
          {products.map((p) => (
            <div className="row-cell" key={`a-${p.id}`}>
              <span className="in-stock flex">
                <CheckCircleIcon
                  style={{ fontSize: "17px", marginRight: "5px" }}
                />{" "}
                {p.availability}
              </span>
            </div>
          ))}

          <div className="row-title">Vendor</div>
          {products.map((p) => (
            <div className="row-cell" key={`v-${p.id}`}>
              {p.vendor}
            </div>
          ))}

          <div className="row-title">Color</div>
          {products.map((p) => (
            <div className="row-cell" key={`c-${p.id}`}>
              {p.colors.length > 0 ? p.colors.join(", ") : "-"}
            </div>
          ))}
        </div>
      </div>
       <FooterSection />{" "}
    </section>
  );
};

export default CompareSection;
