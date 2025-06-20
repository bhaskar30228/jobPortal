import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { AppContext } from "../context/AppContext";
const Navbar = () => {
  const { setShowRecruiterLogin } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser(); // destructure properly
  const nevigate=useNavigate()
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img onClick={()=>nevigate('/')} className="cursor-pointer" src={assets.logo} alt="Logo" />
        {user ? (
          <div className="flex items-center gap-4">
            <Link to={"/applications"}>Applied jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton  />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button onClick={e=>setShowRecruiterLogin('true')} className="text-gray-600">Recruiter login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
