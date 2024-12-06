import React from 'react';
import police from '../assets/Police Van 2.jpeg';
import Features from '../components/Features';

const AdminLogin = ({
  title = 'Welcome to VMIS Admin Search Page',
  description = 'The Vehicle Monitoring and Identification System (VMIS) provides officers with an efficient platform to search for and manage vehicle-related data effortlessly. Monitor activity, retrieve vehicle details, and ensure community safety with ease.',
  adminLoginLink = '/admin',
}) => {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100 text-lg">
      {/* Hero Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-700">{description}</p>
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
            maxLength="4"
            placeholder="Enter VMIS Cold-Code"
            className="w-full md:w-1/3 px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <a href={adminLoginLink}>
            <button className="px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
            </button>
          </a>
        </div>
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
    <Features/>
    </>
    

  );
};

export default AdminLogin;