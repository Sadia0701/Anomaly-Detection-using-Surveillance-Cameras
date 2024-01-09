import React, { useState } from "react";
import "../styles/LoginForm.css"; // Import the same style as LoginForm
import axios from "axios";
import Navbar_Register from "./Navbar_Register";
import Footer from "./Footer";

import { useHistory } from "react-router-dom";

const SignupForm = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        history.push("/login");
      });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div>
    <Navbar_Register/>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mb-24">
        
        <div className="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-red-500 from-10%  to-indigo-500 to-90%">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register for an Account
            </h1>
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="mb-4 p-2 rounded w-full text-black"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="mb-4 p-2 rounded w-full text-black"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="mb-4 p-2 rounded w-full text-black"
              />
            </div>
            <div>
              <label
                htmlFor="reEnterPassword"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Re-Enter Password
              </label>
              <input
                type="password"
                name="reEnterPassword"
                value={user.reEnterPassword}
                onChange={handleChange}
                placeholder="Re-enter your Password"
                className="mb-4 p-2 rounded w-full text-black"
              />
            </div>
            <div
              className="bg-green-500 text-center hover:bg-green-700 text-white py-2 px-4 rounded cursor-pointer mb-4"
              onClick={register}
            >
              Register
            </div>
            <div className="mb-4 text-center font-bold text-black-500">OR</div>
            <div
              className="bg-blue-500 text-center hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer"
              onClick={() => history.push("/login")}
            >
              Login
            </div>
          </div>
        </div>
      </div>
      <Footer/>
</div>
  );
};

export default SignupForm;
