import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
const RecruitersLogin = () => {
    const [state ,setState]=useState('Login')
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [image,setImage]=useState('')
    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
    const {setShowRecruiterLogin} = useContext(AppContext);
const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "SignUp" && !isTextDataSubmitted) {
        setIsTextDataSubmitted(true);
        return;
    }
    // Add your login/signup logic here
};
useEffect(()=>{
    document.body.style.overflow='hidden'
    return()=>{
        document.body.style.overflow='unset'
    }
})
return (
    <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black/30">
        <form onSubmit={onSubmitHandler}
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-6 relative"
            autoComplete="off"
        >
            {/* Cross button to cancel/close the login */}
            <button
                type="button"
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
                onClick={() => {
                    setShowRecruiterLogin(false)
                }}
                aria-label="Close"
            >
                &times;
            </button>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Recruiter's {state==="Login"?"Login":"SignUp"}</h1>
            <p className="text-center text-gray-500 mb-4">Welcome back! Please sign in to continue</p>
            {state==="SignUp" && isTextDataSubmitted ?
            <>
            <div className="flex flex-col items-center gap-2">
                <label htmlFor="image" className="flex flex-col items-center cursor-pointer">
                    <div className="w-28 h-28 rounded-full border-2 border-blue-400 flex items-center justify-center overflow-hidden bg-gray-100 shadow">
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upload_area}
                            alt=""
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <input
                        onChange={e=>setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        hidden
                        accept="image/*"
                    />
                    <p className="mt-2 text-lg text-gray-600 font-medium">Upload company <br />Logo</p>
                </label>
            </div>
            </>:
            <>
            {state !== "Login" && (

                <div className="flex items-center gap-3 border rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                    <img src={assets.person_icon} alt="" className="w-5 h-5 opacity-70" />
                    <input
                        onChange={e => setName(e.target.value)}
                        type="text"
                        value={name}
                        placeholder="Company name"
                        required
                        className="bg-transparent outline-none flex-1 text-gray-700"
                    />
                </div>
            )}

                <div className="flex items-center gap-3 border rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                    <img src={assets.email_icon} alt="" className="w-5 h-5 opacity-70" />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Email ID"
                        required
                        className="bg-transparent outline-none flex-1 text-gray-700"
                    />
                </div>

                <div className="flex items-center gap-3 border rounded-md px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
                    <img src={assets.lock_icon} alt="" className="w-5 h-5 opacity-70" />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        value={password}
                        placeholder="Password"
                        required
                        className="bg-transparent outline-none flex-1 text-gray-700"
                    />
                </div>
                
            </>
            }
            
            <button
                type="submit"
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
            >
                {state === "Login" ? "Login" : isTextDataSubmitted ? "Create a new account":"Next"}
            </button>
            {state === "Login" && (
                <p className="text-right text-sm text-blue-600 hover:underline cursor-pointer mt-1 mb-[-12px]">
                    Forgot password?
                </p>
            )}
            {state === "Login" ?
            <p className='mt-5 text-center'>Don't have an account? <span className="text-blue-600 cursor-pointer hover:underline"  onClick={e=>setState('SignUp')}>Sign up</span></p>
            :
            <p className='mt-5 text-center'>Already have an account <span className="text-blue-600 cursor-pointer hover:underline"  onClick={e=>setState("Login")}>Login</span></p>
        }
        </form>
    </div>
)
}

export default RecruitersLogin
