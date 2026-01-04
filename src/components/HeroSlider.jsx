import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";
import { Link } from "react-router";

const HeroSlider = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);

  // 1️⃣ Fetch courses (ONLY ONCE)
  useEffect(() => {
    const fetchAllCourses = async () => {
      try {
        const res = await axiosInstance.get("/latest-courses");
        setCourses(res.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllCourses();
  }, []);

  
  useEffect(() => {
    if (courses.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [courses.length]);

  // 3️⃣ Reset index if courses change
  useEffect(() => {
    if (index >= courses.length) {
      setIndex(0);
    }
  }, [courses, index]);

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {courses.map((course) => (
          <div
            key={course._id}
            style={{
                backgroundImage: `linear-gradient(
                  rgba(0,0,0,0.55),
                  rgba(0,0,0,0.55)
                ), url(${course.image})`
              }}
            className="min-w-full  bg-no-repeat bg-cover bg-center h-full flex items-center justify-center bg-gray-900 text-white"
          >
            <div className="text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-black/40 
    shadow-[0_0_30px_rgba(0,0,0,0.8)] p-5">
                {course.title}
              </h1>
              <p className="mb-6 opacity-90">
                {course.shortDescription}
              </p>
              <Link to={'/all-courses'} className="bg-white text-black px-6 py-3 rounded-lg hover:scale-105 transition">
                View all Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
