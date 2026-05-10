"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PROJECTS_DATA } from "@/data/constants";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white">
            Featured Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: { project: typeof PROJECTS_DATA[0], index: number, isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (-10 to 10 degrees)
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        className="glass-card h-full rounded-3xl p-8 cursor-pointer relative overflow-hidden group border border-white/5 transition-colors hover:neon-border-blue"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 duration-500">
          <ArrowUpRight className="text-[#00f0ff]" size={32} />
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00f0ff]/10 to-[#8a2be2]/10 flex items-center justify-center mb-8 border border-white/5">
          <Icon className="text-white" size={28} />
        </div>

        <h4 className="text-2xl font-bold font-outfit text-white mb-4">{project.title}</h4>
        <p className="text-gray-400 mb-8 leading-relaxed">{project.description}</p>

        <div className="space-y-4 mb-8">
          {project.features.slice(0, 3).map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
              {feature}
            </div>
          ))}
          {project.features.length > 3 && (
            <div className="text-sm text-gray-500 italic">
              + {project.features.length - 3} more features...
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-mono px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
