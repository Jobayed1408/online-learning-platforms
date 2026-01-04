import React from 'react';

const Services = () => {
    const services = [
      "Custom Software Development",
      "Web Development",
      "App Development",
      "UI/UX Design Solutions",
      "Datscience",
      "Photography",
      "Personal Development",
      "Others",
    ];
  
    return (
      <section className="py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {services.map((s, i) => (
            <div key={i} className="bg-blue-600 text-white p-6 rounded-xl shadow hover:scale-105 transition">
              {s}
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Services;