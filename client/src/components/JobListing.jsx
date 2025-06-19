import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import JobCard from './JobCard'
import { assets, JobCategories, JobLocations } from '../assets/assets'

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext)
  const [showFilter, setShowFilter] = useState(true)
  const [currentPage,setCurrentPage]=useState(1)
  const [selectedCategory, setSelectedCategory] = useState([])
  const [selectedLocation, setSelectedLocation] = useState([])

  const [filteredJobs, setFilteredJobs] = useState(jobs)

  useEffect(()=>{
    const matchedCategory=job=>selectedCategory.length === 0 || selectedCategory.includes(job.category)
    const matchedLocation=job=>selectedLocation.length === 0 || selectedLocation.includes(job.location)
    const mathesTitle=job=>job.title.toLowerCase().includes(searchFilter.title.toLowerCase())
    const mathesSearchLocation=job=>searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase())
    const newFilteredJobs =jobs.slice().reverse().filter(job => matchedCategory(job) && matchedLocation(job) && mathesTitle(job) && mathesSearchLocation(job))
    setFilteredJobs(newFilteredJobs)
    setCurrentPage(1) // Reset to first page when filters change

  },[jobs, selectedCategory, selectedLocation, searchFilter])

  const handleCategoryChange = (category) => {
    setSelectedCategory(prev=>prev.includes(category)? prev.filter(cat => cat !== category) : [...prev, category])
  }
  const handleLocationChange = (location) => {
    setSelectedLocation(prev=>prev.includes(location)? prev.filter(l => l!== location) : [...prev, location])
  }
return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 min-h-screen">
        {/* Sidebar */}
        <aside className="md:w-1/4 w-full bg-white rounded-xl shadow-lg p-6 mb-8 md:mb-0">
            {/* Search filter from hero component */}
            {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                <>
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Current search</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {searchFilter.title && (
                            <span className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                {searchFilter.title}
                                <img
                                    onClick={() => setSearchFilter(prev => ({ ...prev, title: "" }))}
                                    className="cursor-pointer ml-2 w-4 h-4"
                                    src={assets.cross_icon}
                                    alt=""
                                />
                            </span>
                        )}
                        {searchFilter.location && (
                            <span className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                {searchFilter.location}
                                <img
                                    onClick={() => setSearchFilter(prev => ({ ...prev, location: "" }))}
                                    className="cursor-pointer ml-2 w-4 h-4"
                                    src={assets.cross_icon}
                                    alt=""
                                />
                            </span>
                        )}
                    </div>
                </>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setShowFilter(prev => !prev)}
                className="px-5 py-1.5 rounded border border-gray-400 mb-4"
            >
                {showFilter ? 'Close' : 'Filters'}
            </button>

            {/* Entire Filters Section (conditionally shown) */}
            {showFilter && (
                <div>
                    {/* Category Filter */}
                    <div className="mb-6">
                        <h4 className="text-lg font-extrabold mb-3 text-black tracking-wide uppercase">
                            Select by categories
                        </h4>
                        <ul className="space-y-2">
                            {JobCategories.map((category, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <input onChange={()=>handleCategoryChange(category)} checked={selectedCategory.includes(category)} type="checkbox" className="accent-blue-500 w-5 h-5" />
                                    <span className="text-gray-700 text-lg">{category}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Location Filter */}
                    <div>
                        <h4 className="text-lg font-extrabold mb-3 text-black tracking-wide uppercase">
                            Select by location
                        </h4>
                        <ul className="space-y-2">
                            {JobLocations.map((location, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <input onChange={()=>handleLocationChange(location)} checked={selectedLocation.includes(location)} type="checkbox" className="accent-green-500 w-5 h-5" />
                                    <span className="text-gray-700 text-lg">{location}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </aside>

        {/* Job listings */}
        <section className="flex-1">
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Latest jobs</h3>
                <p className="text-gray-500">Get your desired jobs from top companies</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.slice((currentPage-1)*6,currentPage*6).map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
            {jobs.length>0 && (
                    <div className='flex items-center justify-center space-x-2 mt-10'>
                            <a href="#job-list" className="p-2 rounded hover:bg-gray-200 transition">
                                    <img onClick={()=>setCurrentPage(Math.max((currentPage-1),1))} src={assets.left_arrow_icon} alt="" />
                            </a>
                            {
                                    Array.from({length:Math.ceil(filteredJobs.length/6)}).map((_,index)=>(
                                            <a href="#job-list" key={index}>
                                                    <button onClick={e=>setCurrentPage(index+1)}
                                                        className={`w-9 h-9 rounded-full border border-gray-300 text-gray-700 font-semibold transition
                                                            ${currentPage === index+1 ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-blue-100'}`}
                                                    >
                                                        {index+1}
                                                    </button>
                                            </a>
                                    ))}
                            <a href="#job-list" className="p-2 rounded hover:bg-gray-200 transition">
                                    <img onClick={()=>setCurrentPage(Math.min(currentPage+1,Math.ceil(jobs.length/6)))} src={assets.right_arrow_icon} alt="" />
                            </a>
                    </div>
            )}
        </section>
    </div>
)
}

export default JobListing
