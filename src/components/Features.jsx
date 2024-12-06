import React from 'react';
import secureAccessIcon from '../assets/secure-access.png';
import realTimeMonitoringIcon from '../assets/real-time-monitoring.png';
import vehicleDatabaseIcon from '../assets/vehicle-database.png';
import reportGenerationIcon from '../assets/report-generation.png';

const Features = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Key Features of VMIS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={secureAccessIcon}
              alt="Secure Access Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Access</h3>
            <p className="text-gray-600">
              Only authorized officers can register, ensuring data security and
              privacy within the VMIS platform.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={realTimeMonitoringIcon}
              alt="Real-Time Monitoring Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Monitoring</h3>
            <p className="text-gray-600">
              Access up-to-date information on vehicle and owner details,
              enhancing highway and community safety.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={vehicleDatabaseIcon}
              alt="Comprehensive Vehicle Database Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Comprehensive Vehicle Database
            </h3>
            <p className="text-gray-600">
              Efficiently search and retrieve information from a vast database
              of registered vehicles and drivers.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={reportGenerationIcon}
              alt="Report Generation Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Report Generation</h3>
            <p className="text-gray-600">
              Generate detailed reports on vehicle activity and officer
              interactions to support investigations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
