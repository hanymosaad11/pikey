import React, { useState } from "react";
import "./CheckoutPage.css";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PaymentIcon from "@mui/icons-material/Payment";
import FooterSection from "./../5-FooterSection/FooterSection";

export default function CheckoutPage() {
  // =========================
  // Billing State
  // =========================
  const [billing, setBilling] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street1: "",
    street2: "",
    county: "",
    city: "",
    governorate: "",
    phonePrimary: "",
    phoneSecondary: "",
    email: "",
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: "",
  });

  // =========================
  // Payment State
  // =========================
  const [payment, setPayment] = useState({
    method: "card",
    nameOnCard: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  // =========================
  // Cart State
  // =========================
  const [cart] = useState({
    subtotal: 1750,
    shipping: 0,
    discount: 100,
  });

  const total = cart.subtotal + cart.shipping - cart.discount;

  // =========================
  // Handlers
  // =========================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBilling({
      ...billing,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPayment({ ...payment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order submitted successfully!");
  };

  // =========================
  // JSX Render
  // =========================
  return (
    <main className="checkout-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/" className="bc-home">
          HOME
        </Link>{" "}
        &gt;{" "}
        <Link to="/Cart" className="bc-home">
          CART
        </Link>{" "}
        &gt; <strong>CHECKOUT</strong>
      </nav>

      <div className="checkout-wrap container">
        {/* Left Column - Billing Form */}
        <section className="billing left-col">
          <h2>Billing Details</h2>
          <form onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="form-row">
              <div className="input">
                <label htmlFor="firstName">
                  FIRST NAME <span className="required">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  value={billing.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input">
                <label htmlFor="lastName">
                  LAST NAME <span className="required">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  value={billing.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Company */}
            <div className="input">
              <label htmlFor="company">COMPANY NAME (OPTIONAL)</label>
              <input
                id="company"
                name="company"
                value={billing.company}
                onChange={handleChange}
              />
            </div>

            {/* Country */}
            <div className="input">
              <label htmlFor="country">
                COUNTRY / REGION <span className="required">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={billing.country}
                onChange={handleChange}
                required
              >
                <option value="EG">Egypt</option>
                <option value="VN">Vanuatu</option>
                <option value="US">United States</option>
              </select>
              <KeyboardArrowDownIcon className="icon" />
            </div>

            {/* Address */}
            <div className="input">
              <label htmlFor="street1">
                STREET ADDRESS <span className="required">*</span>
              </label>
              <input
                id="street1"
                name="street1"
                placeholder="House number and street name"
                value={billing.street1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="street2">APARTMENT, SUITE, UNIT (OPTIONAL)</label>
              <input
                id="street2"
                name="street2"
                value={billing.street2}
                onChange={handleChange}
              />
            </div>

            {/* County / City */}
            <div className="input">
              <label htmlFor="county">
                COUNTY <span className="required">*</span>
              </label>
              <input
                id="county"
                name="county"
                value={billing.county}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="city">
                TOWN / CITY <span className="required">*</span>
              </label>
              <input
                id="city"
                name="city"
                value={billing.city}
                onChange={handleChange}
                required
              />
            </div>

            {/* Governorate */}
            <div className="input">
              <label htmlFor="governorate">GOVERNORATE</label>
              <input
                id="governorate"
                name="governorate"
                value={billing.governorate}
                onChange={handleChange}
              />
            </div>

            {/* Phone Numbers */}
            <div className="form-row">
              <div className="input input-with-flag">
                <label htmlFor="phonePrimary">
                  PHONE <span className="required">*</span>
                </label>
                <input
                  id="phonePrimary"
                  name="phonePrimary"
                  value={billing.phonePrimary}
                  onChange={handleChange}
                  required
                />
                <img src="/img/flag.svg" alt="flag" className="flag-icon" />
              </div>
              <div className="input input-with-flag">
                <label htmlFor="phoneSecondary">ANOTHER PHONE</label>
                <input
                  id="phoneSecondary"
                  name="phoneSecondary"
                  value={billing.phoneSecondary}
                  onChange={handleChange}
                />
                <img src="/img/flag.svg" alt="flag" className="flag-icon" />
              </div>
            </div>

            {/* Email */}
            <div className="input">
              <label htmlFor="email">
                EMAIL ADDRESS <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={billing.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Checkboxes */}
            <div className="checkboxes">
              <label>
                Create an account?
                <input
                  type="checkbox"
                  name="createAccount"
                  checked={billing.createAccount}
                  onChange={handleChange}
                />{" "}
              </label>
              <label>
                Ship to a different address?
                <input
                  type="checkbox"
                  name="shipToDifferentAddress"
                  checked={billing.shipToDifferentAddress}
                  onChange={handleChange}
                />{" "}
              </label>
            </div>

            {/* Notes */}
            <div className="input">
              <label htmlFor="orderNotes">ORDER NOTES (OPTIONAL)</label>
              <textarea
                id="orderNotes"
                name="orderNotes"
                placeholder="Notes about your order, e.g. special notes for delivery."
                value={billing.orderNotes}
                onChange={handleChange}
              />
            </div>
          </form>
        </section>

        {/* Right Column - Summary */}
        <aside className="summary right-col">
          <div className="summary-content">
            <h3>Cart Total</h3>

            <p>
              <span>SUBTOTAL:</span>
              <span>${cart.subtotal}</span>
            </p>

            <p>
              <span>SHIPPING:</span>
              <span>{cart.shipping === 0 ? "Free" : `$${cart.shipping}`}</span>
            </p>

            <p>
              <span>
                DISCOUNT:
                <span style={{ color: "#ddd", fontSize: "13px" }}>
                  (PROMO CODE)
                </span>
              </span>
              <span>${cart.discount}</span>
            </p>

            <p className="total">
              <span>TOTAL:</span>
              <span>${total}</span>
            </p>
          </div>

          {/* Payment Method */}
          <div className="payment-method" style={{ width: "100%" }}>
            <h4>Payment Method:</h4>
            <label>
              <input
                type="radio"
                name="method"
                value="cod"
                checked={payment.method === "cod"}
                onChange={handlePaymentChange}
              />
              Cash on Delivery
            </label>
            <label
              className="credit-option"
              onClick={() =>
                handlePaymentChange({
                  target: { name: "method", value: "card" },
                })
              }
            >
              <input
                type="radio"
                name="method"
                value="card"
                checked={payment.method === "card"}
                onChange={handlePaymentChange}
              />
              <div className="credit-content">
                <div className="left">
                  <PaymentIcon />
                  <span>Credit Card</span>
                </div>
                <div className="arrow-wrapper">
                  <KeyboardArrowDownIcon />
                </div>
              </div>
            </label>
          </div>

          {/* Card Payment Fields */}
          {payment.method === "card" && (
            <div className="card-fields">
              <div className="input">
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                  id="nameOnCard"
                  name="nameOnCard"
                  value={payment.nameOnCard}
                  onChange={handlePaymentChange}
                  placeholder="Enter name on card"
                />
              </div>
              <div className="input">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  value={payment.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="Enter name on card"
                />
              </div>

              <div className="form-row">
                <div className="input">
                  <label htmlFor="expiry">Expiration Date</label>
                  <input
                    className="input-card"
                    id="expiry"
                    name="expiry"
                    value={payment.expiry}
                    onChange={handlePaymentChange}
                    placeholder="Enter expiration date"
                  />
                </div>
                <div className="input">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    className="input-card1"
                    placeholder="Enter CVV"
                    id="cvv"
                    name="cvv"
                    value={payment.cvv}
                    onChange={handlePaymentChange}
                  />
                </div>
              </div>
            </div>
          )}

          <button className="pay-btn" onClick={handleSubmit}>
            PAY NOW
          </button>
        </aside>
      </div>
      <FooterSection />
    </main>
  );
}
