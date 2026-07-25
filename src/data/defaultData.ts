import { ServerData, JoinData, RulesGroupData, RulesServerData, StaffData, LinksData, SeoData } from "../types";

export const defaultServerData: ServerData = {
  name: "GentleForge",
  ip: "play.gentleforge.net",
  port: 19132,
  version: "1.20+ (Bedrock)",
  theme: "Survival Economy",
  status: "Online"
};

export const defaultJoinData: JoinData = {
  title: "Cara Bergabung ke Server GentleForge",
  steps: [
    {
      step: 1,
      text: "Buka game Minecraft Bedrock Edition (MCPE/Windows/Console) versi terbaru."
    },
    {
      step: 2,
      text: "Pilih menu 'Play' lalu masuk ke tab 'Servers' dan tekan 'Add Server'."
    },
    {
      step: 3,
      text: "Isi Server Name: GentleForge, Server Address/IP: play.gentleforge.net, dan Port: 19132."
    },
    {
      step: 4,
      text: "Tekan 'Save' lalu klik 'Join Server' untuk mulai berpetualang!"
    }
  ]
};

export const defaultRulesGroupData: RulesGroupData = {
  title: "Aturan Grup Komunitas",
  rules: [
    "Saling menghormati antar anggota grup dan staff.",
    "Dilarang melakukan spam, promosi server lain, atau pembagian tautan berbahaya.",
    "Gunakan bahasa yang sopan dan hindari ujaran kebencian / SARA.",
    "Hindari memicu perdebatan toxic atau memprovokasi anggota lain."
  ]
};

export const defaultRulesServerData: RulesServerData = {
  title: "Aturan Utama Server GentleForge",
  rules: [
    "Dilarang keras menggunakan X-Ray, Cheat, Hacked Client, atau Modifikasi Ilegal.",
    "Dilarang melakukan Griefing, Stealing (Mencuri) di area klaim pemain lain.",
    "Dilarang memanfaatkan bug/exploit (seperti duping item). Laporkan bug ke Staff.",
    "Hormati privasi dan bangunan pemain lain di seluruh wilayah survival.",
    "Dilarang iklan (advertising) server lain di dalam game chat."
  ],
  note: "Pelanggaran terhadap aturan server dapat mengakibatkan sanksi Mute, Kick, atau Permanent Ban."
};

export const defaultStaffData: StaffData = {
  title: "Tim Pengelola GentleForge",
  members: [
    {
      name: "GentleForge Admin",
      role: "Owner / Lead Dev",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=GentleOwner"
    },
    {
      name: "ForgeAdmin",
      role: "Head Administrator",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ForgeAdmin"
    },
    {
      name: "ForgeModerator",
      role: "Senior Moderator",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ForgeMod"
    },
    {
      name: "ForgeHelper",
      role: "Community Helper",
      avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ForgeHelp"
    }
  ]
};

export const defaultLinksData: LinksData = {
  website: "https://gentleforge.net",
  saweria: "https://saweria.co/gentleforge",
  dana: "08123456789",
  rankBuy: "https://shop.gentleforge.net",
  youtube: "https://youtube.com/@gentleforge",
  vote: "https://minecraftpocket-servers.com/server/gentleforge",
  group: "https://chat.whatsapp.com/GentleForgeCommunity"
};

export const defaultSeoData: SeoData = {
  title: "GentleForge - Server Minecraft Bedrock Survival Economy",
  description: "Selamat datang di GentleForge! Server Minecraft Bedrock Edition bertema Survival Economy terbaik dengan fitur lengkap, komunitas ramah, dan performa tinggi.",
  keywords: "Minecraft, Minecraft Bedrock, MCPE, GentleForge, Survival Economy, Server Minecraft Indonesia",
  url: "https://gentleforge.net"
};
