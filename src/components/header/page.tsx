"use client"

import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div>
            <header className="max-w-[1200px] w-full mx-auto flex items-center justify-between px-2 py-4 bg-white">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/svgs/brainburnerslogo.svg" 
                        alt="The Brain Burners"
                        width={140}
                        height={40}
                        priority
                    />
                </div>

                {/* Hamburger Icon */}
                <div className="w-[50px] flex flex-col justify-between">
                    <Image src="/svgs/tbbhamburgermenu.svg" alt="menu" width={600} height={400} priority/>
                </div>
            </header>
        </div>
    )
}

export default Header;
