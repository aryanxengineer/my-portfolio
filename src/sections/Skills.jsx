import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiPostman } from "react-icons/si";
import SkillsLayer from "../layers/SkillsLayer";
import RedWord from "../components/RedWord";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-300" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
];

const Skills = () => {
  return (
    <section className="relative w-full h-screen px-8 py-10 bg-black text-white">
      <SkillsLayer />
      <div className="w-full">
        <h2 className="text-4xl md:text-6xl font-bold tracking-wide mb-6 text-white z-10 text-center">
          Tech <RedWord text="Stack" />
        </h2>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-2 bg-gray-800 rounded-xl p-4 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <div className="text-4xl">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
