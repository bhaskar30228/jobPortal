import React, { use } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const JobCard = ({job}) => {
    const navigate=useNavigate()

return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto transition-shadow flex flex-col gap-4 hover:shadow-xl">
        <div className="flex items-center gap-4">
            <img
                src={assets.company_icon}
                alt=""
                className="w-14 h-14 rounded-xl object-cover bg-gray-100"
            />
            <h4 className="m-0 text-xl font-semibold text-gray-900">{job.title}</h4>
        </div>
        <div className="flex gap-3 text-base text-gray-500">
            <span className="bg-blue-50 px-3 py-1 rounded-lg">{job.location}</span>
            <span className="bg-green-50 px-3 py-1 rounded-lg">{job.label}</span>
        </div>
        <p
            className="text-gray-700 text-base mt-2 min-h-[48px]"
            dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) + "..." }}
        ></p>
        <div className="flex gap-3 mt-2">
            <button onClick={()=>{navigate(`/apply-jobs/${job._id}`);scrollTo(0,0)}} className="flex-1 bg-blue-600 text-white rounded-lg py-2 fo0,0nt-semibold hover:bg-blue-700 transition-colors">
                Apply
            </button>
            <button onClick={()=>{navigate(`/apply-jobs/${job._id}`);scrollTo(0,0)}} className="flex-1 bg-gray-100 text-blue-600 rounded-lg py-2 font-semibold hover:bg-blue-200 transition-colors">
                Learn More
            </button>
        </div>
    </div>
)
}

export default JobCard
