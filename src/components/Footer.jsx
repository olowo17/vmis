import React from "react";
import preview from "../assets/Preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* Logo and Description */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <img src={preview} alt="VMIS Logo" className="w-16 h-16 border-white border-2 rounded-md" />
            <h2 className="text-2xl font-bold">VMIS</h2>
          </div>
          <p className="mt-4 text-sm lg:text-base text-gray-400">
            Vehicle Monitoring and Identification System
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="index.html" className="hover:text-red-500 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition duration-300">
                Features
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center lg:text-right">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="mt-4 text-sm lg:text-base text-gray-400">Email: support@vmis.com</p>
          <div className="mt-6 flex justify-center lg:justify-end space-x-4">
            <a href="#" className="hover:text-blue-500 transition duration-300">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-sky-400 transition duration-300">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} VMIS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
