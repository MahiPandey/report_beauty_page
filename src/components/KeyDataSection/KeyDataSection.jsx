import React, { useState } from 'react';
import Card from '../Card/Card';
import KeyInsights from '../KeyInsights/KeyInsights';
import Carousel from '../Carousel/Carousel'
export default function KeyDataSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDownload = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = formData;

    if (!firstName || !lastName || !email) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        await fetch('https://script.google.com/macros/s/AKfycbxRH0xEXnT48oFN_r5Y1H_dnoUT43Hl6Otk1dFLb60nC6juHln9_PfOX3Pr1WVGxJeC/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email }),
        });

        // Trigger the download
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1SWQbXI7qtzgFSvu0XM4cd_UN14WHKnoA/view?usp=sharing';
        link.setAttribute('download', 'KBeauty_Report.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Error sending to Google Sheets:', error);
        alert('There was an error. Please try again.');
    }
};


    return (
        <section className="bg-[#FED7F9] ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* KEY DATA Cards */}
                <div className=' ml-5 mr-5 lg:ml-20 mt-5 lg:mb-5'>
                    <h2 className="text-3xl questrial-regular sm:text-4xl lg:text-5xl font-semibold mb-6">KEY DATA</h2>
                    <div className="grid questrial-regular grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        <Card heading="$45B" text="beauty and personal care market size in India by 2030" />
                        <Card heading="$1.5B" text="K-beauty market size in India by 2030 " />
                        <Card heading="25.9%" text="CAGR (2024-30) for K-beauty segment" />
                        <Card heading="2X" text="increase in K-beauty buyers in India by 2030" />
                    </div>
                </div>

                {/* Tilted Image */}
                {/* <div className="flex justify-center items-center">
                    <img
                        className="rounded-lg mb-6 transform perspective-[1000px] rotate-y-[10deg] rotate-x-[15deg] shadow-xl max-w-full w-[90%] md:w-[75%] lg:w-[70%]"
                        src="https://i.postimg.cc/28rNP03w/Screenshot-2025-07-22-120523.png"
                        alt="Key Visual"
                    />
                </div> */}
                <div className=' lg:mt-25 mb-5'>
                    <Carousel/>
                </div>
            </div>

            {/* KEY INSIGHTS Section */}
            <div className="grid bg-[#BDFEF6] grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
                <div className='questrial-regular  lg:ml-20 mr-1  mb-8'>
                    <KeyInsights/>
                </div>

                {/* DOWNLOAD FORM */}

                <div id='download' className="bg-[#f6e7d6] questrial-regular ml-5 mr-5 lg:ml-20 mt-2 mb-8 place-self-center h-fit  shadow-xl p-8 rounded-3xl border border-[#c6714a]">
                    <h2 className="text-3xl sm:text-4xl text-center mb-6">Download the full Report</h2>
                    <form onSubmit={handleDownload} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">
                                First Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">
                                Last Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-800">
                                Business Email<span className="text-red-500">*</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!formData.firstName || !formData.lastName || !formData.email}
                            className={`w-full text-white text-sm md:text-base px-6 py-3 rounded-full font-semibold transition duration-300 shadow-md 
        ${!formData.firstName || !formData.lastName || !formData.email
                                    ? 'bg-[#c6714a] opacity-50 cursor-not-allowed'
                                    : 'bg-[#c6714a] hover:bg-[#e0b394]'}`}
                        >
                            DOWNLOAD REPORT
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-3">
                            We're committed to keeping your information safe.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
