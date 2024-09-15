import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import toast from "react-hot-toast";
import img_1 from "../../asserts/images/ads.png";
import axios from "axios";

const RegisterPage = () => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "* Passwords do not match";
    } else {
      newErrors.confirmPassword = "";
    }

    setErrors(newErrors);
    if (newErrors?.confirmPassword?.length === 0) {
      try {
        const addDataUser = {
          email: formData.email,
          username: formData.username,
          password: formData.password,
          name: {
            firstname: formData.firstname,
            lastname: formData.lastname,
          },
        };

        const response = await axios.post(
          "https://fakestoreapi.com/users",
          addDataUser
        );

        console.log(response);

        if (response.status === 200) {
          toast.success("Created user successfully");
          navigate("/");
        } else {
          toast.error("Created user Unsuccessfully!");
        }
      } catch (error) {
        console.error("There was an error making the request!", error);
        toast.error("Failed to create user");
      }
    } else {
      toast.error("Please fill out all required fields.");
    }
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
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              minLength="8"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
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
