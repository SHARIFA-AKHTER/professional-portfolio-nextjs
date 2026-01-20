"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Server, Layout, CheckCircle2 } from "lucide-react";

const projectsData = [
  {
    id: "1",
    name: "E-Commerce Platform Role Based",
    description: "A comprehensive mom and baby wear e-commerce solution with advanced role-based access, inventory tracking, and a seamless shopping experience.",
    image: "/images/p3.png",
    stack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "TypeScript", "Node.js"],
    features: ["Role-based Dashboard (Admin/User)", "Secure Checkout System", "Real-time Product Filtering", "Responsive UI with ShadcnUI"],
    githubFrontend: "https://github.com/SHARIFA-AKHTER/mom-baby-wear-frontend",
    githubBackend: "https://github.com/SHARIFA-AKHTER/mom-baby-wear-backend",
    live: "https://mom-baby-wear-frontend.vercel.app",
  },
  {
    id: "2",
    name: "Volunteers Management System",
    description: "A platform dedicated to connecting volunteers with social causes, featuring post management, search functionality, and volunteer registration.",
    image: "/images/p4.png",
    stack: ["MongoDB", "Firebase", "React", "Node.js", "Tailwind"],
    features: ["Firebase Authentication", "Volunteer Post Creation & Deletion", "Search and Sorting by Deadlines", "User Activity Logging"],
    githubFrontend: "https://github.com/SHARIFA-AKHTER/ass-ten-volunteer-management-client",
    githubBackend: "https://github.com/SHARIFA-AKHTER/ass-ten-volunteer-management-server.git",
    live: "https://volunteer-management-30e05.firebaseapp.com",
  },
  {
    id: "3",
    name: "Hr Management ManageMate",
    description: "An enterprise-level HR management system to handle employee records, payroll, performance tracking, and role-specific permissions.",
    image: "/images/p2.png",
    stack: ["Next.js", "MongoDB", "Firebase", "Redux", "ExpressJS", "ShadcnUI"],
    features: ["Employee Payroll Management", "HR and Admin Specialized Views", "Performance Review System", "Dynamic State Management with Redux"],
    githubFrontend: "https://github.com/SHARIFA-AKHTER/assignment-twelve-client-side",
    githubBackend: "https://github.com/SHARIFA-AKHTER/assignment-twelve-server-side",
    live: "https://assignment-twelve-5e80a.firebaseapp.com",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Project not found!</h2>
        <Button onClick={() => router.push("/")}>Return Home</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-28 min-h-screen">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => router.back()} 
        className="mb-10 group hover:bg-blue-50 dark:hover:bg-blue-900/20"
      >
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
        Back to Portfolio
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Image Card */}
        <div className="sticky top-28">
          <div className="relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <Image 
              src={project.image} 
              alt={project.name} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {project.stack.map((tech) => (
              <span key={tech} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <header>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              {project.name}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.description}
            </p>
          </header>

          <section className="bg-blue-50/50 dark:bg-blue-900/10 p-8 rounded-[2rem] border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-blue-600" /> Key Features
            </h3>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Action Links */}
          <div className="flex flex-col gap-4 pt-4">
            <a href={project.live} target="_blank" rel="noreferrer" className="w-full">
              <Button className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-lg font-bold rounded-2xl gap-2 shadow-lg shadow-blue-500/20">
                <ExternalLink size={20} /> View Live Project
              </Button>
            </a>
            <div className="grid grid-cols-2 gap-4">
              <a href={project.githubFrontend} target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full h-12 gap-2 rounded-xl border-slate-300 dark:border-slate-700">
                  <Layout size={18} /> Frontend Code
                </Button>
              </a>
              <a href={project.githubBackend} target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full h-12 gap-2 rounded-xl border-slate-300 dark:border-slate-700">
                  <Server size={18} /> Backend Code
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}