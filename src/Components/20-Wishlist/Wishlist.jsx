import React, { useState } from "react";
import "./Wishlist.css";
import { Link } from "react-router-dom";
import { useCart } from "../21-CartContext/CartContext";
import FooterSection from "../5-FooterSection/FooterSection";


const Wishlist = () => {
  // ---------------- STATES ----------------
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Men Watch",
      price: 17.9,
      stock: "In stock",
      image: "/img/product1.jpg",
    },
    {
      id: 2,
      name: "Men Cap",
      price: 17.9,
      stock: "In stock",
      image: "/img/product3.jpg",
    },
    {
      id: 3,
      name: "Men Black Gentle Belt",
      price: 17.9,
      stock: "In stock",
      image: "/img/product2.jpg",
    },
  ]);

  // ---------------- HANDLERS ----------------
  // Remove item from wishlist
  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  // Add item to cart
  const { addToCart } = useCart();
  const handleAdd = (product) => {
    const productForCart = {
      id: product.id,
      name: product.name,
      color: product.color || "Default",
      size: product.size || "M",
      price: product.price,
      qty: 1,
      img: product.image,
    };
    addToCart(productForCart);
  };

  return (
    <div className="wishlist-container">
      {/* ---------------- Breadcrumb ---------------- */}
      <div className="wishlist-header">
        <div className="breadcrumb">
          <Link to="/" className="bc-home">
            HOME
          </Link>
          &gt;
          <span className="bc-current">WISHLIST</span>
        </div>
      </div>

      {/* ---------------- Wishlist Table ---------------- */}
      <div className="container" style={{marginBottom:"90px"}}>
        <h2>MY WISHLIST</h2>
        <table className="wishlist-table">
          <thead>
            <tr>
              <th style={{ paddingLeft: "90px" }}>PRODUCT</th>
              <th>PRICE</th>
              <th>STOCK STATUS</th>
              <th style={{ paddingLeft: "90px" }}>ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id}>
                <td className="product-info ">
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    ×
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-img "
                  />
                  <span>{item.name}</span>
                </td>

                <td style={{color:"#777777"}}>${item.price.toFixed(2)}</td>
                <td className="stock">{item.stock}</td>

                <td className="actions ">
                  <button className="quick-view">QUICK VIEW</button>
                  <button
                    className="add-to-cart"
                    onClick={() => handleAdd(item)}
                  >
                    ADD TO CART
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
             <FooterSection />
      
    </div>
  );
};

export default Wishlist;
