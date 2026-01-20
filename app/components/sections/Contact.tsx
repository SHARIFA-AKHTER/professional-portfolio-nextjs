"use client";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950 text-slate-900 dark:text-white relative overflow-hidden">
      {/* Soft Glow for Dark Mode */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 blur-[120px] rounded-full -mr-40 -mt-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-800 text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
                Get in touch
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mt-6 tracking-tight">
                Let&apos;s <span className="text-blue-600 italic">Connect</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg max-w-md leading-relaxed">
                Feel free to reach out for collaborations or just a friendly hello! I&apos;m always open to discussing new projects.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="group flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-500 transition-all cursor-pointer shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 text-blue-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Email</p>
                    <p className="font-medium">yourname@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={20} />
              </div>

              {/* Call Card */}
              <div className="group flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-500 transition-all cursor-pointer shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 text-blue-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Phone</p>
                    <p className="font-medium">+880 1700-000000</p>
                  </div>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={20} />
              </div>

              {/* Location Card */}
              <div className="group flex items-center justify-between p-5 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-blue-500 transition-all cursor-pointer shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white dark:bg-slate-800 text-blue-600 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">Location</p>
                    <p className="font-medium">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <ArrowUpRight className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl dark:shadow-none"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Write your message here..." 
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all dark:text-white resize-none"
                />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}