// ========================================
// 🧩 IMPORTS
// ========================================
import React from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProductInfoSection from "../25-ProductInfoSection/ProductInfoSection";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import BestSeller from "../2-PromoSection/BestSeller";
import FooterSection from "./../5-FooterSection/FooterSection";

// ========================================
// 💾 BUNDLES DATA
// ========================================
const bundles = [
  {
    id: 1,
    title: "BUNDLE 1",
    offer: "BUY 1 GET 1",
    img1: "/img/T1.png",
    img2: "/img/T1.png",
  },
  {
    id: 2,
    title: "BUNDLE 2",
    offer: "BUY 2 GET 1",
    img1: "/img/T1.png",
    img2: "/img/T1.png",
  },
  {
    id: 3,
    title: "BUNDLE 3",
    offer: "BUY 1 GET 2",
    img1: "/img/T1.png",
    img2: "/img/T1.png",
  },
  {
    id: 4,
    title: "BUNDLE 4",
    offer: "BUY 2 GET 2",
    img1: "/img/T1.png",
    img2: "/img/T1.png",
  },
  {
    id: 5,
    title: "BUNDLE 5",
    offer: "BUY 3 GET 2",
    img1: "/img/T1.png",
    img2: "/img/T1.png",
  },
  {
    id: 6,
    title: "BUNDLE 6",
    offer: "BUY 4 GET 2",
    img1: "/img/T1.png",
    img2: "/img/T1.png",
  },
];

// ========================================
// 💾 PRODUCT DATA
// ========================================
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

// ========================================
// 💾 TESTIMONIALS DATA
// ========================================
const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vivamus Sit Amet Mi Nec Massa Tincidunt Blandit Et Eu Sem...",
    name: "Kristin Watson",
    role: "Fashion Designer",
    avatar: "/img/avtar1.png",
  },
  {
    id: 2,
    text: "Nullam Sapien Elit, Dignissim Eu Viverra Et, Scelerisque Et Felis. Aliquam Egestas Dui Elit, Quis Tincidunt Lacus Aliquam Et...",
    name: "Esther Howard",
    role: "Fashion Designer",
    avatar: "/img/avatar2.png",
  },
  {
    id: 3,
    text: "Phasellus volutpat eros quis arcu fermentum, at volutpat neque posuere. Integer ut est id sapien bibendum luctus.",
    name: "Anthony Blake",
    role: "Product Designer",
    avatar: "/img/avtar1.png",
  },
  {
    id: 4,
    text: "Aenean a arcu eget sapien mattis rhoncus. Mauris vitae purus sed neque dapibus consequat vel at massa.",
    name: "Jane Cooper",
    role: "Creative Lead",
    avatar: "/img/avatar2.png",
  },
];

// ========================================
// 💾 FAQ DATA
// ========================================
const faqData = [
  {
    id: 1,
    question: "How long until we deliver your first blog post?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    question: "How long until we deliver your first blog post?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    question: "How long until we deliver your first blog post?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    question: "How long until we deliver your first blog post?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    question: "How long until we deliver your first blog post?",
    answer:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    id: 6,
    question: "How long until we deliver your first blog post?",
    answer:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 7,
    question: "How long until we deliver your first blog post?",
    answer:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur.",
  },
];

// ========================================
// 🧠 PRODUCT PAGE COMPONENT
// ========================================
const ProductPage = () => {
  // ---------------- STATES ----------------
  const [mainMedia, setMainMedia] = useState(product.media[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].id);
  const [selectedSize, setSelectedSize] = useState(null);

  // UI States
  const [visibleCount, setVisibleCount] = useState(3); // show 3 bundles initially
  const isExpanded = visibleCount >= bundles.length;

  // Toggle "see more / less" for bundles
  const toggleShow = () => setVisibleCount(isExpanded ? 3 : bundles.length);
  const visibleBundles = bundles.slice(0, visibleCount);

  // ---------------- HANDLE ADD TO CART ----------------
  const handleAddToCart = () => {
    if (product.stock <= 0) return;
    if (!selectedSize) return alert("Please select a size first.");
    alert(
      `Added to cart: ${product.title} - ${selectedSize} - color: ${selectedColor}`
    );
  };

  // ---------------- TESTIMONIALS CAROUSEL STATE ----------------
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 600 ? 1 : 2
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const wrapperRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  // Update slides count on window resize
  useEffect(() => {
    const onResize = () => {
      const newShow = window.innerWidth < 600 ? 1 : 2;
      setSlidesToShow(newShow);
      setCurrentIndex((idx) =>
        Math.min(idx, Math.max(0, testimonials.length - newShow))
      );
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Compute translateX position for carousel sliding
  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapperWidth = wrapperRef.current.offsetWidth;
    const cardWidth = wrapperWidth / slidesToShow;
    setTranslateX(-currentIndex * cardWidth);
  }, [currentIndex, slidesToShow]);

  // Carousel navigation
  const maxIndex = Math.max(0, testimonials.length - slidesToShow);
  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  // ---------------- FAQ STATE ----------------
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index) =>
    setActiveIndex(activeIndex === index ? null : index);
  const toggleShowAll = () => {
    setShowAll(!showAll);
    setActiveIndex(null);
  };

  // ========================================
  // 🖥️ RETURN JSX
  // ========================================
  return (
<div>
    <div className="product-page">
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

      {/* ================= PRODUCT MAIN SECTION ================= */}
      <div className="product-main">
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
            <div className="flex" style={{ gap: "3rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                }}
              >
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
                </div>{" "}
              </div>
              <div className="box">
                <h6
                  className="flex"
                  style={{ gap: "4px", justifyContent: "center" }}
                >
                  <img style={{ width: "10px" }} src="/img/alarm-icon 1.svg" />{" "}
                  HURRY UP SALE ENDS IN :
                </h6>
                <p>11 DAYS : 15 HOURS : 5 MIN :36 SECONDS</p>
              </div>{" "}
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
                className={`add-btn ${product.stock <= 0 ? "" : "disabled"}`}
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
              >
                ADD TO CART
              </button>
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

      {/* ================= BUNDLE OFFERS ================= */}
      <section className="bundle-section" aria-label="Special bundle offers">
        <div className="bundle-inner">
          <h2 className="bundle-title">SPECIAL BUNDLE OFFERS</h2>

          {/* grid of bundle cards (3 columns) */}
          <div className="bundle-grid">
            {visibleBundles.map((b, idx) => (
              <article
                key={b.id}
                className={`bundle-card ${idx === 1 ? "bundle-active" : ""}`}
                aria-labelledby={`bundle-${b.id}-title`}
              >
                {/* orange header strip */}
                <div className="bundle-strip">
                  <span id={`bundle-${b.id}-title`} className="strip-text">
                    {b.title}
                  </span>
                </div>

                {/* content area */}
                <div className="bundle-body">
                  <p className="bundle-sub">GET THIS BUNDLE NOW</p>
                  <p className="bundle-deal">{b.offer}</p>

                  {/* images + plus icon (centered) */}
                  <div className="bundle-media">
                    <img
                      src={b.img1}
                      alt={`${b.title} item 1`}
                      className="media-img left"
                    />
                    <div className="plus-oval">+</div>
                    <img
                      src={b.img2}
                      alt={`${b.title} item 2`}
                      className="media-img right"
                    />
                  </div>

                  <button className="btn-add">ADD TO CART</button>
                </div>
              </article>
            ))}
          </div>

          {/* SEE MORE button aligned to the right with circle chevron */}
          <div className="see-more-row">
            <button
              className="see-more"
              onClick={toggleShow}
              aria-expanded={isExpanded}
            >
              <span className="see-text">
                {isExpanded ? "SEE LESS" : "SEE MORE"}
              </span>
              <span className="see-circle" aria-hidden="true">
                <KeyboardArrowDownIcon />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DETAILS ================= */}
      {<ProductInfoSection />}

      {/* ================= REVIEWS ================= */}
      {/* Testimonials */}
      <section className="about-testimonials container">
        {/* TESTIMONIALS HEADER + arrows */}
        <div className="testimonials-header">
          <h3 style={{ fontSize: "25px" }}>REVIEWS</h3>

          <div className="testimonials-controls">
            <button
              className="ctrl ctrl-left"
              onClick={prev}
              aria-label="Previous testimonials"
              disabled={currentIndex === 0}
            >
              <KeyboardBackspaceOutlinedIcon fontSize="small" />
            </button>
            <button
              className="ctrl ctrl-right"
              onClick={next}
              aria-label="Next testimonials"
              disabled={currentIndex >= maxIndex}
            >
              <EastOutlinedIcon fontSize="small" />
            </button>
          </div>
        </div>

        {/* TESTIMONIALS CAROUSEL */}
        <div className="testimonials-wrapper" ref={wrapperRef}>
          <div
            className="testimonial-track"
            style={{
              transform: `translateX(${translateX}px)`,
              // provide slidesToShow variable for card width calc
              ["--slidesToShow"]: slidesToShow,
            }}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="testimonial-card"
                aria-label={`Review by ${t.name}`}
              >
                <p className="testimonial-text">“{t.text}”</p>

                <div className="testimonial-meta">
                  <div className="avatar">
                    <img src={t.avatar} alt={t.name} />
                  </div>
                  <div className="meta-text">
                    <strong className="meta-name">{t.name}</strong>
                    <span className="meta-role">{t.role}</span>
                  </div>
                </div>

                {/* subtle large quotes mark at bottom-right */}
                <div className="quote-mark">
                  <img src="/img/Group.svg" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELATED PRODUCTS ================= */}
      <div
        style={{
          backgroundColor: "#9F1915",
          padding: "10px 0",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
        }}
      >
        <BestSeller
          title="You might also like"
          titleStyle={{
            color: "#fff",
            fontSize: "28px",
            letterSpacing: "2px",
            textAlign: "center",
            fontWeight: "700",
            textTransform: "uppercase",
          }}
        />
      </div>

      {/* ================= FAQ SECTION ================= */}
      <div className="faq">
        {/* ================= FAQ List ================= */}
        <div className="faq-list">
          {(showAll ? faqData : faqData.slice(0, 5)).map((item, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={item.id}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span
                  className={`faq-icon ${
                    activeIndex === index ? "minus" : "plus"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
                <span>{item.question}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ================= Load More Button ================= */}
        <div className="load-more">
          <button onClick={toggleShowAll}>
            {showAll ? "LESS MORE" : "LOAD MORE"}
          </button>
        </div>
      </div>
    </div>
    <FooterSection /></div>
  );
};

export default ProductPage;
