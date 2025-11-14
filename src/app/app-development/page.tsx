"use client";

import AnimatedDots from "@/components/animateddots/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import React from "react";

import FAQS from "@/components/FAQ/page";
import ToolsCards from "@/components/toolcards/UiuxToolCards";
import Image from "next/image";
import ScrollText2 from "@/components/servicesscrolltexts/ScrollText2";
import AppDevServiceCards from "@/components/servicecards/appdevelopment";
import AppDevelopmentToolsCards from "@/components/toolcards/AppDevelopmentToolCards";
import { useRouter } from "next/navigation";

const AppDevelopment = () => {

    const router = useRouter();

    const appFaqs = [
        {
            question: "What types of application development services does TBB offer?",
            answer:
                "TBB provides end-to-end application development services, including web apps, mobile apps (iOS & Android), enterprise solutions, custom software, and cloud-based applications tailored to your business needs.",
        },
        {
            question: "How does TBB ensure the quality and performance of applications?",
            answer:
                "We follow agile development practices, rigorous testing, and continuous performance monitoring to ensure your application is fast, secure, and scalable across all devices and platforms.",
        },
        {
            question: "What technologies does TBB use for app development?",
            answer:
                "Our development team works with modern technologies like React, Angular, Flutter, Node.js, Python, Java, .NET, and cloud platforms such as AWS, Azure, and Google Cloud to build robust applications.",
        },
        {
            question: "Can TBB develop both Android and iOS applications?",
            answer:
                "Yes. We develop native, hybrid, and cross-platform apps for Android and iOS using frameworks like Flutter, React Native, and Kotlin to ensure smooth functionality and consistent user experience.",
        },
        {
            question: "Does TBB offer app maintenance and support after launch?",
            answer:
                "Absolutely. We provide ongoing maintenance, updates, bug fixes, and performance optimization to ensure your application remains up-to-date and reliable post-launch.",
        },
        {
            question: "How can I start my application development project with TBB?",
            answer:
                "You can get started by contacting our team for a consultation. We’ll discuss your goals, outline a detailed project roadmap, and design a solution that aligns perfectly with your business vision.",
        }
    ];

    return (
        <div>
            <Header />
            <div className="relative flex flex-col md:flex-row justify-center items-center gap-10 px-3 py-6 sm:px-10 sm:py-10 lg:px-20 overflow-x-hidden">
                <AnimatedDots />

                <div className="z-10 flex flex-col gap-1 sm:gap-3 px-[20px] sm:px-0 w-full sm:w-[60%]">
                    <h1 className="text-[#000000] mb-0 sm:mb-2 text-[25px] lg:text-[56px] font-black">
                        Application Development,
                    </h1>
                    <div className="text-[#F38400] font-black text-[33px] sm:text-6xl uppercase">
                        Made Simple
                    </div>
                    <p className="text-[#111111] captalize text-md sm:text-lg lg:text-[32px] font-medium">
                        We design and build applications that are fast, reliable, and easy to use. From concept to launch, we make sure every step feels effortless.
                    </p>
                    <button onClick={() => router.push('/contact')}
                        type="submit"
                        className="bg-[url(/btn-bg.png)] my-4 bg-cover text-white w-80 h-16 text-[18px] sm:text-[22px] font-semibold px-6 py-3 sm:px-4 sm:py-3 rounded-full shadow hidden sm:block capitalize"
                    >
                        Let's create an application
                    </button>
                </div>
                <div className="w-full h-full sm:w-[40%] sm:h-[600px]">
                    <Image priority width={600} height={400} className="w-full h-full" src="/svgs/services-uiux.svg" alt="uiux" />
                </div>
            </div>

            <ScrollText2 />

            <div className="mt-12 sm:mt-20 md:max-w-[1300px] w-full mx-auto flex flex-col sm:flex-row gap-2 px-6 sm:px-0">
                <div className="sm:w-[60%] w-full">
                    <div className="flex gap-2 items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className="text-[20px] text-black">How we can be helpfull</p>
                    </div>{" "}
                    <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]">
                        Launch Your Ideas Beyond Limits
                    </p>
                </div>
                <div className="sm:w-[40%] w-full flex items-center">
                    <p className="text-[#111111] text-[20px] sm:text-[22px] mt-4 sm:mt-0">
                        From idea to launch, we build apps that are reliable, scalable, and designed to deliver seamless user experiences.
                    </p>
                </div>
            </div>

            <AppDevServiceCards />
            <div className="w-full px-6 sm:px-0 sm:max-w-[1300px] mx-auto">
                <div className="text-[16px] sm:text-[32px] text-black font-medium flex items-center gap-2">
                    <span className="h-[4px] w-20 sm:w-30 rounded bg-[#F38400]"></span>
                    Tech Stack
                </div>
                <h1 className="text-[40px] sm:text-[72px] text-black font-bold">Tools Used</h1>
                <AppDevelopmentToolsCards />
            </div>


            <div className="mt-12 sm:mt-20 md:max-w-[1300px] w-full mx-auto flex flex-col sm:flex-row gap-2 px-6 sm:px-0 relative mb-0 sm:mb-80">
                <div className="hidden sm:block bg-[url('/services/appdevelopment/appdevprocess.svg')] bg-cover bg-no-repeat absolute top-0 right-0 sm:top-[150px] sm:right-[-90px] w-full h-[550px] z-50">
                </div>
                <div className="sm:w-[60%] w-full">
                    <div className="flex gap-2 items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className="text-[20px] text-black">TBB’s process for Application Development</p>
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
                    <Image src="/services/appdevelopment/appdevprocessmob.svg" alt="" width={800} height={600} className="" />
                </div>
                <div className="sm:w-[40%] w-full flex items-center">
                </div>
            </div>

            <div className="mt-12 sm:mt-20 md:max-w-[1300px] w-full mx-auto flex flex-col sm:flex-row gap-2 px-6 sm:px-0 relative mb-0 sm:mb-160">
                <div className="hidden sm:block bg-[url('/services/appdevelopment/appdevtimeline.svg')] bg-cover bg-no-repeat absolute sm:top-[390px] sm:right-0 w-full h-[550px] z-50">
                </div>
                <div className="sm:w-[60%] w-full">
                    <div className="flex gap-2 items-center mb-4">
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className="text-[20px] text-black">Application Development Process timeline</p>
                    </div>{" "}
                    <p className="font-bold text-black md:text-[60px] text-[30px] leading-[35px] md:leading-[65px]">
                        Application Development Timeline
                    </p>

                    {/* Orange vertical line on the left */}
                    <div className="border-0 sm:border-l-4 sm:border-[#F38400] pl-4 mt-4">
                        <p className="text-[#111111] text-[20px] sm:text-[22px]">
                            Our Application Development services focus on creating robust, user-friendly apps that drive business growth and engagement. From custom mobile and web app development to cross-platform solutions, we ensure your application works seamlessly across all devices while integrating smoothly with your existing systems.
                        </p>
                    </div>

                </div>
                <div className="mt-4 block sm:hidden">
                    <Image src="/services/appdevelopment/appdevtimelinemob.svg" alt="" width={800} height={600} className="" />
                </div>
                <div className="sm:w-[40%] w-full flex items-center">
                </div>
            </div>

            {/* FAQs */}
            <FAQS faqs={appFaqs} />
            <Footer />
        </div>
    );
};

export default AppDevelopment;
