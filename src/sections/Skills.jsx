import RotatingSkills from '../components/RotatingSkills';
import SkillsGridBackground from '../layers/SkillsLayer' // adjust path
import {motion} from 'framer-motion';

const SkillSection = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      <SkillsGridBackground />

      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-center mb-6 z-10 relative pt-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-red-500">Futuristic</span> Skill Galaxy
      </motion.h2>

    <RotatingSkills />

    </section>
  );
};

export default SkillSection