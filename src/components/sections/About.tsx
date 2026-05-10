"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_DATA } from "@/data/constants";
import { Cpu, BookOpen, Zap, Code2 } from "lucide-react";

const statIcons = [Cpu, Zap, Code2, BookOpen];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const skills = [
    { name: "Python", level: 95 },
    { name: "C++", level: 85 },
    { name: "AI / Machine Learning", level: 90 },
    { name: "Automation", level: 92 },
    { name: "Trading Systems", level: 88 },
    { name: "React / Next.js", level: 80 },
  ];

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white">
            The Mind Behind <br />
            <span className="bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] bg-clip-text text-transparent">
              the Machine
            </span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Bio & Skills */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                I&apos;m an <span className="text-white font-medium">{ABOUT_DATA.role}</span>,
                currently pursuing a <span className="text-white font-medium">{ABOUT_DATA.education}</span>.
              </p>
              <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                Skilled in Python, C++, AI-assisted development, machine learning, automation, and data-driven systems.
              </p>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                {ABOUT_DATA.description}
              </p>
            </motion.div>

            {/* Skill Bars */}
            <div className="space-y-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 font-mono">{skill.name}</span>
                    <span className="text-neon-blue font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#00f0ff] to-[#8a2be2]"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_DATA.stats.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(0, 240, 255, 0.4)",
                    transition: { duration: 0.3 },
                  }}
                  className="glass-card rounded-2xl p-6 flex flex-col items-start gap-4 cursor-default group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00f0ff]/20 to-[#8a2be2]/20 flex items-center justify-center border border-white/5 group-hover:border-[#00f0ff]/30 transition-colors">
                    <Icon className="text-[#00f0ff]" size={22} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white font-outfit">{stat.value}</p>
                    <p className="text-sm text-gray-500 font-mono">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
