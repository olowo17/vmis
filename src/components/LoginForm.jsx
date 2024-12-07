import React, { useState } from "react";
import policeVan from "../assets/Police_Van-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../service/ApiService"; // Assuming you have apiService to handle API calls

const LoginForm = () => {
  const navigate = useNavigate();
  const [securityId, setSecurityId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "securityId") setSecurityId(value);
    if (name === "password") setPassword(value);
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!securityId || !password) {
      setError("Please fill in all fields.");
      return;
    }
  
    try {
      // Mocking a backend check for valid credentials
      if (securityId === "VMIS80860" && password === "123456") {
        toast.success("Login successful!");
        navigate("/userDashboard"); // Navigate to the user dashboard
      } else {
        toast.error("Invalid credentials. Please try again.");
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      // Error handling remains the same
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
    
  //   if (!securityId || !password) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     // Assuming you are using an API service to call login API
  //     const response = await apiService.officerLogin(securityId, password);

  //     if (response.status === 200 || response.status === 201) {
  //       toast.success("Login successful!");
  //       navigate("/userDashboard"); // Navigate to the user dashboard
  //     } else {
  //       toast.error("Invalid credentials. Please try again.");
  //     }
  //   } catch (error) {
  //     toast.error("Login failed. Please check your credentials.");
  //     console.error("Login error:", error);
  //   }
  // };

  return (
    <section className="flex items-center justify-center text-center h-screen bg-gray-400 max-h-screen overflow-hidden">
      <div className="bg-gray-200 w-full sm:w-96 p-8 rounded-lg">
        <div className="flex justify-center mb-6">
          <img
            src={policeVan}
            alt="admin's pics"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-semibold">LOGIN</h5>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              name="securityId"
              value={securityId}
              placeholder="Security ID Number"
              onChange={handleChange}
              required
              className="border-none rounded-lg w-full sm:w-72 h-10 p-2 bg-gray-300 focus:outline-none"
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              required
              className="border-none rounded-lg w-full sm:w-72 h-10 p-2 mt-4 bg-gray-300 focus:outline-none"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-6 flex">
            <button
              className="w-full sm:w-72 h-10 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-red-600 focus:outline-none m-auto"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p className="text-black font-bold">
          <a href="#">Forgotten password?</a>
        </p>
      </div>
    </section>
  );
};
export default LoginForm;
