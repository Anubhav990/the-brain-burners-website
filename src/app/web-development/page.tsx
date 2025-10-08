"use client";

import AnimatedDots from "@/components/animateddots/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import React from "react";

import FAQS from "@/components/FAQ/page";
import ToolsCards from "@/components/toolcards/UiuxToolCards";
import Image from "next/image";
import ScrollText3 from "@/components/servicesscrolltexts/ScrollText3";
import WebDevelopmentToolsCards from "@/components/toolcards/WebDevelopmentToolCards";
import WebDevServiceCards from "@/components/servicecards/webdevelopment";
import { useRouter } from "next/navigation";

const WebDevelopment = () => {

    const router = useRouter();

    return (
        <div>
            <Header />
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 px-3 py-6 sm:px-10 sm:py-10 lg:px-20 overflow-x-hidden">
                <AnimatedDots />

                <div className="z-10 flex flex-col gap-1 sm:gap-3 px-[20px] sm:px-0 w-full sm:w-[60%]">
                    <h1 className="text-[#000000] mb-0 sm:mb-2 text-[25px] lg:text-[56px] font-black">
                        Web Development
                    </h1>
                    <div className="text-[#F38400] font-black text-[33px] sm:text-6xl uppercase">
                        That Works
                    </div>
                    <p className="text-[#111111] captalize text-md sm:text-lg lg:text-[32px] font-medium">
                        We create fast, secure, and scalable websites designed to engage users and drive growth.
                    </p>
                    <button
                        type="submit"
                        className="bg-[url(/btn-bg.png)] my-4 bg-cover text-white w-[365px] h-16 text-[18px] sm:text-[22px] font-semibold px-5 py-3 sm:px-4 sm:py-3 rounded-full shadow hidden sm:block capitalize text-nowrap"
                    >
                        Transform Ideas into Experiences
                    </button>
                </div>
                <div className="w-full h-full sm:w-[40%] sm:h-[600px]">
                    <Image priority width={600} height={400} className="w-full h-full" src="/svgs/services-webdev.svg" alt="uiux" />
                </div>
            </div>

            <ScrollText3 />

            <div className="mt-12 sm:mt-20 md:max-w-[1300px] w-full mx-auto flex flex-col sm:flex-row gap-2 px-6 sm:px-0">
                <div className="sm:w-[60%] w-full">
                    <div className="flex gap-2 items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className="text-[20px] text-black">How we can be helpfull</p>
                    </div>{" "}
                    <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]">
                        Why Choose Our Web Development
                    </p>
                </div>
                <div className="sm:w-[40%] w-full flex items-center">
                    <p className="text-[#111111] text-[20px] sm:text-[22px] mt-4 sm:mt-0">
                        We focus on creating websites that balance performance, design, and reliability built to grow with your business.
                    </p>
                </div>
            </div>

            <WebDevServiceCards />
            <div className="w-full px-6 sm:px-0 sm:max-w-[1300px] mx-auto">
                <div className="text-[16px] sm:text-[32px] text-black font-medium flex items-center gap-2">
                    <span className="h-[4px] w-20 sm:w-30 rounded bg-[#F38400]"></span>
                    Tech Stack
                </div>
                <h1 className="text-[40px] sm:text-[72px] text-black font-bold">Tools Used</h1>
                <WebDevelopmentToolsCards />
            </div>


            <div className="mt-12 sm:mt-20 md:max-w-[1300px] w-full mx-auto flex flex-col sm:flex-row gap-2 px-6 sm:px-0 relative mb-0 sm:mb-80">
                <div className="hidden sm:block bg-[url('/services/webdevelopment/webdevprocess.svg')] bg-cover bg-no-repeat absolute top-0 right-0 sm:top-[150px] sm:right-[-90px] w-full h-[550px] z-50">
                </div>
                <div className="sm:w-[60%] w-full">
                    <div className="flex gap-2 items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className="text-[20px] text-black">TBB’s process for web development</p>
                    </div>{" "}
                    <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]">
                        We have best team & <br />
                        best process
                    </p>
                    <p className="text-[#111111] text-[20px] sm:text-[22px] mt-0 sm:mt-4">
                        We craft seamless digital experiences through UX/UI design, app &
                        web development, and performance marketing. Together, let’s launch
                        your brand into new orbits of success.
                    </p>
                    <button
                        onClick={() => router.push('/contact')}
                        type="submit"
                        className="bg-[url(/btn-bg.png)] my-6 bg-cover text-white w-80 h-16 text-[18px] sm:text-[22px] font-semibold px-6 py-3 sm:px-4 sm:py-3 rounded-full shadow hidden sm:block"
                    >
                        Let's discuss your project
                    </button>
                </div>
                <div className="mt-4 block sm:hidden">
                    <Image src="/services/webdevelopment/webdevprocessmob.svg" alt="" width={800} height={600} className="" />
                </div>
                <div className="sm:w-[40%] w-full flex items-center">
                </div>
            </div>

            <div className="mt-12 sm:mt-20 md:max-w-[1300px] w-full mx-auto flex flex-col sm:flex-row gap-2 px-6 sm:px-0 relative mb-0 sm:mb-160">
                <div className="hidden sm:block bg-[url('/services/webdevelopment/webdevtimeline.svg')] bg-cover bg-no-repeat absolute sm:top-[390px] sm:right-0 w-full h-[550px] z-50">
                </div>
                <div className="sm:w-[60%] w-full">
                    <div className="flex gap-2 items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className="text-[20px] text-black">Web development process timeline</p>
                    </div>{" "}
                    <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]">
                        Web development Timeline
                    </p>

                    {/* Orange vertical line on the left */}
                    <div className="border-0 sm:border-l-4 sm:border-[#F38400] pl-4 mt-4">
                        <p className="text-[#111111] text-[20px] sm:text-[22px]">
                            Our Web Development services focus on building websites that not only look great but also perform flawlessly. From custom designs that reflect your brand identity to seamless frontend and backend solutions, we ensure every website provides an intuitive user experience.                        </p>
                    </div>

                </div>
                <div className="mt-4 block sm:hidden">
                    <Image src="/services/webdevelopment/webdevtimelinemob.svg" alt="" width={800} height={600} className="" />
                </div>
                <div className="sm:w-[40%] w-full flex items-center">
                </div>
            </div>

            {/* FAQs */}
            <FAQS />
            <Footer />
        </div>
    );
};

export default WebDevelopment;
