import React, { useState } from "react";
import "./Profile.css";
import FooterSection from "./../5-FooterSection/FooterSection";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
    shipping: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <div className="profile-container ">
        {/* Breadcrumb */}
        <div className="breadcrumb ">
          <a href="/">Home</a>{" "}
          <span>
            {" "}
            <ArrowForwardIosIcon fontSize="12px" />
          </span>{" "}
          <span className="active">Profile</span>
        </div>

        {/* Profile Information */}
        <h2 className="profile-title">Profile Information</h2>

        <form className="profile-form" onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Peter"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Ducker"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Email Address</label>
              <input
                style={{ borderRadius: "25px" }}
                type="email"
                name="email"
                placeholder="peterducker321@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                style={{ borderRadius: "25px" }}
                type="text"
                name="phone"
                placeholder="(+1) - 234 - 687215421"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Change Password */}
          <h3 className="section-title">Change Password</h3>
          <div className="form-row">
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                name="newPassword"
                placeholder="************"
                value={formData.newPassword}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="************"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Address */}
          <h3 className="section-title">Address</h3>
          <div className="form-group">
            <label>Shipping address</label>
            <textarea
              style={{
                height: "100px",
                padding: "10px",
                resize: "none", // يمنع المستخدم يكبر أو يصغر البوكس
              }}
              name="shipping"
              placeholder="Your address"
              value={formData.shipping}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                placeholder="Your state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="text"
                name="zip"
                placeholder="Your zip code"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </form>
      </div>
      <FooterSection />
    </div>
  );
};

export default Profile;
