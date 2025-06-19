import React from 'react'
import { assets, viewApplicationsPageData } from '../assets/assets'

const ViewApplications = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="shadow-2xl rounded-xl bg-white max-w-7xl mx-auto">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <colgroup>
            <col style={{ width: '4%' }} />
            <col style={{ width: '22%' }} />
            <col style={{ width: '22%' }} />
            <col style={{ width: '18%' }} />
            <col style={{ width: '18%' }} />
            <col style={{ width: '16%' }} />
          </colgroup>
          <thead className="bg-blue-600">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">#</th>
              <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">User name</th>
              <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Job title</th>
              <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Location</th>
              <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Resume</th>
              <th className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {viewApplicationsPageData.map((application, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-2 py-3">{index + 1}</td>
                <td className="px-2 py-3 flex items-center gap-3">
                  <img src={application.imgSrc} alt="" className="w-10 h-10 rounded-full object-cover border" />
                  <span className="font-medium">{application.userName}</span>
                </td>
                <td className="px-2 py-3">{application.jobTitle}</td>
                <td className="px-2 py-3">{application.location}</td>
                <td className="px-2 py-3">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    Resume
                    <img src={assets.resume_download_icon} alt="" className="w-4 h-4" />
                  </a>
                </td>
                <td className="px-2 py-3">
                  <div className="flex gap-2 group relative">
                    <button className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm">
                      ...
                    </button>
                    <div className="absolute left-10 top-0 flex gap-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity">
                      <button className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-sm">
                        Accept
                      </button>
                      <button className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm">
                        Reject
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewApplications
