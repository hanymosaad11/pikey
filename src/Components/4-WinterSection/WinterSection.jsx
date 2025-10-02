import React, { useEffect, useRef, useState } from "react";
import "./WinterSection.css";

import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

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

export default function WinterSection() {
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
    <section className="winter-section">
      {/* TOP HERO (image with rounded corners + play button) */}
      <div className="winter-hero">
        <div className="hero-title">
          <h2>Winter Collections</h2>
          <p>Introducing the new winter jackets.</p>
        </div>

        <div className="hero-inner">
          <img
            src="/img/man3.jpg"
            alt="Winter Collections"
            className="hero-image"
          />
          <div className="overlay"></div>
          <button
            className="hero-play"
            aria-label="Play video"
            onClick={() => {
              // put your play handler here (open modal / play video)
              console.log("Play clicked");
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5v14l11-7L8 5z" fill="#222" />
            </svg>
          </button>
        </div>
      </div>

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
            <EastOutlinedIcon  fontSize="small"/>
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
              <div  className="quote-mark"><img src="/img/Group.svg"/></div>
            </article>
          ))}
        </div>
      </div>
      
    </section>
  );
}
