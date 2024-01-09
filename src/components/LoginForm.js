import React, { useState } from "react";
import "../styles/LoginForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar_Register from "./Navbar_Register";



const LoginForm = ({ setLoginUser, isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/homepage");
      setIsLoggedIn("true");
    });
  };

  return (
    <div>
      <Navbar_Register/> 
      <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gradient-to-r from-red-500 from-10%  to-indigo-500 to-90%">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your Account
            </h1>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>

              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your Email"
                className="mb-4 p-2 rounded w-full text-black" // or use "text-gray-800"
              />
            </div>
            <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your Password"
              className="mb-4 p-2 rounded w-full text-black" // or use "text-gray-800"
            />
            </div>

            <div
              className="bg-blue-500 text-center hover:bg-blue-700 text-white py-2 px-4 rounded cursor-pointer mb-4"
              onClick={ //login
                () => history.push("/homepage")}
            >
              Login
            </div>
            <div className="mb-4 text-center font-bold text-white-500">OR</div>
            <div
              className="bg-green-500 text-center hover:bg-green-700 text-white py-2 px-4 rounded cursor-pointer"
              onClick={() => history.push("/signup")}
            >
              Register
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginForm;

// LoginForm.jsx
// LoginForm.jsx
