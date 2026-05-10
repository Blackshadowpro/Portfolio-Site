"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EDUCATION_DATA } from "@/data/constants";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="education" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-mono text-neon-purple tracking-widest uppercase mb-4">
            {"// Background"}
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white">
            Education
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {EDUCATION_DATA.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-2xl p-8 text-center group hover:neon-border-purple transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[250px]"
            >
              <div className="w-16 h-16 rounded-full bg-[#8a2be2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="text-[#8a2be2]" size={32} />
              </div>
              <h4 className="text-xl font-bold font-outfit text-white mb-3">{edu.degree}</h4>
              <p className="text-gray-400 font-medium">{edu.institution}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
