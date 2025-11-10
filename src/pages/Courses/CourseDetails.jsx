// import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axiosInstance from "../../components/axiosInstance";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const CourseDetails = () => {
    const { user } = use(AuthContext)
    // console.log("user",user);


    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        axiosInstance
            .get(`/courses/${id}`)
            .then((res) => {
                if (res.data.success) setCourse(res.data.result);
            })
            .catch((err) => console.error("Error fetching course:", err))
            .finally(() => setLoading(false));
    }, [id]);

    const enrollCourse = e => {
        e.preventDefault()
        
        toast("Thanks for enrollment")
    }
    console.log(course?.created_by, user.email);

    if (loading) return <p>Loading...</p>

    if (!course) return <p>Course not found.</p>;

    return (
        <div className="max-w-6xl mx-auto p-6 rounded-2xl shadow-xl">
            {/* Hero Section */}
            <div className=" from-purple-500 to-pink-500 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                    <p className="text-lg mb-4">{course.category}</p>
                    <p className="mb-6 line-clamp-3">{course.description}</p>
                    <div className="flex gap-4">
                        <button onClick={(e) => { enrollCourse(e) }} className="btn-primary btn text-white-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 hover:text-primary transition">
                            Enroll Now
                        </button>
                        {
                            course?.created_by === user?.email && (

                                <Link to={`/update-course/${course._id}`} className="btn-outline btn-primary btn px-6 py-2 rounded-full  hover:text-white-600 transition">
                                    Update Course
                                </Link>
                            )}
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={course.image}
                        alt={course.title}
                        className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
                    />
                </div>
            </div>

            {/* Course Info Section */}
            <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Course Details</h2>
                    <p><span className="font-semibold">Price:</span> ${course.price}</p>
                    <p><span className="font-semibold">Category:</span> {course.category}</p>
                    <p><span className="font-semibold">Downloads:</span> {course.downloads}</p>
                    {course.featured && (
                        <p className="mt-2 text-yellow-500 font-semibold">🌟 Featured Course</p>
                    )}
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">About Instructor</h2>
                    <div className="flex items-center gap-4">
                        <img
                            src={user.photoURL}
                            alt="Instructor"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <p className="font-semibold">{user.displayName}</p>
                            <p className="text-gray-500 text-sm">Instructor</p>
                        </div>
                    </div>
                    <p className="mt-4 text-gray-600 line-clamp-4">
                        This course is carefully crafted to provide all the knowledge you need
                        to excel. Join and start learning today!
                    </p>
                </div>
            </div>

            {/* Course Description Section */}
            <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Course Description</h2>
                <p className="text-gray-700">{course.description}</p>
            </div>
        </div>
    );
};
// }

export default CourseDetails;