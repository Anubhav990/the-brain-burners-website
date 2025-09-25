import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TbbCode = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const items = [
    {
      number: "01",
      title: "Creativity With Purpose",
      description:
        "Every Design We Craft Is A Mission, Not Just An Experiment. Like Astronauts Charting Unexplored Territory, We Navigate Through Creative Purpose And Takes Your Brand To New Frontiers."
    },
    {
      number: "02",
      title: "Collaboration In Orbit",
      description:
        "No Astronaut Explores Space Alone - We Thrive In Teams. We Orbit Around Collaboration, Syncing Ideas Like Satellites To Keep Projects Aligned And Moving Toward Success."
    },
    {
      number: "03",
      title: "Accountability In Every Launch",
      description:
        "Just as every space mission requires precise execution and responsibility, we ensure accountability at every stage of your brand's journey to success."
    }
  ];

  const getZIndex = (index: number) => {
    if (hoveredIndex === index) return 100; // hovered card always on top
    if (hoveredIndex === 2 && index === 1) return 99; // second card stays above first when third is hovered
    if (expandedIndex === index) return 101; // expanded card on top
    return items.length - index; // default stacking
  };

  return (
    <div className="mt-[60px] p-6 relative z-20 max-w-[1300px] mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="w-2 h-2 bg-[#F38400] rounded-full mr-2"></div>
          <span className="text-[15px] text-black font-medium">The Brain Burner's CODE</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          <span className="text-[#F38400]">YOU ARE THE EXPLORER.</span>
        </h1>
        <p className="text-black text-[32px] font-bold leading-relaxed">
          We Are Your Loyal Mission Control, Guiding You Through Every Stage Of The Journey.
        </p>
      </div>

      {/* Accordion Items */}
      <div className="relative">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl px-2 overflow-hidden border border-gray-100 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.12)] duration-300
              ${index !== 0 ? '-mt-2' : ''}`}
            style={{ zIndex: getZIndex(index) }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Header Row */}
            <div
              className="flex items-center justify-between p-5 cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <div className="flex items-center space-x-4 flex-1">
                {/* Number Circle */}
                <div className="w-20 h-20 bg-[#F38400] rounded-full flex items-center justify-center text-white font-bold text-[25px]">
                  {item.number}
                </div>
                {/* Title */}
                <h3 className="font-semibold text-gray-900 text-[28px] md:text-[36px]">
                  {item.title}
                </h3>
              </div>

              {/* Plus → Cross */}
              <div className="w-14 h-14 bg-[#F38400] rounded-full flex items-center justify-center cursor-pointer">
                <Plus
                  className={`w-8 h-8 text-white transform transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>
            </div>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${expandedIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-5 pb-5">
                <div className="bg-[#F38400] text-white p-[25px] rounded-lg text-[24px] leading-8 font-medium">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TbbCode;
