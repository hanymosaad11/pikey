import React from "react";
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FooterSection from "./../5-FooterSection/FooterSection";

const PrivacyPolicy = () => {
  return (
    <section className="privacy-section">
      {/* ===== Hero Section ===== */}
      <div className="privacy-hero">
        <div className="overlay"></div>
        <div className="privacy-header">
          {/* Breadcrumb */}
          <nav className="hero-breadcrumb" aria-label="Breadcrumb">
            <Link to="/" className="bc-home">
              HOME
            </Link>
            <span className="bc-sep">
              <ArrowForwardIosIcon fontSize="12px" />
            </span>
            <span className="bc-current">PRIVACY POLICY</span>
          </nav>
          <h1>PRIVACY POLICY</h1>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="privacy-content">
        <h2>PRIVACY POLICY FOR LOOVA E-COMMERCE SAE</h2>
        <p>
          At Loova, we are committed to protecting the privacy of our customers
          and users. This privacy policy outlines how Loova E-commerce SAE
          (referred to as “Loova”, “we”, “our” or “us”) collects, uses, shares,
          and protects your personal information in accordance with applicable
          data protection laws in Egypt.
        </p>

        <h3>1. INFORMATION WE COLLECT</h3>
        <p>
          We collect personal information when you interact with us, such as
          when you:
        </p>
        <ul>
          <li>Register for an account on the sopakat platform.</li>
          <li>Make purchases through our website or mobile applications.</li>
          <li>Contact our customer service or communicate with us.</li>
          <li>Participate in surveys, promotions, or events.</li>
        </ul>
        <p>
          <strong>
            The types of personal information we may collect include:
          </strong>
        </p>
        <ul>
          <li>Name, address, email, and phone number.</li>
          <li>Payment information and transaction details.</li>
          <li>Device information, IP address, and browsing behavior.</li>
        </ul>
        <p>
          <strong>How we use your information:</strong>
        </p>
        <ul>
          <li>Provide, operate, and maintain the sopakat platform.</li>
          <li>Process your transactions and deliver your orders.</li>
          <li>Communicate with you, including responding to inquiries.</li>
          <li>Improve our services, content, and user experience.</li>
          <li>Prevent fraud and ensure the security of our platform.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h3>2. YOUR RIGHTS</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access and request a copy of your personal information.</li>
          <li>Correct or update your information.</li>
          <li>Object to or restrict the processing of your information.</li>
          <li>Withdraw your consent at any time, where applicable.</li>
          <li>
            Request the deletion of your personal information, subject to legal
            limitations.
          </li>
        </ul>

        <h3>3. SECURITY</h3>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal information against unauthorized access,
          disclosure, alteration, or destruction. However, no method of
          transmission over the internet is 100% secure.
        </p>

        <h3>4. CHILDREN’S PRIVACY</h3>
        <p>
          The sopakat platform is not intended for children under the age of 13.
          We do not knowingly collect personal information from children.
        </p>

        <h3>5. COOKIES AND TRACKING TECHNOLOGIES</h3>
        <p>
          We use cookies and similar technologies to enhance your experience,
          analyze usage, and personalize content and ads. You can control cookie
          settings through your browser.
        </p>

        <h3>6. DATA RETENTION</h3>
        <p>
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this policy, unless a longer
          retention period is required by law.
        </p>

        <h3>7. CHANGES TO THIS POLICY</h3>
        <p>
          We may update this privacy policy from time to time. Any changes will
          be posted on this page with the revised date.
        </p>

        <h3>8. CONTACT US</h3>
        <p>
          If you have any questions or concerns about this privacy policy or our
          privacy practices, please contact us at:
          <strong> privacy@sopakdf.com</strong>
        </p>
        <p>
          <em>Effective date: January 1, 2024</em>
        </p>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </section>
  );
};

export default PrivacyPolicy;
