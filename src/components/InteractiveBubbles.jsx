import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const bubbleClasses =
  "absolute w-5 h-5 bg-red-500 opacity-30 rounded-full pointer-events-none";

const InteractiveBubbles = () => {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);

  useEffect(() => {
    // Animate bubbles on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      bubblesRef.current.forEach((bubble, i) => {
        if (bubble) {
          gsap.to(bubble, {
            y: scrollY * 0.05 * (i % 3 === 0 ? 1 : -1),
            x: scrollY * 0.03 * (i % 2 === 0 ? 1 : -1),
            duration: 1.2,
            ease: "power2.out",
          });
        }
      });
    };

    // Animate on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      bubblesRef.current.forEach((bubble, i) => {
        const offsetX = (clientX - centerX) * 0.005 * (i % 2 === 0 ? 1 : -1);
        const offsetY = (clientY - centerY) * 0.005 * (i % 3 === 0 ? 1 : -1);

        gsap.to(bubble, {
          x: `+=${offsetX}`,
          y: `+=${offsetY}`,
          duration: 1.5,
          ease: "sine.inOut",
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const renderBubbles = () => {
    return new Array(20).fill(0).map((_, index) => {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${6 + Math.random() * 10}px`,
        height: `${6 + Math.random() * 10}px`,
        opacity: 0.15 + Math.random() * 0.2,
        backgroundColor: "rgba(255, 0, 0, 0.8)",
      };

      return (
        <div
          key={index}
          ref={(el) => (bubblesRef.current[index] = el)}
          className={bubbleClasses}
          style={style}
        />
      );
    });
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0 overflow-hidden"
    >
      {renderBubbles()}
    </div>
  );
};

export default InteractiveBubbles;
