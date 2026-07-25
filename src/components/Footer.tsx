import { Compass, Phone, Shield, ArrowUp } from "lucide-react";
import { DeveloperData } from "../types";
import logoImg from "../assets/images/gentleforge_logo_1784527991941.jpg";

interface FooterProps {
  devData: DeveloperData | null;
}

export default function Footer({ devData }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={logoImg}
                alt="GentleForge Logo"
                className="w-8 h-8 rounded-md object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif text-lg font-bold tracking-wider text-amber-400 gold-glow">
                GentleForge
              </span>
            </div>
            <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed max-w-sm">
              Server Minecraft Bedrock bertema Survival Economy terlengkap dengan kestabilan server node tinggi dan fitur gameplay modern.
            </p>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-sm text-amber-200 tracking-wider uppercase">Menu</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <a href="#home" className="text-zinc-400 hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#server" className="text-zinc-400 hover:text-amber-400 transition-colors">Server</a>
              </li>
              <li>
                <a href="#join" className="text-zinc-400 hover:text-amber-400 transition-colors">Join Guide</a>
              </li>
              <li>
                <a href="#rules" className="text-zinc-400 hover:text-amber-400 transition-colors">Rules</a>
              </li>
            </ul>
          </div>

          {/* Developer / Credits Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-sm text-amber-200 tracking-wider uppercase">Developer & Komunitas</h4>
            {devData ? (
              <div className="space-y-3">
                <p className="text-zinc-500 text-xs md:text-sm font-medium">
                  Website dikembangkan dan dipelihara secara profesional oleh:
                </p>
                <div className="flex flex-col gap-2">
                  {/* Dynamic Portfolio Link */}
                  <a
                    href={devData.website.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    <span>{devData.name} (Portfolio)</span>
                  </a>

                  {/* Dynamic WhatsApp Link */}
                  <a
                    href={`https://wa.me/${devData.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-green-400 hover:text-green-300 font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Developer</span>
                  </a>

                  {/* Dynamic Community Link */}
                  {devData.community.website && (
                    <a
                      href={devData.community.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                    >
                      <Shield className="w-4 h-4 shrink-0" />
                      <span>{devData.community.name}</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-24 h-4 bg-zinc-800 animate-pulse rounded" />
            )}
          </div>
        </div>

        {/* Footer Bottom info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <p className="text-zinc-500 text-xs font-mono">
              &copy; 2026 <span className="text-zinc-400 font-semibold">GentleForge</span>. All rights reserved.
            </p>
            <p className="text-[10px] text-zinc-600 leading-relaxed max-w-xl">
              GentleForge is not affiliated with Mojang Studios or Microsoft. Minecraft is a registered trademark of Mojang AB.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-amber-500/30 text-zinc-400 hover:text-amber-400 rounded-lg transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
