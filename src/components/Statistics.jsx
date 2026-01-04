import React from 'react';

const Statistics = () => {
    const stats = [
      { label: "Projects Completed", value: "120+" },
      { label: "Expert Mentors", value: "25" },
      { label: "Active Users", value: "5000+" },
      { label: "Awards Won", value: "15" },
    ];
  
    return (
      <section className="py-16  px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Statistics</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 text-center ">
          {stats.map((s, i) => (
            <div key={i} className=" p-10 rounded-sm hover:border border-blue-300 shadow hover:shadow-lg transition flex flex-col items-center">
              <h3 className="text-4xl font-bold text-blue-600">{s.value}</h3>
              <p className=" mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Statistics;