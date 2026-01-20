"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 70 },
];

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between font-medium">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};