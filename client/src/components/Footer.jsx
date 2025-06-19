import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
return (
    <footer className="bg-gray-100 text-gray-900 py-8">
        <div className="container mx-auto flex flex-col items-center gap-4">
            <div>
                <img src={assets.logo} alt="Logo" className="h-12" />
            </div>
            <p className="text-sm text-gray-600">All rights reserved. Copyright @job-portal</p>
            <div className="flex gap-4 mt-2">
                <img src={assets.facebook_icon} alt="Facebook" className="h-8 w-8 hover:scale-110 transition-transform" />
                <img src={assets.instagram_icon} alt="Instagram" className="h-8 w-8 hover:scale-110 transition-transform" />
                <img src={assets.twitter_icon} alt="Twitter" className="h-8 w-8 hover:scale-110 transition-transform" />
            </div>
        </div>
    </footer>
)
}

export default Footer
