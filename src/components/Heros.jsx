import React from 'react'
import police from "../assets/Police Van 2.jpeg"

const Heros = ({
    title = "Welcome to VMIS Officer Search Page",
  description = "The Vehicle Monitoring and Identification System (VMIS) provides officers with an efficient platform to search for and manage vehicle-related data effortlessly. Monitor activity, retrieve vehicle details, and ensure community safety with ease.",
  imageSrc,
  officerLoginLink = "/login",
  adminLoginLink = "/adminLogin",
}) => {
  return (
    <>
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 text-xl">
      {/* Hero Content */}
      <div className="text-center md:text-left md:w-1/2 space-y-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">{title}</h1>
        <p className="text-gray-600  ">{description}</p>
        <div className="flex justify-center md:justify-start gap-4">
          <a href={officerLoginLink}>
            <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-8">
              Officer Login
            </button>
          </a>
          <a href={adminLoginLink}>
            <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500 mt-8">
              Admin Login
            </button>
          </a>
        </div>
      </div>
      {/* Hero Image */}
      <div className="mt-6 md:mt-0 md:w-2/3 flex justify-center">
        <img
          src={police}
          alt="Officer Hero"
          className="w-full max-w-md md:max-w-2xl rounded-lg shadow-md "
        />
      </div>
    </section>
    </>
    
  );

}

export default Heros
