import { motion } from "motion/react";
import { ArrowUpRight, Flame } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.08)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-amber-500/20 bg-gradient-to-br from-zinc-900/40 via-zinc-950/60 to-zinc-900/40 relative overflow-hidden medieval-border"
        >
          {/* Flame Icon */}
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 mb-6">
            <Flame className="w-8 h-8 fill-current animate-bounce" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-amber-100 tracking-wide gold-glow leading-tight">
            Mulai Petualanganmu
          </h2>
          
          <p className="mt-4 text-zinc-400 text-sm md:text-base max-w-lg mx-auto font-medium leading-relaxed">
            Dunia survival kami sedang menantimu. Bergabunglah bersama puluhan pemain aktif lainnya, kembangkan lahanmu, bangun bisnismu, dan jadilah raja ekonomi terkaya di GentleForge!
          </p>

          {/* Call-to-action Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="#join"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-500 text-black font-bold text-lg rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-orange-500/30 hover:-translate-y-1 hover:brightness-110 flex items-center gap-2 group border border-amber-400/30"
            >
              <span>Join Server Sekarang</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Tiny Status Subtitle */}
          <p className="mt-4 text-[10px] font-mono text-amber-500/70 tracking-widest uppercase font-bold">
            Versi Terbaru - Auto Support - Bedrock Edition
          </p>
        </motion.div>
      </div>
    </section>
  );
}
