import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import FooterSection from "./../5-FooterSection/FooterSection";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

export default function About() {
  // carousel state
  const [slidesToShow, setSlidesToShow] = useState(
    window.innerWidth < 600 ? 1 : 2
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  // wrapper ref used to compute pixel translation
  const wrapperRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  // update slidesToShow on resize
  useEffect(() => {
    const onResize = () => {
      const newShow = window.innerWidth < 600 ? 1 : 2;
      setSlidesToShow(newShow);
      // clamp index if needed
      setCurrentIndex((idx) =>
        Math.min(idx, Math.max(0, testimonials.length - newShow))
      );
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // compute translateX (pixels) when currentIndex or slidesToShow change
  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapperWidth = wrapperRef.current.offsetWidth;
    const cardWidth = wrapperWidth / slidesToShow;
    setTranslateX(-currentIndex * cardWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, slidesToShow]);

  const maxIndex = Math.max(0, testimonials.length - slidesToShow);

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        {/* breadcrumb placed top-left (absolutely positioned) */}
        <nav className="hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="bc-home">
            HOME
          </Link>
          <span className="bc-sep">
            <ArrowForwardIosIcon fontSize="12px" />
          </span>
          <span className="bc-current">ABOUT US</span>
        </nav>
        <h1>GET TO KNOW WHO WE ARE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis
          pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nulla fringilla nunc in molestie feugiat
        </p>
      </section>

      {/* About Info */}
      <section className="about-info container">
        <div className="about-text ">
          <h2>
            Learn About Us And What
            <br /> Sets Us Apart
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fringilla nunc in molestie feugiat. Nunc auctor consectetur elit,
            quis pulvina. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor
            consectetur elit, quis pulvina.
          </p>
        </div>
        <div className="about-images">
          <div className="images-2man">
            <img src="/img/imgabout1.png" alt="team" />
            <img src="/img/imgabout3.png" alt="team" />
          </div>
          <div className="img-box">
            <img src="/img/imgabout2.png" alt="main" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        <div className="stat">
          <div className="icon">
            <img src="/img/Frame.svg" />
          </div>
          <h3>+200</h3>
          <p className="title">Happy Customers</p>
          <p className="sup-title">Our community keeps growing.</p>
        </div>
        <div className="stat">
          <div className="icon">
            <img src="/img/Frame (1).svg" />
          </div>
          <h3>+200</h3>
          <p className="title">Products</p>
          <p className="sup-title">A wide variety across all categories.</p>
        </div>
        <div className="stat">
          <div className="icon">
            <img src="/img/Frame (2).svg" />
          </div>
          <h3>+25</h3>
          <p className="title">Countries</p>
          <p className="sup-title">Shipping trusted globally.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-testimonials container">
        {/* TESTIMONIALS HEADER + arrows */}
        <div className="testimonials-header">
          <h3>WHAT CLIENTS SAYS ABOUT US</h3>

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

      <div className="dvider"></div>
      {/* Mission, Value, Vision */}
      <section className="about-mvv container">
        <div className="mvv-card">
          <div className="icon">
            <img src="/img/vic1.svg" alt="img" />
          </div>
          <h3>Mission</h3>
          <p>
            To deliver a seamless shopping experience by offering a diverse
            range of products, fast shipping, and exceptional customer service
            that exceeds expectations.
          </p>
        </div>
        <div className="mvv-card active">
          <div className="icon">
            <img src="/img/vic2.svg" alt="img" />
          </div>
          <h3>Value</h3>
          <p>
            <p>
              <strong>Customer First </strong>
            </p>{" "}
            We prioritize our customers in every decision we make.{" "}
            <p>
              <strong>Integrity</strong>
            </p>{" "}
            We act honestly and transparently in all that we do.
            <p>
              <strong>Innovation</strong>
            </p>{" "}
            We embrace change and continuously improve.
            <p>
              <strong>Quality</strong>
            </p>{" "}
            We are committed to offering only the best products.
            <p>
              <strong>Diversity</strong>
            </p>{" "}
            Diversity We celebrate global cultures and inclusivity.
          </p>
        </div>
        <div className="mvv-card">
          <div className="icon">
            <img src="/img/vic3.svg" alt="img" />
          </div>
          <h3>Vision</h3>
          <p>
            To become the leading online marketplace that empowers customers
            with easy access to quality products from every corner of the world.
          </p>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
