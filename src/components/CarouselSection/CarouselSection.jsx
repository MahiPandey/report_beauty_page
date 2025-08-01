import React, { useState } from 'react';

import Carousel from '../Carousel/Carousel';

const images = [
    'https://images.pexels.com/photos/32390716/pexels-photo-32390716.jpeg',
    'https://images.pexels.com/photos/29247080/pexels-photo-29247080.jpeg',
    'https://images.pexels.com/photos/18766295/pexels-photo-18766295.jpeg',
  ];

export default function CarouselSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDownload = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = formData;

        // Simple validation
        if (!firstName || !lastName || !email) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a hidden link and trigger download
        const link = document.createElement('a');
        link.href = reportPDF;
        link.setAttribute('download', '2024_Report.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-white px-8 py-16 flex items-start justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-22">

                {/* Left Side */}
                <div className="space-y-8 m-10">
                    {/* Carousel (static preview here) */}
                    <Carousel images={images}/>


                    {/* Research Findings */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Here’s what our research uncovered:</h3>
                        <ul className="list-disc pl-5 space-y-3 text-gray-800">
                            <li>To counter inflation, more shoppers plan to compare products online to find the best deals and prices.</li>
                            <li>Marketplaces like Amazon and Walmart are the most preferred shopping channels amongst the majority of shoppers.</li>
                            <li>More shoppers plan to increase retail spending in 2024 vis a vis the previous year, even amidst economic instability.</li>
                            <li>Shoppers base their buying decisions on the content and image quality of product pages.</li>
                            <li>Google Search followed by Amazon.com are the top choices to begin product search online.</li>
                        </ul>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="bg-white shadow-xl p-8 rounded-4xl w-full max-w-lg border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6">Get Your Free Copy</h2>

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
                            className="w-full bg-red-400 hover:bg-red-500 text-white font-bold py-2 rounded-md transition"
                        >
                            DOWNLOAD REPORT
                        </button>

                        <p className="text-xs text-center text-gray-500 mt-3">
                            We're committed to keeping your information safe.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}
