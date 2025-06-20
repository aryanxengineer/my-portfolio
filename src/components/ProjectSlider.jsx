import { useState } from "react";
import portfolio from "../assets/projects/portfolio.png";

const cards = [
  `${portfolio}`,
  "https://img.freepik.com/free-psd/company-landing-page-template_23-2148709865.jpg",
  "https://img.freepik.com/free-vector/construction-landing-page_23-2148183146.jpg",
  "https://img.freepik.com/free-vector/organic-flat-design-motiongraphics-landing-page_23-2148887092.jpg",
  "https://img.freepik.com/premium-psd/3d-ui-ux-design-banner-landing-page-template-with-social-media-icon_530669-389.jpg",
];

const ProjectSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getPositionClass = (index) => {
    if (index === activeIndex) return "scale-105 sm:scale-110 z-20";
    if (index === (activeIndex - 1 + cards.length) % cards.length)
      return "scale-90 -translate-x-[50%] lg:-translate-x-[70%] z-10";
    if (index === (activeIndex + 1) % cards.length)
      return "scale-90 translate-x-[50%] lg:translate-x-[60%] z-10";
    return "scale-75 opacity-0 pointer-events-none absolute";
  };

  return (
    <div className="relative flex items-center lg:items-start justify-center py-5 w-full lg:w-[85%]">
      {/* Prev Button */}
     <button
  onClick={handlePrev}
  className="absolute left-2 sm:left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-30 
             w-11 h-11 sm:w-12 sm:h-12 rounded-full 
             flex items-center justify-center text-white 
             bg-red-500/20 backdrop-blur-md border border-red-400/30 shadow-xl
             animate-bubblePulse"
>
  ‹
</button>

      {/* Image carousel */}
      <div className="relative w-[90%] max-w-[340px] sm:max-w-[420px] h-[200px] sm:h-[220px] flex justify-center items-center rounded-2xl overflow-visible">
        {cards.map((card, index) => (
          <img
            key={index}
            src={card}
            alt={`Slide ${index + 1}`}
            className={`shadow-sm shadow-zinc-500 absolute transition-all duration-500 ease-in-out w-36 h-44 sm:w-48 sm:h-52 lg:w-56 lg:h-60 rounded-2xl object-cover object-center ${getPositionClass(
              index
            )}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
  onClick={handleNext}
  className="absolute right-2 sm:right-2 lg:-right-11 top-1/2 -translate-y-1/2 z-30 
             w-11 h-11 sm:w-12 sm:h-12 rounded-full 
             flex items-center justify-center text-white 
             bg-red-500/20 backdrop-blur-md border border-red-400/30 shadow-xl
             animate-bubblePulse"
>
  ›
</button>

    </div>
  );
};

export default ProjectSlider;
