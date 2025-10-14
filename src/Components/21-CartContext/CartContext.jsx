import React, { createContext, useContext, useState, useEffect } from "react";

// Create the cart context
const CartContext = createContext();

// Custom hook for easy access to cart
export const useCart = () => useContext(CartContext);

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Oversized Printed T-shirt",
      color: "White",
      size: "M",
      price: 18,
      qty: 1,
      img: "/img/cartman.jpg",
    },
    {
      id: 2,
      name: "Ribbed Tank Top",
      color: "Orange",
      size: "S",
      price: 18,
      qty: 1,
      img: "/img/cartman.jpg",
    },
    {
      id: 3,
      name: "Regular Fit Oxford Shirt",
      color: "Black",
      size: "L",
      price: 18,
      qty: 1,
      img: "/img/cartman.jpg",
    },
  ]);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  // ✅ Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // ✅ Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Update product quantity
  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(item.qty - 1, 1),
            }
          : item
      )
    );
  };

  // ✅ Clear all items from cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// (Optional) default export if needed
export default CartContext;
