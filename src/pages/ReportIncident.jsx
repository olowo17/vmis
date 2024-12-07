import React, { useState } from "react";
import { toast } from "react-toastify";
import apiService from "../service/ApiService";

const ReportIncident = () => {
  const [formData, setFormData] = useState({
    description: "",
    location: "",
    plateNumber: "",
    witness: "",
    reporterPhoneNumber: "",
    reportReason: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.description) newErrors.description = "Description is required.";
    if (!formData.location) newErrors.location = "Location is required.";
    if (!formData.plateNumber) newErrors.plateNumber = "Plate number is required.";
    if (!formData.witness) newErrors.witness = "Witness name is required.";
    if (
      !formData.reporterPhoneNumber ||
      !/^\d{10,11}$/.test(formData.reporterPhoneNumber)
    ) {
      newErrors.reporterPhoneNumber = "Valid phone number is required (10-11 digits).";
    }
    if (!formData.reportReason) newErrors.reportReason = "Reason for the report is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      // Simulate backend validation logic for incident reporting
      if (
        validateForm()
      ) {
        // Display success toast if the form data is valid
        alert("success")
        toast.success("Incident reported successfully!");
  
        // Reset form fields
        setFormData({
          description: "",
          location: "",
          plateNumber: "",
          witness: "",
          reporterPhoneNumber: "",
          reportReason: "",
        });
      } else {
        // Display error toast if data is invalid
        toast.error("Failed to report the incident. Please check your input.");
        throw new Error("Invalid incident report data");
      }
    } catch (error) {
      // Log the error for debugging purposes
      toast.error("Error reporting incident. Please check your input.");
      console.error("Report error:", error.message);
    }
  };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     try {
//       const response = await apiService.reportIncident(formData);
//       if (response.status === 200 || response.status === 201) {
//         toast.success("Incident reported successfully!");
//         setFormData({
//           description: "",
//           location: "",
//           plateNumber: "",
//           witness: "",
//           reporterPhoneNumber: "",
//           reportReason: "",
//         });
//       } else {
//         toast.error("Failed to report the incident. Please try again.");
//       }
//     } catch (error) {
//       toast.error("Error reporting incident. Please check your input.");
//       console.error("Report error:", error);
//     }
//   };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Report an Incident</h2>

        {/* Description (Full Width) */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-md ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Location & Plate Number (Flex Row) */}
        <div className="mb-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Plate Number</label>
            <input
              type="text"
              name="plateNumber"
              value={formData.plateNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.plateNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.plateNumber && <p className="text-red-500 text-sm">{errors.plateNumber}</p>}
          </div>
        </div>

        {/* Witness Name & Reporter Phone Number (Flex Row) */}
        <div className="mb-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Witness Name</label>
            <input
              type="text"
              name="witness"
              value={formData.witness}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.witness ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.witness && <p className="text-red-500 text-sm">{errors.witness}</p>}
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Reporter Phone Number</label>
            <input
              type="text"
              name="reporterPhoneNumber"
              value={formData.reporterPhoneNumber}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.reporterPhoneNumber ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.reporterPhoneNumber && (
              <p className="text-red-500 text-sm">{errors.reporterPhoneNumber}</p>
            )}
          </div>
        </div>

        {/* Report Reason (Full Width) */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Report Reason</label>
          <input
            type="text"
            name="reportReason"
            value={formData.reportReason}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${
              errors.reportReason ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.reportReason && (
            <p className="text-red-500 text-sm">{errors.reportReason}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportIncident;
