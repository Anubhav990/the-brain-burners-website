import { useRouter } from "next/navigation";
import React from "react";

export default function Footer() {

    const router = useRouter();

    return (
        <div className="max-w-[1300px] mx-auto flex flex-col gap-[4px] px-4 md:px-0">
            {/* Banner Section */}
            <div className="w-full bg-black p-6 md:p-[55px] rounded-[30px] relative z-20 bg-[url('/footer/astronautbreaking.svg')] bg-contain bg-no-repeat bg-right">
                <div className="max-w-4xl text-center md:text-left">
                    <h2 className="text-white text-2xl md:text-[40px] capitalize font-medium leading-[1.4]">
                        From <span className="font-bold capitalize">launchpad to landing</span>, we're with{" "}
                        <span className="hidden md:inline"><br /></span>
                        you every step of the mission.
                        <span className="hidden md:inline"><br /></span>
                        Let's build digital universes that shine{" "}
                        <span className="hidden md:inline"><br /></span>
                        <span className="font-bold capitalize">brighter than the stars.</span>
                    </h2>

                    <div className="flex justify-center md:justify-start items-center mt-6">
                        <img
                            src="/footer/tbbdarklogo.svg"
                            alt="The Brain Burners"
                            className="w-[100px] md:w-[140px] h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="w-full px-2 py-4 md:py-8 bg-white relative z-20">
                <div className="border-2 border-black rounded-[30px] md:rounded-[50px] px-6 md:px-12 py-6 md:py-10">

                    {/* Desktop Layout */}
                    <div className="hidden md:grid grid-cols-[1fr_2fr_1fr_1.2fr] gap-8">
                        {/* About Section */}
                        <div>
                            <h3 className="font-bold text-lg mb-4 text-black">About</h3>
                            <ul className="space-y-2">
                                <div className="flex">
                                    <li><button onClick={() => router.push('/')} className="text-gray-700 hover:text-black transition">Home</button></li>
                                    <li><button onClick={() => router.push('/')} className="text-gray-700 pl-[85px] hover:text-black transition">Work</button></li>
                                </div>
                                <div className="flex">
                                    <li><button onClick={() => router.push('/our-team')} className="text-gray-700 hover:text-black transition">Our Team</button></li>
                                    <li><button onClick={() => router.push('/contact')} className="text-gray-700 pl-[60px] hover:text-black transition">Contact Us</button></li>
                                </div>
                                <div className="flex">
                                    <li><button onClick={() => router.push('/services')} className="text-gray-700 hover:text-black transition">Services</button></li>
                                    <li><button onClick={() => router.push('/about-us')} className="text-gray-700 pl-[70px] hover:text-black transition">About Us</button></li>
                                </div>
                            </ul>
                        </div>

                        {/* Services Section */}
                        <div className="border-l-2 border-r-2 border-black px-6">
                            <h3 className="font-bold text-lg mb-4 text-black">Services</h3>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                <ul className="space-y-2">
                                    <li><button onClick={() => router.push('/social-media-management')} className="text-gray-700 hover:text-black transition text-start">Social Media Management</button></li>
                                    <li><button onClick={() => router.push('/seo')} className="text-gray-700 hover:text-black transition text-start">SEO</button></li>
                                    <li><button onClick={() => router.push('/ai-modernization')} className="text-gray-700 hover:text-black transition text-start">Artificial Intelligence Modernization</button></li>
                                    <li><button onClick={() => router.push('/branding')} className="text-gray-700 hover:text-black transition text-start">Branding</button></li>
                                </ul>
                                <ul className="space-y-2">
                                    <li><button onClick={() => router.push('/uiux')} className="text-gray-700 hover:text-black transition text-start">UI/UX Designing</button></li>
                                    <li><button onClick={() => router.push('/app-development')} className="text-gray-700 hover:text-black transition text-start">Application Development</button></li>
                                    <li><button onClick={() => router.push('/web-development')} className="text-gray-700 hover:text-black transition text-start">Web Development</button></li>
                                    <li><button onClick={() => router.push('/performance-marketing')} className="text-gray-700 hover:text-black transition text-start">Performance Marketing</button></li>
                                </ul>
                            </div>
                        </div>

                        {/* Socials Section */}
                        <div className="border-r-2 border-black pr-6">
                            <h3 className="font-bold text-lg mb-4 text-black">Socials</h3>
                            <div className="grid grid-cols-3 gap-3">
                                {["facebook", "linkedin", "instagram", "youtube", "x", "be"].map((icon) => (
                                    <a key={icon} href="#">
                                        <img
                                            src={`/footer/${icon}.svg`}
                                            className="w-[40px]"
                                            alt={icon}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Logo and Contact Section */}
                        <div>
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <img
                                        src="/svgs/brainburnerslogo.svg"
                                        className="w-[130px]"
                                        alt="Brain Burners Logo"
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

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col">
                        {/* About Section - Mobile */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-sm mb-3 text-black">About</h3>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                <button onClick={() => router.push('/')} className="text-gray-700 hover:text-black transition text-start">Home</button>
                                <button onClick={() => router.push('/')} className="text-gray-700 hover:text-black transition text-start">Work</button>
                                <button onClick={() => router.push('/our-team')} className="text-gray-700 hover:text-black transition text-start">Our Team</button>
                                <button onClick={() => router.push('/contact')} className="text-gray-700 hover:text-black transition text-start">Contact Us</button>
                                <button onClick={() => router.push('/services')} className="text-gray-700 hover:text-black transition text-start">Services</button>
                                <button onClick={() => router.push('/about-us')} className="text-gray-700 hover:text-black transition text-start">About Us</button>
                            </div>
                        </div>

                        <div className="border-t border-black my-6"></div>

                        {/* Services Section - Mobile */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-sm mb-3 text-black">Services</h3>
                            <div className="flex items-start flex-col gap-2 text-sm">
                                <button onClick={() => router.push('/social-media-management')} className="text-gray-700 hover:text-black transition">Social Media Management</button>
                                <button onClick={() => router.push('/seo')} className="text-gray-700 hover:text-black transition">SEO</button>
                                <button onClick={() => router.push('/ai-modernization')} className="text-gray-700 hover:text-black transition">Artificial Intelligence Modernization</button>
                                <button onClick={() => router.push('/branding')} className="text-gray-700 hover:text-black transition">Branding</button>
                                <button onClick={() => router.push('/uiux')} className="text-gray-700 hover:text-black transition">UI/UX Designing</button>
                                <button onClick={() => router.push('/app-development')} className="text-gray-700 hover:text-black transition">Application Development</button>
                                <button onClick={() => router.push('/web-development')} className="text-gray-700 hover:text-black transition">Web Development</button>
                                <button onClick={() => router.push('/performance-marketing')} className="text-gray-700 hover:text-black transition">Performance Marketing</button>
                            </div>
                        </div>

                        <div className="border-t border-black my-6"></div>

                        {/* Socials Section - Mobile */}
                        <div className="mb-6">
                            <h3 className="font-semibold text-sm mb-3 text-black">Socials</h3>
                            <div className="flex gap-2 flex-wrap">
                                {["facebook", "linkedin", "instagram", "youtube", "x", "be"].map((icon) => (
                                    <a key={icon} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center">
                                        <img
                                            src={`/footer/${icon}.svg`}
                                            className="w-9 h-9"
                                            alt={icon}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-black my-6"></div>

                        {/* Logo and Contact Section - Mobile */}
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <img
                                    src="/svgs/brainburnerslogo.svg"
                                    className="w-[100px]"
                                    alt="Brain Burners Logo"
                                />
                            </div>
                            <div className="text-xs text-gray-700 space-y-1">
                                <p className="text-black leading-relaxed">
                                    Miran Square, D 180, Basement, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab - 160055
                                </p>
                                <p className="mt-3 text-black">
                                    Int:{" "}
                                    <a href="tel:+918194900054" className="hover:text-black transition">
                                        +91 8194900054
                                    </a>
                                </p>
                                <p className="text-black break-all">
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



