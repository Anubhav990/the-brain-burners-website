"use client"

import Footer from '@/components/footer/page'
import Header from '@/components/header/page'
import HowItWorks from '@/components/line-ani-aboutus/page'
import Textcrol from '@/components/text-scroll-aboutus/page'
import ThirdSection from '@/components/third-section-aboutus/page'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-white relative overflow-hidden">
        {/* Main Hero Content */}
        <div className="container mx-auto px-8 lg:px-16 py-12 lg:py-16 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-2xl lg:text-3xl xl:text-[50px] font-black mb-4">
                  <span className="text-black">AT THE BRAIN BURNERS,</span>
                </h1>
                <h2 className="text-4xl lg:text-5xl xl:text-[65px] font-black">
                  <span className="animated-text-fill">
                    We Design The Future!
                  </span>
                </h2>
              </div>

              <button className="bg-[#F38400] py-[10px] px-[30px] text-white font-bold capitalize rounded-4xl mt-6 shadow-[2px_5px_0_#000000]">
                <p className="text-[35px]">Let's discuss your project</p>
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
                
                {/* Astronaut image */}
                <img
                  src="/moon.png"
                  alt="Astronaut holding the moon"
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Custom styles */}
        
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

        {/* Sections */}
        <div className="bg-white relative overflow-hidden pl-[10px] max-w-[1300px] mx-15 my-10">
          <p className="font-bold text-[70px] leading-[100px] text-black">
            Fueling Ideas, Launching Futures
          </p>
          <Textcrol />
        </div>

        <div className="mx-15 my-30">
          <ThirdSection />
        </div>

        <div className="mx-15 my-30">
          <HowItWorks />
        </div>
      </div>

      {/* Footer outside main content */}
      <Footer />
    </div>
  )
}

export default AboutUs
