import React from 'react'
import { manageJobsData } from '../assets/assets'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const ManageJob = () => {
  const navigate=useNavigate()
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">#</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Job title</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Location</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Applicants</th>
              <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">Visible</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {manageJobsData.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 font-medium text-gray-800">{job.title}</td>
                <td className="px-4 py-2">{moment(job.date).format('ll')}</td>
                <td className="px-4 py-2">{job.location}</td>
                <td className="px-4 py-2">{job.applicants}</td>
                <td className="px-4 py-2 text-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
  onClick={() => navigate('/dashboard/add-jobs')}
  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition-colors duration-200 font-semibold"
>
  Add new job
</button>
      </div>
    </div>
  )
}

export default ManageJob

