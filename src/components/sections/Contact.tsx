"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: name,
          email: email,
          message: message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-[3rem] p-8 md:p-16 border border-white/10 overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00f0ff]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8a2be2]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            {/* Left - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-mono text-neon-purple tracking-widest uppercase mb-4">
                {"// Connect"}
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold font-outfit text-white mb-6">
                Initialize <br /> Communication
              </h3>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Looking to build intelligent systems or automated trading solutions? Drop a message and let&apos;s engineer the future.
              </p>

              <div className="space-y-6 mb-12">
                <a href="mailto:irti3161@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#00f0ff]/30 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="font-mono">irti3161@gmail.com</span>
                </a>
                <a href="tel:03069493434" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-[#00f0ff]/30 transition-colors">
                    <Phone size={20} />
                  </div>
                  <span className="font-mono">03069493434</span>
                </a>
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                    <MapPin size={20} />
                  </div>
                  <span className="font-mono">Lahore, Punjab, Pakistan</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://linkedin.com/in/irtza-ahmad-09aa013a1" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#8a2be2] hover:text-white transition-all duration-300">
                  <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/Blackshadowpro" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300">
                  <FaGithub size={20} />
                </a>
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-black/40 p-8 rounded-3xl border border-white/5 backdrop-blur-md"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00f0ff]/50 transition-colors resize-none"
                    placeholder="Write your message..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status === "submitting" || status === "success"}
                  className="w-full py-4 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    "Transmitting..."
                  ) : status === "success" ? (
                    <>Transmission Successful <CheckCircle2 size={18} /></>
                  ) : (
                    <>Send Transmission <Send size={18} /></>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-sm font-mono text-center mt-2">
                    System error. Please check your Access Key.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
