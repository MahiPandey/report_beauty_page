import React from 'react';

export default function HeroSection() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 lg:px-20 xl:px-20  bg-[#9EAEFE] max-w-screen-full">
            
            {/* Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
                <div>
                    <h1 className="text-4xl questrial-regular md:text-6xl lg:text-7xl leading-tight">
                        K-beauty in
                    </h1>
                    <h1 className="text-4xl questrial-regular md:text-6xl lg:text-7xl leading-tight">
                        India: 2025 Report
                    </h1>
                </div>

                <div className="text-xl questrial-regular md:text-2xl mt-5 mb-8">
                    <p>Trends & consumer insights by Datum.</p>
                </div>

                <a
                    href="#download"
                    className="inline-block w-52 questrial-regular sm:w-60 bg-[#c6714a] text-white text-center text-sm md:text-base px-6 py-3 mt-1 mb-3 rounded-full font-semibold transition duration-300 hover:bg-[#e0b394] shadow-md"
                >
                    DOWNLOAD REPORT
                </a>

                {/* Partner Logos */}
                <div className="grid grid-cols-3 gap-4 mt-8 mb-8 sm:mb-4">
                    <div>
                        <img src="https://i.postimg.cc/28RnmZfT/Colorlogo.png" alt="Datum" className="object-contain w-full h-8" />
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/zGqWHYvg/kindlife-nobackground.png" alt="Kindlife" className="object-contain w-full h-8" />
                    </div>
                    <div>
                        <img src="https://i.postimg.cc/Qt6FXdXN/5983-unomer-logo-1-removebg-preview.png" alt="Unomer" className="object-contain w-full h-8" />
                    </div>
                </div>

                <div className="text-base questrial-regular sm:text-xl md:text-2xl mt-4 mb-8 lg:mt-10">
                    <span>
                        From K-pop to K-dramas, culture is fueling the rise of K-beauty in India. With data from 30 cities, this report reveals what’s driving the next beauty wave.
                    </span>
                </div>
            </div>

            {/* Hero Image */}
            <div className="lg:mt-0  lg:col-span-6  lg:flex rounded-xl ">
                <img
                    src="https://i.postimg.cc/VNFs9DSf/kindlife-one-pag.png"
                    alt="Main Visual"
                    className="w-full max-w-[400px] md:max-w-[600px] rounded-xl lg:max-w-[100vh]   object-cover z-0"
                />
            </div>
        </section>
    );
}
