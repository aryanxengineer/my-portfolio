import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillCircle = ({ Icon, percent = 75, color = "#ffffff", label = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative w-20 h-20 sm:w-24 sm:h-24 group"
    >
      {/* Circle Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#111] to-[#1a1a1a] shadow-md shadow-red-900/20 flex items-center justify-center border border-red-800/30 group-hover:shadow-red-700/40 transition-all duration-300">
        <Icon className="text-2xl sm:text-3xl drop-shadow-md" style={{ color }} />
      </div>

      {/* Progress ring */}
      <motion.svg
        className="absolute inset-0"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#2a2a2a"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          stroke="red"
          strokeWidth="5"
          fill="none"
          strokeDasharray="282.6"
          strokeDashoffset="282.6"
          animate={{
            strokeDashoffset: isInView ? 282.6 * (1 - percent / 100) : 282.6,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Label */}
      <div className="absolute -bottom-5 w-full text-center text-[10px] sm:text-xs font-medium text-white opacity-80 group-hover:opacity-100 transition">
        {label}
      </div>
    </motion.div>
  );
};

export default SkillCircle;
