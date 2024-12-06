import React from 'react'
import admin from "../assets/gpt4.png"
import Sidebar from '../utilities/Sidebar';

const Settings = () => {
  return (
    <section className="userManager">
      <div className="dashboard-container flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <main className="main-content flex-1 bg-gray-100 p-6">
          {/* Header */}
          <header className="header flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <div className="profile flex items-center">
              <img
                src={admin}
                alt="Admin Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              <span>Admin</span>
            </div>
          </header>

          {/* Settings Section */}
          <section className="settings-section bg-white shadow rounded p-6">
            <form id="settings-form">
              {/* General Settings */}
              <div className="settings-group mb-6">
                <h4 className="text-lg font-semibold mb-4">General Settings</h4>
                <label htmlFor="system-name" className="block mb-2">
                  System Name
                </label>
                <input
                  type="text"
                  id="system-name"
                  defaultValue="VMIS"
                  placeholder="Enter system name"
                  className="w-full p-3 border border-gray-300 rounded mb-4"
                />

                <label htmlFor="admin-email" className="block mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="admin-email"
                  defaultValue="admin@vmis.com"
                  placeholder="Enter admin email"
                  className="w-full p-3 border border-gray-300 rounded mb-4"
                />

                <label htmlFor="theme-color" className="block mb-2">
                  Theme Color
                </label>
                <input
                  type="color"
                  id="theme-color"
                  defaultValue="#2c3e50"
                  className="w-full p-3 border border-gray-300 rounded"
                />
              </div>

              {/* Security Settings */}
              <div className="settings-group mb-6">
                <h4 className="text-lg font-semibold mb-4">Security Settings</h4>
                <label htmlFor="password-length" className="block mb-2">
                  Minimum Password Length
                </label>
                <input
                  type="number"
                  id="password-length"
                  defaultValue="8"
                  min="4"
                  max="16"
                  className="w-full p-3 border border-gray-300 rounded mb-4"
                />

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="two-factor-auth"
                    defaultChecked
                    className="mr-2"
                  />
                  <label htmlFor="two-factor-auth">
                    Enable Two-Factor Authentication
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="session-timeout"
                    defaultChecked
                    className="mr-2"
                  />
                  <label htmlFor="session-timeout">Enable Session Timeout</label>
                </div>
              </div>

              {/* Notifications */}
              <div className="settings-group mb-6">
                <h4 className="text-lg font-semibold mb-4">Notifications</h4>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    id="email-notifications"
                    defaultChecked
                    className="mr-2"
                  />
                  <label htmlFor="email-notifications">
                    Enable Email Notifications
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sms-notifications"
                    className="mr-2"
                  />
                  <label htmlFor="sms-notifications">
                    Enable SMS Notifications
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="settings-actions text-right">
                <button
                  type="submit"
                  className="save-btn bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </section>
  );
  
}

export default Settings
