import Image from 'next/image';
import React from 'react'

const GraphicDesign = () => {
    return (
        <>
            {/* Deskstop */}

            <div className='sm:block hidden'>
                <div>
                    <div className='max-w-[1280px] mx-auto flex gap-[20%]'>
                        <Image priority src="/portfolio/graphicdesign/gurchini.svg" alt="gurchini" width={600} height={400} className='w-54' />
                        <div className='flex flex-col justify-end gap-5'>
                            <Image priority src="/portfolio/graphicdesign/one.svg" alt="one" width={600} height={400} className='w-30' />
                            <p className='text-black font-medium text-[20px] leading-[30px]'>Gur Chini, are the words deeply connected with happiness, smiles, and festivities since time immemorial in India. We are proud to be taking this tradition forward for the new India. Gur Chini offers carefully crafted desserts that brings the traditional taste for the new and health conscious India.</p>
                        </div>
                    </div>
                    <Image priority src="/portfolio/graphicdesign/graphicdesigntop.svg" alt="ganesh" width={600} height={400} className='w-full' />
                </div>
                <div className='max-w-[1250px] mx-auto'>
                    <Image priority src="/portfolio/graphicdesign/graphicdesignmid.svg" alt="cakeboutique" width={600} height={400} className='w-full' />
                </div>
                <Image src="/portfolio/graphicdesign/altbeauty.svg" alt="three" width={600} height={400} className='w-full mt-34' />
                <div className='max-w-[1250px] mx-auto'>
                    <Image priority src="/portfolio/graphicdesign/four.svg" alt="cakeboutique" width={600} height={400} className='w-full mt-20' />
                </div>
                <Image src="/portfolio/graphicdesign/five.svg" alt="five" width={600} height={400} className='w-full mt-34' />
                <div className='max-w-[1250px] mx-auto'>
                    {/* <Image priority src="/portfolio/graphicdesign/six.svg" alt="six" width={600} height={400} className='w-full mt-20' /> */}
                    <div className="min-h-screen bg-orange-50 rounded-[40px] overflow-hidden">
                        <div className="max-w-7xl mx-auto overflow-hidden">
                            {/* Header Section */}
                            <div className='max-w-[1200px] mx-auto flex gap-[20%] py-12 px-10'>
                                <Image priority src="/portfolio/graphicdesign/sixleft.svg" alt="gurchini" width={600} height={400} className='w-54' />
                                <div className='flex flex-col justify-start'>
                                    <Image priority src="/portfolio/graphicdesign/six.svg" alt="one" width={600} height={400} className='w-40' />
                                    <p className='text-black font-medium text-[16px] leading-[25px]'>If you love coffee, matcha and good food this place might just become your new favourite from healthy smoothie bowls to salads everything is here.</p>
                                </div>
                            </div>

                            {/* Grid looking Layout */}
                            <div className="flex flex-col gap-4 transform rotate-[-3deg] overflow-hidden">
                                <div className='flex sm:flex-row w-full gap-4'>
                                    {/* Large video - top left */}
                                    <div className="w-[60%] h-96">
                                        <video
                                            className="w-full h-full object-cover rounded-3xl"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/portfolio/graphicdesign/videos/firstvidg.mp4" type="video/mp4" />
                                        </video>
                                    </div>

                                    {/* Top right image */}
                                    <div className="w-[40%] h-96">
                                        <Image
                                            className="w-full h-full object-cover rounded-3xl"
                                            width={600}
                                            height={400}
                                            alt="everydirection"
                                            src="/portfolio/graphicdesign/bambicoffee.svg"
                                        />
                                    </div>
                                </div>

                                <div className='flex sm:flex-row w-full gap-4'>
                                    {/* top left image */}
                                    <div className="w-[40%] rounded-3xl overflow-hidden h-96">
                                        <Image
                                            className="w-full h-full object-cover"
                                            width={600}
                                            height={400}
                                            alt="everydirection"
                                            src="/portfolio/graphicdesign/heybambi.svg"
                                        />
                                    </div>

                                    {/* bottom right video */}
                                    <div className="w-[60%] rounded-3xl overflow-hidden h-96">
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/portfolio/graphicdesign/videos/secondvidg.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className='w-full rounded-3xl overflow-hidden h-100'>
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/portfolio/graphicdesign/videos/thirdvidg.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/portfolio/graphicdesign/seven.svg" alt="seven" width={600} height={400} className='w-full mt-20' />
                <div className='max-w-[1250px] mx-auto mb-20'>
                    <Image priority src="/portfolio/graphicdesign/eight.svg" alt="seven" width={600} height={400} className='w-full mt-20' />
                </div>
            </div>

            {/* mobile */}

            <div className='sm:hidden block'>
                <Image priority src="/portfolio/graphicdesign/graphicmob1.svg" alt="gmob1" width={600} height={400} className='w-full' />
                <Image priority src="/portfolio/graphicdesign/graphicmob2.svg" alt="gmob2" width={600} height={400} className='w-full mt-15 px-8' />
                <Image priority src="/portfolio/graphicdesign/graphicmob3.svg" alt="gmob3" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob4.svg" alt="gmob4" width={600} height={400} className='w-full mt-15 px-8' />
                <Image priority src="/portfolio/graphicdesign/graphicmob5.svg" alt="gmob5" width={600} height={400} className='w-full mt-15' />
                <div className='w-full mt-10 px-8'>
                    <div className="bg-orange-50 rounded-[40px] overflow-hidden">
                        <div className="overflow-hidden">
                            <Image priority src="/portfolio/graphicdesign/sixmobile.svg" alt="gmob8" width={600} height={400} className='w-full' />
                            {/* Grid looking Layout */}
                            <div className="flex flex-col gap-2 transform rotate-[-3deg] overflow-hidden -mt-[50px]">
                                <div className='flex sm:flex-row w-full gap-2'>
                                    {/* Large video - top left */}
                                    <div className="w-[60%] h-30">
                                        <video
                                            className="w-full h-full object-cover rounded-[10px]"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/portfolio/graphicdesign/videos/firstvidg.mp4" type="video/mp4" />
                                        </video>
                                    </div>

                                    {/* Top right image */}
                                    <div className="w-[40%] h-30">
                                        <Image
                                            className="w-full h-full object-cover rounded-[10px]"
                                            width={600}
                                            height={400}
                                            alt="everydirection"
                                            src="/portfolio/graphicdesign/bambicoffee.svg"
                                        />
                                    </div>
                                </div>

                                <div className='flex sm:flex-row w-full gap-2'>
                                    {/* top left image */}
                                    <div className="w-[40%] rounded-[10px] overflow-hidden h-30">
                                        <Image
                                            className="w-full h-full object-cover"
                                            width={600}
                                            height={400}
                                            alt="everydirection"
                                            src="/portfolio/graphicdesign/heybambi.svg"
                                        />
                                    </div>

                                    {/* bottom right video */}
                                    <div className="w-[60%] rounded-[10px] overflow-hidden h-30">
                                        <video
                                            className="w-full h-full object-cover"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        >
                                            <source src="/portfolio/graphicdesign/videos/secondvidg.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className='w-full rounded-[10px] overflow-hidden h-30'>
                                    <video
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/portfolio/graphicdesign/videos/thirdvidg.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Image priority src="/portfolio/graphicdesign/graphicmob7.svg" alt="gmob7" width={600} height={400} className='w-full mt-15' />

                <Image priority src="/portfolio/graphicdesign/graphicmob8.svg" alt="gmob8" width={600} height={400} className='w-full mt-10 px-8' />
            </div>
        </>
    )
}

export default GraphicDesign;
