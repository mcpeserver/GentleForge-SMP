import { useState } from "react";
import { motion } from "motion/react";
import { Globe, Heart, DollarSign, Youtube, ThumbsUp, MessageSquare, Copy, Check, Link, ExternalLink } from "lucide-react";
import { LinksData, DeveloperData } from "../types";

interface LinksProps {
  linksData: LinksData | null;
  devData: DeveloperData | null;
}

export default function Links({ linksData, devData }: LinksProps) {
  const [copiedDana, setCopiedDana] = useState(false);
  const [copiedRank, setCopiedRank] = useState(false);

  if (!linksData) return null;

  const handleCopyDana = () => {
    navigator.clipboard.writeText(linksData.dana);
    setCopiedDana(true);
    setTimeout(() => setCopiedDana(false), 2000);
  };

  const handleCopyRank = () => {
    navigator.clipboard.writeText(linksData.rankBuy);
    setCopiedRank(true);
    setTimeout(() => setCopiedRank(false), 2000);
  };

  // Group link falls back to dynamic community whatsapp or discord
  const groupUrl = linksData.group || (devData ? devData.community.website : "https://whatsapp.com");
  const discordUrl = devData ? devData.community.discord : "https://discord.gg";

  const cards = [
    {
      id: "website",
      title: "Website Resmi",
      description: "Halaman utama dan server portal GentleForge.",
      icon: Globe,
      value: linksData.website,
      actionText: "Kunjungi Situs",
      isUrl: true,
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5 hover:border-amber-500/50"
    },
    {
      id: "saweria",
      title: "Saweria Donasi",
      description: "Dukung server melalui platform Saweria secara instan.",
      icon: Heart,
      value: linksData.saweria,
      actionText: "Buka Saweria",
      isUrl: true,
      color: "border-red-500/20 text-red-400 bg-red-500/5 hover:border-red-500/50"
    },
    {
      id: "dana",
      title: "Dana Merchant",
      description: "Transfer langsung ke nomor merchant e-wallet Dana.",
      icon: DollarSign,
      value: linksData.dana,
      actionText: "Salin Nomor Dana",
      isUrl: false,
      onAction: handleCopyDana,
      copied: copiedDana,
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5 hover:border-blue-500/50"
    },
    {
      id: "rank",
      title: "Beli Rank / VIP",
      description: "Hubungi admin untuk pembelian VIP Rank via WhatsApp.",
      icon: DollarSign,
      value: linksData.rankBuy,
      actionText: "Salin Kontak WhatsApp",
      isUrl: false,
      onAction: handleCopyRank,
      copied: copiedRank,
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:border-emerald-500/50"
    },
    {
      id: "youtube",
      title: "YouTube Channel",
      description: "Tonton video gameplay, update, dan trailer server kami.",
      icon: Youtube,
      value: linksData.youtube || "https://youtube.com",
      actionText: "Tonton Sekarang",
      isUrl: true,
      color: "border-red-600/20 text-red-500 bg-red-600/5 hover:border-red-600/50"
    },
    {
      id: "vote",
      title: "Vote Server",
      description: "Vote GentleForge setiap hari untuk mendapatkan reward menarik.",
      icon: ThumbsUp,
      value: linksData.vote || "#",
      actionText: "Vote Sekarang",
      isUrl: true,
      color: "border-purple-500/20 text-purple-400 bg-purple-500/5 hover:border-purple-500/50"
    },
    {
      id: "group",
      title: "WhatsApp Group / Channel",
      description: "Masuk ke grup WhatsApp utama komunitas GentleForge.",
      icon: MessageSquare,
      value: groupUrl,
      actionText: "Gabung Grup WA",
      isUrl: true,
      color: "border-green-500/20 text-green-400 bg-green-500/5 hover:border-green-500/50"
    },
    {
      id: "discord",
      title: "Discord Server",
      description: "Gabung server Discord resmi untuk obrolan suara dan forum.",
      icon: MessageSquare,
      value: discordUrl,
      actionText: "Join Discord",
      isUrl: true,
      color: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5 hover:border-indigo-500/50"
    }
  ];

  return (
    <section id="links" className="py-24 relative overflow-hidden bg-zinc-900 border-t border-b border-amber-500/10">
      {/* Glow elements */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-xs font-semibold mb-3 uppercase tracking-wider"
          >
            <Link className="w-3.5 h-3.5" />
            Tautan Penting
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-amber-100 tracking-wide gold-glow"
          >
            Link & Sosial Media
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed"
          >
            Temukan semua tautan pembayaran, media sosial, kanal donasi, dan komunitas resmi server di sini.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass-card rounded-xl p-5 border flex flex-col justify-between glass-card-hover ${card.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-black/40 border border-zinc-800">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-amber-100">{card.title}</h3>
                  <p className="text-zinc-400 text-xs mt-1.5 font-medium leading-relaxed">{card.description}</p>
                  
                  {/* Subtext info for data entries like phone numbers */}
                  {!card.isUrl && (
                    <span className="inline-block mt-3 px-2.5 py-1 bg-black/50 border border-zinc-800 rounded font-mono text-xs text-amber-200 font-bold">
                      {card.value}
                    </span>
                  )}
                </div>

                <div className="mt-6">
                  {card.isUrl ? (
                    <a
                      href={card.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-amber-300 hover:text-amber-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow"
                    >
                      <span>{card.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={card.onAction}
                      className="w-full py-2.5 px-4 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 text-amber-300 hover:text-amber-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow"
                    >
                      {card.copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-500 animate-scale" />
                          <span className="text-green-500 font-bold">Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>{card.actionText}</span>
                        </>
                      )}
                    </button>
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
