import React from 'react'
import VehicleSearch from '../utilities/VehicleSearch';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';


const UserDashBoard = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-semibold">VMIS Officer Dashboard</h1>
      </header>
      <VehicleSearch />
      <Features/>
    </section>
  );
  
}

export default UserDashBoard
