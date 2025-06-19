import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";
const Application=()=>{
    const [isEdit,setIsEdit]=useState(false)
    const [resume,setResume]=useState(null)
    // Helper to get status color classes
    const getStatusClasses = (status) => {
      switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      case "interview":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
      }
    };

    return(
      <>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-3xl font-bold mb-8 text-blue-900">Your Resume</h2>
      <div>
      {isEdit ? (
        <div className="flex flex-col items-center gap-6">
        <label
        htmlFor="resumeUpload"
        className="flex flex-col items-center cursor-pointer border-2 border-dashed border-blue-300 rounded-xl p-8 hover:bg-blue-50 transition"
        >
        <p className="mb-2 text-blue-600 font-medium">Select resume</p>
        <input
        id="resumeUpload"
        onChange={e => setResume(e.target.files[0])}
        accept="application/pdf"
        type="file"
        hidden
        />
        <img
        src={assets.profile_upload_icon}
        alt=""
        className="w-14 h-14"
        />
        {resume && (
        <span className="mt-2 text-sm text-green-600 font-semibold">
          {resume.name}
        </span>
        )}
        </label>
        <button onClick={e=>setIsEdit(false)}
        className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
        Save
        </button>
        </div>
      ) : (
        <div className="flex items-center justify-between bg-blue-50 p-4 rounded-xl mb-8">
        <a
        href=""
        className="text-blue-700 underline hover:text-blue-900 font-medium"
        >
        Resume
        </a>
        <button
        onClick={() => setIsEdit(true)}
        className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition font-semibold"
        >
        Edit
        </button>
        </div>
      )}
      </div>
      <h2 className="text-2xl font-bold mt-10 mb-4 text-blue-900">Jobs Applied</h2>
      <div className="overflow-x-auto rounded-xl shadow">
      <table className="min-w-full bg-white">
        <thead>
        <tr className="bg-blue-100 text-blue-900">
        <th className="py-3 px-4 text-left font-semibold">Company</th>
        <th className="py-3 px-4 text-left font-semibold">Job Title</th>
        <th className="py-3 px-4 text-left font-semibold">Location</th>
        <th className="py-3 px-4 text-left font-semibold">Date</th>
        <th className="py-3 px-4 text-left font-semibold">Status</th>
        </tr>
        </thead>
        <tbody>
        {jobsApplied.map((job,index)=>(
        <tr key={index} className="border-b last:border-none hover:bg-blue-50 transition">
        <td className="py-3 px-4 flex items-center gap-2">
          <img src={job.logo} alt="" className="w-8 h-8 rounded-full border" />
          <span className="font-medium text-gray-800">{job.company}</span>
        </td>
        <td className="py-3 px-4 text-gray-700">{job.title}</td>
        <td className="py-3 px-4 text-gray-700">{job.location}</td>
        <td className="py-3 px-4 text-gray-500">{moment(job.date).format('ll')}</td>
        <td className="py-3 px-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusClasses(job.status)}`}>
          {job.status}
          </span>
        </td>
        </tr>
        ))}
        </tbody>
      </table>
      </div>
      </div>
      <div className="mb-10"></div>
      <Footer />
      </>
    )
}


export default Application