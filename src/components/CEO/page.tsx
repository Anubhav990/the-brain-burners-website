import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const CEO = () => {

    const router = useRouter();

    return (
        // <div className=' bg-[url(/ceocompbanner.png)] max-w-[1300px] mx-auto bg-contain bg-center bg-no-repeat relative z-20 py-10 hidden sm:block'>
        //     <div className='flex max-w-[1300px] mx-auto'>
        //         <div className='w-[60%] py-15 pl-10'>
        //             <div className='space-y-3'>
        //                 <p className='text-[20px] leading-[34px] font-bold'>
        //                     Robin founded The Brain Burners after over a decade of hands-on
        //                     experience in both website design and digital marketing. Through
        //                     his journey, he noticed a critical gap — beautifully built websites
        //                     often lacked the strategic backbone needed to convert. This disconnect
        //                     inspired him to build a team and a process that blends creative design
        //                     with deep marketing intelligence.
        //                 </p>

        //                 <p className='text-[#F38400] text-[22px] font-bold capitalize'>
        //                     Today, Robin leads every project with one goal:
        //                 </p>

        //                 {/* Quote Box */}
        //                 <div className="relative text-white rounded-xl shadow-lg p-6 max-w-xl bg-[url(/ceosubcompbanner.png)] bg-cover bg-center">
        //                     <span className="absolute top-[-10px] left-2 text-[#F38400] text-[60px]">“</span>
        //                     <p className="text-start text-[20px] leading-[40px] font-medium pl-2">
        //                         To Build Websites That Don’t Just Look Good But Sell,<br />
        //                         Scale, And Grow With Your Business.
        //                     </p>
        //                     <span className="absolute bottom-[0px] right-[190px] text-[#F38400] text-[60px]">”</span>
        //                 </div>
        //                 <p className='text-[20px] leading-[34px] font-bold'>
        //                     By mapping out a complete marketing architecture for each client, he ensures every site is built with conversion, growth, and long-term success in mind.
        //                 </p>
        //             </div>
        //         </div>

        //         <div className='w-[40%] flex flex-col justify-center items-center'>
        //             <Image
        //             src="/robinceo.png"
        //             alt="Robin"
        //             width={400}
        //             height={200}
        //             />
        //         </div>
        //     </div>
        // </div>
         <div className="bg-[#FDFDFD] w-full mx-auto relative z-20  py-10 hidden sm:block">
      <div className="flex flex-col md:flex-row justify-between items-center w-full mx-auto">
        <div className="w-full md:w-[60%] py-15 pl-12">
          <div className="">
            <div className="flex gap-2 items-center mb-0">
              <span className="w-3 h-3 bg-[#F38400] rounded-full"></span>
              <p className="text-[20px] text-black ">Hello I’m</p>
            </div>
            <h2 className=" text-[20px] leading-4 md:text-[50px] md:leading-[80px] capitalise font-bold text-[#111111] text-start">
              Dr. Robin Gupta
            </h2>
            <p className="text-[#F38400] text-[26px] mb-6 font-bold uppercase">
              Founder & CEO
            </p>
            <p className="text-[#111111] text-[18px] mb-1 font-bold capitalize">
              A decade of hands-on experience in web design & digital marketing
            </p>
            <p className="text-[18px] text-[#666666] leading-[34px] font-medium">
              Robin founded The Brain Burners after over a decade of hands-on
              experience in both website design and digital marketing. Through
              his journey, he noticed a critical gap — beautifully built
              websites often lacked the strategic backbone needed to convert.
              This disconnect inspired him to build a team and a process that
              blends creative design with deep marketing intelligence.
            </p>

            <p className="text-[#F38400] text-[20px] mt-2 font-bold capitalize">
              Today, Robin leads every project with one goal:
            </p>

            {/* Quote Box */}
            <div className=" mt-2 text-white rounded-3xl shadow-lg p-4 max-w-xl bg-[url(/ceo-quote-bg.png)] bg-cover bg-center">
              <p className="text-start text-[20px] leading-[30px] font-medium pl-4">
                <span className="text-[#F38400] font-bold text-2xl">“</span> To
                Build Websites That Don’t Just Look Good But Sell,
                <br />
                <span className="pl-4">
                  Scale, And Grow With Your Business.
                </span>
                <span className="text-[#F38400] font-bold text-2xl">”</span>
              </p>
            </div>
          </div>
          <div className="mt-4">
            <button
            onClick={() => router.push('/contact')}
            className="bg-[#F38400] text-white px-8 py-3 rounded-full text-[20px] font-medium hover:scale-105 transition shadow-[2px_5px_0_#000000]">
              Let&apos;s Discuss Your Project
            </button>
          </div>
        </div>

        <div className="w-full md:w-[65%] relative h-auto flex justify-center items-center overflow-hidden">
          <div className="relative w-full h-[600px]">
            <Image
              src="/ceo-new-img.png"
              alt="Robin"
              fill
              className="object-contain md:object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default CEO
