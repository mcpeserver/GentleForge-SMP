import { useState, useEffect } from "react";
import { fetchDeveloperData } from "./services/developer";
import { updateSeo } from "./services/seo";
import { ServerData, JoinData, RulesGroupData, RulesServerData, StaffData, LinksData, DeveloperData, SeoData } from "./types";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "./assets/images/gentleforge_logo_1784527991941.jpg";
import {
  defaultServerData,
  defaultJoinData,
  defaultRulesGroupData,
  defaultRulesServerData,
  defaultStaffData,
  defaultLinksData,
  defaultSeoData
} from "./data/defaultData";

// Component imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServerInfo from "./components/ServerInfo";
import JoinGuide from "./components/JoinGuide";
import Rules from "./components/Rules";
import Links from "./components/Links";
import Donate from "./components/Donate";
import Staff from "./components/Staff";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { Sparkles } from "lucide-react";

export default function App() {
  // Application Data States
  const [serverData, setServerData] = useState<ServerData>(defaultServerData);
  const [joinData, setJoinData] = useState<JoinData>(defaultJoinData);
  const [rulesGroup, setRulesGroup] = useState<RulesGroupData>(defaultRulesGroupData);
  const [rulesServer, setRulesServer] = useState<RulesServerData>(defaultRulesServerData);
  const [staffData, setStaffData] = useState<StaffData>(defaultStaffData);
  const [linksData, setLinksData] = useState<LinksData>(defaultLinksData);
  const [seoData, setSeoData] = useState<SeoData>(defaultSeoData);
  const [devData, setDevData] = useState<DeveloperData | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<string | null>(null);

  // Active section state for Multi-page SPA
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    async function loadAllData() {
      try {
        // Fetch Developer Data dynamically from GitHub API
        const fetchedDev = await fetchDeveloperData();
        setDevData(fetchedDev);

        // Try to fetch optional static JSON files if available
        try {
          const [
            serverRes,
            joinRes,
            rulesGroupRes,
            rulesServerRes,
            staffRes,
            linksRes,
            seoRes
          ] = await Promise.all([
            fetch("/data/server.json").catch(() => null),
            fetch("/data/join.json").catch(() => null),
            fetch("/data/rules-group.json").catch(() => null),
            fetch("/data/rules-server.json").catch(() => null),
            fetch("/data/staff.json").catch(() => null),
            fetch("/data/links.json").catch(() => null),
            fetch("/data/seo.json").catch(() => null)
          ]);

          if (serverRes?.ok) setServerData(await serverRes.json());
          if (joinRes?.ok) setJoinData(await joinRes.json());
          if (rulesGroupRes?.ok) setRulesGroup(await rulesGroupRes.json());
          if (rulesServerRes?.ok) setRulesServer(await rulesServerRes.json());
          if (staffRes?.ok) setStaffData(await staffRes.json());
          if (linksRes?.ok) setLinksData(await linksRes.json());
          if (seoRes?.ok) {
            const seoJson = await seoRes.json();
            setSeoData(seoJson);
            updateSeo(seoJson, fetchedDev);
          } else {
            updateSeo(defaultSeoData, fetchedDev);
          }
        } catch {
          updateSeo(defaultSeoData, fetchedDev);
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Error loading dev data:", err);
        setIsLoading(false);
      }
    }

    loadAllData();
  }, []);

  // Sync hash change with SPA page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || "home";
      const validSections = ["home", "server", "join", "rules", "staff", "links"];
      
      if (validSections.includes(hash)) {
        if (hash === "server") {
          setActiveTab("home");
          // Smooth scroll to server info card container
          setTimeout(() => {
            const el = document.getElementById("server-section");
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 150);
        } else {
          setActiveTab(hash);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        setActiveTab("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Full Screen Loading Experience
  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#121212] flex flex-col items-center justify-center text-center">
        <div className="relative">
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-2xl animate-pulse" />
          
          {/* Campfire / Forge Visual Loading Spinner */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src={logoImg}
              alt="GentleForge Logo"
              className="w-24 h-24 rounded-xl border border-amber-500/40 animate-pulse shadow-2xl object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="mt-6 flex items-center gap-2 text-amber-500 font-mono font-bold tracking-widest text-xs uppercase animate-bounce">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>Forging Server...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#121212] flex flex-col items-center justify-center text-center p-4">
        <div className="glass-card rounded-2xl p-8 border border-red-500/30 max-w-sm">
          <p className="text-red-400 font-bold text-lg">Error</p>
          <p className="text-gray-300 text-sm mt-2">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-5 py-2.5 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors text-sm"
          >
            Segarkan Halaman
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#121212] text-gray-100 flex flex-col justify-between selection:bg-amber-500 selection:text-black">
      {/* Dynamic Nav Header */}
      <Header devData={devData} activeTab={activeTab} />

      {/* Main Sections */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {activeTab === "home" && (
              <>
                <Hero />
                <ServerInfo serverData={serverData} />
                <CTA />
              </>
            )}

            {activeTab === "join" && (
              <>
                <JoinGuide joinData={joinData} serverData={serverData} />
                <CTA />
              </>
            )}

            {activeTab === "rules" && (
              <>
                <Rules rulesGroup={rulesGroup} rulesServer={rulesServer} />
                <CTA />
              </>
            )}

            {activeTab === "staff" && (
              <>
                <Staff staffData={staffData} />
                <CTA />
              </>
            )}

            {activeTab === "links" && (
              <>
                <Links linksData={linksData} devData={devData} />
                <Donate linksData={linksData} />
                <CTA />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer credits and disclosures */}
      <Footer devData={devData} />
    </div>
  );
}
