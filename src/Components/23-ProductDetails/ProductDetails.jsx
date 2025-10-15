import React, { useState } from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";

// ---------------- Product Data ----------------
const product = {
  title: "OVERSIZED SHIRT JACKET",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  price: 260,
  compareAt: 320,
  currency: "EGP",
  discount: 20,
  rating: 5,
  colors: [
    { id: "brown", hex: "#a66d49" },
    { id: "orange", hex: "#f4a261" },
    { id: "black", hex: "#222" },
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  media: [
    { type: "image", src: "/img/manD3.png" },
    { type: "video", src: "/img/manD4.png" },
    { type: "image", src: "/img/manD1.png" },
  ],
  stock: 0, // 0 = Out of stock
  purchaseLimit: 2,
};

export default function ProductDetails() {
  // ---------------- STATES ----------------
  const [mainMedia, setMainMedia] = useState(product.media[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(null);

  // ---------------- HANDLE ADD TO CART ----------------
  const handleAddToCart = () => {
    if (product.stock <= 0) return;
    if (!selectedSize) return alert("Please select a size first.");
    alert(
      `Added to cart: ${product.title} - ${selectedSize} - color: ${selectedColor}`
    );
  };

  return (
    <div className="pd-container">
      {/* ---------------- Breadcrumb ---------------- */}
      <div className="breadcrumb">
        <Link to="/" className="bc-home">
          HOME
        </Link>
        &gt;
        <Link to="/categories" className="bc-home">
          categories
        </Link>
        &gt;
        <span className="bc-current">jackets&coats</span>
      </div>

      <div className="pd-inner">
        {/* ---------------- LEFT SIDE ---------------- */}
        <div className="pd-left">
          {/* Thumbnail images & video */}
          <div className="pd-thumbs">
            {product.media.map((item, i) => (
              <button
                key={i}
                className={`pd-thumb ${
                  mainMedia.src === item.src ? "active" : ""
                }`}
                onClick={() => setMainMedia(item)}
              >
                {item.type === "video" ? (
                  <div className="video-thumb">
                    <img
                      src={item.src}
                      alt={`thumb-${i}`}
                      className="video-placeholder"
                    />
                    <div className="play-icon">▶</div>
                  </div>
                ) : (
                  <img src={item.src} alt={`thumb-${i}`} />
                )}
              </button>
            ))}
          </div>

          {/* Main displayed media */}
          <div className="pd-main-image">
            {mainMedia.type === "video" ? (
              <video
                src={mainMedia.src}
                controls
                autoPlay
                muted
                className="main-media"
              ></video>
            ) : (
              <img
                src={mainMedia.src}
                alt="main product"
                className="main-media"
              />
            )}
          </div>
        </div>

        {/* ---------------- RIGHT SIDE ---------------- */}
        <div className="pd-right">
          {/* Product Title & Description */}
          <h1 className="pd-title">{product.title}</h1>
          <p className="pd-desc">{product.desc}</p>

          {/* Rating & Compare */}
          <div className="pd-rating">
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="star">
                  <path d="M12 .587l3.668 7.431L23.6 9.75l-5.7 5.556L19.6 24 12 19.897 4.4 24l1.7-8.694L0.4 9.75l7.932-1.732z" />
                </svg>
              ))}
            </div>
            <a className="compare">ADD TO COMPARE</a>
          </div>

          {/* Price & Discount */}
          <div className="pd-price">
            <div className="price-big">
              {product.price}
              {product.currency}
            </div>
            <div className="price-old">
              {product.compareAt}
              {product.currency}
            </div>
            <div className="discount">{product.discount}% OFF</div>
          </div>

          {/* Select Color */}
          <div className="pd-section">
            <div className="pd-label">SELECT COLOR</div>
            <div className="color-list">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  className={`color-dot ${
                    selectedColor === c.id ? "selected" : ""
                  }`}
                  style={{ background: c.hex }}
                  onClick={() => setSelectedColor(c.id)}
                ></button>
              ))}
            </div>
          </div>

          {/* Choose Size */}
          <div className="pd-section">
            <div className="pd-label">CHOOSE SIZE</div>
            <div className="size-list">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`size-item ${selectedSize === s ? "active" : ""}`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
                </button>
              ))}
              <button className="size-reco">SizeRecommendation</button>
              <a className="size-guide">SIZE GUIDE</a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="cta-row flex"
            style={{ justifyContent: "space-between" }}
          >
            <div className="flex">
              <button
                className={`add-btn ${product.stock <= 0 ? "disabled" : ""}`}
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                ADD TO CART
              </button>
              <div className="stock" >
                {product.stock > 0 ? "IN STOCK" : "OUT OF STOCK"}
              </div>
            </div>
            <button className="fav">
              <svg viewBox="0 0 24 24" className="heart">
                <path d="M12 21s-7-4.35-9-7.04C1.24 11.9 2 7.5 6 5.5 8.08 4.5 10.5 5.1 12 7c1.5-1.9 3.92-2.5 6-1.5 4 2 4.76 6.4 3 8.46C19 16.65 12 21 12 21z" />
              </svg>
            </button>
          </div>

          {/* Note Section */}
          <div className="note-box">
            <div className="note-title">NOTE:</div>
            <div className="note-body">EVERY ONE CAN BUY 2 ONLY</div>
          </div>
        </div>
      </div>
    </div>
  );
}
