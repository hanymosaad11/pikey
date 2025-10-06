import React, { useState } from "react";
import "./Faq.css";
import FooterSection from "./../5-FooterSection/FooterSection";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// ============================
// FAQ Data
// ============================
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

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null); // handle open/close single question
  const [showAll, setShowAll] = useState(false); // handle load more / less more

  // toggle single FAQ
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // toggle show all FAQs
  const toggleShowAll = () => {
    setShowAll(!showAll);
    setActiveIndex(null); // close all when switching
  };

  return (
    <section className="faq-section">
      {/* ================= Hero Section ================= */}
      <div className="faq-hero">
        <div className="overlay"></div>
        <div className="faq-header">
          {/* Breadcrumb */}
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="bc-home">
              HOME
            </Link>
            <span className="bc-sep">
              <ArrowForwardIosIcon fontSize="12px" />
            </span>
            <span className="bc-current">FAQS</span>
          </nav>
          <h1>FAQS</h1>
        </div>
      </div>

      {/* ================= Section Heading ================= */}
      <div className="faq-heading">
        <h3>
          FREQUENTLY <br />
          <span>ASK QUESTIONS</span>
        </h3>
      </div>

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

      {/* ================= Footer Section ================= */}
      <FooterSection />
    </section>
  );
};

export default Faq;
