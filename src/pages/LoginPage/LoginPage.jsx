import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/state";
import axios from "axios";
import toast from "react-hot-toast";
import img_1 from "../../asserts/images/ads.png";

const LoginPage = () => {
  const dispatch = useDispatch();
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
    const { email, password } = formData;

    try {
      const loginData = { email, password };
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        loginData
      );

      if (response.status === 200) {
        toast.success("Login successfully");
        dispatch(setLogin({ email }));
        navigate("/");
      } else {
        toast.error("Login Unsuccessful!");
      }
    } catch (error) {
      toast.error("Failed to login, please try again.");
    }
  };

  return (
    <div className="w-full flex h-screen bg-neutral-300 px-[10%] py-5">
      <div className=" hidden md:flex w-full h-full flex-col items-center bg-[#252526] text-white md:px-0 py-[30px] md:rounded-tl-[3%] md:rounded-bl-[3%] login-left">
        <h1 className="text-2xl font-bold">Fashion</h1>
        <img className="w-[70%]" src={img_1} alt="ads" />
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-5 bg-white md:rounded-tr-[3%] md:rounded-br-[3%] login-right">
        <form
          className="w-4/5 flex flex-col gap-[15px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center">Sign in for an account</h1>
          <input
            className="w-full border mx-0 my-1.5 p-2.5 rounded-[10px] border-solid border-[#ccc]"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="w-full border mx-0 my-1.5 p-2.5 rounded-[10px] border-solid border-[#ccc]"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            minLength="5"
            required
          />

          <Link to="/terms" className="no-underline">
            Forget Password?
          </Link>
          <button
            type="submit"
            className="w-full text-[15px] font-semibold bg-[#1078e8] text-[white] cursor-pointer mx-0 my-[5px] p-2.5 rounded-[5px] border-[none]"
          >
            Sign In
          </button>
        </form>

        <p>Or sign up with</p>

        <div className="w-4/5 flex justify-between gap-[15px]">
          <button className="w-full text-[15px] font-semibold bg-[#a0b3dc] hover:bg-[#2d4373] text-[white] cursor-pointer mx-0 my-[5px] p-2.5 rounded-[5px] border-[none]">
            <i className="fa-brands fa-google"></i> Google
          </button>
          <button className="w-full text-[15px] font-semibold bg-[#f2a095] hover:bg-[#c23321] text-[white] cursor-pointer mx-0 my-[5px] p-2.5 rounded-[5px] border-[none]">
            <i className="fa-brands fa-facebook"></i> Facebook
          </button>
        </div>

        <p className="login">
          Don't have an account?{" "}
          <Link to="/register" className="font-[bold] text-[blue]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
