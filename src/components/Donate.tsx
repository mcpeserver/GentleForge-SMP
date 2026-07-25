import { motion } from "motion/react";
import { Heart, ShieldCheck, Zap, Server, ExternalLink } from "lucide-react";
import { LinksData } from "../types";

interface DonateProps {
  linksData: LinksData | null;
}

export default function Donate({ linksData }: DonateProps) {
  if (!linksData) return null;

  return (
    <section id="donate" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Visual background decorations */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/10 left-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 md:p-12 border border-amber-500/20 bg-gradient-to-br from-zinc-900/90 via-zinc-950/95 to-zinc-900/90 shadow-[0_0_50px_rgba(245,158,11,0.05)] overflow-hidden medieval-border"
        >
          {/* Grid Layout inside the callout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-current animate-pulse" />
                Donasi Server
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-100 tracking-wide gold-glow leading-tight">
                Dukung Pengembangan Server
              </h2>
              <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                Dana hasil donasi digunakan sepenuhnya untuk membiayai kebutuhan infrastruktur server, lisensi panel, sewa VPS berspesifikasi tinggi, mitigasi DDoS, serta update fitur in-game agar server tetap berjalan dengan lancar 24/7 tanpa kendala.
              </p>

              {/* Value list items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800 p-3 rounded-xl">
                  <Server className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-zinc-300 text-xs font-semibold">100% Alokasi Server Node</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800 p-3 rounded-xl">
                  <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-zinc-300 text-xs font-semibold">DDoS Protection Active</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800 p-3 rounded-xl">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-zinc-300 text-xs font-semibold">Hardware High-Performance</span>
                </div>
                <div className="flex items-center gap-3 bg-black/40 border border-zinc-800 p-3 rounded-xl">
                  <Heart className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-zinc-300 text-xs font-semibold">Reward In-game Menarik</span>
                </div>
              </div>
            </div>

            {/* Right Action Column */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl text-center space-y-6 box-glow">
              <div className="p-4 bg-amber-500/10 rounded-full border border-amber-500/20 relative animate-pulse">
                <Heart className="w-10 h-10 text-amber-500 fill-current" />
              </div>
              <div>
                <p className="text-amber-100 font-serif font-bold text-xl">Dukung Kami Sekarang</p>
                <p className="text-zinc-500 text-xs mt-1 font-medium leading-relaxed px-4">Setiap kontribusimu sangat berarti bagi kelangsungan dunia Forge SMP.</p>
              </div>

              <div className="w-full space-y-3">
                <a
                  href={linksData.saweria}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-amber-500 text-white font-bold rounded-lg transition-all shadow-md hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center gap-2 group"
                >
                  <span>Dukung via Saweria</span>
                  <ExternalLink className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                </a>
                
                {linksData.dana && (
                  <p className="text-[11px] font-mono text-zinc-400">
                    Atau transfer Dana ke nomor: <span className="text-amber-400 font-bold">{linksData.dana}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
