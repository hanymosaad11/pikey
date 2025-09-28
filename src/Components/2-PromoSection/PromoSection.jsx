import React, { useState } from "react";
import "./PromoSection.css";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";

/* ========================= Product Data ========================= */
const products = [
  {
    id: 1,
    title: "Hyperadapt Shield Lite",
    price: "200 EGP",
    img: "/img/teshrt.png",
    colors: ["Black", "brown", "orange"],
    discount: "20% OFF",
    category: "CATEGORY",
  },
  {
    id: 2,
    title: "Hyperadapt Shield Lite",
    price: "200 EGP",
    img: "/img/teshrt.png",
    colors: ["Black", "brown", "orange"],
    discount: "20% OFF",
    category: "CATEGORY",
  },
  {
    id: 3,
    title: "Hyperadapt Shield Lite",
    price: "200 EGP",
    img: "/img/teshrt.png",
    colors: ["Black", "brown", "orange"],
    discount: "20% OFF",
    category: "CATEGORY",
  },
  {
    id: 4,
    title: "Hyperadapt Shield Lite",
    price: "200 EGP",
    img: "/img/teshrt.png",
    colors: ["Black", "brown", "orange"],
    discount: "20% OFF",
    category: "CATEGORY",
  },
];

/* ========================= Promo Section Component ========================= */
const PromoSection = () => {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, item) => {
      acc[item.id] = "black";
      return acc;
    }, {})
  ); // save color per product
  const [favorites, setFavorites] = useState({}); // save favorite status per product

  // Handle selecting color
  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  // Handle favorite toggle
  const handleFavoriteToggle = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="best-seller">
      {/* ---------- Banner Grid ---------- */}
      <div className="banner-grid">
        {/* Left Big Banner */}
        <div className="banner-left ">
          <img src="/img/man.png" alt="Men Style" className="banner-img" />
          <div className="banner-content ">
            <p className="banner-subtitle">New Arrivals</p>
            <h2 className="banner-title">Men’s Style</h2>
            <button className="shop-btn">SHOP NOW</button>
          </div>
        </div>

        {/* Right Banners */}
        <div className="banner-right ">
          <div className="banner-top ">
            <div className="banner-small ">
              <span className="discount-badge">12% OFF</span>
              <h3 className="banner-text">Socks</h3>
              <img src="/img/scoks.png" alt="Socks" />
            </div>
            <div className="banner-small ">
              <span className="discount-badge">20% OFF</span>
              <h3 className="banner-text">Shoes</h3>
              <img src="/img/scoks.png" alt="Shoes" />
            </div>
          </div>

          <div className="banner-wide ">
            <span className="discount-badge">15% OFF</span>
            <img src="/img/scoks.png" alt="Cap" />
          </div>
        </div>
      </div>

      {/* ---------- Best Seller Title ---------- */}
      <h3 className="section-title">BEST SELLER</h3>

      {/* ---------- Product Cards ---------- */}
      <div className="container products">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            {/* Discount Badge & Share */}
            <span className="badge">{item.discount}</span>
            <span className="share">
              <IosShareOutlinedIcon />
            </span>

            {/* Product Image + Overlay */}
            <div className="product-img">
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <div className="sizes">
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
                </div>
                <button className="quick-add">Quick Add</button>
              </div>
            </div>

            {/* Product Info */}
            <p className="category">{item.category}</p>
            <div className="prices">
              <h6>{item.title}</h6>
              <p className="price">{item.price}</p>
            </div>

            {/* Show selected color name */}
            {selectedColors[item.id] && (
              <p className="selected-color"> {selectedColors[item.id]}</p>
            )}

            {/* Footer (Colors + Icons) */}
            <div className="card-footer">
              {/* Colors */}
              <div className="colors">
                {item.colors.map((color, index) => (
                  <span
                    key={index}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(item.id, color)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Icons (left heart - right arrow) */}
            <div
              className="icons"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <span
                onClick={() => handleFavoriteToggle(item.id)}
                className={`icon-heart ${favorites[item.id] ? "active" : ""}`}
              >
                <AutorenewOutlinedIcon />
              </span>
              <span>
                <FavoriteBorderOutlinedIcon />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
