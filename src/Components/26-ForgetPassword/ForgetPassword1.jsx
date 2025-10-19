import React, { useState } from "react";
import "../26-ForgetPassword/forget-password.css";
import { useNavigate } from "react-router-dom"; // ✅

const ForgetPassword1 = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // ✅

   const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    // هنا لاحقًا هيكون استدعاء API لإرسال الكود
    navigate("/forgetpassword2"); // ✅ ينقلك للصفحة التانية
  };

  return (
    <section className="forget-page">
      <div className="forget-box">
        <img src="/img/logopass.svg" alt="Logo" className="forget-logo" />
        <h2 className="forget-title">Forgot password</h2>
        <p className="forget-desc">
          Enter your registered email address to receive a verification code
        </p>

        <form className="forget-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="forget-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="forget-btn">
            Send Code
          </button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword1;
