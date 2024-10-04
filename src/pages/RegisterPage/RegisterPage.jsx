import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <div className="w-ful flex h-screen bg-neutral-300 px-[10%] py-5">
      <div className="hidden md:flex w-full h-full flex-col items-center bg-[#252526] text-white px-0 py-[30px] rounded-tl-[3%] rounded-bl-[3%] ">
        <h1 className="text-2xl font-bold ">Fashion</h1>
        <img className="w-[70%]" src={img_1} alt="ads" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2 bg-white md:rounded-tr-[3%] md:rounded-br-[3%] ">
        <form className="w-4/5 flex flex-col" onSubmit={handleSubmit}>
          <h2 className="text-center text-xl mb-2">Sign up for an account</h2>

          <input
            className="w-full border my-1.5 p-2 rounded-[10px] border-solid border-[#ccc] text-sm"
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border my-1.5 p-2 rounded-[10px] border-solid border-[#ccc] text-sm"
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border my-1.5 p-2 rounded-[10px] border-solid border-[#ccc] text-sm"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            className="w-full border my-1.5 p-2 rounded-[10px] border-solid border-[#ccc] text-sm"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength="5"
            required
          />

          <input
            className="w-full border my-1.5 p-2 rounded-[10px] border-solid border-[#ccc] text-sm"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <p className="alertError">{errors.confirmPassword}</p>

          <div className="flex mt-2 mb-[10px] mx-0 text-sm mb-2">
            <input className="w-5 h-5 mr-2.5 mt-0" type="checkbox" />
            <p>
              By creating an account, you agree to our{" "}
              <Link to="/terms" className="text-[blue]">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to="/privacy " className="text-[blue]">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
          <button
            className="w-full mb-1 bg-[#007bff] text-[white] cursor-pointer mx-0 my-[1px] rounded-[5px] border-[none] hover:bg-[#0056b3]"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p>Or sign up with</p>
        <div className="text-center w-4/5  flex justify-between mt-1 gap-[15px]">
          <button className="w-full text-[15px]  bg-[#a0b3dc] text-[white] hover:bg-[#2d4373] cursor-pointer mx-0 my-[5px] p-2.5 rounded-[5px] border-[none]">
            <i class="fa-brands fa-google"></i> Google
          </button>
          <button className="w-full text-[15px] bg-[#f2a095] text-[white] hover:bg-[#c23321] cursor-pointer mx-0 my-[5px] p-2.5 rounded-[5px] border-[none]">
            <i class="fa-brands fa-facebook"></i> Facebook
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="font-[bold] text-[blue]">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default RegisterPage;
