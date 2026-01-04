import React, { useEffect, useState } from "react";
import axiosInstance from "../../components/axiosInstance";
import { Link } from "react-router";
import Loader from "../../components/Loader";

const Courses = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState("All Category");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10000);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [mode, setMode] = useState("all");


  const fetchAllCourses = () => {
    setMode("all");
    setLoading(true);

    axiosInstance
      .get(`/all-new-courses?page=${page}&limit=8`)
      .then((res) => {
        setCourses(res.data.result);
        setTotalPages(res.data.totalPages);
      })
      .finally(() => setLoading(false));
  };



  useEffect(() => {
    fetchAllCourses();
  }, [page]);


  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      fetchAllCourses();
      setSelected("All Category")
      return;
    }

    setLoading(true);
    axiosInstance
      .get(`/search?text=${searchTerm}`)
      .then((res) => {
        setCourses(res.data)
        setSelected("All Category")

      })
      .catch((err) => console.error("Error searching:", err))
      .finally(() => {
        setLoading(false)

      });
    e.target.reset()
  };

  const handleSelect = (category) => {
    setSelected(category);
    setLoading(true);
    setSearchTerm("")

    if (category === "All Category") {
      fetchAllCourses();
      setLoading(false);

      return;
    }

    axiosInstance
      .get(`/search-category?category=${category}`)
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => console.error("Error filtering by category:", err))
      .finally(() => setLoading(false));
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get(`/search-price?min=${min}&max=${max}`);
      setCourses(res.data); // directly set state
    } catch (err) {
      console.error("Error fetching courses by price:", err);
    } finally {
      setLoading(false);
    }
  };


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetchCourses();
  //   }, 500); // debounce 500ms

  //   return () => clearTimeout(timer);
  // }, [min, max]);


  if (loading)
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold text-blue-600">
        <Loader />
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-1 md:px-4 py-10 ">
      <div className="p-6 mb-10 flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex flex-1 gap-2">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all shadow-md"
          >
            Search
          </button>
        </form>

        {/* Category Dropdown */}
        <div className="flex justify-center items-center ">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              {selected}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-md"
            >
              {[
                "All Category",
                "Web Development",
                "App Development",
                "Data Science",
                "Photography",
                "Personal Development",
                "Other",
              ].map((category) => (
                <li key={category}>
                  <button
                    onClick={() => handleSelect(category)}
                  // className="hover:bg-primary hover:text-white rounded-lg"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Filter */}
        <div className="flex gap-3 items-center">
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Min</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="border p-2 rounded-lg w-24 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-500">Max</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="border p-2 rounded-lg w-24 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            />
          </div>
          <button
            onClick={() => {
              setMode("price");
              setPage(1);
              fetchCourses();
            }}
            className="btn btn-primary"
          >
            Apply Price
          </button>
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course._id}
              className=" rounded-lg p-1 md:p-2 shadow hover:shadow-lg hover:border hover:border-gray-400 "
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-bold mt-2">{course.title}</h3>
              <p className="text-gray-600">{course.category}</p>
              <p className="mt-1 font-semibold">${course.price}</p>
              <Link to={`/course-details/${course._id}`} className="btn btn-outline btn-primary rounded-full mt-3 ">Show Details</Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No courses found.</p>
        )}
      </div>
      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="btn btn-outline"
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="btn btn-outline"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default Courses;
