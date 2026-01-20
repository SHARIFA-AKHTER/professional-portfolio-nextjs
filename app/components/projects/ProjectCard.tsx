/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardFooter } from '@/components/ui/card';
import { CardHeader } from '@/components/ui/card';
import { CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden border-none shadow-lg dark:bg-slate-900 h-full flex flex-col">
        <div className="relative h-52 w-full overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.name} 
            fill 
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader className="grow">
          <CardTitle className="text-2xl font-bold">{project.name}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((s: string) => (
              <Badge key={s} variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                {s}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardFooter>
          <Link href={`/projects/${project.id}`} className="w-full">
            <Button className="w-full group bg-slate-900 hover:bg-blue-600 dark:bg-blue-700">
              View More / Details 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}