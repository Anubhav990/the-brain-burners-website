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
                <div className='flex justify-center items-center gap-2 mb-6'>
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <p className='text-[20px] text-black'>the brain burner’s TEAM</p>
                </div>
                <h2 className='text-[70px] leading-[80px] uppercase font-bold text-[#F38400] text-center'>
                    Meet the Crew
                </h2>
                <p className='mt-2 mb-[40px] font-bold text-[35px] leading-[44px] text-center text-[#111111]'>
                    The explorers behind Brain Burners. Each member brings unique skills, fueling our mission to push ideas beyond Earth’s limits.
                </p>
            </div>

            <div className='w-full bg-[#EBEBEB] py-[50px] px-[50px] relative z-20'>
                <div className='grid grid-cols-4 gap-4'>
                    {crewMembers.map((member, index) => (
                        <div key={index} className='flex flex-col gap-2 w-full'>
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={800}
                                height={600}
                            />
                            <div className='border border-black p-1 rounded-4xl w-[90%] mt-2'>
                                <p className='text-black font-bold text-[22px] leading-[30px] pl-[30px]'>
                                    {member.name}
                                </p>
                            </div>
                            <div className='py-1'>
                                <p className='text-black text-[22px] leading-[40px] pl-[35px] text-wrap'>
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
