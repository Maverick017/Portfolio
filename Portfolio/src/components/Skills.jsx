import React from "react";
import ScrollReveal from "./ScrollReveal";

const SkillBar = ({ name, proficiency, delay }) => (
  <ScrollReveal threshold={0.1} className={`delay-${delay}`}>
    <div className="flex items-center">
      <label className="w-2/12 text-sm md:text-base text-gray-300">
        {name}
      </label>
      <div className="grow bg-gray-800 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
          transform transition-transform duration-300 hover:scale-105"
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  </ScrollReveal>
);

const skills = [
  { name: "HTML", proficiency: 95 },
  { name: "CSS", proficiency: 85 },
  { name: "Tailwind CSS", proficiency: 80 },
  { name: "Bootstrap", proficiency: 75 },
  { name: "JavaScript", proficiency: 80 },
  { name: "React", proficiency: 75 },
  { name: "Node.js", proficiency: 70 },
  { name: "C/C++", proficiency: 90 },
];

export const Skills = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 text-white py-20 md:py-28 relative" id="skills">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-[20%] -left-[5%] w-[450px] h-[450px] rounded-full bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Technical Skills
            </span>
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                proficiency={skill.proficiency}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};