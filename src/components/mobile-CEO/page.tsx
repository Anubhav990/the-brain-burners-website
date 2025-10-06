import Image from 'next/image';
import React from 'react';


export default function FounderHeroMobile() {
  return (
    <div className="flex items-center justify-center p-5 sm:hidden">
      <div className="max-w-[500px] bg-black w-full rounded-[30px] overflow-hidden shadow-2xl">
        {/* Image Section */}
        <div className="relative w-full px-6 pt-8">
          <Image
            src="/robinceo.png"
            alt="Dr. Robin Gupta"
            width={600}
            height={400}
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="pt-4 pb-8 px-6">
          <p className="text-[15px] leading-relaxed text-white mb-5">
            Robin Founded The Brain Burners After Over A Decade Of Hands-On Experience In Both Website Design And Paid 
            Marketing. He Recognized That Many Businesses Were Building Stunning And 
            Visually Beautiful Websites, But Often Lacked The Strategic Backbone Needed 
            To Convert. This Disparity Inspired Him To Build A Team And A Process That 
            Blends Creative Design With Data-Driven Marketing Intelligence.
          </p>

          <h2 className="font-bold text-[18px] text-[#F38400] mb-4">
            Today, Robin Leads Every Project With One Goal:
          </h2>

          <Image src="/ceo-mobilebanner.png" alt="build websites" width={600} height={400} className='pb-4 object-cover ' />

          <p className="text-[15px] leading-relaxed text-white">
            By Mapping Out A Complete Marketing Architecture For Each Client, He Ensures 
            Every Site Is Built With Conversion, Growth, And Long-Term Success In Mind.
          </p>
        </div>
      </div>
    </div>
  );
}