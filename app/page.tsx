/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Hero from "./components/hero/Hero";

import { ProjectCard } from "./components/projects/ProjectCard";
import { Contact } from "./components/sections/Contact";
import { Skills } from "./components/sections/Skills";


// Sample Projects Data (Requirement 9)
const projects = [
  {
    id: "1",
    name: "E-Commerce Platform",
    image: "/images/p1.jpg",
    stack: ["Next.js", "Tailwind", "Prisma"],
  },
  {
    id: "2",
    name: "Chat Application",
    image: "/images/p2.jpg",
    stack: ["Socket.io", "React", "Node.js"],
  },
  {
    id: "3",
    name: "AI SaaS Dashboard",
    image: "/images/p3.jpg",
    stack: ["OpenAI", "Next.js", "ShadcnUI"],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* 1. Hero Section (Includes Designation, Photo, Resume Button, Socials) */}
      <Hero />

      {/* 2. About Me Section (Requirement 5) */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 border-l-4 border-blue-600 pl-4">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              My journey started with a simple "Hello World" back in 2021. Since then, 
              I fell in love with the art of creating things that live on the internet. 
              I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me playing football, drawing digital art, 
              or exploring new coffee shops. I believe a healthy balance between logic 
              and creativity makes a better developer.
            </p>
          </motion.div>
          
          {/* Education Section (Requirement 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border"
          >
            <h3 className="text-xl font-bold mb-4 italic">Educational Qualification</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">B.Sc in Computer Science</p>
                <p className="text-sm text-slate-500">University of Excellence | 2020 - 2024</p>
              </div>
              <hr />
              <div>
                <p className="font-semibold">Full Stack Web Development</p>
                <p className="text-sm text-slate-500">Programming Hero | 2023 (Certified)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Skills Section (Requirement 6 - Graphical Format) */}
      <section id="skills" className="bg-slate-100 dark:bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">My Technical Skills</h2>
          <Skills />
        </div>
      </section>

      {/* 4. Experience Section (Requirement 8) */}
      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="relative border-l border-slate-300 ml-4 space-y-8">
          <div className="pl-8 relative">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1" />
            <h4 className="font-bold">Frontend Developer Intern</h4>
            <p className="text-sm text-slate-500">Tech Solutions Ltd | Jan 2023 - June 2023</p>
            <p className="mt-2">Worked on building responsive UI components using React and Tailwind.</p>
          </div>
        </div>
      </section>

      {/* 5. Projects Section (Requirement 9) */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 6. Contact Section (Requirement 10) */}
      <Contact />
    </div>
  );
}