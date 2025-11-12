import { Link } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { MdOutlineDensitySmall } from "react-icons/md";
import { BookA } from "lucide-react";
import "./css/themeChange.css"
import NavItem from "./NavItem";

const NavBar = () => {
  const { user, signOutUser } = use(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light")
  }
  return (
    <div className="navbar min-h-0 z-1 pb-10 pt-5 glass-card max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavItem to={"/"}>
                <GoHomeFill />
                Home
              </NavItem>
            </li>
            <li>
              <NavItem to={"/all-courses"}>
                <MdOutlineDensitySmall /> Courses
              </NavItem>
            </li>
            <li>
              <NavItem to={"/dashboard"}>
                <LuLayoutDashboard /> DashBoard
              </NavItem>
            </li>
            {
              !user && (
                <li>
              <div className="flex  ">
                <p>  Theme</p>
                <input
                  onChange={(e) => handleTheme(e.target.checked)}
                  type="checkbox"
                  defaultChecked={localStorage.getItem('theme') === "dark"}
                  className="toggle" />
              </div>
            </li>
              )
            }
          </ul>
        </div>
        <Link to={"/"} className="flex text-primary items-center gap-1 text-lg md:text-3xl font-bold">
          <div className="hidden md:flex items-center">
            <BookA className="" /> <h1 >
              Skill-HUB
            </h1>
          </div>

        </Link>
      </div>
      <div className="navbar-center md:hidden items-center flex font-bold text-primary text-2xl">
        <BookA className="" />
        <h1>Skill-HUB</h1>
      </div>
      <div className="md:navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 lg:gap-5  text-xl">
          <li>
              <NavItem to={"/"}>
              <GoHomeFill />
              Home
              </NavItem>
          </li>
          <li>
            <NavItem to={"/all-courses"}>
            <MdOutlineDensitySmall /> Courses
              </NavItem>
              
          </li>
          <li>
            <NavItem to={"/dashboard"}>
              <LuLayoutDashboard /> Dashboard
            </NavItem>
          </li>
         
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-blue-600 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>

              <li>
                <NavItem to={"/my-course"}>
                  My Courses
                </NavItem>
              </li>

              <li >
                <NavItem to={"/enroll-course"}>
                  My Enrollment
                </NavItem>
              </li>

              <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem('theme') === "dark"}
                className="toggle" />


              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left btn-primary mt-2 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center gap-1">
            <div className="hidden md:flex flex-col ">
              <p>Theme</p>
            <input
                onChange={(e) => handleTheme(e.target.checked)}
                type="checkbox"
                defaultChecked={localStorage.getItem('theme') === "dark"}
                className="toggle" />
            </div>
            <Link
              to={"/auth/login"}
              className="flex items-center rounded-full outline p-2 md:px-8 text-sm md:text-xl text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              {" "}
              <IoLogIn /> Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
