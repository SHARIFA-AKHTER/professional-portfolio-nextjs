import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Facebook, Heart } from "lucide-react";

const socialLinks = [
  { icon: <Github size={20} />, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: <Twitter size={20} />, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: <Facebook size={20} />, href: "https://facebook.com/yourusername", label: "Facebook" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          {/* Brand/Logo Section */}
          <div>
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Portfolio.
            </Link>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
              Building modern, high-performance web applications with a focus on user experience and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
              <Link href="#about" className="hover:text-blue-600 transition-colors">About Me</Link>
              <Link href="#skills" className="hover:text-blue-600 transition-colors">Skills</Link>
              <Link href="#projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-8 border-slate-200 dark:border-slate-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>© {currentYear} [Your Name]. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}