"use client"

import AnimatedCards from '@/components/animatedcards/page';
import CEO from '@/components/CEO/page';
import FAQS from '@/components/FAQ/page';
import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import LogoMarquee from '@/components/logoMarquee/page';
import MobileSlider from '@/components/mobile-animated-cards/page';
import FounderHeroMobile from '@/components/mobile-CEO/page';
import TbbCode from '@/components/tbbcode/page';
import CrewTBB from '@/components/tbbcrew/page';
import Image from 'next/image';
import React from 'react'

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    image: string;
    backgroundimg: string;
}

const portfolioItems: PortfolioItem[] = [
    {
        id: 'fitwiser',
        title: 'Fitwiser',
        description: 'Track your fitness journey with powerful real-time analytics tailored just for you. This app counts every calorie with ease and stays on top of your nutrition.',
        image: '/portfolio/fitwiser.svg',
        backgroundimg: '/portfolio/fitwisermini.svg',
    },
    {
        id: 'jobjero',
        title: 'JobJero',
        description: "JobJero isn't just another job board. It's a smarter, faster, and intuitive way to hire and get hired. We're using AI to match the right talent with the right roles.",
        image: '/portfolio/jobjaro.svg',
        backgroundimg: '/portfolio/jobjeromini.svg',
    },
    {
        id: 'rideshare',
        title: 'Rideshare',
        description: "Rideshare is a user-friendly ride-hailing app crafted to make city travel effortless. Whether you're commuting daily, or traveling a ride on the go.",
        image: '/portfolio/rideshare.svg',
        backgroundimg: '/portfolio/ridesharemini.svg',
    },
    {
        id: 'propertypro',
        title: 'PropertyPro AI',
        description: 'PropertyPro AI was developed to solve some of the most pressing challenges in real estate: time & inconsistent client communication.',
        image: '/portfolio/propertypro.svg',
        backgroundimg: '/portfolio/propertypromini.svg',
    },
    {
        id: 'primedepth',
        title: 'Prime Depth Labs',
        description: 'We combine cutting-edge AI with software development to create intelligent, scalable, and future-ready solutions for businesses worldwide.',
        image: '/portfolio/primedepth.svg',
        backgroundimg: '/portfolio/primedepthmini.svg',
    },
    {
        id: 'The Mud',
        title: 'The Mud',
        description: 'The Mud is a contemporary restaurant blending global flavors with local freshness to craft unforgettable dining experiences.',
        image: '/portfolio/themud.svg',
        backgroundimg: '/portfolio/themudmini.svg',
    },
    {
        id: 'Infutrix',
        title: 'Infutrix',
        description: 'Infutrix partners with innovative companies, from startups to Fortune 500, lending software engineering and Al expertise to propel them to new heights.',
        image: '/portfolio/infutrix.svg',
        backgroundimg: '/portfolio/infutrixmini.svg',
    },
    {
        id: 'eduLinks',
        title: 'EduLinks',
        description: 'Edulinks AI helps you discover your ideal career, shortlist universities & courses, and calculate visa success all in one smart, personalized journey.',
        image: '/portfolio/edulinks.svg',
        backgroundimg: '/portfolio/edulinksmini.svg',
    },
    {
        id: 'Zaucto',
        title: 'Zaucto',
        description: 'At Zaucta, procurement should be effortless, transparent & cost-efficient. It is designed to transform the way businesses source chemicals & additives.',
        image: '/portfolio/zaucto.svg',
        backgroundimg: '/portfolio/zauctomini.svg',
    },
    {
        id: 'Hoopsie',
        title: 'Hoopsie',
        description: "Hoopsie is not just another daily wear anti-tarnish jewelry brand, it's the healthy relationship that you've always wanted. We believe in trust & transparency.",
        image: '/portfolio/hoopsie.svg',
        backgroundimg: '/portfolio/hoopsiemini.svg',
    },
    {
        id: 'roopvedaa',
        title: 'roopvedaa',
        description: "At RoopVedaa, we believe every beauty journey is unique. That's why we give you the option to customize your own hamper.",
        image: '/portfolio/roopveda.svg',
        backgroundimg: '/portfolio/roopvedamini.svg',
    },
    {
        id: 'IBSC',
        title: 'IBSC',
        description: "IBSC's provides banking and finance courses are open to graduates, job seekers & working professionals looking to build a career in the Banking,",
        image: '/portfolio/ibsc.svg',
        backgroundimg: '/portfolio/ibscmini.svg',
    },
    {
        id: 'Posterized',
        title: 'Posterized',
        description: "At RoopVedaa, we believe every beauty journey is unique. That's why we give you the option to customize your own hamper.",
        image: '/portfolio/posterized.svg',
        backgroundimg: '/portfolio/fitwisermini.svg',
    }
];

const Services = () => {
    return (
        <>
            <Header />

            <div className='md:max-w-[1300px] w-full mx-auto py-12 px-4'>
                <div className='flex flex-col sm:flex-row w-full gap-2'>
                    <div className='sm:w-[60%] w-full'>
                        <div className='flex gap-2 items-center mb-4'>
                            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            <p className='text-[20px] text-black'>From concept to scale</p>
                        </div>
                        {' '}
                        <p className='font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px] capitalize'>
                            the brain burner's
                        </p>
                        <p className='font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px] capitalize'>
                            work
                        </p>
                    </div>
                    <div className='sm:w-[40%] w-full flex items-center'>
                        <p className='text-[#111111] text-[22px] mt-4 sm:mt-0'>
                            We deliver tailored solutions across industries, complexities, and design styles no templates, only original, handcrafted work. Consistently delivering excellence across industries.
                        </p>
                    </div>
                </div>
            </div>

            {/* Portfolio Grid Section */}
            <div className="md:max-w-[1300px] w-full mx-auto py-12 px-4">
                <div className="flex flex-col gap-6 md:gap-8">
                    {portfolioItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className='flex flex-col md:flex-row min-h-[400px]'>
                                {/* Left side - Image */}
                                <div className="relative w-full md:w-[45%] min-h-[400px] bg-[#2D2D2D] rounded-3xl">
                                    <Image
                                        priority
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover rounded-3xl"
                                    />
                                </div>

                                {/* Right side - Content */}
                                <div className='relative flex-1 p-8 md:p-12 flex flex-col justify-center'>
                                    {/* Logo in top-right corner */}
                                    <div className="absolute top-8 right-8">
                                        <Image
                                            priority
                                            src={item.backgroundimg}
                                            alt=""
                                            width={80}
                                            height={80}
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 underline decoration-2 decoration-gray-400 underline-offset-8">
                                        {item.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[500px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Services;