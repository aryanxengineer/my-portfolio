import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import ProjectSlider from "../components/ProjectSlider";
import RedWord from "../components/RedWord";
import InteractiveBubbles from "../components/InteractiveBubbles";

const blobClasses =
  "absolute pointer-events-none blur-2xl rounded-full red-blob";

const Projects = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const blobs = bgRef.current.querySelectorAll(".red-blob");

    blobs.forEach((blob) => {
      const deltaX = (Math.random() - 0.5) * 100;
      const deltaY = (Math.random() - 0.5) * 100;
      const duration = 8 + Math.random() * 4;

      gsap.to(blob, {
        x: deltaX,
        y: deltaY,
        repeat: -1,
        yoyo: true,
        duration,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="h-screen w-full bg-black relative flex items-center justify-center"
    >
      <InteractiveBubbles />
      <div
        className={`w-40 h-40 bg-red-600 opacity-20 top-10 left-10 ${blobClasses}`}
      />
      <div
        className={`w-32 h-32 bg-red-500 opacity-30 bottom-20 right-20 ${blobClasses}`}
      />
      <div
        className={`w-24 h-24 bg-red-400 opacity-25 top-1/2 left-1/3 ${blobClasses}`}
      />

      {/* main content */}
      <div className="relative h-full w-full flex flex-col px-10">
        <div className="h-[25%] px-2 lg:absolute lg:w-[45%] lg:right-10 lg:top-15 z-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-white z-10 text-center">
            <RedWord text="My" /> Projects
          </h2>
          <p className="max-w-3xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 z-10">
            I build to learn, not just to impress. Every project here is mine —
            start to finish. I can explain or recreate any part, anytime. These
            aren’t demos — they’re my <RedWord text="passion" />, my{" "}
            <RedWord text="learning" />, and my proof.
          </p>
        </div>
        <div className="w-full h-1/2 center mt-3 lg:top lg:absolute lg:w-[45%] lg:h-full">
          <ProjectCard />
        </div>
        <div className="w-full h-1/4 lg:absolute lg:z-20 lg:right-0 lg:bottom-0 lg:w-[45%]">
          <ProjectSlider />
        </div>
      </div>
    </div>
  );
};

export default Projects;