"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Service = {
    id: number;
    title: string | string[];
    description: string;
    staticIcon: string;
    animatedIcon: string;
    color: string;
    animatedIconPosition: string; // 👈 NEW FIELD
    path?: string;
};

const AnimatedCards: React.FC = () => {

    const router = useRouter();

    const services: Service[] = [
        {
            id: 1,
            title: ["UI/UX", "Designing"],
            description: "We craft intuitive & visually engaging interfaces that put user experience at the center. Our design process focuses on understanding user behavior, creating seamless & aesthetically pleasing layouts that align with your brand identity.",
            staticIcon: "/gifs/uiuxstatic.svg",
            animatedIcon: "/gifs/uiuxmoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/uiux'
        },
        {
            id: 2,
            title: ["Application", "Development"],
            description: "We design and develop high-performance applications that bring your ideas to life and empower your business. From mobile apps to enterprise-grade solutions, our applications are built with scalability, security, and usability in mind.",
            staticIcon: "/gifs/appdevstatic.svg",
            animatedIcon: "/gifs/appdevmoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/app-development'
        },
        {
            id: 3,
            title: ["Web", "Development"],
            description: "We build powerful, scalable, and user-friendly websites tailored to your business needs. From sleek corporate sites to complex web platforms, our development process ensures speed, security & performance across all devices.",
            staticIcon: "/gifs/webdevstatic.svg",
            animatedIcon: "/gifs/webdevmoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/web-development'
        },
        {
            id: 4,
            title: ["Performance", "Marketing"],
            description: "We create data-driven marketing strategies that focus on measurable results. From paid campaigns and search engine marketing to social media ads and conversion optimization, our approach is designed to maximize ROI.",
            staticIcon: "/gifs/performancestatic.svg",
            animatedIcon: "/gifs/performancemoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/performance-marketing'
        },
        {
            id: 5,
            title: "SEO",
            description: "We optimize your digital presence with smart SEO strategies that boost visibility, improve rankings, and bring organic traffic to your website  ensuring your brand is found by the right audience at the right time.",
            staticIcon: "/gifs/seostatic.svg",
            animatedIcon: "/gifs/seomoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/seo'
        },
        {
            id: 6,
            title: ["Social Media", "Management"],
            description: "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
            staticIcon: "/gifs/socialmediastatic.svg",
            animatedIcon: "/gifs/socialmediamoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/social-media-management'
        },
        {
            id: 7,
            title: "Branding",
            description: "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
            staticIcon: "/gifs/brandingstatic.svg",
            animatedIcon: "/gifs/brandingmoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/branding'
        },
        {
            id: 8,
            title: "Artificial Intelligence Modernization",
            description: "We ensure your digital products remain reliable, secure, and high-performing through continuous quality analysis and maintenance. Our team conducts rigorous testing to identify and resolve issues, optimize performance.",
            staticIcon: "/gifs/aimodernstatic.svg",
            animatedIcon: "/gifs/aimoving.gif",
            color: "bg-gray-100",
            animatedIconPosition: "-top-[8px] -left-[8px] w-[70px] h-[70px]", // 👈 custom position
            path: '/ai-modernization'
        },
    ];

    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="w-full my-20 relative z-20 hidden sm:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`${service.color} rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer group hover:shadow-xl h-[500px]`}
                        style={{
                            backgroundColor:
                                hoveredCard === service.id ? "#ee8001" : "#f3f4f6",
                        }}
                        onMouseEnter={() => setHoveredCard(service.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* ===== Icon Section ===== */}
                        <div className="relative mb-4 w-[60px] h-[60px] flex items-center justify-center shrink-0">
                            <Image
                                src={service.staticIcon}
                                alt={`${Array.isArray(service.title) ? service.title.join(" ") : service.title} static`}
                                width={55}
                                height={55}
                                className={`object-contain transition-all duration-300 ${hoveredCard === service.id
                                    ? "opacity-0 scale-0"
                                    : "opacity-100 scale-100"
                                    }`}
                            />

                            {/* Animated Icon with individual positioning */}
                            <Image
                                src={service.animatedIcon}
                                alt={`${Array.isArray(service.title) ? service.title.join(" ") : service.title} animation`}
                                width={9500}
                                height={9500}
                                className={`object-contain absolute ${service.animatedIconPosition} transition-all duration-300 ${hoveredCard === service.id
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-0"
                                    }`}
                            />
                        </div>

                        {/* ===== Content Section ===== */}
                        <div className="flex-grow">
                            <h3
                                className={`text-[22px] mt-2 font-bold mb-3 ${hoveredCard === service.id ? "text-white" : "text-black"
                                    }`}
                            >
                                {Array.isArray(service.title)
                                    ? service.title.map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            <br />
                                        </React.Fragment>
                                    ))
                                    : service.title}
                            </h3>
                            <p
                                className={`text-[17px] leading-relaxed ${hoveredCard === service.id ? "text-white" : "text-black"
                                    }`}
                            >
                                {service.description}
                            </p>
                        </div>

                        {/* ===== Button Section ===== */}
                        <div className="mt-6 relative">
                            <button
                                onClick={() => router.push(`${service.path}`)}
                                className={`bg-orange-500 text-white font-semibold rounded-full flex items-center justify-center transition-all duration-500 ease-out relative shadow-[0px_3px_0_#000000] overflow-hidden ${hoveredCard === service.id
                                    ? "w-[90%] py-3 px-6 shadow-[2px_3px_0_#000000]"
                                    : "w-12 h-12"
                                    }`}
                            >
                                <span
                                    className={`transition-all duration-300 text-[20px] whitespace-nowrap ${hoveredCard === service.id
                                        ? "opacity-100 mr-2"
                                        : "opacity-0 absolute"
                                        }`}
                                >
                                    Know More
                                </span>
                                <svg
                                    className={`w-[23px] h-[23px] transition-transform duration-300 ${hoveredCard === service.id ? "translate-x-1" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17L17 7M17 7H8M17 7V16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCards;

