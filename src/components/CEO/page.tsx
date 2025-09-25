import Image from 'next/image'
import React from 'react'

const CEO = () => {
    return (
        <div className=' bg-[url(/ceocompbanner.png)] max-w-[1300px] mx-auto bg-contain bg-center bg-no-repeat relative z-20 py-10  '>
            <div className='flex max-w-[1300px] mx-auto'>
                <div className='w-[60%] py-15 pl-10'>
                    <div className='space-y-3'>
                        <p className='text-[20px] leading-[34px] font-bold'>
                            Robin founded The Brain Burners after over a decade of hands-on
                            experience in both website design and digital marketing. Through
                            his journey, he noticed a critical gap — beautifully built websites
                            often lacked the strategic backbone needed to convert. This disconnect
                            inspired him to build a team and a process that blends creative design
                            with deep marketing intelligence.
                        </p>

                        <p className='text-[#F38400] text-[22px] font-bold capitalize'>
                            Today, Robin leads every project with one goal:
                        </p>

                        {/* Quote Box */}
                        <div className="relative text-white rounded-xl shadow-lg p-6 max-w-xl bg-[url(/ceosubcompbanner.png)] bg-cover bg-center">
                            <span className="absolute top-[-10px] left-2 text-[#F38400] text-[60px]">“</span>
                            <p className="text-start text-[20px] leading-[40px] font-medium pl-2">
                                To Build Websites That Don’t Just Look Good But Sell,<br />
                                Scale, And Grow With Your Business.
                            </p>
                            <span className="absolute bottom-[0px] right-[190px] text-[#F38400] text-[60px]">”</span>
                        </div>
                        <p className='text-[20px] leading-[34px] font-bold'>
                            By mapping out a complete marketing architecture for each client, he ensures every site is built with conversion, growth, and long-term success in mind.
                        </p>
                    </div>
                </div>

                <div className='w-[40%] flex flex-col justify-center items-center'>
                    <Image
                    src="/robinceo.png"
                    alt="Robin"
                    width={400}
                    height={200}
                    />
                </div>
            </div>
        </div>
    )
}

export default CEO
