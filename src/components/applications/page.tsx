"use client";

import React, { useState } from "react";

interface AppItem {
    id: string;
    title: string;
    description: string;
    images: string[];
    backgroundimg: string;
    category: string;
     link: string; 
}

const AppItems: AppItem[] = [
    {
        id: "fitwiser",
        title: "Fitwiser",
        description:
            "Track your fitness journey with powerful real-time analytics tailored just for you. This app counts every calorie with ease and stays on top of your nutrition.",
        images: ["/portfolio/fitwiser.svg", "/portfolio/internal/fitwiser2.svg", "/portfolio/internal/fitwiser3.svg", "/portfolio/internal/fitwiser4.svg"],
        backgroundimg: "/portfolio/fitwisermini.svg",
        category: "Websites",
        link: "https://fitwiser.thebrainburners.io/"
    },
    {
        id: "jobjero",
        title: "JobJero",
        description:
            "JobJero isn't just another job board. It's a smarter, faster, and intuitive way to hire and get hired. We're using AI to match the right talent with the right roles.",
        images: ["/portfolio/jobjaro.svg", "/portfolio/internal/jobjaro2.svg", "/portfolio/internal/jobjaro3.svg", "/portfolio/internal/jobjaro4.svg"],
        backgroundimg: "/portfolio/jobjeromini.svg",
        category: "Websites",
        link: "https://jobjaro.thebrainburners.io/"
    },
    {
        id: "rideshare",
        title: "Rideshare",
        description:
            "Rideshare is a user-friendly ride-hailing app crafted to make city travel effortless.",
        images: ["/portfolio/rideshare.svg", "/portfolio/internal/rideshare2.svg", "/portfolio/internal/rideshare3.svg", "/portfolio/internal/rideshare4.svg"],
        backgroundimg: "/portfolio/ridesharemini.svg",
        category: "Websites",
        link: "https://rideshare.thebrainburners.io/"
    },
    {
        id: "propertypro",
        title: "PropertyPro AI",
        description:
            "PropertyPro AI was developed to solve challenges in real estate: time & inconsistent client communication.",
        images: ["/portfolio/propertypro.svg", "/portfolio/internal/property2.svg", "/portfolio/internal/property3.svg", "/portfolio/internal/property4.svg"],
        backgroundimg: "/portfolio/propertypromini.svg",
        category: "Websites",
        link: "https://propertyproai.thebrainburners.io/"
    }
];

const PortfolioCard = ({ item }: { item: AppItem }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handlePrevious = () =>
        setCurrentImageIndex((prev) =>
            prev === 0 ? item.images.length - 1 : prev - 1
        );

    const handleNext = () =>
        setCurrentImageIndex((prev) =>
            prev === item.images.length - 1 ? 0 : prev + 1
        );

    return (
        <div className="max-w-[1300px] mx-auto mb-12">
            <div className="rounded-4xl overflow-hidden group transition-all duration-300">
                <div className="flex flex-col md:flex-row min-h-[400px]">
                    {/* Left Image Section */}
                    <div
                        className="relative w-full md:w-[45%] overflow-hidden z-20 h-[400px] bg-[#2D2D2D] rounded-3xl"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={item.images[currentImageIndex]}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-3xl"
                        />

                        {isHovered && item.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrevious}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F38400] rounded-full flex items-center justify-center shadow-lg z-30"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#F38400] rounded-full flex items-center justify-center shadow-lg z-30"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>

                    {/* Right Info Section */}
                    <div className="relative bg-[#F7F7F7] border border-[#DBDBDB] rounded-4xl flex-1 p-8 md:p-12 flex flex-col justify-center">
                        <div className="absolute top-8 right-8">
                            <img
                                src={item.backgroundimg}
                                alt=""
                                className="w-20 h-20 object-contain"
                            />
                        </div>

                        <a href={item.link} target="_blank" className="text-3xl md:text-4xl font-bold text-black mb-4 underline decoration-2 decoration-gray-400 underline-offset-8">
                            {item.title}
                        </a>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[500px]">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ✅ Main Component to Export
const Applications = () => {
    return (
        <div className="space-y-12">
            {AppItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default Applications;
