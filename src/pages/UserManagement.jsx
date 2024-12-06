import React from 'react'

const UserManagement = () => {
  return (
    <section className="userManager">
    <div className="main-content p-6">
      {/* Header */}
      <header className="header flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">User Management</h2>
        <div className="profile flex items-center">
          {/* <img src="profile-placeholder.png" alt="Admin Profile" className="w-10 h-10 rounded-full mr-2" /> */}
          <span>Admin</span>
        </div>
      </header>
  
      {/* User Management Table */}
      <section className="user-management">
        <div className="header-row flex flex-col sm:flex-row justify-between items-center mb-6">
          <h3 className="text-lg font-semibold mb-4 sm:mb-0">Registered Officers</h3>
          <button className="add-user-btn bg-blue-600 text-white py-2 px-4 rounded">
            <a href="#officers-reg">Add New Officer</a>
          </button>
        </div>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Role</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-center'>
              <td className="border p-2">001</td>
              <td className="border p-2">John Doe</td>
              <td className="border p-2">john.doe@example.com</td>
              <td className="border p-2">Officer</td>
              <td className="border p-2"><span className="status active text-green-500">Active</span></td>
              <td className="border p-2 flex justify-around">
                <button className="edit-btn bg-green-600 text-white py-1 px-3 rounded mr-2">Edit</button>
                <button className="delete-btn bg-red-600 text-white py-1 px-3 rounded">Delete</button>
              </td>
            </tr>
            <tr className='text-center'>
              <td className="border p-2">002</td>
              <td className="border p-2">Jane Smith</td>
              <td className="border p-2">jane.smith@example.com</td>
              <td className="border p-2">Supervisor</td>
              <td className="border p-2"><span className="status inactive text-red-500">Inactive</span></td>
              <td className="border p-2 flex justify-around">
                <button className="edit-btn bg-green-600 text-white py-1 px-3 rounded mr-2">Edit</button>
                <button className="delete-btn bg-red-600 text-white py-1 px-3 rounded">Delete</button>
              </td>
            </tr>
            {/* Additional rows */}
          </tbody>
        </table>
      </section>
  
      {/* Officers Section */}
      <section className="officers-section flex flex-col sm:flex-row gap-6 mt-8" id="officers-reg">
        {/* Add Officer Form */}
        <div className="add-officer-form flex-1 bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Add New Officer</h3>
          <form id="officer-form" onSubmit={(e) => e.preventDefault()} autoComplete="off">
            <label htmlFor="officer-name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" id="officerName" className="w-full p-3 border border-gray-300 rounded mb-4" placeholder="Enter officer's name" required />
  
            <label htmlFor="officer-id" className="block text-sm font-medium text-gray-700 mb-2">Officer ID</label>
            <input type="text" id="officer-id" className="w-full p-3 border border-gray-300 rounded mb-4" placeholder="Enter officer's ID" required />
  
            <label htmlFor="rank" className="block text-sm font-medium text-gray-700 mb-2">Rank</label>
            <select id="rank" name="rank" className="w-full p-3 border border-gray-300 rounded mb-4" required>
              <option value="">Select rank</option>
              <option value="Inspector">Inspector</option>
              <option value="Sergeant">Sergeant</option>
              <option value="Constable">Constable</option>
              <option value="Commander">Commander</option>
            </select>
  
            <label htmlFor="officer-email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" id="officer-email" className="w-full p-3 border border-gray-300 rounded mb-4" placeholder="Enter officer's email" required />
  
            <label htmlFor="officer-phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" id="officer-phone" className="w-full p-3 border border-gray-300 rounded mb-4" placeholder="Enter officer's phone number" required />
  
            <button type="submit" className="add-btn bg-blue-600 text-white py-2 px-6 rounded">Add Officer</button>
          </form>
        </div>
  
        {/* Officers List */}
        <div className="officers-list flex-2 bg-white p-6 rounded shadow ">
          <h3 className="text-lg font-semibold mb-4">Registered Officers</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className='text-center'>
                <th className="border p-2 text-center">Officer ID</th>
                <th className="border p-2 text-center">Name</th>
                <th className="border p-2 text-center">Email</th>
                <th className="border p-2 text-center">Phone</th>
                <th className="border p-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Officer rows will be dynamically added here */}
            </tbody>
          </table>
        </div>
      </section>
  
      {/* Monitoring Login Activity Section */}
      <section className="officer-activity-monitoring mt-6 bg-white p-6 rounded shadow">
        <header className="header flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Monitor Login Activity</h2>
          <div className="profile flex items-center">
            {/* <img src="profile-placeholder.png" alt="Admin Profile" className="w-10 h-10 rounded-full mr-2" /> */}
            <span>Admin</span>
          </div>
        </header>
  
        <section className="login-activity-section">
          <h3 className="text-lg font-semibold mb-4">Login Activity</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Officer ID</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Login Timestamp</th>
                <th className="border p-2">IP Address</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Login activity rows will be dynamically added here */}
            </tbody>
          </table>
        </section>
      </section>
    </div>
  </section>
  
  )
}

export default UserManagement
