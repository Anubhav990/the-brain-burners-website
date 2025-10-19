"use client";

import Footer from "@/components/footer/page";
import GraphicDesign from "@/components/GraphicDesign/page";
import Header from "@/components/header/page";
import { useState } from "react";
import Branding from "../testing-2/page";
import Applications from "@/components/applications/page";

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    images: string[];
    backgroundimg: string;
    category: string;
     link: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: "primedepth",
        title: "Prime Depth Labs",
        description:
            "We combine cutting-edge AI with software development to create intelligent, scalable solutions.",
        images: ["/portfolio/primedepth.svg"],
        backgroundimg: "/portfolio/primedepthmini.svg",
        category: "Websites",
        link: "https://www.primedepthlabs.com/"
    },
    {
        id: "The Mud",
        title: "The Mud",
        description:
            "A contemporary restaurant blending global flavors with local freshness to craft unforgettable dining experiences.",
        images: ["/portfolio/themud.svg"],
        backgroundimg: "/portfolio/themudmini.svg",
        category: "Websites",
        link: "https://www.themudbar.co.nz/"
    },
    {
        id: "Infutrix",
        title: "Infutrix",
        description:
            "Infutrix partners with innovative companies, lending software engineering and AI expertise to propel them to new heights.",
        images: ["/portfolio/infutrix.svg"],
        backgroundimg: "/portfolio/infutrixmini.svg",
        category: "Websites",
        link: "https://infutrix.com/"
    },
    {
        id: "eduLinks",
        title: "EduLinks",
        description:
            "Edulinks AI helps you discover your ideal career, shortlist universities & courses, and calculate visa success.",
        images: ["/portfolio/edulinks.svg"],
        backgroundimg: "/portfolio/edulinksmini.svg",
        category: "Websites",
        link: "https://edulinks.io/"
    },
    {
        id: "Zaucto",
        title: "Zaucto",
        description:
            "Zaucto transforms how businesses source chemicals & additives with transparency & efficiency.",
        images: ["/portfolio/zaucto.svg"],
        backgroundimg: "/portfolio/zauctomini.svg",
        category: "Websites",
        link: "#"
    },
    {
        id: "Hoopsie",
        title: "Hoopsie",
        description:
            "Hoopsie isn't just jewelry, it's the healthy relationship you've always wanted — trust & transparency.",
        images: ["/portfolio/hoopsie.svg"],
        backgroundimg: "/portfolio/hoopsiemini.svg",
        category: "Websites",
        link: "#"
    },
    {
        id: "roopvedaa",
        title: "RoopVedaa",
        description:
            "At RoopVedaa, we believe every beauty journey is unique — customize your own hamper your way.",
        images: ["/portfolio/roopveda.svg"],
        backgroundimg: "/portfolio/roopvedamini.svg",
        category: "Websites",
        link: "#"
    },
    {
        id: "IBSC",
        title: "IBSC",
        description:
            "IBSC provides banking and finance courses for graduates, job seekers, and professionals.",
        images: ["/portfolio/ibsc.svg"],
        backgroundimg: "/portfolio/ibscmini.svg",
        category: "Websites",
        link: "https://ibsc.tbbsample.com/"
    },
    {
        id: "Posterized",
        title: "Posterized",
        description:
            "A creative poster design collection — merging style and storytelling.",
        images: ["/portfolio/posterized.svg"],
        backgroundimg: "/sliders/fulllogos/posterizedfull.svg",
        category: "Websites",
        link: "https://www.posterized.in/"
    },
];

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
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
        <div className="max-w-[1300px] mx-auto">
            <div className="rounded-4xl overflow-hidden group transition-all duration-300">
                <div className="flex flex-col md:flex-row min-h-[400px]">
                    <div
                        className="relative w-full md:w-[45%] overflow-hidden z-20 sm:min-h-[400px] bg-[#2D2D2D] rounded-3xl"
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

const Services = () => {
    const tabs = ["Graphic Designs", "Branding", "Websites", "Applications"];
    const [activeTab, setActiveTab] = useState(tabs[0]); // 'Websites'

    const filteredItems = portfolioItems.filter(
        (item) => item.category.trim().toLowerCase() === activeTab.toLowerCase()
    );


    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Intro Section */}
            <div className="md:max-w-[1300px] w-full mx-auto py-12 px-4">
                <div className="flex flex-col sm:flex-row w-full gap-2">
                    <div className="sm:w-[60%] w-full">
                        <div className="flex gap-2 items-center mb-4">
                            <span className="w-3 h-3 bg-[#F38400] rounded-full"></span>
                            <p className="text-[20px] text-black">From concept to scale</p>
                        </div>
                        <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px] capitalize">
                            the brain burner's
                        </p>
                        <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px] capitalize">
                            work
                        </p>
                    </div>
                    <div className="sm:w-[40%] w-full flex items-center">
                        <p className="text-[#111111] text-[22px] mt-4 sm:mt-0">
                            We deliver tailored solutions across industries, complexities, and
                            design styles — no templates, only original, handcrafted work.
                        </p>
                    </div>
                </div>
            </div>

            {/* ✅ Tabs */}
            <div className="mt-6 flex justify-center">
                <div className="sm:inline-flex gap-2 p-2 bg-white shadow-md rounded-full border border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-3 sm:px-6 py-2 rounded-full text-[12px] sm:text-base font-medium transition-all duration-300 ${activeTab === tab
                                ? "bg-white border border-[#F38400] text-[#F38400]"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* ✅ Tab Content */}
            <div className="w-full mx-auto py-12">
                {activeTab === "Websites" && (
                    filteredItems.length > 0 ? (
                        <div className="flex flex-col gap-6 md:gap-8">
                            {filteredItems.map((item) => (
                                <PortfolioCard key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 py-20">
                            <p>No projects in this category yet.</p>
                        </div>
                    )
                )}

                {activeTab === "Graphic Designs" && <GraphicDesign />}
                {activeTab === "Branding" && <Branding />}
                {activeTab === "Applications" && <Applications />}
            </div>

            <Footer />
        </div>
    );
};

export default Services;