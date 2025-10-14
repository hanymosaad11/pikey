import React, { useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import FooterSection from "./../5-FooterSection/FooterSection";
import { useCart } from "../21-CartContext/CartContext";
const Cart = () => {
  // ---------------- STATES ----------------
  const { cartItems, removeFromCart, updateQty } = useCart();

  const [coupon, setCoupon] = useState("");
  const [note, setNote] = useState("");
  const [progress, setProgress] = useState(50); // progress bar percentage

  const freeShippingLimit = 50;

  // ---------------- CALCULATIONS ----------------
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const shipping = subtotal >= freeShippingLimit ? "Free" : "LE 50.00";
  const total = subtotal;

  // ---------------- PROGRESS BAR (TRUCK) ----------------
  const handleDrag = (e) => {
    const bar = document.querySelector(".progress-bar");
    if (!bar) return;

    const rect = bar.getBoundingClientRect();
    let newX = e.clientX - rect.left;

    // Clamp within progress bar width
    if (newX < 0) newX = 0;
    if (newX > rect.width) newX = rect.width;

    const newProgress = (newX / rect.width) * 100;
    setProgress(newProgress);
  };

  const startDrag = (e) => {
    e.preventDefault(); // Prevent text selection during drag
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
  };
  // ---------- OTP POPUP LOGIC ----------
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input automatically
      if (value && index < otp.length - 1) {
        const nextInput =
          document.querySelectorAll(".otp-inputs input")[index + 1];
        nextInput.focus();
      }
    }
  };

  // لما يضغط على Apply يظهر البوب أب
  const handleApplyCoupon = () => {
    setShowOTP(true);
  };
  // ---------------- RENDER ----------------
  return (
    <div>
      <div className="cart-container container">
        {/* Breadcrumb */}
        <div className="cart-breadcrumb">
          <Link to="/" className="bc-home">
            HOME
          </Link>{" "}
          &gt; <span>CART</span>
        </div>

        <div className="cart-content">
          {/* Left: Cart Items */}
          <div className="cart-items">
            {/* Table Header */}
            <div className="cart-header">
              <div className="cart-col product-col">Product</div>
              <div className="cart-col">Price</div>
              <div className="cart-col">Quantity</div>
              <div className="cart-col">Total</div>
            </div>

            {/* Cart Rows */}
            {cartItems.map((item) => (
              <div key={item.id} className="cart-row">
                <div className="cart-col product-col">
                  <img src={item.img} alt={item.name} className="cart-img" />
                  <div className="cart-details">
                    <p className="cart-title">{item.name}</p>
                    <p className="cart-sub">
                      {item.color} / {item.size}
                    </p>
                    <button
                      className="cart-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-col">${item.price.toFixed(2)}</div>
                <div className="cart-col">
                  <div className="cart-qty">
                    <button onClick={() => updateQty(item.id, "dec")}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, "inc")}>+</button>
                  </div>
                </div>
                <div className="cart-col">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}

            {/* Note Section */}
            <div className="cart-note">
              <label className="label">Add Order Note</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="How Can We Help You?"
              />
            </div>
          </div>

          {/* Right: Summary Section */}
          <div className="cart-summary">
            {/* Free shipping message */}
            <p className="free-shipping-msg">
              You Are{" "}
              <span className="free-shipping-amount">
                {freeShippingLimit - subtotal > 0
                  ? `$${(freeShippingLimit - subtotal).toFixed(2)}`
                  : "500.00LE"}
              </span>{" "}
              Away From Free Shipping
            </p>

            {/* Progress Bar with Truck */}
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
              <span
                className="truck"
                style={{ left: `calc(${progress}% - 15px)` }}
                onMouseDown={startDrag}
              >
                <img src="/img/truck-fast-solid 1.svg" alt="truck" />
              </span>
            </div>

            {/* Coupon Box */}
            <div className="coupon-box">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
              />
              <button className="apply-btn" onClick={handleApplyCoupon}>
                APPLY
              </button>
            </div>

            {/* Total Box */}
            <div className="cart-border">
              <div className="cart-total-box">
                <h3>Cart Total</h3>
                <p>
                  SUBTOTAL: <span>${subtotal.toFixed(2)}</span>
                </p>
                <p>
                  SHIPPING: <span>{shipping}</span>
                </p>
                <p className="grand-total">
                  TOTAL: <span>${total.toFixed(2)}</span>
                </p>
              </div>
              <Link to="/checkoutpage">
                <button className="checkout-btn">PROCEEDED TO CHECKOUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- OTP POPUP ---------- */}
      {showOTP && (
        <div className="otp-overlay">
          <div className="otp-box">
            <h4 className="otp-title">
              PLEASE ENTER THE OTP TO CONFIRM YOUR ORDER
            </h4>
            <p className="otp-sub">OTP has been sent to 010222225551</p>

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOTPChange(e, index)}
                  onFocus={(e) => e.target.select()}
                />
              ))}
            </div>

            <button className="otp-confirm">CONFIRM</button>
            <p className="otp-resend">RESEND AGAIN</p>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default Cart;
