import React, { useState } from 'react';
import gt3 from "../assets/gpt3.png"

const VehicleSearch = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const [incidentDescription, setIncidentDescription] = useState('');
  const [flagPlateNumber, setFlagPlateNumber] = useState('');
  const [flagReason, setFlagReason] = useState('');

  const handleSearch = () => {


    // Simulate fetching vehicle details (replace with actual API call)
    setVehicleDetails({
      vehicleImage: 'https://carsguide.bikroy.com/wp-content/uploads/2023/06/Toyota-Corolla.jpg',
      driverImage: 'https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=1000&format=pjpg&exif=0&iptc=0',
      plateNumber,
      vehicleName: 'Toyota Corrolla',
      firstName: 'Mustapha',
      lastName: 'Bello',
      contact: '0802 558 5620',
      licenceNumber: 'EU 234 KJA',
      homeAddress: '23 Adewale St, Yaba, Lagos',
      emailAddress: 'mustaphabello@yahoo.com',
    });
  };

  const handleIncidentSubmit = () => {
    alert('Incident Report Submitted');
  
  };

  const handleFlagSubmit = () => {
    alert('Plate Number Flagged');
    
  };

  const handleClose = () => {
    setVehicleDetails(null);  
    setPlateNumber(" ")
  };

  return (
    <div className="container mx-auto p-6">
      {/* Vehicle Search Section */}
      <section className="bg-white p-6 mb-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Vehicle Search</h2>
        <div className="flex items-center gap-4">
          <img src={gt3} alt="moto" className="w-36 h-36" />
          <input
            type="text"
            placeholder="Enter Plate Number"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Vehicle Details */}
      {vehicleDetails && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Vehicle Details</h3>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="text-white bg-red-600 px-4 py-2 rounded-md mb-4"
          >
            Close
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-2">Vehicle's Image</h4>
              <img
                src={vehicleDetails.vehicleImage}
                alt="Vehicle"
                className=" w-auto h-full object-contain rounded-md"
              />
            </div>
            <div>
              <h4 className="font-medium mb-2">Driver's Image</h4>
              <img
                src={vehicleDetails.driverImage}
                alt="Driver"
                className=" w-auto h-full object-contain  rounded-md"
              />
            </div>
          </div>

            {/* Other Details */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">Plate Number</label>
                <input
                  type="text"
                  value={vehicleDetails.plateNumber}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Vehicle Name</label>
                <input
                  type="text"
                  value={vehicleDetails.vehicleName}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  value={vehicleDetails.firstName}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  value={vehicleDetails.lastName}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Contact</label>
                <input
                  type="text"
                  value={vehicleDetails.contact}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Licence Number</label>
                <input
                  type="text"
                  value={vehicleDetails.licenceNumber}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Home Address</label>
                <input
                  type="text"
                  value={vehicleDetails.homeAddress}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={vehicleDetails.emailAddress}
                  readOnly
                  className="w-full border p-2 rounded-md"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Incident Report Section */}
      <section className="bg-white p-6 mb-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Report an Incident</h2>
        <textarea
          value={incidentDescription}
          onChange={(e) => setIncidentDescription(e.target.value)}
          placeholder="Describe the incident here..."
          className="w-full p-2 border rounded-md mb-4"
        ></textarea>
        <button
          onClick={handleIncidentSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Submit Report
        </button>
      </section>

      {/* Flag Plate Number Section */}
      <section className="bg-white p-6 mb-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Flag a Plate Number</h2>
        <div className="flex gap-4">
          <input
            type="text"
            value={flagPlateNumber}
            onChange={(e) => setFlagPlateNumber(e.target.value)}
            placeholder="Enter Plate Number to Flag"
            className="border p-2 rounded-md w-full"
          />
          <select
            value={flagReason}
            onChange={(e) => setFlagReason(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="" disabled selected>
              Select a reason
            </option>
            <option value="stolen">Stolen</option>
            <option value="under-investigation">Under Investigation</option>
            <option value="suspicious">Suspicious Activity</option>
          </select>
          <button
            onClick={handleFlagSubmit}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Flag
          </button>
        </div>
      </section>
    </div>
  );
};

export default VehicleSearch;
