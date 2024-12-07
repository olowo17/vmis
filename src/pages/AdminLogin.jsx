import React, { useState } from 'react';
import police from '../assets/Police Van 2.jpeg';
import Features from '../components/Features';
import { toast } from 'react-toastify';
import apiService from '../service/ApiService';
import { useNavigate } from 'react-router-dom'; // For redirect after successful login

const AdminLogin = ({
  title = 'Welcome to VMIS Admin Search Page',
  description = 'The Vehicle Monitoring and Identification System (VMIS) provides officers with an efficient platform to search for and manage vehicle-related data effortlessly. Monitor activity, retrieve vehicle details, and ensure community safety with ease.',
  adminLoginLink = '/admin',
}) => {

  const navigate = useNavigate();

  const [badgeNumber, setBadgeNumber] = useState('');
  const [error, setError] = useState('');
  

  const handleInputChange = (e) => {
    setBadgeNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!badgeNumber) {
      setError('Badge number is required');
      return;
    }

    try {
      const response = await apiService.adminLogin(badgeNumber);
      if (response.status === 200 || response.status === 201) {
        toast.success('Admin login successful!');
        navigate('/admin'); // Redirect to admin dashboard (or another page)
      } else {
        toast.error('Invalid badge number, please try again.');
      }
    } catch (error) {
      toast.error('Login failed. Please check your details.');
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 text-lg">
        {/* Hero Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-700">{description}</p>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
              <label
                htmlFor="coldCode"
                className="text-gray-800 font-medium whitespace-nowrap"
              >
                Admin Login Code
              </label>
              <input
                id="coldCode"
                type="password"
                value={badgeNumber}
                onChange={handleInputChange}
                placeholder="Enter VMIS Cold-Code"
                className="w-full md:w-1/3 px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}
              <button
                type="submit"
                className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Hero Image */}
        <div className="mt-8 md:mt-0 md:w-2/3 flex justify-center">
          <img
            src={police}
            alt="Officer Hero"
            className="w-full max-w-md md:max-w-2xl rounded-lg shadow-lg"
          />
        </div>
      </section>
      <Features />
    </>
  );
};

export default AdminLogin;
