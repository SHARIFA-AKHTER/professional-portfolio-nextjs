"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Facebook, Twitter } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 pt-24 text-center">
      {/* Profile Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-44 h-44 mb-8 rounded-full p-1 bg-linear-to-tr from-blue-600 to-cyan-400"
      >
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-950 relative">
          <Image 
            src="/images/profile.jpg" 
            alt="My Profile" 
            fill 
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Designation & Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Available for Work</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 italic">
          I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Sharifa</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium mb-8">
          Frontend Developer | Next.js Specialist
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-5"
      >
        <Button size="lg" className="rounded-full h-12 px-8 text-md font-semibold hover:scale-105 transition-transform">
          <a href="/docs/Sharifa_Resume_FullStack.pdf.pdf" download className="flex items-center gap-2">
            <Download size={20} /> Download Resume
          </a>
        </Button>
        
        {/* Social Links */}
        <div className="flex gap-3 items-center">
          {[
            { icon: <Github />, href: "https://github.com/SHARIFA-AKHTER" },
            { icon: <Linkedin />, href: "https://www.linkedin.com/in/sharifa-akhter-784bb6252" },
            { icon: <Twitter />, href: "https://x.com/AkhterShar40032" },
            { icon: <Facebook />, href: "https://www.linkedin.com/in/sharifa-akhter-784bb6252" }
          ].map((social, idx) => (
            <a key={idx} href={social.href} className="p-3 bg-white dark:bg-slate-900 border rounded-full shadow-sm hover:text-blue-600 hover:border-blue-600 transition-all">
              {social.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}