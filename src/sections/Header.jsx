import homeBg from "../assets/backgrounds/pf-homebg.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import RedWord from "../components/RedWord";
import BigButton from "../components/BigButton";

const Header = () => {
  const nameRef = useRef(null);
  const backgroundRef = useRef(null);
  const bubbleLayerRef = useRef(null);

  const LandingTime = gsap.timeline();

  useGSAP(() => {
    gsap.from(nameRef.current, {
      scale: 1.1,
      duration: 1.1,
      delay: 2.4,
    });

    gsap.from(backgroundRef.current, {
      scale: 1.04,
      duration: 1,
      delay: 2.4,
    });
  });

  useEffect(() => {
    const bubbleCount = 7;

    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement("div");
      bubble.className =
        "absolute w-4 h-4 bg-red-600 rounded-full blur-sm pointer-events-none transition-all duration-500 ease-in-out";

      const left = Math.random() * 100;
      const top = Math.random() * 100;

      bubble.style.left = `${left}%`;
      bubble.style.top = `${top}%`;

      bubbleLayerRef.current.appendChild(bubble);
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height } = document.body.getBoundingClientRect();
      const x = (clientX / width - 0.5) * 40;
      const y = (clientY / height - 0.5) * 40;

      gsap.to(bubbleLayerRef.current, {
        x,
        y,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={backgroundRef}
      style={{ backgroundImage: `url(${homeBg})` }}
      className="relative w-full min-h-screen bg-center bg-cover overflow-hidden"
    >
      <Navbar />
      <div
        ref={bubbleLayerRef}
        className="absolute inset-0 z-10 pointer-events-none"
      ></div>

      <h1
        ref={nameRef}
        className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl leading-none font-black lg:text-[15vw]"
      >
        ZYNORI
        <RedWord text="X" />
      </h1>

      <span className="absolute top-[43%] left-[8.2%] text-2xl font-bold center gap-5 z-40 lg:top-[32%] lg:left-[16%]">
        <span>Founder of</span> <RedWord text={<FaArrowTrendUp />} />
      </span>

      <div className="w-full absolute top-[60%] flex flex-col items-center gap-5 lg:flex-row lg:top-[70%] justify-center">
        <button className="w-54 py-3 text-sm font-semibold rounded border-2 border-red-600 cursor-pointer">
          Zynorix <RedWord text="soon" />
        </button>

        <BigButton design="bg-red-600 border-red-600" text="Explore Me" />
      </div>
    </section>
  );
};

export default Header;
