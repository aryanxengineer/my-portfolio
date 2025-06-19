import React from 'react';

const skills = [
  { name: "HTML", percent: "95%" },
  { name: "CSS", percent: "90%" },
  { name: "JavaScript", percent: "85%" },
  { name: "React", percent: "80%" },
  { name: "Node.js", percent: "75%" },
  { name: "MongoDB", percent: "70%" },
  { name: "Express", percent: "65%" },
  { name: "Git", percent: "85%" }
];

const RotatingSkills = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-80 h-80 animate-spin-slow">
        {/* Center Circle */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-24 h-24 bg-purple-600 text-white flex justify-center items-center rounded-full shadow-xl text-lg font-semibold">
            SKILLS
          </div>
        </div>

        {/* Skill Arms */}
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const radians = (angle * Math.PI) / 180;
          const radius = 120; // Distance from center
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="text-sm text-purple-700 font-medium text-center">
                {skill.name}<br />
                <span className="text-xs text-gray-500">{skill.percent}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RotatingSkills;
