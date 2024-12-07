import React from 'react'
import profile from "../assets/gpt4.png"
import Sidebar from '../utilities/Sidebar';

const Admin = () => {
  return (
    <section className="flex flex-col md:flex-row max-h-screen">
      {/* Sidebar */}
    
      <Sidebar/>
      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4 md:p-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md p-4 rounded mb-6">
        {/* <div className="flex items-center space-x-4">
            <img
              src={profile}
              alt="Admin Profile"
              className="w-20 h-20 rounded-full bg-gray-300"
            />
          </div> */}
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Admin Dashboard</h2>
        </header>

        {/* Dashboard Metrics */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white shadow-md rounded p-4 text-center">
            <h3 className="text-lg font-semibold text-blue-900">Total Registered Vehicles</h3>
            <p className="text-2xl font-bold text-green-800">1,234</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 text-center">
            <h3 className="text-lg font-semibold text-blue-900">Registered Officers</h3>
            <p className="text-2xl font-bold text-purple-800">345</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 text-center">
            <h3 className="text-lg font-semibold text-blue-900">Plate Number Queries</h3>
            <p className="text-2xl font-bold text-blue-600">567</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 text-center">
            <h3 className="text-lg font-semibold text-blue-900">Flagged Vehicles</h3>
            <p className="text-2xl font-bold text-red-800">12</p>
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-white shadow-md rounded p-6">
          <h3 className="text-lg font-semibold mb-4 text-blue-900">Recent Vehicle Queries</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="p-2 text-left">Plate Number</th>
                <th className="p-2 text-left">Owner Name</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Date Queried</th>
              </tr>
            </thead>
            <tbody className='text-xl'>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">AB123CD</td>
                <td className="p-2">John Salami</td>
                <td className="p-2 text-green-600">Cleared</td>
                <td className="p-2">2024-11-11</td>
              </tr>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">EF456GH</td>
                <td className="p-2">Chineye Molokwu</td>
                <td className="p-2 text-rose-600">Flagged</td>
                <td className="p-2">2024-11-10</td>
              </tr>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">EF456GH</td>
                <td className="p-2">Victor Ifeanna</td>
                <td className="p-2 text-yellow-600">Pending</td>
                <td className="p-2">2024-11-10</td>
              </tr>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">EF456GH</td>
                <td className="p-2">Jane Calistus</td>
                <td className="p-2 text-rose-600">Flagged</td>
                <td className="p-2">2024-11-10</td>
              </tr>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">EF456GH</td>
                <td className="p-2">Edet Okon</td>
                <td className="p-2 text-green-600">Cleared</td>
                <td className="p-2">2024-09-10</td>
              </tr>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">EF456GH</td>
                <td className="p-2">Yahaya Mohammed</td>
                <td className="p-2 text-rose-600">Flagged</td>
                <td className="p-2">2023-03-19</td>
              </tr>
              <tr className="hover:bg-gray-600 hover:text-white">
                <td className="p-2">EF456GH</td>
                <td className="p-2">Felix Azubike</td>
                <td className="p-2 text-yellow-600">Pending</td>
                <td className="p-2">2022-07-16</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </section>
      </main>
    </section>
  );

}

export default Admin
