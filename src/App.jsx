import Home from "./Landing/Home";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const mouseRef = useRef(null);
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint in Tailwind (1024px)
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const createBubble = (x, y) => {
    const bubble = document.createElement("div");
    bubble.className =
      "absolute w-2 h-2 bg-red-600 rounded-full pointer-events-none z-50";
    bubble.style.left = `${x + 17}px`;
    bubble.style.top = `${y + 17}px`;

    containerRef.current.appendChild(bubble);

    const randomX = (Math.random() - 0.5) * 40;
    const randomY = (Math.random() - 0.5) * 40;

    gsap.to(bubble, {
      x: randomX,
      y: randomY,
      opacity: 0,
      scale: 0.5,
      duration: 0.8,
      ease: "power1.out",
      onComplete: () => {
        bubble.remove();
      },
    });
  };

  const cursorHandling = (e) => {
    if (isMobile) return; // skip on mobile

    const x = e.clientX;
    const y = e.clientY;

    gsap.to(mouseRef.current, {
      x,
      y,
      duration: 0.3,
      ease: "power.inOut",
    });

    for (let i = 0; i < 4; i++) {
      createBubble(x, y);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black"
      ref={containerRef}
      onMouseMove={cursorHandling}
    >
      
      {!isMobile && (
        <div
          ref={mouseRef}
          className="absolute border-4 border-red-600 w-10 h-10 z-50 rounded-full pointer-events-none center"
        />
      )}

      <Home />
    </div>
  );
};

export default App;
