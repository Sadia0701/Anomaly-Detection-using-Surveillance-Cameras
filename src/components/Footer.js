// Footer.js
import "../styles//Footer.css";
import React from 'react';

const Footer = () => {
  return (
    <footer >
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-rose-500 to-90% footer">
        <p>&copy; 2024 - Anomaly Benchmarking Application</p>
        {/* <ul className="footer-links">
          <li>
        <a href="#" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="#" className="hover:underline">About Us</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
        </ul> */}
      </div>
    </footer>
 );
}



{/* <footer className="footer mt-8">
  <div className="footer-content">
    <p>&copy; 2024 Your Company</p>
    <ul className="footer-links">
      <li>
        <a href="#" className="hover:underline">Home</a>
      </li>
      <li>
        <a href="#" className="hover:underline">About Us</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul>
    <div className="contact-info mt-4">
      <p>Email: info@yourcompany.com</p>
      <p>Phone: +1 (555) 123-4567</p>
    </div>
  </div>
</footer> */}


 
export default Footer;
