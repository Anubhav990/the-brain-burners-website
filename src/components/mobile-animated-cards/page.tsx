"use client"

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function MobileSlider() {

  const router = useRouter();

  const services = [
    {
      id: 1,
      title: ["UI/UX", "Designing"],
      description:
        "We craft intuitive & visually engaging interfaces that put user experience at the center. Our design process focuses on understanding user behavior, creating seamless & aesthetically pleasing layouts that align with your brand identity.",
      staticIcon: "/gifs/uiuxstatic.svg",
      animatedIcon: "/gifs/uiuxmoving.gif",
      path: '/uiux'
    },
    {
      id: 2,
      title: ["Application", "Development"],
      description:
        "We design and develop high-performance applications that bring your ideas to life and empower your business. From mobile apps to enterprise-grade solutions, our applications are built with scalability, security, and usability in mind.",
      staticIcon: "/gifs/appdevstatic.svg",
      animatedIcon: "/gifs/appdevmoving.gif",
      path: '/app-development'
    },
    {
      id: 3,
      title: ["Web", "Development"],
      description:
        "We build powerful, scalable, and user-friendly websites tailored to your business needs. From sleek corporate sites to complex web platforms, our development process ensures speed, security & performance across all devices.",
      staticIcon: "/gifs/webdevstatic.svg",
      animatedIcon: "/gifs/webdevmoving.gif",
      path: '/web-development'
    },
    {
      id: 4,
      title: ["Performance", "Marketing"],
      description:
        "We create data-driven marketing strategies that focus on measurable results. From paid campaigns and search engine marketing to social media ads and conversion optimization, our approach is designed to maximize ROI.",
      staticIcon: "/gifs/performancestatic.svg",
      animatedIcon: "/gifs/performancemoving.gif",
      path: '/performance-marketing'
    },
    {
      id: 5,
      title: "SEO",
      description:
        "We optimize your digital presence with smart SEO strategies that boost visibility, improve rankings, and bring organic traffic to your website ensuring your brand is found by the right audience at the right time.",
      staticIcon: "/gifs/seostatic.svg",
      animatedIcon: "/gifs/seomoving.gif",
      path: '/seo'
    },
    {
      id: 6,
      title: ["Social Media", "Management"],
      description:
        "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
      staticIcon: "/gifs/socialmediastatic.svg",
      animatedIcon: "/gifs/socialmediamoving.gif",
      path: '/social-media-management'
    },
    {
      id: 7,
      title: "Branding",
      description:
        "From content creation to audience engagement, we manage your social channels to build community, strengthen brand voice, and drive meaningful interactions that convert followers into loyal customers.",
      staticIcon: "/gifs/brandingstatic.svg",
      animatedIcon: "/gifs/brandingmoving.gif",
      path: '/branding' 
    },
    {
      id: 8,
      title: "Artificial Intelligence Modernization",
      description:
        "We ensure your digital products remain reliable, secure, and high-performing through continuous quality analysis and maintenance. Our team conducts rigorous testing to identify and resolve issues, optimize performance.",
      staticIcon: "/gifs/aimodernstatic.svg",
      animatedIcon: "/gifs/aimoving.gif",
      path: '/ai-modernization'
    },
  ];



  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    if (currentSlide < services.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance

    if (distance > threshold) nextSlide();
    else if (distance < -threshold) prevSlide();
  };

  return (
    <div
      className="bg-white flex items-center justify-center p-6 sm:hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full max-w-sm relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 text-gray-700 hover:text-gray-900 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          disabled={currentSlide >= services.length - 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 text-gray-700 hover:text-gray-900 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Container */}
        <div className="overflow-hidden h-[460px]">
          <div
            className="flex transition-transform duration-500 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="w-full flex-shrink-0 h-full">
                <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col">
                  <div className="mb-5">
                    <img
                      src={service.staticIcon}
                      alt="icon"
                      className="w-[50px] h-[50px] object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {Array.isArray(service.title)
                      ? service.title.map((t, i) => (
                        <React.Fragment key={i}>
                          {t}
                          <br />
                        </React.Fragment>
                      ))
                      : service.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  <button
                    onClick={() => router.push(`${service.path}`)}
                    className="bg-[#F38400] text-white text-[16px] font-semibold py-2.5 px-5 rounded-full flex items-center gap-2 w-fit transition-colors">
                    Know More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${index === currentSlide
                ? "bg-[#F38400] w-6"
                : "bg-gray-300 w-1.5"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
