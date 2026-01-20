"use client";
import { motion } from "framer-motion";

// Full Stack Developer হিসেবে দক্ষতাকে ক্যাটাগরিতে ভাগ করা হয়েছে
const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js / React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 80 },
      { name: "MongoDB / Prisma", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "REST API / GraphQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "Vercel / AWS", level: 85 },
      { name: "Firebase", level: 80 },
    ],
  },
];

export const Skills = () => {
  return (
    <div className="mt-12 space-y-16">
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex}>
          {/* Category Title */}
          <h3 className="text-xl font-bold mb-6 text-blue-600 dark:text-blue-400 italic">
            {category.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
            {category.skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between font-medium text-sm uppercase tracking-wider">
                  <span>{skill.name}</span>
                  <span className="text-blue-500">{skill.level}%</span>
                </div>
                
                {/* Progress Bar Background */}
                <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};