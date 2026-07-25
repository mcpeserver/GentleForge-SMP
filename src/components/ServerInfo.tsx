import { useState } from "react";
import { motion } from "motion/react";
import { Copy, Check, Server, Shield, Network, Zap, Award } from "lucide-react";
import { ServerData } from "../types";

interface ServerInfoProps {
  serverData: ServerData | null;
}

export default function ServerInfo({ serverData }: ServerInfoProps) {
  const [copiedIp, setCopiedIp] = useState(false);
  const [copiedPort, setCopiedPort] = useState(false);

  if (!serverData) return null;

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
    <section id="server" className="py-24 relative overflow-hidden bg-zinc-950">
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-xs font-semibold mb-3 uppercase tracking-wider"
          >
            <Server className="w-3.5 h-3.5" />
            Informasi Server
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-amber-100 tracking-wide gold-glow"
          >
            Forge SMP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed"
          >
            Dapatkan detail alamat koneksi dan status server terkini di bawah ini untuk memulai petualangan survival terbaikmu.
          </motion.p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IP Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all">
                  <Network className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                  IP ADDRESS
                </span>
              </div>
              <h3 className="text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider">Server IP</h3>
              <p className="text-xl md:text-2xl font-mono text-amber-100 font-bold mt-2 selection:bg-amber-500/30">
                {serverData.ip}
              </p>
            </div>
            
            <button
              onClick={handleCopyIp}
              className="mt-6 w-full py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-800 hover:border-amber-500/30 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all"
            >
              {copiedIp ? (
                <>
                  <Check className="w-4 h-4 text-green-500 animate-scale" />
                  <span className="text-green-500 font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Server IP</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Port Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-xl p-6 relative overflow-hidden group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all">
                  <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 rounded-md border border-amber-500/10">
                  PORT KONEKSI
                </span>
              </div>
              <h3 className="text-zinc-400 font-mono text-xs font-bold uppercase tracking-wider">Server Port</h3>
              <p className="text-xl md:text-2xl font-mono text-amber-100 font-bold mt-2 selection:bg-amber-500/30">
                {serverData.port}
              </p>
            </div>

            <button
              onClick={handleCopyPort}
              className="mt-6 w-full py-3 px-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 border border-zinc-800 hover:border-amber-500/30 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all"
            >
              {copiedPort ? (
                <>
                  <Check className="w-4 h-4 text-green-500 animate-scale" />
                  <span className="text-green-500 font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Salin Port</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Dynamic Specs (Version, Theme, Status) Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl p-6 relative overflow-hidden group flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                  <Shield className="w-6 h-6 text-amber-400" />
                </div>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {serverData.status === "ON" ? "Online" : "Maintenance"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                  <span className="text-zinc-400 text-xs uppercase font-bold font-mono">Versi</span>
                  <span className="text-amber-300 font-mono text-sm font-semibold">{serverData.version}</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-800/60 pb-3">
                  <span className="text-zinc-400 text-xs uppercase font-bold font-mono">Tema</span>
                  <span className="text-amber-300 font-serif text-sm font-semibold">{serverData.theme}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 text-xs uppercase font-bold font-mono">Kategori</span>
                  <span className="text-orange-400 font-mono text-sm font-semibold">MCPE / Bedrock</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Connect Help Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-amber-950/20 to-orange-950/20 border border-amber-500/10 p-5 rounded-xl flex flex-col sm:flex-row items-center gap-4 justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-amber-100 font-serif font-bold text-base">Butuh panduan lengkap untuk bergabung?</p>
              <p className="text-zinc-400 text-xs sm:text-sm mt-0.5 font-medium">Ikuti 5 langkah mudah bergambar di section selanjutnya.</p>
            </div>
          </div>
          <a
            href="#join"
            className="py-2.5 px-5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm rounded-lg transition-all shadow-md shrink-0 w-full sm:w-auto text-center"
          >
            Lihat Panduan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
