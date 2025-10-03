import React from 'react';
import Image from 'next/image';

type HeaderModalProps = {
  onClose: () => void;
};

export default function HeaderModal({ onClose }: HeaderModalProps) {
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Vertical Text */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <h2 className="text-gray-600 text-4xl font-bold tracking-wider whitespace-nowrap">
          THE BRAIN BURNERS
        </h2>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 text-orange-500 hover:text-orange-400 transition-colors">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="10" y1="10" x2="30" y2="30" />
          <line x1="30" y1="10" x2="10" y2="30" />
        </svg>
      </button>

      {/* Main Content Container */}
      <div className="h-full flex items-center justify-between px-32">
        {/* Left Section - Contact Info */}
        <div className="flex flex-col gap-12">
          <div>
            <h1 className="text-white text-6xl font-bold mb-6">HAVE QUESTIONS?</h1>
            <p className="text-white text-xl">
              Email us to:{' '}
              <a
                href="mailto:info@thebrainburners.io"
                className="underline hover:text-orange-500 transition-colors"
              >
                info@thebrainburners.io
              </a>
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors w-fit">
            Book A Call
          </button>
        </div>

        {/* Right Section - Navigation */}
        <nav className="flex flex-col gap-6 text-right">
          <a href="#home" className="text-white text-2xl hover:text-orange-500 transition-colors">
            Home
          </a>
          <a href="#about" className="text-white text-2xl hover:text-orange-500 transition-colors border-b border-white pb-2">
            About us
          </a>
          <a href="#team" className="text-white text-2xl hover:text-orange-500 transition-colors">
            Our Team
          </a>
          <a href="#services" className="text-white text-2xl hover:text-orange-500 transition-colors border-b border-white pb-2">
            Services
          </a>
          <a href="#work" className="text-white text-2xl hover:text-orange-500 transition-colors border-b border-white pb-2">
            Our Work
          </a>
          <a href="#contact" className="text-white text-2xl hover:text-orange-500 transition-colors border-b border-white pb-2">
            Contact Us
          </a>
        </nav>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-800">
        <div className="flex items-center justify-between px-32 py-8">
          {/* Logo */}
          <div className="relative w-48 h-16">
            <Image
              src="/placeholder-logo.png"
              alt="The Brain Burners Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Social Links */}
          <div className="flex gap-24">
            <a href="#" className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors">
              <span className="text-orange-500 text-2xl">📷</span>
              <span className="text-lg">Instagram</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors">
              <span className="text-orange-500 text-2xl">💼</span>
              <span className="text-lg">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-white hover:text-orange-500 transition-colors">
              <span className="text-orange-500 text-2xl">👍</span>
              <span className="text-lg">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}