import React, { useEffect, useState } from 'react';
import axiosInstance from '../../components/axiosInstance';
import toast from 'react-hot-toast';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Link } from 'react-router';

const DashboardHome = () => {

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true);
  const [pieData, setPieData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/dashboard/overview`)
      .then((res) => {

        setCourse(res.data)

      })
      .catch((err) => toast.error("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/dashboard/user-enrollment-ratio`)
      .then((res) => {

        setPieData(res.data)


      })
      .catch((err) => console.log("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    axiosInstance
      .get(`/dashboard/courses`)
      .then((res) => {

        setAllData(res.data)
      })
      .catch((err) => console.log("Error fetching data:", err))
      .finally(() => setLoading(false));
  }, []);

  const overviewData = course
    ? [
      { name: "Users", value: course.users },
      { name: "Courses", value: course.courses },
      { name: "Enrollments", value: course.enrollments },
    ]
    : [];

  const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];
  return (
    <div >

      <div className='flex flex-row'>
        <div className='flex-1 card bg-base-100 shadow p-4'>
          <h1 className='text-lg font-semibold mb-4'>Total overview of the contest</h1>
          <ResponsiveContainer height={300}>
            <PieChart>
              <Pie
                data={overviewData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                // innerRadius={50}        // 🔥 donut style
                // outerRadius={90}
                // paddingAngle={4}       // spacing between slices
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {overviewData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value, name) => [`${value}`, name]}
              />

              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Enrollment Pie Chart */}
        <div className="flex-1 card bg-base-100 shadow p-4">
          <h3 className="text-lg font-semibold mb-4">Enrollment Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [`${value}`, name]} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>


      <div className=" gap-6 p-6">
        <div className="">
          {allData.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-11/12 mx-auto">
                <thead>
                  <tr>
                    <th>Course Information</th>
                    <th>Price</th>
                    <th>Featured</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {allData.map(course => (
                    <tr key={course._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                className="object-cover"
                                src={course.image}
                                alt={course.title}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{course.title}</div>
                            <div className="text-sm opacity-50">{course.category}</div>
                          </div>
                        </div>
                      </td>
                      <td>{course.price}</td>
                      <td>{course.featured ? 'Featured' : 'Not Featured'}</td>
                      <td>
                        <div className="flex gap-3">
                          {/* <Link className="btn btn-sm btn-primary" to={'/my-course'}>My Course</Link> */}
                          <Link className="btn btn-sm btn-primary" to={`/course-details/${course._id}`}>Details</Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center text-gray-500 py-6">No courses enrolled yet.</p>
          )}

        </div>
      </div>


    </div>

  );
};

export default DashboardHome;