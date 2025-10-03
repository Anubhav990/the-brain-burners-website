import Image from 'next/image';
import React from 'react';

const crewMembers = [
    {
        name: "Neha Nadda",
        role: "Creative Head",
        image: "/crew/neha.svg",
    },
    {
        name: "Manmeet Singh",
        role: "UX/UI Designer",
        image: "/crew/manmeet.svg",
    },
    {
        name: "Nipun Sharma",
        role: "UX/UI Designer",
        image: "/crew/nipun.svg",
    },
    {
        name: "MananPartap Munday",
        role: "UX/UI Designer",
        image: "/crew/manan.svg",
    },
    {
        name: "Archit Sharma",
        role: "UX/UI Designer",
        image: "/crew/archit.svg",
    },
    {
        name: "Ankita Dutt",
        role: "UX/UI Designer",
        image: "/crew/ankita.svg",
    },
    {
        name: "Rahul Kumar Sinha",
        role: "Graphic Designer",
        image: "/crew/rahul.svg",
    },
    {
        name: "Devesh",
        role: "Video Editor",
        image: "/crew/devesh.svg",
    },
    {
        name: "Rajni",
        role: "Social Media Manager",
        image: "/crew/rajni.svg",
    },
    {
        name: "Anubhav Gupta",
        role: "Head of Development",
        image: "/crew/anubhav.svg",
    },
    {
        name: "Sharan",
        role: "Full Stack Developer",
        image: "/crew/sharan.svg",
    },
    {
        name: "Uday Goyal",
        role: "Full Stack Developer",
        image: "/crew/uday.svg",
    },
    {
        name: "Shruti Sharma",
        role: "Full Stack Developer",
        image: "/crew/shruti.svg",
    },
    {
        name: "Raghav",
        role: "Full Stack Developer",
        image: "/crew/raghav.svg",
    },
    {
        name: "Ashima Sharma",
        role: "Google Ads Specialist",
        image: "/crew/ashima.svg",
    },

];

const CrewTBB = () => {
    return (
        <>
            <div className='mx-auto max-w-[1300px] mt-[60px] relative z-20'>
                <div className='flex justify-start md:justify-center items-center gap-2 mb-6 mx-5 md:x-0'>
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <p className='text-left capitalize text-[25px] sm:text-[40px] font-bold text-[#000000]'>the brain burner’s TEAM</p>
                </div>
                <h2 className=' text-[20px] leading-4 md:text-[70px] md:leading-[80px] uppercase font-bold text-[#F38400] text-start mx-5 md:text-center md:mx-0'>
                    Meet the Crew
                </h2>
                <p className='mx-5 md:mx-0 mt-2 mb-2 md:mb-[40px] font-bold text-[20px] leading-8 md:text-[35px] md:leading-[44px] text-start md:text-center text-[#111111]'>
                    The explorers behind Brain Burners. Each member brings unique skills, fueling our mission to push ideas beyond Earth’s limits.
                </p>
            </div>

            <div className='w-full bg-white py-10 px-5 md:py-[50px] nd:px-[50px] relative z-20'>
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {crewMembers.map((member, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full'>
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={800}
                                height={600}
                            />
                            <div className='border border-black p-1 rounded-4xl w-full md:w-[90%] mt-2'>
                                <p className='text-black font-bold text-[12px] md:text-[22px] leading-[30px] pl-[20px] md:pl-[30px]'>
                                    {member.name}
                                </p>
                            </div>
                            <div className='py-1'>
                                <p className='text-black text-[12px] md:text-[22px] leading-5 md:leading-[40px] pl-6 md:pl-[35px] text-wrap'>
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CrewTBB;
