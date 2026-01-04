import React from 'react';

const Features = () => {
    const features = [
      { title: "Innovative Solutions", desc: "Cutting-edge solutions for modern problems", icon: "⚡" },
      { title: "Expert Guidance", desc: "Learn from industry experts step by step", icon: "👨‍💻" },
      { title: "Project Hub", desc: "Build and showcase real projects", icon: "📁" },
      { title: "Community Support", desc: "Join a supportive community", icon: "🤝" },
    ];
  
    return (
      <section className="py-16  px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {features.map((f, i) => (
            <div key={i} className=" p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{f.title}</h3>
              <p className="">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default Features;