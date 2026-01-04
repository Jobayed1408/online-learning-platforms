import React from 'react';

const Testimonials = () => {
    const testimonials = [
        { name: "Alice", comment: "Solution Hub helped me launch my first project in just 2 weeks!" },
        { name: "Bob", comment: "The tutorials and guidance are super practical and easy to follow." },
        { name: "Charlie", comment: "I love the community support, always ready to help!" },
    ];
    return (
        <section className="py-16 px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {testimonials.map((t, i) => (
                    <div key={i} className=" p-6 rounded-xl shadow hover:shadow-lg transition">
                        <p className=" mb-4">"{t.comment}"</p>
                        <h4 className="font-semibold">{t.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;


