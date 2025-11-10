import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../components/axiosInstance";
import { Link } from "react-router";

const Mycourses = () => {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        axiosInstance
            .get(`/my-courses?email=${user.email}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.success) setCourses(res.data.courses);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [user]);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.length === 0 ? (
                <p>No courses found</p>
            ) : (
                courses.map((course) => (
                    <div
                        key={course._id}
                        className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="text-xl font-bold mt-2">{course.title}</h3>
                        <p className="text-gray-600">{course.category}</p>
                        <p className="mt-1 font-semibold">${course.price}</p>
                        <div className="flex justify-between items-center mt-4">
                            <Link to={`/course-details/${course._id}`} className="btn btn-outline btn-primary rounded-full ">Show Details</Link>
                            <Link to={`/update-course/${course._id}`} className=" btn-primary btn  rounded-full  hover:text-white-600 transition">
                                Update Course
                            </Link>
                            <Link to={`/delete-course/${course._id}`} className="btn-outline btn-primary btn  rounded-full  hover:text-white-600 transition">
                                Delete Course
                            </Link>
                        </div>
                    </div>
                ))
            )
            }
        </div>
    );
};

export default Mycourses;
