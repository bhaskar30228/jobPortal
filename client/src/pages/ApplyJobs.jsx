import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useState, useContext } from "react"    
import { AppContext } from "../context/AppContext"
import { assets } from "../assets/assets"
import Loading from "../components/Loading"
import Navbar from "../components/Navbar"
import kconvert from "k-convert"
import moment from "moment"
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
const ApplyJobs=()=>{
    const nevigate=useNavigate()
    const {id}=useParams()
    const [JobData,setJobData]=useState(null)
    const {jobs}=useContext(AppContext)
    const fetchJob=async()=>{
        const data=jobs.filter(job=>job._id === id)
        if(data.length > 0){
            setJobData(data[0])
            console.log(data[0]);
    }
}
useEffect(()=>{
    if(jobs.length >0){
        fetchJob()
    }
},[id,jobs])
    return JobData ? (
        <>
            <Navbar />
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
                    <div className="flex items-center gap-8 border-b pb-8">
                        <img onClick={()=>nevigate('/')} 
                            src={JobData.companyId.image}
                            alt=""
                            className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 shadow"
                        />
                        <div>
                            <h1 className="text-3xl font-extrabold text-gray-900">{JobData.title}</h1>
                            <div className="flex flex-wrap gap-6 mt-3 text-gray-600 text-base">
                                <span className="flex items-center gap-2">
                                    <img src={assets.suitcase_icon} alt="" className="w-5 h-5" />
                                    <span className="font-medium">{JobData.companyId.name}</span>
                                </span>
                                <span className="flex items-center gap-2">
                                    <img src={assets.location_icon} alt="" className="w-5 h-5" />
                                    {JobData.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <img src={assets.person_icon} alt="" className="w-5 h-5" />
                                    {JobData.level}
                                </span>
                                <span className="flex items-center gap-2">
                                    <img src={assets.money_icon} alt="" className="w-5 h-5" />
                                    <span className="font-semibold">CTC:</span> {kconvert.convertTo(JobData.salary)}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between mt-10 mb-8 gap-4">
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition text-white px-8 py-3 rounded-xl font-bold shadow-lg text-lg">
                            Apply now
                        </button>
                        <p className="text-gray-400 text-sm">
                            Posted {moment(JobData.data).fromNow()}
                        </p>
                    </div>
                    <div className="w-full">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
                            Job Description
                        </h2>
                        <div
                            className="prose prose-blue max-w-none text-gray-700 leading-relaxed mb-8"
                            dangerouslySetInnerHTML={{ __html: JobData.description }}
                        />
                    </div>
                </div>
                <div className="mb-8"></div>
                <Footer/>
            </div>
        </>
    ) : (
        <Loading />
    )
    
}
export default ApplyJobs