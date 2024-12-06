import React from 'react'
import Sidebar from '../utilities/Sidebar';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';

const Reports = () => {
  return (
    <section className="userManager bg-gray-100 min-h-screen">
    <div className="dashboard-container flex">
      {/* Sidebar */}
     <Sidebar/>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center bg-white p-4 rounded shadow mb-6">
          <h2 className="text-2xl font-bold">Reports & Analytics</h2>
          <div className="profile flex items-center space-x-2">
            <img
              src="profile-placeholder.png"
              alt="Admin Profile"
              className="w-8 h-8 rounded-full"
            />
            <span>Admin</span>
          </div>
        </header>

        {/* Reports Section */}
        <section className="analytics">
          {/* Graphs Section */}
          <div className="charts-container grid md:grid-cols-2 gap-6 mb-6">
            <div className="chart bg-white p-4 rounded shadow">
              <h4 className="text-lg font-semibold mb-4">Vehicle Activity Overview</h4>
              <canvas id="activityChart"></canvas>
            </div>
            <div className="chart bg-white p-4 rounded shadow">
              <h4 className="text-lg font-semibold mb-4">Flagged Vehicles Breakdown</h4>
              <canvas id="flaggedChart"></canvas>
            </div>
          </div>

          {/* Data Table */}
          <div className="table-container bg-white p-4 rounded shadow mb-6">
            <h4 className="text-lg font-semibold mb-4">Detailed Reports</h4>
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-300 p-2 text-left">Date</th>
                  <th className="border border-gray-300 p-2 text-left">Vehicle Plate</th>
                  <th className="border border-gray-300 p-2 text-left">Activity</th>
                  <th className="border border-gray-300 p-2 text-left">Status</th>
                  <th className="border border-gray-300 p-2 text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">2024-11-10</td>
                  <td className="border border-gray-300 p-2">ABC123XYZ</td>
                  <td className="border border-gray-300 p-2">Entry</td>
                  <td className="border border-gray-300 p-2 text-red-500">Flagged</td>
                  <td className="border border-gray-300 p-2">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">2024-11-09</td>
                  <td className="border border-gray-300 p-2">EFG456LMN</td>
                  <td className="border border-gray-300 p-2">Exit</td>
                  <td className="border border-gray-300 p-2 text-green-500">Clear</td>
                  <td className="border border-gray-300 p-2">
                    <button className="text-blue-600 hover:underline">View</button>
                  </td>
                </tr>
                {/* Add more rows dynamically */}
              </tbody>
            </table>
          </div>

          {/* Export Button */}
          <div className="export-section flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Export All Data
            </button>
          </div>
        </section>
      </main>
    </div>
    <Features/>
  </section>
);
  
}

export default Reports
