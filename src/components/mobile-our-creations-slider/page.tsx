import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    textColor?: string;
    link:string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Fitwiser",
        description:
            "Track your fitness journey with powerful real-time analytics tailored just for you. This app counts every calorie with ease and stay on top of your nutrition goals.",
        image: "/sliders/fitwiser.png",
        textColor: "text-black",
        link: "https://fitwiser.thebrainburners.io/"
    },
    {
        id: 2,
        title: "JobJaro",
        description:
            "JobJaro isn't just another job board. It's a smarter, faster, and intuitive way to hire and get hired. We're using AI to match the right talent with the right roles.",
        image: "/sliders/jobjaro.png",
        textColor: "text-black",
        link: "https://jobjaro.thebrainburners.io/"
    },
    {
        id: 3,
        title: "Rideshare",
        description:
            "Rideshare is a user-friendly ride-hailing app crafted to make city travel effortless. Whether you're commuting daily or booking a ride on the go.",
        image: "/sliders/rideshare.png",
        textColor: "text-black",
        link: "https://edulinkcasestudy.tbbsample.com/"
    },
    {
        id: 4,
        title: "propertyPro AI",
        description:
            "PropertyPro AI was developed to solve some of the most pressing challenges in the real estate industry slow response times & inconsistent client communication.",
        image: "/sliders/propertypro.png",
        textColor: "text-black",
        link: "https://propertyproai.thebrainburners.io/"
    },
    {
        id: 5,
        title: "Prime Depth Labs",
        description:
            "We combine cutting-edge AI with software development to create intelligent, scalable, and future-ready solutions for businesses worldwide.",
        image: "/sliders/primedepth.png",
        textColor: "text-black",
        link: "https://www.primedepthlabs.com/"
    },
    {
        id: 6,
        title: "The Mud",
        description:
            "The Mud is a contemporary restaurant blending global flavors with local freshness to craft unforgettable dining experiences.",
        image: "/sliders/themud.png",
        textColor: "text-black",
        link: "https://www.themudbar.co.nz/"
    },
    {
        id: 7,
        title: "Infutrix",
        description:
            "Infutrix partners with innovative companies, from startups to Fortune 500, lending software engineering and Al expertise to propel them to new heights.",
        image: "/sliders/infutrix.png",
        textColor: "text-black",
        link: "https://infutrix.com/"
    },
    {
        id: 8,
        title: "EduLinks",
        description:
            "Edulinks AI helps you discover your ideal career, shortlist universities & courses, and calculate visa success all in one smart, personalized journey.",
        image: "/sliders/edulinks.png",
        textColor: "text-black",
        link: "https://edulinks.io/"
    },
    {
        id: 9,
        title: "Zaucto",
        description:
            "At Zaucta, procurement should be effortless, transparent & cost-efficient. It is designed to transform the way businesses source chemicals & additives.",
        image: "/sliders/zaucto.png",
        textColor: "text-black",
        link: "https://zaucto.com/"
    },
    {
        id: 10,
        title: "Hoopsie",
        description:
            "Hoopsie is not just another daily wear anti-tarnish jewelry brand, it's the healthy relationship that you've always wanted. We believe in trust & transparency.",
        image: "/sliders/hoopsie.png",
        textColor: "text-black",
        link: "https://hoopsie.in/"
    },
    // {
    //     id: 11,
    //     title: "Roopvedaa",
    //     description:
    //         "At RoopVedaa, we believe every beauty journey is unique. That's why we give you the option to customize your own hamper.",
    //     image: "/sliders/roopveda.png",
    //     textColor: "text-black",
    //     link: "https://roopvedaa.thebrainburners.io/"
    // },
    // {
    //     id: 11,
    //     title: "IBSC",
    //     description:
    //         "IBSC's provides banking and finance courses are open to graduates, job seekers & working professionals looking to build a career in the Banking,",
    //     image: "/sliders/ibsc.png",
    //     textColor: "text-black",
    //     link: "https://ibsc.thebrainburners.io/"
    // },
    {
        id: 11,
        title: "Posterized",
        description:
            "Transform your memories into stunning wall art with Posterized. Custom posters designed to capture your unique moments.",
        image: "/sliders/posterized.png",
        textColor: "text-black",
        link: "https://www.posterized.in/"
    },
];

export default function MobileCreationSlider() {

    const router = useRouter();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const minSwipeDistance = 50;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <div className="bg-gray-50 flex items-center justify-center p-4 sm:hidden">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className="px-6 pt-8 pb-6 text-center">
                    <p className="text-[#F38400] text-[15px] font-medium mb-2">
                        • Highlights From Our Creations
                    </p>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Versatile In Complexity, Industries,
                        <br />
                        And Design Approaches
                    </h1>
                </div>

                {/* Slider Container */}
                <div className="relative px-6 pb-8">
                    <div
                        className="overflow-hidden"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {projects.map((project) => (
                                <div key={project.id} className="min-w-full">
                                    {/* Image Container */}
                                    <div className="bg-gray-800 rounded-2xl overflow-hidden mb-4 aspect-[4/3] flex items-center justify-center">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src =
                                                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23374151"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="system-ui" font-size="18" fill="%239CA3AF"%3E' +
                                                    project.title +
                                                    '%3C/text%3E%3C/svg%3E';
                                            }}
                                        />
                                    </div>

                                    {/* Project Info */}
                                    <div className="px-2">
                                        {/* <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {project.title}
                                        </h3> */}
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl font-bold text-gray-900 mb-2 underline hover:text-[#F38400] transition">
                                            {project.title}
                                        </a>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/3 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-[#F38400]" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/3 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-[#F38400]" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 pb-6">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? 'w-8 bg-[#F38400]'
                                : 'w-2 bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="px-6 pb-8">
                    <button
                        onClick={() => router.push('/contact')}
                        className="w-full bg-[#F38400] text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transition-all shadow-md">
                        Let's Discuss Your Project
                    </button>
                </div>
            </div>
        </div>
    );
}