import React, { useEffect, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { gsap } from "gsap";
import ProjectSlider from "../components/ProjectSlider";
import RedWord from "../components/RedWord";

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
      className="h-[150vh] bg-black relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute w-40 h-40 bg-red-600 opacity-20 blur-3xl rounded-full red-blob top-10 left-10 pointer-events-none" />
      <div className="absolute w-32 h-32 bg-red-500 opacity-30 blur-2xl rounded-full red-blob bottom-20 right-20 pointer-events-none" />
      <div className="absolute w-24 h-24 bg-red-400 opacity-25 blur-2xl rounded-full red-blob top-1/2 left-1/3 pointer-events-none" />

      <div className="h-full w-full flex z-30 px-20">
        <div className="w-1/2 h-full">
          <ProjectCard />
        </div>
        <div className="w-1/2 h-full">
          <div className="h-1/2 px-2">
            <h2 className="text-5xl md:text-6xl font-bold tracking-wide mb-6 text-white z-10 text-center">
              My <RedWord text="Projects" />
            </h2>
            <p className="max-w-3xl text-center text-lg md:text-xl leading-relaxed text-gray-300 z-10">
              Every project here is built by me — from first line to final
              deployment. I don’t build just to impress, I build to understand.
              Every feature, every bug, every line taught me something. I
              believe in action. If given the chance, I can recreate or explain
              any part of these projects — live, within days. These aren’t demos
              — they’re my <RedWord text="passion" />, my{" "}
              <RedWord text="learning" />, and my proof.
            </p>
          </div>
          <ProjectSlider />
        </div>
      </div>
    </div>
  );
};

export default Projects;
