import { useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden font-sans">
      {/* Navigation */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-sm tracking-wide font-semibold z-10">
        ARYAN <span className="text-red-500">|</span> YADAV
      </div>
      <div className="absolute top-5 right-10 space-x-6 text-sm z-10">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/your-dark-image.jpg"
          alt="Zynorix Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-[15vw] font-black leading-none">
          ZYNORI<span className="text-red-600">X</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-gray-300"
        >
          We Build Futuristic, Scalable, and Intelligent Web Systems.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-6 inline-block bg-red-600 hover:bg-red-700 transition px-6 py-2 rounded-full text-white font-medium shadow-lg"
        >
          🚀 Explore My Work
        </motion.a>
      </div>

      {/* Bottom Left Badge */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-500">
        🚀 Built by Aryan Yadav | MERN Stack Developer
      </div>

      {/* Optional: Chatbot Button */}
      <div className="absolute bottom-4 right-4">
        <button className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 text-sm">
          💬 Chat with Zynorix
        </button>
      </div>
    </div>
  );
}
