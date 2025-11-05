"use client";
import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

const videos: string[] = [
  "/client-videos/client-video1.mp4",
  "/client-videos/client-video2.mp4",
  "/client-videos/client-video3.mp4",
];

const ClientVideoSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 items-center justify-center py-10 px-4 bg-white relative z-10">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#F38400] rounded-full"></span>
        <p className="text-[20px] text-black font-medium">
          Smiles, Stories, & Success!
        </p>
      </div>

      {/* Title */}
      <h2 className="text-center text-[#111111] font-bold text-[28px] md:text-[50px] leading-[40px] md:leading-[70px]">
        From First Step to Success:
        <br />
        <span className="block text-[20px] md:text-[36px] font-semibold">
          Their Journey with Us
        </span>
      </h2>

      {/* Description */}
      <p className="text-[18px] md:text-[20px] text-[#666666] leading-[34px] font-medium text-center max-w-3xl">
        These stories showcase the trust, collaboration, and results that define
        every partnership we build.
      </p>

      {/* Video Cards */}
      <div className="flex flex-col flex-wrap justify-center sm:flex-row gap-3 mt-6">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </section>
  );
};

interface VideoCardProps {
  video: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    const videoEl = videoRef.current;
    if (videoEl) {
      if (isPlaying) {
        videoEl.pause();
        setIsPlaying(false);
      } else {
        videoEl.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div
      className="relative w-[345px] sm:w-[380px] h-auto sm:h-[500px] rounded-xl overflow-hidden shadow-md border border-[#E5E5E5] cursor-pointer"
      onClick={handlePlay}
    >
      <video
        ref={videoRef}
        src={video}
        className="w-full h-full object-cover"
        loop
        playsInline
      ></video>

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
          <div className="w-[80px] h-[80px] bg-white/90 rounded-full flex items-center justify-center">
            <Play className="text-[#F38400] w-7 h-7 fill-[#F38400]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientVideoSection;
