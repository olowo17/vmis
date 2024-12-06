import React from 'react'
import policeVan from "../assets/Police_Van-removebg-preview.png"
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/userDashboard"); 
  };

  return (
    <section className="flex items-center justify-center text-center h-screen bg-gray-400 max-h-screen overflow-hidden">
      <div className="bg-gray-200 w-full sm:w-96 p-8 rounded-lg">
        <div className="flex justify-center mb-6">
          <img src={policeVan} alt="admin's pics" className="w-24 h-24 rounded-full" />
        </div>
        <div className="mb-4">
          <h5 className="text-lg font-semibold">LOGIN</h5>
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="firstinput"
            placeholder="Security ID Number"
            required
            className="border-none rounded-lg w-full sm:w-72 h-10 p-2 bg-gray-300 focus:outline-none"
          />
          <br />
          <input
            type="password"
            id="secondinput"
            placeholder="Password"
            required
            className="border-none rounded-lg w-full sm:w-72 h-10 p-2 mt-4 bg-gray-300 focus:outline-none"
          />
        </div>
        <div className="mb-6 flex">
          <button className="w-full sm:w-72 h-10 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-red-600 focus:outline-none m-auto" type='submit' onClick={handleLogin}>
            Login
          </button>
        </div>
        <p className="text-black font-bold">
          <a href="#">Forgotten password?</a>
        </p>
      </div>
    </section>
  )
}

export default LoginForm
