import React from 'react';

const Home = () => {
    return (
        <div>
            Home

            <div>
                <h1>Popular Courses</h1>
                <section className="py-12 bg-gray-50 dark:bg-gray-900">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Popular Courses</h2>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {/* {courses.map(course => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
              <img src={course.image} alt={course.title} className="rounded-t-2xl h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{course.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Instructor: {course.instructor}</p>
              </div>
            </div>
          ))} */}
                        </div>
                    </div>
                </section>
            </div>


            <section className="py-12 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Why Choose Us</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* {features.map((item, i) => (
                            <div key={i} className="p-6 rounded-xl bg-gray-50 dark:bg-gray-900 shadow hover:shadow-md transition">
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 mt-2">{item.desc}</p>
                            </div>
                        ))} */}
                    </div>
                </div>
            </section>


            <section className="py-12 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Top Instructors</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {/* {instructors.map(inst => (
                            <div key={inst.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
                                <img src={inst.image} alt={inst.name} className="rounded-t-2xl h-40 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{inst.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{inst.expertise}</p>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </section>








        </div>
    );
};

export default Home;