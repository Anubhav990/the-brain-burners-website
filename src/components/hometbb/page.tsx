"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import LogoMarquee from '../logoMarquee/page';
import AnimatedCards from '../animatedcards/page';
import AstronautHome from '../astronauthome/page';
import ScrollText from '../scrolltext/page';
import CrewTBB from '../tbbcrew/page';
import CEO from '../CEO/page';
import RoadMap from '../tbbroadmap/page';
import TbbCode from '../tbbcode/page';
import TestimonialsSlider from '../testimonials/page';
import Footer from '../footer/page';
import CreationSlider from '../our-creations-slider/page';
import HeaderModal from '../desktop-header-modal/page';
import MobileSlider from '../mobile-animated-cards/page';
import MobileCreationSlider from '../mobile-our-creations-slider/page';
import FounderHeroMobile from '../mobile-CEO/page';
import FAQS from '../FAQ/page';
import RoadMapMobile from '../tbbroadmapmobile/page';
import RotatingCardsFirst from '../rotating-cards-first/page';
import { useRouter } from 'next/navigation';
import ClientVideoSection from '../clientvideo/page';


const faqs = [
    {
        question: "What services does The Brain Burners (TBB) provide?",
        answer:
            "TBB is a full-stack IT company specializing in custom UI/UX design, app and website development, Performance Marketing, SEO, Branding, Social Media Management and Artificial Intelligence Modernization. We create tailored digital solutions that combine technology, creativity, and strategy ensuring every brand we work with stands out online.",
    },
    {
        question: "What makes TBB different from other IT companies?",
        answer:
            "Unlike agencies that recycle templates, TBB designs every UI/UX from scratch, giving your brand a unique visual identity. We focus on functionality, speed, and design psychology — not just looks — ensuring your website or app actually converts visitors into customers.",
    },
    {
        question: "How does TBB work with clients?",
        answer:
            "We start with a discovery call to understand your goals, audience, and brand tone. Then, we share a custom project roadmap with design mockups, timelines, and development phases. You’re kept in the loop through every milestone from concept to deployment..",
    },
    {
        question: "Can TBB handle everything from design to marketing?",
        answer:
            "Yes. TBB offers a complete digital ecosystem — UI/UX, web & app development, branding, SEO, and social media management. You don’t need multiple vendors; we build and grow your brand under one roof.",
    },
    {
        question: "How long does it take to develop a website or app?",
        answer: `It depends on project size:
Landing Page: 5–7 days

Corporate Website: 2–4 weeks

Custom Web/App Project: 6–10 weeks
We deliver sample designs early so you can visualize direction before full development.`,
    },
    {
        question: "What do I receive at the end of the project?",
        answer:
            `You’ll get:

Complete source files (Figma, XD, codebase)

Deployment on your server or app store

Brand assets (icons, fonts, color codes)

Documentation & optional post-launch support`
    },
    {
        question: "Do you provide hosting and domain services too?",
        answer:
            "We can assist with domain registration, server setup, SSL integration, and website hosting — or work with your existing infrastructure if you already have one.",
    },
];

const HomeTbb = () => {

    const router = useRouter();

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const words = ["Impactful", "Technical", "Creative", "Intuitive"];
    useEffect(() => {
        const interval = setInterval(() => {
            // Start fade out
            setIsVisible(false);

            // After fade out completes, change word and fade in
            setTimeout(() => {
                setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                setIsVisible(true);
            }, 500); // Half second for fade out

        }, 2500); // Change word every 2.5 seconds

        return () => clearInterval(interval);
    }, [words.length]);


    return (
        <>
            <div className='w-full md:max-w-[1300px] mx-auto py-2 px-5 relative z-20'>
                <div className='w-full flex sm:flex-row flex-col justify-center text-black'>
                    <div className='md:w-[70%] w-full'>
                        <div className='flex items-center justify-start text-black'>
                            <p className='font-extrabold leading-4 sm:leading-24 sm:text-[80px] text-[35px]'>Powerful</p>
                            <div
                                className="mt-2 ml-5 bg-contain sm:bg-cover bg-center bg-no-repeat w-[500px] pt-2 sm:pt-0 sm:w-[400px] bg-[url('/orangepaintedbannermob.svg')] sm:bg-[url('/orangepaintedbanner.png')] flex items-center justify-center relative"
                            >

                                {/* Animated Text */}
                                <div className="relative text-center">
                                    <h1
                                        className={`md:text-7xl text-[35px] pb-3 font-bold text-white transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        {words[currentWordIndex]}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <p className='font-extrabold leading-[38px] md:leading-24 text-[35px] md:text-[90px] whitespace-nowrap'>Web & Mobile apps</p>
                        {' '}
                        <p className='font-extrabold leading-14 md:leading-24 text-[35px] md:text-[80px]'>start-to-end</p>
                        <p className='font-normal text-[20px] md:text-[30px] mt-2'>We bring <span className='font-extrabold capitalize'>performance</span> & <span className='font-extrabold capitalize'>beauty</span> to the world through technology!</p>

                        <button
                            onClick={() => router.push('/contact')}
                            className='bg-[#F38400] py-[5px] sm:py-[10px] px-[20px] sm:px-[30px] text-white font-bold capitalize rounded-4xl mt-6 shadow-[2px_5px_0_#000000]'>
                            <p className='text-[18px] sm:text-[26px]'>Let's discuss your project</p>
                        </button>
                    </div>
                    <div className='md:w-[30%] md:mt-0 mt-6 w-full'>
                        <Image src="/svgs/astraunauthero.svg" alt="home" width={600} height={400} priority />
                    </div>
                </div>
            </div>
            <LogoMarquee />
            <div className='md:max-w-[1300px] w-full mx-auto pt-12 pb-8 px-4 relative z-10'>
                <div className='flex flex-col sm:flex-row w-full gap-2'>
                    <div className='sm:w-[60%] w-full'>
                        <div className='flex gap-2 items-center mb-4'>
                            <span className="w-3 h-3 bg-[#F38400] rounded-full"></span>
                            <p className='text-[20px] text-black'>How we can be helpfull</p>
                        </div>
                        {' '}
                        <p className='font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]'>
                            Stay Ahead with
                        </p>
                        <p className='font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]'>
                            Smarter growth Solutions
                        </p>
                    </div>
                    <div className='sm:w-[40%] w-full flex items-center'>
                        <p className='text-[#111111] text-[22px] mt-4 sm:mt-0'>
                            We specialize in delivering premium mobile & web development services, covering everything from UX/UI design & product strategy to AI integration, QA & ongoing maintenance.
                        </p>
                    </div>
                </div>
                <AnimatedCards />
                <MobileSlider />
            </div>
            <div className='max-w-[1300px] mx-auto my-5'>
                <AstronautHome />
            </div>
            <div className='md:pl-[100px] w-[90%] md:w-full md:max-w-[1300px] mx-auto mt-10 relative z-20'>
                <p className='font-bold text-[28px] md:text-[70px] leading-[40px] md:leading-[100px] text-black md:mb-0 mb-4'>Bold Thinking.<br /> Powerful Results.</p>
                <ScrollText />
            </div>
            <RoadMap />
            <RoadMapMobile />
            <CreationSlider />
            <MobileCreationSlider />
            <TestimonialsSlider />
            <ClientVideoSection />
            <TbbCode />
            <CrewTBB />
            <CEO />
            <FounderHeroMobile />
            <FAQS faqs={faqs} />
            <Footer />
        </>
    )
}

export default HomeTbb;
