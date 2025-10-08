"use client";

import React from "react";
import Textcrol from "@/components/text-scroll-aboutus/page";
import ThirdSection from "@/components/third-section-aboutus/page";
import HowItWorks from "@/components/line-ani-aboutus/page";
import Footer from "@/components/footer/page";
import HowItWorksMob from "@/components/line-ani-aboutus-mob/page";
import Header from "@/components/header/page";
import Image from "next/image";
import { useRouter } from "next/navigation";


export default function AboutUsSection() {

  const router = useRouter()

  return (
    <div>
      <div className="relative">
        <Header />
        {/* Glow background overlapping hero */}
        <div className="hidden sm:block absolute -top-[42%] right-[0px] w-[900px] h-full pointer-events-none overflow-visible">
          <Image
            src="/aboutus/glow.png"
            alt="Glow background"
            fill
            className="object-contain object-center z-10 opacity-80"
          />
        </div>
        <div className="bg-white relative overflow-hidden">

          {/* Main Hero Content */}
          <div className="container mx-auto px-8 lg:px-16 py-12 lg:py-16 relative z-10">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h1 className="text-xl lg:text-3xl xl:text-[50px] font-black mb-4 sm:3xl">
                    <span className="text-black">AT THE BRAIN BURNERS,</span>
                  </h1>
                  <h2 className="text-3xl lg:text-5xl xl:text-[65px] font-black sm:text-4xl whitespace-nowrap">
                    <span className="animated-text-fill">
                      We Design The Future!
                    </span>
                  </h2>
                </div>

                <button
                  onClick={() => router.push('/contact')}
                  className="bg-[#F38400] py-[10px] px-[30px] text-white font-bold capitalize rounded-4xl sm:mt-6 mt-0 shadow-[2px_5px_0_#000000]">
                  <p className="sm:text-[35px] text-[18px]">
                    Let's discuss your project
                  </p>
                </button>
              </div>

              {/* Right Column - Astronaut Image with Glow */}
              <div className="relative w-full lg:w-[600px] h-[500px] flex justify-end">

                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span
                      key={i}
                      className="absolute w-[3px] h-[3px] bg-black rounded-full animate-float"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100 - 20}%`,
                        animationDuration: `${2 + Math.random() * 3}s`,
                        animationDelay: `${Math.random() * 5}s`,
                      }}
                    />
                  ))}
                </div>
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <Image
                    priority
                    src="/aboutus/aboutusmoon.svg"
                    alt="Astronaut holding the moon"
                    width={600}
                    height={400}
                    className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>

          <style jsx>{`
        @keyframes fillText {
          0% {
            background-position: 100% 0;
          }
          50% {
            background-position: 0% 0;
          }
          100% {
            background-position: 100% 0;
          }
        }

        .animated-text-fill {
          background: linear-gradient(90deg, #f38400 50%, black 50%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: fillText 3s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50px) translateX(30px);
            opacity: 1;
          }
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>

          {/* Section: Fueling Ideas */}
          <div className="bg-white relative overflow-hidden pl-[0px] sm:pl-[10px] max-w-[1300px] sm:mx-15 mx-5 sm:my-10 my-5">
            <p className="font-bold text-[36px] leading-[40px] sm:text-[70px] sm:leading-[100px] text-black">
              Fueling Ideas,
              <br className="block sm:hidden" />{" "}
              <span className="whitespace-nowrap">Launching Futures</span>
            </p>
            <Textcrol />
          </div>

          <div className="mx-[15px] my-[30px] sm:mx-[60px] sm:my-[80px]">
            <ThirdSection />
          </div>
          <div className="mx-[15px] mt-[20px] mb-[65px]">
            <HowItWorks />
            <HowItWorksMob />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
