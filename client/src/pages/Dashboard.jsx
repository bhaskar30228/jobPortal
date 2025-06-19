import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, Outlet } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center w-full">
      {/* Header */}
      <div className="w-full shadow-lg py-6 px-8 bg-white rounded-none mt-10">
        <div className="flex items-center justify-between w-full">
          <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-12 cursor-pointer" />
          <div className="flex items-center space-x-4 group">
            <img
              src={assets.company_icon}
              alt="Company Icon"
              className="h-10 w-10 rounded-full border-2 border-gray-300 cursor-pointer"
            />
            <div>
              <p className="text-lg font-semibold max-sm:hidden text-gray-800">
                Welcome, <span className="text-blue-600">GreatStack</span>
              </p>
              <ul className="mt-2">
                <li className="text-red-500 hover:underline cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar + Main */}
      <div className="flex w-full flex-1 mt-8 px-8">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md rounded-lg p-6 mr-8 flex flex-col">
          <ul className="space-y-6 flex-1">
            <NavLink
              to={'/dashboard/add-jobs'}
              className={({ isActive }) =>
                `flex items-center space-x-3 ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }>
              <img src={assets.add_icon} alt="" className="h-6 w-6" />
              <p className="max-sm:hidden">Add job</p>
            </NavLink>
            <NavLink
              to={'/dashboard/manage-jobs'}
              className={({ isActive }) =>
                `flex items-center space-x-3 ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }>
              <img src={assets.home_icon} alt="" className="h-6 w-6" />
              <p className="max-sm:hidden">Manage jobs</p>
            </NavLink>
            <NavLink
              to={'/dashboard/view-applications'}
              className={({ isActive }) =>
                `flex items-center space-x-3 ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }>
              <img src={assets.person_tick_icon} alt="" className="h-6 w-6" />
              <p className="max-sm:hidden">View applications</p>
            </NavLink>
          </ul>
        </div>

        {/* Main Content Area (this is where nested route components will render) */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <Outlet /> {/* 👈 This is where AddJob / ManageJob etc. will render */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
