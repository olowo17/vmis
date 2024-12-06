import React from 'react'

const HowItWorks = () => {
    const steps = [
        {
          number: "1",
          title: "Register as an Officer",
          description:
            "Start by creating your VMIS officer account. Fill in your official details and badge ID to get authorized access.",
        },
        {
          number: "2",
          title: "Log in Securely",
          description:
            "Use your credentials to securely log in and access the system dashboard. All data is encrypted to ensure security.",
        },
        {
          number: "3",
          title: "Monitor Vehicle Records",
          description:
            "Input a vehicle’s plate number to retrieve registration details, owner information, and verified documents.",
        },
        {
          number: "4",
          title: "Ensure Public Safety",
          description:
            "Utilize the system to keep highways and communities secure, ensuring only authorized personnel operate registered vehicles.",
        },
      ];
  return (
    <section className="py-10 bg-gray-100" id="how-it-works">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105 duration-300"
            >
              <div className="step-number text-3xl font-bold bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}

export default HowItWorks
