import { motion } from "motion/react";
import { ShieldAlert, CheckCircle, Info, Flame, Scale } from "lucide-react";
import { RulesGroupData, RulesServerData } from "../types";

interface RulesProps {
  rulesGroup: RulesGroupData | null;
  rulesServer: RulesServerData | null;
}

export default function Rules({ rulesGroup, rulesServer }: RulesProps) {
  if (!rulesGroup || !rulesServer) return null;

  return (
    <section id="rules" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-xs font-semibold mb-3 uppercase tracking-wider"
          >
            <Scale className="w-3.5 h-3.5" />
            Regulasi Komunitas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-amber-100 tracking-wide gold-glow"
          >
            Peraturan Server & Grup
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed"
          >
            Harap baca dan patuhi seluruh peraturan di bawah ini demi menjaga kenyamanan bermain bersama di GentleForge.
          </motion.p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Rules Group Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-zinc-800 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-5 mb-6">
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-amber-300">
                  {rulesGroup.title}
                </h3>
                <p className="text-zinc-500 text-xs mt-0.5">Panduan kesopanan & etika di grup komunikasi</p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {rulesGroup.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                  <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold flex items-center justify-center mt-0.5 shrink-0 group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-all">
                    {idx + 1}
                  </span>
                  <span className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Rules Server Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-zinc-800 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 pb-5 mb-6">
              <div className="p-2.5 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-red-400">
                  {rulesServer.title}
                </h3>
                <p className="text-zinc-500 text-xs mt-0.5">Hukum pidana server in-game (Sanksi Keras)</p>
              </div>
            </div>

            <ul className="space-y-3.5 mb-6">
              {rulesServer.rules.map((rule, idx) => {
                // Style warnings specifically
                const hasBan = rule.toLowerCase().includes("ban") || rule.toLowerCase().includes("permanen");
                return (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className={`w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center mt-0.5 shrink-0 transition-all ${
                      hasBan 
                        ? "bg-red-500/10 border border-red-500/30 text-red-400 group-hover:bg-red-500/20 group-hover:border-red-400"
                        : "bg-orange-500/10 border border-orange-500/30 text-orange-400 group-hover:bg-orange-500/20 group-hover:border-orange-400"
                    }`}>
                      {idx + 1}
                    </span>
                    <span className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                      {rule}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Note Block */}
            <div className="mt-6 bg-gradient-to-r from-amber-500/5 to-amber-600/10 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-bounce" />
              <div>
                <p className="text-amber-300 font-bold text-xs uppercase tracking-wider font-mono">Pemberitahuan Penting</p>
                <p className="text-gray-300 text-sm mt-1 font-medium">{rulesServer.note}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
