import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <div className="max-w-[1300px] mx-auto flex flex-col gap-[4px]">
            {/* Banner Section */}
            <div className="w-full bg-black p-[55px] rounded-[30px] relative z-20 bg-[url('/footer/astronautbreaking.svg')] bg-contain bg-no-repeat bg-right">
                <div className="max-w-4xl text-center md:text-left">
                    <h2 className="text-white text-[40px] capitalize font-medium leading-[1.4]">
                        From <span className="font-bold capitalize">launchpad to landing</span>, we’re with <br />
                        you every step of the mission.
                        <br />
                        Let’s build digital universes that shine <br />
                        <span className="font-bold capitalize">brighter than the stars.</span>
                    </h2>

                    <div className="flex justify-start items-center mt-6">
                        <Image
                            src="/footer/tbbdarklogo.svg"
                            alt="The Brain Burners"
                            width={140}
                            height={40}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full px-2 py-8 bg-white relative z-20">
                <div className="border-2 border-black rounded-[50px] px-12 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr_1.2fr] gap-8">

                        {/* About Section */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-black">About</h3>
                            <ul className="space-y-2">
                                <div className="flex">
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Home</a></li>
                                    <li><a href="#" className="text-gray-700 pl-[85px] hover:text-black transition">Work</a></li>
                                </div>
                                <div className="flex">
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Our Team</a></li>
                                    <li><a href="#" className="text-gray-700 pl-[60px] hover:text-black transition">Contact Us</a></li>
                                </div>
                                <div className="flex">
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Services</a></li>
                                    <li><a href="#" className="text-gray-700 pl-[70px] hover:text-black transition">About Us</a></li>
                                </div>
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="border-l-2 border-r-2 border-black px-6">
                            <h3 className="font-bold text-lg mb-4 text-black">Services</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Social Media Management</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">SEO</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Artificial Intelligence Modernization</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Branding</a></li>
                                </ul>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">UI/UX Designing</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Application Development</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Web Development</a></li>
                                    <li><a href="#" className="text-gray-700 hover:text-black transition">Performance Marketing</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Socials Section */}
                        <div className="border-r-2 border-black pr-6">
                            <h3 className="font-bold text-lg mb-4 text-black">Socials</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {["facebook", "linkedin", "instagram", "youtube", "x", "be"].map((icon) => (
                                    <a key={icon} href="#">
                                        <Image
                                            src={`/footer/${icon}.svg`}
                                            className="w-[40px]"
                                            alt={icon}
                                            width={40}
                                            height={40}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Logo and Contact Section */}
                        <div>
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <Image
                                        src="/svgs/brainburnerslogo.svg"
                                        className="w-[130px]"
                                        alt="Brain Burners Logo"
                                        width={130}
                                        height={50}
                                    />
                                </div>
                            </div>
                            <div className="text-[15px] text-gray-700 space-y-1">
                                <p className="text-black">
                                    Miran Square, D 180, Basement, Industrial Area, Sector 74,
                                </p>
                                <p className="text-black">
                                    Sahibzada Ajit Singh Nagar, Punjab - 160055
                                </p>
                                <p className="mt-3 text-black">
                                    Int:{" "}
                                    <a href="tel:+918194900054" className="hover:text-black transition">
                                        +91 8194900054
                                    </a>
                                </p>
                                <p className="text-black">
                                    <a href="mailto:robin@thebrainburners.io" className="hover:text-black transition">
                                        robin@thebrainburners.io
                                    </a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
}
