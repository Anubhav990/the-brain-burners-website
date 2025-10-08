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

const Services = () => {
    return (
        <>
            <Header />
            <div className="sm:max-w-[1300px] w-full mx-auto relative flex flex-col md:flex-row justify-center items-center gap-10 px-3 py-6 sm:px-10 sm:py-5 lg:px-10 overflow-x-hidden">
                <div className="z-10 flex flex-col gap-1 sm:gap-3 px-[20px] sm:px-0 w-full sm:w-[60%]">
                    <h1 className="text-[#000000] mb-0 sm:mb-2 text-[25px] lg:text-[64px] font-black">
                        Launchpad
                    </h1>
                    <Image src="/services/servicesbanner.svg" alt="of business" width={600} height={400} className='hidden sm:block' />
                    <Image src="/services/servicesbannermob.svg" alt="of business" width={600} height={400} className='sm:hidden block' />
                    <p className="text-[#111111] captalize text-md sm:text-lg lg:text-[30px] font-medium">
                        From design to development, we’re your mission crew. Every service is a booster, propelling your brand into orbit.
                    </p>
                </div>
                <div className="w-full h-full sm:w-[40%] sm:h-[600px]">
                    <Image priority width={600} height={400} className="w-full h-full" src="/svgs/services-servicesmain.svg" alt="uiux" />
                </div>
            </div>
               <LogoMarquee />
                <div className='md:max-w-[1300px] w-full mx-auto py-12 px-4'>
                    <div className='flex flex-col sm:flex-row w-full gap-2'>
                        <div className='sm:w-[60%] w-full'>
                            <div className='flex gap-2 items-center mb-4'>
                                <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
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
                <TbbCode />
                <CrewTBB />
                <CEO />
                <FAQS />
                <FounderHeroMobile />
                <Footer />
        </>

    )
}

export default Services;
