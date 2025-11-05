import Image from 'next/image';
import React from 'react';


export default function FounderHeroMobile() {
  return (
    // <div className="flex items-center justify-center p-5 sm:hidden">
    //   <div className="max-w-[500px] bg-black w-full rounded-[30px] overflow-hidden shadow-2xl">
    //     {/* Image Section */}
    //     <div className="relative w-full px-6 pt-8">
    //       <Image
    //         src="/robinceo.png"
    //         alt="Dr. Robin Gupta"
    //         width={600}
    //         height={400}
    //         className="object-cover object-center"
    //         priority
    //       />
    //     </div>

    //     {/* Content Section */}
    //     <div className="pt-4 pb-8 px-6">
    //       <p className="text-[15px] leading-relaxed text-white mb-5">
    //         Robin Founded The Brain Burners After Over A Decade Of Hands-On Experience In Both Website Design And Paid 
    //         Marketing. He Recognized That Many Businesses Were Building Stunning And 
    //         Visually Beautiful Websites, But Often Lacked The Strategic Backbone Needed 
    //         To Convert. This Disparity Inspired Him To Build A Team And A Process That 
    //         Blends Creative Design With Data-Driven Marketing Intelligence.
    //       </p>

    //       <h2 className="font-bold text-[18px] text-[#F38400] mb-4">
    //         Today, Robin Leads Every Project With One Goal:
    //       </h2>

    //       <Image src="/ceo-mobilebanner.png" alt="build websites" width={600} height={400} className='pb-4 object-cover ' />

    //       <p className="text-[15px] leading-relaxed text-white">
    //         By Mapping Out A Complete Marketing Architecture For Each Client, He Ensures 
    //         Every Site Is Built With Conversion, Growth, And Long-Term Success In Mind.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center p-5 sm:hidden">
      <div className="w-full overflow-hidden ">
        <div className="flex gap-2 items-center mb-0">
          <span className="w-2 h-2 bg-[#F38400] rounded-full"></span>
          <p className="text-[18px] text-black ">Hello I’m</p>
        </div>
        <h2 className=" text-[28px] my-2 leading-4 md:text-[50px] md:leading-[80px] capitalise font-bold text-[#111111] text-start">
          Dr. Robin Gupta
        </h2>
        <p className="text-[#F38400] text-[20px] mb-6 font-bold uppercase">
          Founder & CEO
        </p>
        {/* Image Section */}
        <div className="relative w-full  ">
          <Image
            src="/ceo-new-img.png"
            alt="Dr. Robin Gupta"
            width={600}
            height={400}
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="pt-4 pb-2 px-2">
          <p className="text-[#111111] text-[18px] mb-1 font-bold capitalize">
            A decade of hands-on experience in web design & digital marketing
          </p>
          <p className="text-[18px] text-[#666666] leading-[34px] font-medium">
            Robin founded The Brain Burners after over a decade of hands-on
            experience in both website design and digital marketing. Through his
            journey, he noticed a critical gap — beautifully built websites
            often lacked the strategic backbone needed to convert. This
            disconnect inspired him to build a team and a process that blends
            creative design with deep marketing intelligence.
          </p>

          <h2 className="font-bold text-[18px] text-[#F38400] mb-4">
            Today, Robin Leads Every Project With One Goal:
          </h2>

          <div className=" mt-2 text-white rounded-3xl shadow-lg p-2 max-w-xl bg-[url(/ceo-quote-bg.png)] bg-cover bg-center">
            <p className="text-start text-[14px] leading-[20px] font-medium pl-4">
              <span className="text-[#F38400] font-bold text-2xl">“</span> To
              Build Websites That Don’t Just Look Good But Sell, Scale, And Grow
              With Your Business.
              <span className="text-[#F38400] font-bold text-2xl ">”</span>
            </p>
          </div>

          <div className="mt-4 ">
            <button className="bg-[#F38400] text-white px-4 py-1 rounded-full text-[20px] font-medium hover:scale-105 transition shadow-[2px_5px_0_#000000]">
              Let&apos;s Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}