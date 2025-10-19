import Image from 'next/image';
import React from 'react'

const Branding = () => {
    return (
        <>
            <div className='sm:block hidden'>
                <div className='max-w-[1250px] mx-auto mb-20'>
                    <Image priority src="/portfolio/branding/brandingtop.svg" alt="seven" width={600} height={400} className='w-full mt-20' />
                    <div className='w-full flex gap-[10%]'>
                        <div>
                            <Image priority src="/portfolio/branding/bbflo.svg" alt="bbflo" width={600} height={400} className='w-full mt-20' />
                        </div>
                        <div className="flex flex-col gap-5 justify-center">
                            <div
                                className="bg-[#F38400] text-white font-medium text-[21px] px-2 text-center py-3 rounded-[21px] w-[150px]"
                            >
                                Color Pallete
                            </div>
                            <Image priority src="/portfolio/branding/hexcolors.svg" alt="hex" width={600} height={400} className='w-full' />
                        </div>
                    </div>
                    <div className="flex items-center w-full my-18">
                        <span className="bg-[#F38400] text-white font-medium text-[21px] px-2 text-center py-3 rounded-[21px] w-[150px]">
                            Mascot
                        </span>
                        <div className="flex-1 h-[1px] bg-gray-300 ml-3"></div>
                    </div>
                    <Image priority src="/portfolio/branding/happybaozi.svg" alt="happyboi" width={600} height={400} className='w-full' />
                    <div className="flex items-center w-full mt-20 mb-15">
                        <span className="bg-[#F38400] text-white font-medium text-[21px] px-2 text-center py-3 rounded-[21px] w-[150px]">
                            Expressions
                        </span>
                        <div className="flex-1 h-[1px] bg-gray-300 ml-3"></div>
                    </div>
                    <Image priority src="/portfolio/branding/moustache.svg" alt="moustache" width={600} height={400} className='w-full' />
                </div>
                <Image src="/portfolio/branding/logocreation.svg" alt="logo" width={600} height={400} className='w-full mt-34' />
            </div>
            <div className='sm:hidden block px-4'>
                <Image priority src="/portfolio/branding/bflozimob1.svg" alt="mob1" width={600} height={400} className='w-full' />
                <Image priority src="/portfolio/branding/bflozimob2.svg" alt="mob1" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/branding/bflozimob3.svg" alt="mob1" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/branding/bflozimob4.svg" alt="mob1" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/branding/bflozimob5.svg" alt="mob1" width={600} height={400} className='w-full mt-15' />
            </div>
        </>
    )
}

export default Branding;
