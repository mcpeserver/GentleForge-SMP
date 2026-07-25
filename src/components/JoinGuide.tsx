import { motion } from "motion/react";
import { Compass, Sparkles, Check, Copy } from "lucide-react";
import { useState } from "react";
import { JoinData, ServerData } from "../types";

interface JoinGuideProps {
  joinData: JoinData | null;
  serverData: ServerData | null;
}

export default function JoinGuide({ joinData, serverData }: JoinGuideProps) {
  const [copiedIp, setCopiedIp] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  if (!joinData || !serverData) return null;

  const handleCopyIp = () => {
    navigator.clipboard.writeText(serverData.ip);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  const handleCopyPort = () => {
    navigator.clipboard.writeText(serverData.port.toString());
    setCopiedPort(true);
    setTimeout(() => setCopiedPort(false), 2000);
  };

  return (
    <section id="join" className="py-24 relative overflow-hidden bg-zinc-900 border-t border-b border-amber-500/10">
      {/* Visual Ambiance Particles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-xs font-semibold mb-3 uppercase tracking-wider"
          >
            <Compass className="w-3.5 h-3.5" />
            Panduan Bermain
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-amber-100 tracking-wide gold-glow"
          >
            Cara Bergabung
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed"
          >
            Ikuti 5 langkah mudah berikut ini di perangkatmu untuk masuk ke dalam dunia survival kami.
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="relative border-l-2 border-amber-500/20 ml-4 md:ml-32 pl-8 space-y-12">
          {joinData.steps.map((stepItem, index) => {
            const isStep4 = stepItem.step === 4;

            return (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Number Badge */}
                <span className="absolute -left-14 top-0.5 flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-950 border border-amber-500/40 text-amber-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:border-amber-400 group-hover:text-amber-300 transition-all">
                  {stepItem.step}
                </span>

                {/* Content Box */}
                <div className="glass-card rounded-xl p-5 md:p-6 group-hover:bg-zinc-800/40 transition-all border border-zinc-800 group-hover:border-amber-500/20">
                  <h3 className="font-serif text-amber-300 font-bold text-lg flex items-center gap-2">
                    {stepItem.step === 5 ? (
                      <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                    ) : null}
                    Langkah {stepItem.step}
                  </h3>
                  
                  {isStep4 ? (
                    <div className="mt-2 text-zinc-300 font-sans space-y-3">
                      <p className="font-medium">Masukkan informasi server berikut:</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                        {/* Server IP block */}
                        <div className="bg-black/40 border border-zinc-800 rounded-lg p-3 flex flex-col justify-between">
                          <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">SERVER IP</span>
                          <span className="text-amber-200 font-mono font-bold text-sm mt-1">{serverData.ip}</span>
                          <button
                            onClick={handleCopyIp}
                            className="mt-2 text-[11px] font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-colors self-start"
                          >
                            {copiedIp ? (
                              <>
                                <Check className="w-3 h-3 text-green-500" />
                                <span className="text-green-500">Tersalin!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Salin IP</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Server Port block */}
                        <div className="bg-black/40 border border-zinc-800 rounded-lg p-3 flex flex-col justify-between">
                          <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">PORT</span>
                          <span className="text-amber-200 font-mono font-bold text-sm mt-1">{serverData.port}</span>
                          <button
                            onClick={handleCopyPort}
                            className="mt-2 text-[11px] font-semibold text-amber-500 hover:text-amber-400 flex items-center gap-1 transition-colors self-start"
                          >
                            {copiedPort ? (
                              <>
                                <Check className="w-3 h-3 text-green-500" />
                                <span className="text-green-500">Tersalin!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Salin Port</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-zinc-300 mt-2 font-sans font-medium whitespace-pre-line leading-relaxed">
                      {stepItem.text}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
