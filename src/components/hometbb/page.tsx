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


const HomeTbb = () => {

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
            <div className='w-full max-w-[1300px] mx-auto py-2 px-5 relative z-20'>
                <div className='w-full flex justify-center text-black'>
                    <div className='w-[70%]'>
                        <div className='flex justify-start text-black'>
                            <p className='font-extrabold leading-24 text-[80px]'>Powerful</p>
                            <div
                                className="mt-2 ml-5  bg-cover bg-center bg-no-repeat w-[400px]  flex items-center justify-center relative"
                                style={{ backgroundImage: "url('/orangepaintedbanner.png')" }}
                            >

                                {/* Animated Text */}
                                <div className="relative text-center">
                                    <h1
                                        className={`text-7xl pb-3 font-bold text-white transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    >
                                        {words[currentWordIndex]}
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <p className='font-extrabold leading-24 text-[90px] whitespace-nowrap'>Web & Mobile apps</p>
                        {' '}
                        <p className='font-extrabold leading-24 text-[80px]'>start-to-end</p>
                        <p className='font-normal text-[30px] mt-2'>We bring <span className='font-extrabold capitalize'>performance</span> & <span className='font-extrabold capitalize'>beauty</span> to the world through technology!</p>

                        <button className='bg-[#F38400] py-[10px] px-[30px] text-white font-bold capitalize rounded-4xl mt-6 shadow-[2px_5px_0_#000000]'>
                            <p className='text-[26px]'>Let's discuss your project</p>
                        </button>
                    </div>
                    <div className='w-[30%]'>
                        <Image src="/svgs/astraunauthero.svg" alt="home" width={600} height={400} priority />
                    </div>
                </div>
            </div>
            <LogoMarquee />
            <div className='max-w-[1300px] mx-auto py-12 relative z-20'>
                <div className='flex w-full gap-2'>
                    <div className='w-[60%]'>
                        <div className='flex gap-2 items-center mb-4'>
                            <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                            <p className='text-[20px] text-black'>How we can be helpfull</p>
                        </div>
                        {' '}
                        <p className='font-bold text-black text-[60px] leading-[65px]'>
                            Stay Ahead with
                        </p>
                        <p className='font-bold text-black text-[60px] leading-[65px]'>
                            Smarter growth Solutions
                        </p>
                    </div>
                    <div className='w-[40%] flex items-center'>
                        <p className='text-[#111111] text-[22px]'>
                            We specialize in delivering premium mobile & web development services, covering everything from UX/UI design & product strategy to AI integration, QA & ongoing maintenance.
                        </p>
                    </div>
                </div>
                <AnimatedCards />
            </div>
            <div className='max-w-[1300px] mx-auto my-5'>
                <AstronautHome />
            </div>
            <div className='pl-[100px] max-w-[1300px] mx-auto mt-10'>
                <p className='font-bold text-[70px] leading-[100px] text-black'>Bold Thinking. Powerful Results.</p>
                <ScrollText />
            </div>
            <TbbCode />
            <CrewTBB />
            <CEO /> 
            <RoadMap />
        </>
    )
}

export default HomeTbb;
