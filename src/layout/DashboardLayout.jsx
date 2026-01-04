import React, { use } from 'react';
import { Link, Outlet } from 'react-router';
import { BookOpen, Edit3, Home, PlusCircle } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { IoLogOut } from 'react-icons/io5';

const DashboardLayout = () => {
  const { user, signOutUser } = use(AuthContext)

  return (
    <div className="drawer lg:drawer-open z-0">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300 flex justify-between">
          <div className='flex justify-between items-center'>
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
              {/* Sidebar toggle icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <Link className="text-xl mr-10 text-blue-600 font-semibold ">
              Dashboard
            </Link>

          </div>
          <div className="dropdown dropdown-end z-50 mx-5">
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
                <Link to={'/'} className="  font-semibold ">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/dashboard/my-course"}>
                  My Courses
                </Link>
              </li>

              <li >
                <Link to={"/dashboard/enroll-course"}>
                  My Enrollment
                </Link>
              </li>

              <li>
                <button
                  onClick={signOutUser}
                  className="btn btn-xs text-left btn-primary mt-2 text-white"
                >
                  <IoLogOut />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {/* Page content here */}
        <div className='p-5'>
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow gap-2 pt-15">
            {/* List item */}
            <li>
              <Link to={'/dashboard/dash-home'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                {/* Home icon */}
                <Home className='w-4 h-4' />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <Link to={'/dashboard/my-course'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Courses">

                <Edit3 className='w-4 h-4' />
                <span className="is-drawer-close:hidden">My Courses</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <Link to={'/dashboard/add-course'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Add Course">

                <PlusCircle className="w-4 h-4" />
                <span className="is-drawer-close:hidden">Add Course</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <Link to={'/dashboard/enroll-course'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Enrolled Course">

                <BookOpen className="w-4 h-4" />
                <span className="is-drawer-close:hidden">My Enrolled Course</span>
              </Link>
            </li>

            {/* List item */}
            <li>
              <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                {/* Settings icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;