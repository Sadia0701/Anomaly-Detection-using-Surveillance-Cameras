// Navbar.js
import "../styles//Navbar.css";
import React from 'react';
import logo from "../assets/logo.png"; 
import LogoutButton from "../LogoutButton";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar_LogOut = () => {
  

  return (
    <nav className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-rose-500 to-90% navbar">
      <div className="navbar-items">
        <img src={logo} alt="Logo" className="logo" />
        <span >Anomaly Benchmarking Application</span>
       </div>
        <div >
            <Link class="text-white bg-blue-500 hover:bg-white-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" to= 'signup'>
            Log Out
            </Link>
              
        </div>
     

    </nav>
  );
}

export default Navbar_LogOut;
