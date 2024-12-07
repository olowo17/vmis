import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiService from "../service/ApiService";

const RegisterCar = () => {
  const [formData, setFormData] = useState({
    carModel: "",
    plateNumber: "",
    carOwner: "",
    nin: "",
    driversLicense: "",
    description: "",
    engineNumber: "",
    yearOfManufacture: "",
    color: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form input
  const validateForm = () => {
    const newErrors = {};
    if (!formData.carModel) newErrors.carModel = "Car model is required.";
    if (!formData.plateNumber) newErrors.plateNumber = "Plate number is required.";
    if (!formData.carOwner) newErrors.carOwner = "Car owner is required.";
    if (!formData.nin || formData.nin.length !== 10) newErrors.nin = "NIN must be 10 digits.";
    if (!formData.driversLicense) newErrors.driversLicense = "Driver's license is required.";
    if (!formData.description) newErrors.description = "Description is required.";
    if (!formData.engineNumber) newErrors.engineNumber = "Engine number is required.";
    if (!formData.yearOfManufacture || !/^\d{4}$/.test(formData.yearOfManufacture))
      newErrors.yearOfManufacture = "Year of manufacture must be a valid 4-digit year.";
    if (!formData.color) newErrors.color = "Car color is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Make API call to register the car
      const response = await apiService.registerCar(formData);

      // Display success toast if response is successful
      toast.success("Car registered successfully!", { position: "top-right" });
    } catch (error) {
      // Display error toast if registration fails
      toast.error("Car registration failed. Please try again.", { position: "top-right" });
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Register Car</h2>

        {/* Flex Group for Car Model and Plate Number */}
        <div className="flex gap-4 mb-6">
          {/* Car Model */}
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Car Model</label>
            <input
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.carModel ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.carModel && <p className="text-red-500 text-sm">{errors.carModel}</p>}
          </div>

          {/* Plate Number */}
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Plate Number</label>
            <input
              type="text"
              name="plateNumber"
              value={formData.plateNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.plateNumber ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.plateNumber && <p className="text-red-500 text-sm">{errors.plateNumber}</p>}
          </div>
        </div>

        {/* Flex Group for Car Owner and NIN */}
        <div className="flex gap-4 mb-6">
          {/* Car Owner */}
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Car Owner</label>
            <input
              type="text"
              name="carOwner"
              value={formData.carOwner}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.carOwner ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.carOwner && <p className="text-red-500 text-sm">{errors.carOwner}</p>}
          </div>

          {/* NIN */}
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">NIN</label>
            <input
              type="text"
              name="nin"
              value={formData.nin}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.nin ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.nin && <p className="text-red-500 text-sm">{errors.nin}</p>}
          </div>
        </div>

        {/* Driver's License and Description (stacked vertically) */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Driver's License</label>
          <input
            type="text"
            name="driversLicense"
            value={formData.driversLicense}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${errors.driversLicense ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.driversLicense && <p className="text-red-500 text-sm">{errors.driversLicense}</p>}
        </div>

        {/* Description Field */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${errors.description ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Engine Number and Year of Manufacture (flex group) */}
        <div className="flex gap-4 mb-6">
          {/* Engine Number */}
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Engine Number</label>
            <input
              type="text"
              name="engineNumber"
              value={formData.engineNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.engineNumber ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.engineNumber && <p className="text-red-500 text-sm">{errors.engineNumber}</p>}
          </div>

          {/* Year of Manufacture */}
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Year of Manufacture</label>
            <input
              type="text"
              name="yearOfManufacture"
              value={formData.yearOfManufacture}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${errors.yearOfManufacture ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.yearOfManufacture && <p className="text-red-500 text-sm">{errors.yearOfManufacture}</p>}
          </div>
        </div>

        {/* Car Color */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Color</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${errors.color ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.color && <p className="text-red-500 text-sm">{errors.color}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Register Car
        </button>
      </form>
    </div>
  );
};

export default RegisterCar;
