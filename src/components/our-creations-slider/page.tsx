"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  textColor?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Fitwiser",
    description:
      "Track your fitness journey with powerful real-time analytics tailored just for you. This app counts every calorie with ease and stay on top of your nutrition goals.",
    image: "/sliders/fitwiser.png",
    textColor: "text-black",
  },
  {
    id: 2,
    title: "JobJaro",
    description:
      "JobJaro isn't just another job board. It's a smarter, faster, and intuitive way to hire and get hired. We're using AI to match the right talent with the right roles.",
    image: "/sliders/jobjaro.png",
    textColor: "text-black",
  },
  {
    id: 3,
    title: "EduConnect",
    description:
      "An education platform that connects students with mentors, offering seamless scheduling and progress tracking tools.",
    image: "/sliders/rideshare.png",
    textColor: "text-black",
  },
  {
    id: 4,
    title: "PropertyPro",
    description:
      "PropertyPro AI was developed to solve some of the most pressing challenges in the real estate industry slow response times & inconsistent client communication.",
    image: "/sliders/propertypro.png",
    textColor: "text-black",
  },
];

export default function CreationSlider() {
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

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= projects.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <section className="relative z-20 w-full bg-[#f7f7f7] rounded-4xl hidden sm:flex flex-col items-center py-16 px-6 md:px-12 -mt-[30%]">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-orange-500 font-medium">Highlights From Our Creations</p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">
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
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              width: `${(projects.length / cardsPerView) * 100}%`,
            }}
          >
            {projects.map((project) => (
              <div key={project.id} className={`w-full md:w-1/2 ${project.textColor}`}>
                <div className="flex flex-col h-full p-2 md:p-4">
                  {/* Image */}
                  <div className="flex justify-center mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={750}
                      height={550}
                      className="object-contain"
                    />
                  </div>
                  {/* Text */}
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-orange-500 rounded-full p-2 text-white shadow-md hover:bg-orange-600 transition z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-orange-500 rounded-full p-2 text-white shadow-md hover:bg-orange-600 transition z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Button */}
      <div className="mt-12">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition">
          Let&apos;s Discuss Your Project
        </button>
      </div>
    </section>
  );
}