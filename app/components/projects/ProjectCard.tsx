/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink, Server, Layout } from "lucide-react";
import Image from "next/image";
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden border border-slate-100 dark:border-slate-800 shadow-lg dark:bg-slate-900 h-full flex flex-col rounded-3xl">
        {/* Image Section */}
        <div className="relative h-52 w-full overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.name} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Info Section */}
        <CardHeader className="grow p-6">
          <CardTitle className="text-xl font-bold line-clamp-2">{project.name}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((s: string) => (
              <Badge key={s} variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-none">
                {s}
              </Badge>
            ))}
          </div>
        </CardHeader>

        {/* Full Stack Links Section */}
        <div className="px-6 pb-2 grid grid-cols-2 gap-2">
          <a 
            href={project.githubFrontend} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider font-bold bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Layout size={14} /> Frontend
          </a>
          <a 
            href={project.githubBackend} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-wider font-bold bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <Server size={14} /> Backend
          </a>
        </div>

        {/* Action Buttons */}
        <CardFooter className="p-6 flex flex-col gap-3">
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button className="w-full group bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-11">
              Live Demo 
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
          
          <Button variant="ghost" className="w-full group text-slate-500 hover:text-blue-600 text-sm" asChild>
            <a href={`/projects/${project.id}`}>
              View Details <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}