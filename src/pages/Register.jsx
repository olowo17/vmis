import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiService from "../service/ApiService";

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phoneNumber: "",
    governmentAgency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = "First name is required.";
    if (!formData.lastname) newErrors.lastname = "Last name is required.";
    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (!formData.phoneNumber || !/^\d{10,11}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be 10-11 digits.";
    if (!formData.governmentAgency)
      newErrors.governmentAgency = "Government agency is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      // Mocking a backend check for registration success
      if (validateForm()) { // Example validation criteria
        toast.success("Registration successful! Badge Number:VMIS503" , { position: "top-right" , autoClose: 60000,});
      } else {
        toast.error("Registration failed. Please check your details.", {
          position: "top-right",
        });
        throw new Error("Invalid registration details");
      }
    } catch (error) {
      // Error handling remains the same
      console.error("Registration error:", error.message);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (!validateForm()) return;
  
  //   try {
  //     // API call
  //     await apiService.registerOfficer(formData);
  
  //     // If successful, show a success toast
  //     toast.success("Registration successful!", { position: "top-right" });
  //   } catch (error) {
  //     // Handle errors with a toast
  //     toast.error(
  //       error.response?.data?.message || "Registration failed. Please check your details.",
  //       { position: "top-right" }
  //     );
  //     console.error(error.response?.data || error.message);
  //   }
  // };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register</h2>

        {/* Input Fields */}
        {["firstname", "lastname", "email", "password", "phoneNumber", "governmentAgency"].map(
          (field) => (
            <div className="mb-4" key={field}>
              <label className="block text-gray-700 mb-1 capitalize">{field}</label>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-md ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm">{errors[field]}</p>
              )}
            </div>
          )
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
