import React from 'react'

const AstronautHome = () => {
    return (
        <div className="w-full flex bg-cover bg-center py-12 px-8 rounded-4xl relative z-20"
            style={{ backgroundImage: "url('/gifs/astronautstars.gif')" }}
        >
            <div className='flex w-[50%]'>
                <div>
                    <div className='flex items-center gap-2 mb-4'>
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <p className='text-[20px] text-white'>About Us</p>
                    </div>
                    <h2 className='font-[700] text-white text-[60px] leading-[70px]'> What We Stand For </h2>
                    <button className='bg-[#F38400] py-[15px] px-[30px] text-white font-bold capitalize rounded-4xl mt-10 shadow-[2px_5px_0_#000000]'>
                        <p className='text-[26px]'>Let's discuss your project</p>
                    </button>
                </div>
            </div>
            <div className='w-[50%]'>
                <div className='pt-[60px] flex flex-col gap-4'>
                    <p className='text-white text-2xl'>We are driven by strong values and a clear purpose. Our commitment is to deliver excellence, build trust, and create meaningful impact through every project we take on. Guided by integrity, innovation, and collaboration, we strive to shape solutions that truly make a difference for our clients and communities.</p>
                    <p className='text-[18px]'>We value long-term relationships built on collaboration and respect. By combining creativity with technology, we aim to empower businesses, inspire people, and contribute to meaningful change.</p>
                </div>
                <div className='flex gap-[110px]'>
                    <div className='flex gap-2'>
                        <p className='text-white text-[90px]'>15+</p>
                        <p className='uppercase mt-[60px]'>Years of <br /> experience</p>
                    </div>

                    <div className='flex gap-2'>
                        <p className='text-white text-[90px]'>50+</p>
                        <p className='uppercase mt-[60px]'>successful <br /> projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AstronautHome;
