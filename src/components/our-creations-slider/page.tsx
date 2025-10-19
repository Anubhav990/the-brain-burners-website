"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  textColor?: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Fitwiser",
    description:
      "Track your fitness journey with powerful real-time analytics tailored just for you. This app counts every calorie with ease and stay on top of your nutrition goals.",
    image: "/sliders/fitwiser.png",
    textColor: "text-black",
    link: "https://fitwiser.thebrainburners.io/"
  },
  {
    id: 2,
    title: "JobJaro",
    description:
      "JobJaro isn't just another job board. It's a smarter, faster, and intuitive way to hire and get hired. We're using AI to match the right talent with the right roles.",
    image: "/sliders/jobjaro.png",
    textColor: "text-black",
    link: "https://jobjaro.thebrainburners.io/"
  },
  {
    id: 3,
    title: "Rideshare",
    description:
      "Rideshare is a user-friendly ride-hailing app crafted to make city travel effortless. Whether you're commuting daily or booking a ride on the go.",
    image: "/sliders/rideshare.png",
    textColor: "text-black",
    link: "https://edulinkcasestudy.tbbsample.com/"
  },
  {
    id: 4,
    title: "propertyPro AI",
    description:
      "PropertyPro AI was developed to solve some of the most pressing challenges in the real estate industry slow response times & inconsistent client communication.",
    image: "/sliders/propertypro.png",
    textColor: "text-black",
    link: "https://propertyproai.thebrainburners.io/"
  },
  {
    id: 5,
    title: "Prime Depth Labs",
    description:
      "We combine cutting-edge AI with software development to create intelligent, scalable, and future-ready solutions for businesses worldwide.",
    image: "/sliders/primedepth.png",
    textColor: "text-black",
    link: "https://www.primedepthlabs.com/"
  },
  {
    id: 6,
    title: "The Mud",
    description:
      "The Mud is a contemporary restaurant blending global flavors with local freshness to craft unforgettable dining experiences.",
    image: "/sliders/themud.png",
    textColor: "text-black",
    link: "https://themud.thebrainburners.io/"
  },
  {
    id: 7,
    title: "Infutrix",
    description:
      "Infutrix partners with innovative companies, from startups to Fortune 500, lending software engineering and Al expertise to propel them to new heights.",
    image: "/sliders/infutrix.png",
    textColor: "text-black",
    link: "https://infutrix.thebrainburners.io/"
  },
  {
    id: 8,
    title: "EduLinks",
    description:
      "Edulinks AI helps you discover your ideal career, shortlist universities & courses, and calculate visa success all in one smart, personalized journey.",
    image: "/sliders/edulinks.png",
    textColor: "text-black",
    link: "https://edulinkcasestudy.tbbsample.com/"
  },
  {
    id: 9,
    title: "Zaucto",
    description:
      "At Zaucta, procurement should be effortless, transparent & cost-efficient. It is designed to transform the way businesses source chemicals & additives.",
    image: "/sliders/zaucto.png",
    textColor: "text-black",
    link: "https://zaucto.thebrainburners.io/"
  },
  {
    id: 10,
    title: "Hoopsie",
    description:
      "Hoopsie is not just another daily wear anti-tarnish jewelry brand, it's the healthy relationship that you've always wanted. We believe in trust & transparency.",
    image: "/sliders/hoopsie.png",
    textColor: "text-black",
    link: "https://hoopsie.thebrainburners.io/"
  },
  {
    id: 11,
    title: "Roopvedaa",
    description:
      "At RoopVedaa, we believe every beauty journey is unique. That's why we give you the option to customize your own hamper.",
    image: "/sliders/roopveda.png",
    textColor: "text-black",
    link: "https://roopvedaa.thebrainburners.io/"
  },
  {
    id: 12,
    title: "IBSC",
    description:
      "IBSC's provides banking and finance courses are open to graduates, job seekers & working professionals looking to build a career in the Banking,",
    image: "/sliders/ibsc.png",
    textColor: "text-black",
    link: "https://ibsc.thebrainburners.io/"
  },
  {
    id: 13,
    title: "Posterized",
    description:
      "Transform your memories into stunning wall art with Posterized. Custom posters designed to capture your unique moments.",
    image: "/sliders/posterized.png",
    textColor: "text-black",
    link: "https://posterized.thebrainburners.io/"
  },
];

export default function CreationSlider() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = projects.length - cardsPerView;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative z-20 max-w-[1450px] mx-auto bg-[#f7f7f7] rounded-4xl hidden sm:flex flex-col items-center py-16 px-6 md:px-12 -mt-[30%]">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-2">
          <span className="w-3 h-3 bg-[#F38400] rounded-full mr-2"></span>
          <span className="text-[14px] md:text-[20px] text-black font-medium"> Highlights From Our Creations</span>
        </div>
        <h2 className="text-3xl md:text-[50px] font-bold mt-2 text-black">
          Versatile In Complexity, Industries, <br /> And Design Approaches
        </h2>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl">
        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${cardsPerView === 1 ? 'w-full' : 'w-1/2'} flex-shrink-0 ${project.textColor}`}
              >
                <div className="flex flex-col h-full p-2 md:p-4">
                  {/* Image */}
                  <div className="flex justify-center bg-white rounded-tl-3xl rounded-tr-3xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={750}
                      height={550}
                      className="object-contain w-full h-auto"
                    />
                  </div>
                  {/* Text */}
                  <div className="pt-5 px-[18px] pb-5 bg-white rounded-bl-3xl rounded-br-3xl">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold mb-2 underline hover:text-[#F38400] transition"
                    >
                      {project.title}
                    </a>
                    <p className="text-sm leading-relaxed mt-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-[#F38400] rounded-full p-2 text-white shadow-md hover:bg-orange-600 transition z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-[#F38400] rounded-full p-2 text-white shadow-md hover:bg-orange-600 transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Button */}
      <div className="mt-10">
        <button
          onClick={() => router.push('/contact')}
          className="bg-[#F38400] text-white px-8 py-3 rounded-full text-[20px] font-medium hover:scale-105 transition shadow-[2px_5px_0_#000000]"
        >
          Let&apos;s Discuss Your Project
        </button>
      </div>
    </section>
  );
}