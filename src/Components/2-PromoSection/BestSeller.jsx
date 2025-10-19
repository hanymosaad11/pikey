import React, { useState } from "react";
import "./BestSeller.css";

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

/* ========================= Best Seller Component ========================= */
const BestSeller = ({ title = "BEST SELLER", titleStyle = {}, titleClass = "" }) => {
  const [selectedColors, setSelectedColors] = useState(
    products.reduce((acc, item) => {
      acc[item.id] = "black";
      return acc;
    }, {})
  );

  const [favorites, setFavorites] = useState({});

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const handleFavoriteToggle = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section className="best-seller">
      <h3 className={`section-title ${titleClass}`} style={titleStyle}>{title}</h3>

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

            {selectedColors[item.id] && (
              <p className="selected-color">{selectedColors[item.id]}</p>
            )}

            {/* Footer (Colors + Icons) */}
            <div className="card-footer">
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
            <div className="icons">
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

export default BestSeller;
