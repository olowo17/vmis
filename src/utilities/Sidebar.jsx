import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-gray-600 text-white flex flex-col p-6">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">VMIS Admin</h1>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userManagement"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              User Management
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              Register Officer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/database"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              Vehicle Database
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reports"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              Reports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/registerCar"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              Register Car
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `block p-2 rounded ${isActive ? "bg-blue-800" : "hover:bg-blue-700"}`
              }
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;