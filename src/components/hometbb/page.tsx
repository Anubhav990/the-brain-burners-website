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
                        className='bg-[#F38400] hidden md:block py-[10px] px-[30px] text-white font-bold capitalize rounded-4xl mt-6 shadow-[2px_5px_0_#000000]'>
                            <p className='text-[26px]'>Let's discuss your project</p>
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
            <TbbCode />
            <CrewTBB />
            <CEO />
            <FounderHeroMobile />
            <FAQS />
            <Footer />
        </>
    )
}

export default HomeTbb;
