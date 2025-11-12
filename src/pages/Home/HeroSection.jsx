import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
// import heroImg from "../../assets/hero.png"; // or your own image path

const HeroSection = () => {
    return (
        <section className="from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-5 md:py-16 px-2 md:px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Unlock Your Potential with{" "} <br />
                        <span className="text-blue-600">E-Learning</span> 
                    </h1>
                    <p className=" text-lg p-4 max-w-lg">
                        Learn, teach, and grow by exchanging skills with people in your
                        community. Empower your learning journey with expert-led courses!
                    </p>

                    <div className="flex justify-center md:justify-start gap-4">
                        <Link to={'/all-courses'} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md">
                            Get Started
                        </Link>
                        <Link to={'/all-courses'} className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg shadow-md">
                            Browse Courses
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center md:justify-end"
                >
                    <img
                        src='https://i.ibb.co.com/B5dHdSw2/Chat-GPT-Image-Nov-10-2025-12-54-21-AM.png'
                        alt="Learning Illustration"
                        className="w-full max-w-md rounded-2xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
