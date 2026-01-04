import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Registration";
import PrivateRoute from "./PrivateRoute";
import AddCourse from "../AddCourse/AddCourse";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/Courses/CourseDetails";
import UpdateCourse from "../pages/Courses/UpdateCourse";
// import Dashboard from "../pages/Dashboard/Dashboard";
import Mycourses from "../MyCourses/Mycourses";
import EnrolledCourses from "../EnrolledCourses/EnrolledCourses";
import ErrorPage from "../components/ErrorPage";
import DashboardHome from "../pages/Dashboard/DashboardHome";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/all-courses",
        element: <Courses />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      
      
      {
        path: "/course-details/:id",
        element: (
          
            <CourseDetails />
        ),
      },

        {
        path: "/update-course/:id",
        element: (
          <PrivateRoute>
            <UpdateCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true, // /dashboard
        element: <DashboardHome />,
      },
      {
        path: "dash-home", // /dashboard home
        element: <DashboardHome />,
      },
      {
        path: "add-course", // /dashboard/add-course
        element: <AddCourse />,
      },
      {
        path: "my-course", // /dashboard/my-course
        element: <Mycourses />,
      },
      {
        path: "enroll-course", // /dashboard/enroll-course
        element: <EnrolledCourses />,
      },
      
      
    ],
  }
  
]);
