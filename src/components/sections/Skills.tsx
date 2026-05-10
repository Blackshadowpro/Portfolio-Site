"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { SKILLS_DATA } from "@/data/constants";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls } from "@react-three/drei";
import * as THREE from "three";

function Word({ children, position }: { children: string, position: [number, number, number] }) {
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };
  const ref = useRef<THREE.Mesh>(null!);
  
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text ref={ref} position={position} {...fontProps} color="#ffffff">
      {children}
    </Text>
  );
}

function Cloud({ count = 8, radius = 20 }) {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          SKILLS_DATA[i % SKILLS_DATA.length]
        ]);
      }
    }
    // Limit to actual skills length to not overflow or just repeat
    return SKILLS_DATA.map((skill, index) => {
      const phi = Math.acos(-1 + (2 * index) / SKILLS_DATA.length);
      const theta = Math.sqrt(SKILLS_DATA.length * Math.PI) * phi;
      return [
        new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta)),
        skill
      ];
    });
  }, [count, radius]);

  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {words.map(([pos, word], index) => (
        <Word key={index} position={(pos as THREE.Vector3).toArray()}>
          {word as string}
        </Word>
      ))}
    </group>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/3"
        >
          <h2 className="text-sm font-mono text-neon-blue tracking-widest uppercase mb-4">
            {"// Capabilities"}
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-8">
            Skills & <br /> Technologies
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            A diverse toolkit centered around building intelligent systems, creating high-performance trading bots, and developing immersive user interfaces.
          </p>
          <div className="flex flex-wrap gap-3">
            {SKILLS_DATA.map((skill) => (
              <span key={skill} className="px-4 py-2 glass-card rounded-full text-sm font-mono text-[#00f0ff] border-white/5">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:w-2/3 h-[500px] w-full relative rounded-3xl overflow-hidden glass border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/5 to-[#8a2be2]/5 pointer-events-none z-10" />
          <Canvas camera={{ position: [0, 0, 35], fov: 90 }}>
            <ambientLight intensity={2} />
            <Cloud count={8} radius={20} />
            <TrackballControls noZoom noPan rotateSpeed={2} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
