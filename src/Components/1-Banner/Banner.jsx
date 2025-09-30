import React, { useState } from "react";
import "./Banner.css";

/* =========================
   MUI Components
========================= */
import IconButton from "@mui/material/IconButton";

/* =========================
   MUI Icons
========================= */
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";

/* =========================
   Swiper Slider
========================= */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Banner() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <header className="banner">
      {/* =========================
          Hero Section (Slider)
      ========================== */}
      <Swiper pagination={true} modules={[Pagination]} className="banner-swiper">
        <SwiperSlide>
          <section className="banner-hero">
            <div className="banner-hero-left">
              <p className="banner-sub">Season Sale</p>
              <h1 className="banner-title">Men’s Fashion</h1>
              <p className="banner-discount">35–70% Off</p>
              <button className="banner-btn">Shop Now</button>
            </div>
            <div className="banner-hero-right">
              <img
                src="/img/slider1.png"
                alt="Fashion Model"
                className="banner-hero-image"
              />
            </div>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="banner-hero">
            <div className="banner-hero-left">
              <p className="banner-sub">Season Sale</p>
              <h1 className="banner-title">Men’s Fashion</h1>
              <p className="banner-discount">35–70% Off</p>
              <button className="banner-btn">Shop Now</button>
            </div>
            <div className="banner-hero-right">
              <img
                src="/img/slider1.png"
                alt="Fashion Model"
                className="banner-hero-image"
              />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>

      {/* =========================
          Features Strip
      ========================== */}
      <div className="banner-features-strip">
        <div className="banner-feature banner-flex">
          <IconButton className="banner-feature-icons">
            <SpaceDashboardIcon className="banner-feature-icon" />
          </IconButton>
          <div className="banner-feature-text">
            <p>Discount</p>
            <span>Every week new sales</span>
          </div>
        </div>
        <div className="banner-feature banner-flex">
          <IconButton className="banner-feature-icons">
            <LocalShippingOutlinedIcon className="banner-feature-icon" />
          </IconButton>
          <div className="banner-feature-text">
            <p>Free Delivery</p>
            <span>100% Free for all orders</span>
          </div>
        </div>
        <div className="banner-feature banner-flex">
          <IconButton className="banner-feature-icons">
            <AccessTimeOutlinedIcon className="banner-feature-icon" />
          </IconButton>
          <div className="banner-feature-text">
            <p>Great Support 24/7</p>
            <span>We care your experiences</span>
          </div>
        </div>
        <div className="banner-feature banner-flex">
          <IconButton className="banner-feature-icons">
            <CreditScoreOutlinedIcon className="banner-feature-icon" />
          </IconButton>
          <div className="banner-feature-text">
            <p>Secure Payment</p>
            <span>100% Secure Payment Method</span>
          </div>
        </div>
      </div>
    </header>
  );
}
