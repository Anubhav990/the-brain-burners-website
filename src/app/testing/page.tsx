import Image from 'next/image';
import React from 'react'

const GraphicDesign = () => {
    return (
        <>
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
                    <Image priority src="/portfolio/graphicdesign/six.svg" alt="six" width={600} height={400} className='w-full mt-20' />
                </div>
                <Image src="/portfolio/graphicdesign/seven.svg" alt="seven" width={600} height={400} className='w-full mt-20' />
                <div className='max-w-[1250px] mx-auto mb-20'>
                    <Image priority src="/portfolio/graphicdesign/eight.svg" alt="seven" width={600} height={400} className='w-full mt-20' />
                </div>
            </div>
            <div className='sm:hidden block'>
                <Image priority src="/portfolio/graphicdesign/graphicmob1.svg" alt="gmob1" width={600} height={400} className='w-full' />
                <Image priority src="/portfolio/graphicdesign/graphicmob2.svg" alt="gmob2" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob3.svg" alt="gmob3" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob4.svg" alt="gmob4" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob5.svg" alt="gmob5" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob6.svg" alt="gmob6" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob7.svg" alt="gmob7" width={600} height={400} className='w-full mt-15' />
                <Image priority src="/portfolio/graphicdesign/graphicmob8.svg" alt="gmob8" width={600} height={400} className='w-full mt-15' />
            </div>
        </>
    )
}

export default GraphicDesign;
