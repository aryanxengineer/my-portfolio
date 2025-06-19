import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkillsLayer = () => {
  const wrapperRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      const duration = 3 + Math.random() * 4;
      const offset = 5 + Math.random() * 10;

      gsap.to(dot, {
        y: `+=${offset}`,
        x: `+=${offset / 2}`,
        repeat: -1,
        yoyo: true,
        duration,
        ease: "sine.inOut",
      });
    });

    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;

      gsap.to(wrapperRef.current, {
        x: x * 30,
        y: y * 20,
        duration: 1.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const generateDots = () => {
    const count = 45;
    return Array.from({ length: count }, (_, i) => {
      const style = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: "6px",
        height: "6px",
        backgroundColor: "rgba(255, 0, 0, 0.4)",
      };

      return (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute rounded-full pointer-events-none blur-[1px]"
          style={style}
        />
      );
    });
  };

  return (
    <div
      ref={wrapperRef}
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
    >
      {generateDots()}
    </div>
  );
};

export default SkillsLayer;
