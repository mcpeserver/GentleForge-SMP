import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Github, Phone, Compass } from "lucide-react";
import { DeveloperData } from "../types";
import logoImg from "../assets/images/gentleforge_logo_1784527991941.jpg";

interface HeaderProps {
  devData: DeveloperData | null;
  activeTab: string;
}

export default function Header({ devData, activeTab }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Server", href: "#server" },
    { label: "Join", href: "#join" },
    { label: "Rules", href: "#rules" },
    { label: "Staff", href: "#staff" },
    { label: "Links", href: "#links" }
  ];

  const isActive = (href: string) => {
    const tab = href.substring(1);
    if (tab === "server") {
      return activeTab === "home" && window.location.hash === "#server";
    }
    if (tab === "home") {
      return activeTab === "home" && window.location.hash !== "#server";
    }
    return activeTab === tab;
  };

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-black/80 backdrop-blur-md border-b border-amber-500/20 shadow-lg shadow-black/40"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={logoImg}
              alt="GentleForge Logo"
              className="w-10 h-10 rounded-md border border-amber-500/30 group-hover:border-amber-500 transition-all duration-300 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors gold-glow">
                GentleForge
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-md font-medium text-sm transition-colors relative group ${
                    active
                      ? "text-amber-400 bg-amber-500/5 font-bold"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-0.5 bg-amber-500 transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA / Join Button */}
          <div className="hidden md:block">
            <a
              href="#join"
              className="px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-orange-500 text-black font-semibold text-sm rounded-md transition-all duration-300 shadow-md hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Main Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsDrawerOpen(true)}
            className="p-2 rounded-md text-gray-400 hover:text-amber-400 hover:bg-zinc-800/50 md:hidden transition-colors border border-transparent hover:border-zinc-700"
            aria-label="Open navigation drawer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black z-50 backdrop-blur-sm"
            />

            {/* Drawer Container */}
            <motion.div
              id="drawer-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-zinc-950 border-l border-amber-500/20 z-50 p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="GentleForge Logo"
                      className="w-8 h-8 rounded-md object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-serif text-lg font-bold text-amber-400 gold-glow">
                      GentleForge
                    </span>
                  </div>
                  <button
                    id="drawer-close"
                    onClick={() => setIsDrawerOpen(false)}
                    className="p-1.5 rounded-md text-gray-400 hover:text-amber-400 hover:bg-zinc-800"
                    aria-label="Close navigation drawer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Primary Nav Links */}
                <div className="mt-8 flex flex-col gap-2">
                  <p className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-bold mb-1">
                    Navigasi Server
                  </p>
                  {navItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsDrawerOpen(false)}
                        className={`py-2.5 px-3 rounded-md transition-all flex items-center justify-between ${
                          active
                            ? "text-amber-400 bg-amber-500/10 font-bold border-l-2 border-amber-500 pl-4"
                            : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/5"
                        }`}
                      >
                        <span className="font-medium">{item.label}</span>
                      </a>
                    );
                  })}
                </div>

                {/* Developer & Community Links (Dinamis dari config.json) */}
                {devData && (
                  <div className="mt-8 flex flex-col gap-2 border-t border-zinc-800 pt-6">
                    <p className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase font-bold mb-1">
                      Developer & Komunitas
                    </p>
                    <a
                      href={devData.website.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-md text-gray-300 hover:text-amber-400 hover:bg-amber-500/5 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Compass className="w-4 h-4 text-amber-500" />
                        <span>Portfolio Developer</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                    </a>
                    <a
                      href={`https://wa.me/${devData.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-md text-gray-300 hover:text-green-400 hover:bg-green-500/5 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-green-500" />
                        <span>WhatsApp Developer</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-green-400 transition-colors" />
                    </a>
                    <a
                      href={devData.community.website || devData.community.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-md text-gray-300 hover:text-blue-400 hover:bg-blue-500/5 transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Github className="w-4 h-4 text-blue-400" />
                        <span>Community</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                    </a>
                  </div>
                )}
              </div>

              {/* Drawer Footer */}
              <div className="border-t border-zinc-900 pt-6 mt-6 text-center">
                <a
                  href="#join"
                  onClick={() => setIsDrawerOpen(false)}
                  className="block w-full py-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-center font-bold rounded-md"
                >
                  Join Server
                </a>
                <p className="text-[10px] text-zinc-500 mt-4 font-mono">
                  &copy; 2026 GentleForge. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
