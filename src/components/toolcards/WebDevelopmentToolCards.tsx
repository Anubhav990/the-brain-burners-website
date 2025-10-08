"use client";

import Image from "next/image";
import React from "react";

const tools = [
  { name: "React", img: "/services/appdevelopment/react.svg", gif: "/services/watereffect/watereffect1.gif" },
  { name: "NextJs", img: "/services/appdevelopment/next.svg", gif: "/services/watereffect/watereffect2.gif" },
  { name: "html", img: "/services/webdevelopment/html.svg", gif: "/services/watereffect/watereffect2.gif" },
  { name: "CSS", img: "/services/webdevelopment/css.svg", gif: "/services/watereffect/watereffect3.gif" },
  { name: "Wordpress", img: "/services/webdevelopment/wordpress.svg", gif: "/services/watereffect/watereffect6.gif" },
  { name: "Typescript", img: "/services/appdevelopment/typescript.svg", gif: "/services/watereffect/watereffect7.gif" },
  { name: "JavaScript", img: "/services/appdevelopment/javascript.svg", gif: "/services/watereffect/watereffect8.gif" },
  { name: "NodeJS", img: "/services/webdevelopment/node.svg", gif: "/services/watereffect/watereffect5.gif" },
];

export default function WebDevelopmentToolsCards() {
  return (
    <section className="mt-12">
      {/* DESKTOP/TABLET VIEW */}
      <div className="hidden md:flex justify-center gap-12 flex-wrap mt-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-[#F38400] rounded-full w-[150px] h-[238px] bg-center bg-no-repeat bg-cover transition-all duration-300"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundImage = `url(${tool.gif})`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundImage = "none")
            }
          >
            <div className="w-24 h-24 relative mb-2 z-10">
              <Image
                src={tool.img}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </div>
            <h4 className="text-base text-black font-medium text-center z-10">
              {tool.name}
            </h4>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW */}
      <div className="flex flex-col items-center justify-center text-center md:hidden">

        {/* Tools Grid (2 rows layout like image) */}
        <div className="grid grid-cols-3 gap-6">
          {tools.slice(0, 3).map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-[#F38400] rounded-full w-[100px] h-[150px] bg-center bg-no-repeat bg-cover transition-all duration-300"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${tool.gif})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage = "none")
              }
            >
              <div className="w-12 h-12 relative mb-1 z-10">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-xs text-black font-medium text-center z-10">
                {tool.name}
              </h4>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          {tools.slice(3).map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-[#F38400] rounded-full w-[100px] h-[150px] bg-center bg-no-repeat bg-cover transition-all duration-300"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${tool.gif})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage = "none")
              }
            >
              <div className="w-12 h-12 relative mb-1 z-10">
                <Image
                  src={tool.img}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-xs text-black font-medium text-center z-10">
                {tool.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
