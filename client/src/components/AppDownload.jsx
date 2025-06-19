import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-100 to-indigo-100 py-16 text-center">
        <div className="relative z-10 mx-auto max-w-xl">
            <h1 className="mb-6 text-3xl font-bold text-gray-900 tracking-wide md:text-4xl">
                Download Our Mobile App for a Better Experience
            </h1>
            <p className="mb-8 text-base text-indigo-800 md:text-lg">
                Get instant access to jobs, notifications, and more. Available on both Android and iOS.
            </p>
            <div className="flex justify-center gap-6">
                <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                >
                    <img
                        src={assets.play_store}
                        alt="Download on Play Store"
                        className="h-14 drop-shadow-md"
                    />
                </a>
                <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105"
                >
                    <img
                        src={assets.app_store}
                        alt="Download on App Store"
                        className="h-14 drop-shadow-md"
                    />
                </a>
            </div>
        </div>
        <img
            src={assets.app_main_img}
            alt="App Preview"
            className="pointer-events-none absolute bottom-0 right-[5%] z-0 h-80 select-none opacity-95 hidden lg:block"
        />
    </section>
)
}

export default AppDownload
