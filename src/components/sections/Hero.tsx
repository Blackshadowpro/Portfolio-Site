"use client";

import { motion } from "framer-motion";
import { HERO_DATA, SKILLS_DATA } from "@/data/constants";
import { ArrowRight, Download, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-neon-blue font-mono text-sm md:text-base mb-4 tracking-widest uppercase"
          >
            {"// Initiating Sequence"}
          </motion.h2>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-8xl font-bold font-outfit mb-6 tracking-tight text-white"
          >
            {HERO_DATA.name}
          </motion.h1>

          <motion.h3 
            variants={itemVariants}
            className="text-xl md:text-3xl text-gray-300 font-light mb-8 neon-text-purple"
          >
            {HERO_DATA.titles.join(" • ")}
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed"
          >
            {HERO_DATA.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            <a href="#projects" className="px-8 py-4 bg-transparent border neon-border-blue text-white rounded-full flex items-center gap-2 hover:bg-[#00f0ff] hover:text-black transition-all duration-300 font-medium">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-gray-600 text-white rounded-full flex items-center gap-2 hover:border-white transition-all duration-300 font-medium glass">
              Contact Me <Mail size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" className="px-8 py-4 bg-transparent text-gray-300 hover:text-white flex items-center gap-2 transition-colors font-medium">
              Resume <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {SKILLS_DATA.slice(0, 8).map((tech, i) => (
              <span 
                key={i} 
                className="glass-card px-4 py-2 rounded-full text-sm font-mono text-gray-300 border border-gray-700/50 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#8a2be2] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen filter blur-[128px] opacity-10 pointer-events-none" />
    </section>
  );
}
