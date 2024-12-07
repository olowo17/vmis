import React from "react";
import { Link } from "react-router-dom";
import preview from "../assets/Preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,  faHeadset, faCar} from "@fortawesome/free-solid-svg-icons";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              src={preview}
              alt="VMIS Logo"
              className="h-14 w-16 md:h-16 md:w-20 border-white border-4 rounded-md"
            />
          </Link>
          <h2 className="text-xl md:text-2xl font-semibold text-white bg-red-600 px-3 py-2 rounded-md">
            Vehicle Monitoring Identification System
          </h2>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 md:mt-0 w-full md:w-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-8 text-lg">
            <li>
              <Link to="/" className="hover:text-green-400 flex items-center transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faHouse} className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <Link to="/userDashboard" className="hover:text-green-400 flex items-center transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faCar} className="mr-2" /> Vehicle Search
              </Link>
            </li>
            <li>
              <Link to="/chat" className="hover:text-green-400 flex items-center transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faRocketchat} className="mr-2" /> Chat
              </Link>
            </li>
            <li>
              <Link to="/incidentReport" className="hover:text-green-400 flex items-center transition duration-300 ease-in-out">
                <FontAwesomeIcon icon={faHeadset} className="mr-2" /> Distress Call
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
