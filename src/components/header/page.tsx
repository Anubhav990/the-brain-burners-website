"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import HeaderModal from '../desktop-header-modal/page';
import { useRouter } from 'next/navigation';

const Header = () => {

    const router = useRouter();

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <header className="max-w-[1280px] w-full mx-auto flex items-center justify-between px-2 py-4 bg-white">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        onClick={() => router.push('/')}
                        src="/svgs/brainburnerslogo.svg"
                        alt="The Brain Burners"
                        width={140}
                        height={40}
                        priority
                        className='w-[165px]'
                    />
                </div>

                {/* Hamburger Icon */}
                <div
                    onClick={() => setIsModalOpen(true)}
                    className="w-[50px] flex flex-col justify-between hover:scale-110 ease-in-out duration-300 cursor-pointer">
                    <Image src="/svgs/tbbhamburgermenu.svg" alt="menu" width={600} height={400} priority />
                </div>
            </header>

            {isModalOpen && <HeaderModal onClose={() => setIsModalOpen(false)} />}
        </div>
    )
}

export default Header;