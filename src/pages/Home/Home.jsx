import React from 'react';
import PopularCourses from './PopularCourses';
import HeroSection from './HeroSection';
import { motion } from "framer-motion";
import { i } from 'framer-motion/client';


const Home = () => {
    return (
        <div>

            <HeroSection></HeroSection>
            <section className="py-12 ">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 ">Popular Courses</h2>
                    {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
                    <PopularCourses></PopularCourses>
                    {/* {courses.map(course => (
                            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
                                <img src={course.image} alt={course.title} className="rounded-t-2xl h-40 w-full object-cover" />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{course.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Instructor: {course.instructor}</p>
                                </div>
                            </div>
                        ))} */}
                    {/* </div> */}
                </div>
            </section>


            <section className="py-16 ">
                <div className="max-w-6xl mx-auto text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-bold text-gray-900 dark:text-white"
                    >
                        Top Instructors
                    </motion.h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Learn from the industry’s best mentors with years of experience.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {/* {instructors.map((ins, i) => ( */}
                    <motion.div
                        // key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <img
                            // src={ins.image}
                            // alt={ins.name}
                            className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            {/* {ins.name} */}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 mt-1"></p>
                        {/* <p className="text-blue-600 dark:text-blue-400 mt-1">{ins.field}</p> */}
                    </motion.div>
                    {/* ))} */}
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