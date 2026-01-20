"use client";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Connect</h2>
        <p className="text-slate-500 mb-12">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-2xl border hover:border-blue-500 transition-colors">
            <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full mb-4">
              <Mail size={28} />
            </div>
            <h4 className="font-bold mb-2">Email</h4>
            <p className="text-slate-500">yourname@gmail.com</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-2xl border hover:border-blue-500 transition-colors">
            <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full mb-4">
              <Phone size={28} />
            </div>
            <h4 className="font-bold mb-2">Phone</h4>
            <p className="text-slate-500">+880 1234-567890</p>
          </div>

          <div className="flex flex-col items-center p-8 bg-white dark:bg-slate-900 rounded-2xl border hover:border-blue-500 transition-colors">
            <div className="p-4 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-full mb-4">
              <MessageSquare size={28} />
            </div>
            <h4 className="font-bold mb-2">WhatsApp</h4>
            <p className="text-slate-500">+880 1234-567890</p>
          </div>
        </div>
      </div>
    </section>
  );
}