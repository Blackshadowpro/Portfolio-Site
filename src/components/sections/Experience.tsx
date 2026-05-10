"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EXPERIENCE_DATA } from "@/data/constants";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="experience" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white">
            Experience
          </h3>
        </motion.div>

        <div className="relative border-l border-gray-800 ml-4 md:ml-0">
          {EXPERIENCE_DATA.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16 pl-8 md:pl-16 relative"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" />
              
              <div className="glass-card p-8 rounded-2xl hover:border-[#00f0ff]/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <h4 className="text-2xl font-bold font-outfit text-white">{exp.role}</h4>
                  <span className="font-mono text-sm text-[#00f0ff] px-4 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="grid md:grid-cols-2 gap-4">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
