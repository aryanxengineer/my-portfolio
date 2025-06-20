import { useState } from "react";
import skills from "../data/skillsData";
import SkillCircle from "../components/SkillCircle";
import { AnimatePresence, motion } from "framer-motion";
import BubbleBackground from '../components/BubbleBackground'

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? skills : skills.slice(0, 12); 

 const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.05,
        ease: "easeInOut",
      },
    }),
    exit: { opacity: 0, y: 30, transition: { duration: 0.3 } },
  };

  return (
    <div className="relative min-h-screen bg-black py-16 px-4 text-center">
      <BubbleBackground />
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">
        My Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
        <AnimatePresence>
          {visibleSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={itemVariants}
            >
              <SkillCircle {...skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.button
        onClick={() => setShowAll(!showAll)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-10 px-6 py-2 rounded-md border-2 border-red-600 text-white font-semibold text-sm sm:text-xs transition"
      >
        {showAll ? "Show Less" : "Show More"}
      </motion.button>
    </div>
  );
};

export default Skills;
