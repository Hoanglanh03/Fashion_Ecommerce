import React, { useState } from "react";
import "./RegisterPage.css"; 
import toast from "react-hot-toast";
import img_1 from "../../asserts/images/ads.png";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Successfully toasted!");
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h1>Fashion</h1>
        <div className="image-placeholder">
          <img src={img_1} alt="ads" />
        </div>
      </div>

      <div className="signup-right">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up for an Account</h2>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="Firstname"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="Lastname"
              placeholder="Lastname"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="Password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
          />
          <input
            type="confirm password"
            name="Password"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            minLength="8"
          />
          <label>
            <input type="checkbox" required />
            By creating an account, you agree to our{" "}
            <a href="/terms">Terms & Conditions</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </label>
          <button type="submit">Sign Up</button>
          <p>Or sign up with</p>
          <div className="social-signup">
            <button className="google-btn">Google</button>
            <button className="facebook-btn">Facebook</button>
          </div>
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default RegisterPage;
