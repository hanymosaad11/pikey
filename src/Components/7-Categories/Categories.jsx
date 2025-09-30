import React, { useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import FooterSection from "../5-FooterSection/FooterSection";

const categoriesList = [
  { id: 1, name: "SHIRTS", img: "/img/teshrt.png" },
  { id: 2, name: "T-SHIRTS", img: "/img/teshrt.png" },
  { id: 3, name: "SOCKS", img: "/img/teshrt.png" },
  { id: 4, name: "SHORTS", img: "/img/teshrt.png" },
  { id: 5, name: "SHIRTS", img: "/img/teshrt.png" },
  { id: 6, name: "SHIRTS", img: "/img/teshrt.png" },
];

export default function Categories() {
  const [active, setActive] = useState(3);

  return (
    <div>
      <div className="categories-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb flex">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-separator">
            <ArrowForwardIosIcon fontSize="12px" />
          </span>
          <span className="breadcrumb-active">CATEGORIES</span>
        </nav>

        {/* Title */}
        <h2 className="page-title">SHOP BY CATEGORY</h2>

        {/* Categories Grid */}
        <section className="categories">
          {categoriesList.map((cat) => (
            <div
              key={cat.id}
              className={`category-card  ${active === cat.id ? "active" : ""}`}
              onClick={() => setActive(cat.id)}
            >
              <div className="img-box">
                <img src={cat.img} alt={cat.name} />
              </div>
              <p>{cat.name}</p>
            </div>
          ))}
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
