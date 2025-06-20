import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import BubbleBackground from "../components/BubbleBackground";
import RedWord from "../components/RedWord";
import BigButton from "../components/BigButton";

const About = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(sectionRef, {
    once: true,
    margin: "-100px", // ✅ reduced for mobile visibility
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen px-6 py-24 bg-black text-white flex flex-col justify-center items-center overflow-hidden border-t-2 border-black"
    >
      <BubbleBackground />

      {/* red blur background */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-red-600 blur-3xl opacity-30 animate-pulse top-10 left-[-100px]" />

      {/* heading with animation */}
      <motion.h2
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-white z-10 text-center"
      >
        <RedWord text="About" /> Me
      </motion.h2>

      {/* paragraph with animation */}
      <motion.p
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className="max-w-3xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 z-10"
      >
        I'm <RedWord text="Aryan Yadav" /> — a futuristic full-stack developer
        on a mission to build fast, scalable, and intelligent systems. From
        clean UI animations to enterprise-level backend logic, I love turning
        ideas into real, high-performance web experiences.
        <br />
        <br />I build with vision — scalable, smart, and always a step ahead of
        the <RedWord text="Learning curve" />, I don’t just code — I architect
        the future.
      </motion.p>

      <div className="flex gap-5 mt-10">
        <button className="w-54 py-3 text-sm font-semibold rounded border-2 border-red-600 cursor-pointer">
          Download <RedWord text="cv" />
        </button>
      </div>
    </section>
  );
};

export default About;
