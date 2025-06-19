import React, { useRef ,useEffect } from 'react'
import { useState } from 'react'
import Quill from "quill"
import { JobCategories, JobLocations } from '../assets/assets'
import "quill/dist/quill.snow.css";
const AddJob = () => {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('Banglore')
  const [category, setCategory] = useState('Programmer')
  const [level, setLevel] = useState('Entry Level')
  const [salary, setSalary] = useState(0)
  const editorRef=useRef(null)
  const quillRef=useRef(null)

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
      quillRef.current=new Quill(editorRef.current,{
        theme: 'snow',
      })
    }

  },[])
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <form
        action=""
        className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg font-sans"
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Add New Job</h2>
        <div className="mb-6">
          <p className="mb-2 font-medium text-lg">Job title</p>
          <input
            type="text"
            placeholder="Type here"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <p className="mb-2 font-medium text-lg">Job description</p>
          <div
            ref={editorRef}
            className="min-h-[120px] border border-gray-300 rounded-md bg-gray-50"
          />
        </div>
        <div className="mb-6">
          <p className="mb-2 font-medium text-lg">Job Category</p>
          <select
            onChange={e => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-medium text-lg">Job location</p>
          <select
            onChange={e => setLocation(e.target.value)}
            value={location}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-medium text-lg">Job Level</p>
          <select
            onChange={e => setLevel(e.target.value)}
            value={level}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Entry Level">Beginner level</option>
            <option value="Intermedia level">Intermedia level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
        <div className="mb-6">
          <p className="mb-2 font-medium text-lg">Job salary</p>
          <input
            onChange={e => setSalary(e.target.value)}
            type="number"
            placeholder="2500"
            value={salary}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-7 py-3 rounded-md font-semibold text-base hover:bg-blue-700 mt-3 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default AddJob
