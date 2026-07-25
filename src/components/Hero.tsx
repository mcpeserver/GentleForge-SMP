import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Flame, Play } from "lucide-react";
import logoImg from "../assets/images/gentleforge_logo_1784527991941.jpg";
import heroBg from "../assets/images/hero_background_1784527978935.jpg";

interface Particle {
  id: number;
  left: string;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate some pixel fire particles
    const generated: Particle[] = Array.from({ length: 18 }).map((_, i) => {
      const colors = ["#f59e0b", "#f97316", "#ef4444", "#fbbf24"];
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        size: Math.floor(Math.random() * 6) + 4, // 4px to 10px
        delay: Math.random() * 4,
        duration: Math.random() * 5 + 4, // 4s to 9s
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });
    setParticles(generated);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-between pt-20 pb-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(18, 18, 18, 0.4) 0%, rgba(18, 18, 18, 0.95) 100%), url(${heroBg})`
      }}
    >
      {/* Animated Floating Pixel Fire Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bottom-0"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
              borderRadius: "1px" // Sharp block/pixel design
            }}
            animate={{
              y: ["0vh", "-100vh"],
              x: ["0px", `${(Math.random() - 0.5) * 60}px`],
              opacity: [0, 0.8, 0.8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Medieval Golden Vignette overlay for cozy castle ambiance */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.05)_0%,rgba(0,0,0,0.6)_100%)] z-10" />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto px-4 text-center relative z-20 flex flex-col items-center my-auto py-8">
        {/* Animated Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
          className="relative mb-6"
        >
          {/* Outer Gold Pulse Ring */}
          <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-2xl animate-pulse" />
          
          <img
            src={logoImg}
            alt="GentleForge Logo"
            className="w-36 h-36 md:w-44 md:h-44 rounded-2xl border-4 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.4)] relative z-10 medieval-border transition-transform duration-500 hover:scale-105 object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl font-extrabold tracking-wider text-amber-400 gold-glow-strong"
        >
          GentleForge
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-3 text-base md:text-2xl font-mono tracking-wide text-orange-400 font-semibold uppercase flex items-center gap-2 justify-center"
        >
          <Flame className="w-5 h-5 text-amber-500 animate-bounce" />
          Minecraft Bedrock Survival Economy
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-5 text-sm md:text-lg text-gray-300 max-w-2xl leading-relaxed font-sans font-medium"
        >
          Server Minecraft Bedrock bertema Survival Economy dengan dukungan versi terbaru dan pengalaman bermain yang nyaman.
        </motion.p>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="#join"
            className="px-8 py-3.5 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 text-black font-bold text-base md:text-lg rounded-md transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-orange-500/30 hover:-translate-y-1 hover:brightness-110 flex items-center justify-center gap-2 group border border-amber-400/30"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Join Server</span>
          </a>
          <a
            href="#server"
            className="px-8 py-3.5 bg-zinc-900/80 hover:bg-zinc-800 text-amber-400 font-bold text-base md:text-lg rounded-md border border-amber-500/30 hover:border-amber-500 transition-all duration-300 backdrop-blur-sm shadow-md hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <span>Informasi Server</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 mt-4 pt-2"
      >
        <a href="#server" className="flex flex-col items-center text-zinc-500 hover:text-amber-400 transition-colors">
          <span className="text-[10px] font-mono uppercase tracking-widest mb-1">Scroll Down</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
