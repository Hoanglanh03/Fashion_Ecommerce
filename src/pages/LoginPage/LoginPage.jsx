import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import toast from "react-hot-toast";
import img_1 from "../../asserts/images/ads.png";
import axios from "axios";

const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log(Object.keys(newErrors));
      try {
        const loginData = {
          email: formData.email,
          password: formData.password,
        };

        const response = await axios.post(
          "https://fakestoreapi.com/users",
          loginData
        );

        if (response.status === 200) {
          toast.success("Login successfully");
          navigate("/");
        } else {
          toast.error("Login Unsuccessful!");
        }
      } catch (error) {
        console.error("There was an error making the request!", error);
        toast.error("Failed to login, please try again.");
      }
    } else {
      toast.error("Please fill out all required fields.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Fashion</h1>
        <img className="image-placeholder" src={img_1} alt="ads" />
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="title-login">Sign in for an account</h1>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error-message">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength="2"
            required
          />
          {errors.password && (
            <p className="error-message">{errors.password}</p>
          )}
          <a href="/terms">Forget Password?</a>

          <button type="submit">Sign In</button>
        </form>

        <p>Or sign up with</p>

        <div className="social-login">
          <button className="login-google-btn">
            <i className="fa-brands fa-google"></i> Google
          </button>
          <button className="login-facebook-btn">
            <i className="fa-brands fa-facebook"></i> Facebook
          </button>
        </div>

        <p className="login">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
