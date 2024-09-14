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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "* Firstname is required";
    } else {
      newErrors.firstName = "";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "* Lastname is required";
    } else {
      newErrors.lastName = "";
    }

    if (!formData.email.trim()) {
      newErrors.email = "* Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "* Email is invalid";
    } else {
      newErrors.email = "";
    }

    if (!formData.password) {
      newErrors.password = "* Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "* Password must be at least 8 characters";
    } else {
      newErrors.password = "";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "* Passwords do not match";
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form data:", formData);
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Please correct the errors in the form!");
    }

    toast.success("Successfully toasted!");
    console.log(formData);
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
            <div>
              <i class="fa fa-user" aria-hidden="true"></i>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="off"
              />
              <p className="alertError">{errors.firstName}</p>
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="off"
              />
              <p className="alertError">{errors.lastName}</p>
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <p className="alertError">{errors.email}</p>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              autoComplete="off"
            />
            <p className="alertError">{errors.password}</p>
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="off"
            />
            <p className="alertError">{errors.confirmPassword}</p>
          </div>

          <div className="authentic">
            <input type="checkbox" />
            <p>
              By creating an account, you agree to our{" "}
              <a href="/terms">Terms & Conditions</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </p>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Or sign up with</p>
        <div className="social-signup">
          <button className="google-btn">Google</button>
          <button className="facebook-btn">Facebook</button>
        </div>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
