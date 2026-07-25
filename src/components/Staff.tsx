import { motion } from "motion/react";
import { Users, Crown, Shield } from "lucide-react";
import { StaffData } from "../types";

interface StaffProps {
  staffData: StaffData | null;
}

export default function Staff({ staffData }: StaffProps) {
  if (!staffData) return null;

  return (
    <section id="staff" className="py-24 relative overflow-hidden bg-zinc-900 border-t border-b border-amber-500/10">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 font-mono text-xs font-semibold mb-3 uppercase tracking-wider"
          >
            <Users className="w-3.5 h-3.5" />
            Tim Manajemen
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-5xl font-bold text-amber-100 tracking-wide gold-glow"
          >
            Staf & Pengelola
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm md:text-base font-medium leading-relaxed"
          >
            Hubungi tim administrasi dan pengembang kami untuk mendapatkan bantuan, melaporkan kendala, atau memberikan feedback.
          </motion.p>
        </div>

        {/* Staff Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {staffData.members.map((staff, index) => {
            const isOwner = staff.role.toLowerCase().includes("owner") || staff.role.toLowerCase().includes("developer");
            const Icon = isOwner ? Crown : Shield;

            return (
              <motion.div
                key={staff.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border text-center relative group overflow-hidden glass-card-hover border-zinc-800"
              >
                {/* Accent Crown/Shield background icon */}
                <div className="absolute top-4 right-4 text-zinc-800 group-hover:text-amber-500/10 transition-colors pointer-events-none">
                  <Icon className="w-16 h-16 opacity-30" />
                </div>

                {/* Avatar frame */}
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className={`absolute inset-0 rounded-full blur-md opacity-25 group-hover:opacity-50 transition-all ${
                    isOwner ? "bg-amber-500" : "bg-orange-500"
                  }`} />
                  <img
                    src={staff.avatar}
                    alt={`${staff.name} Avatar`}
                    className={`w-24 h-24 rounded-full bg-zinc-950 border-2 relative z-10 p-1 group-hover:scale-105 transition-transform duration-300 ${
                      isOwner ? "border-amber-500" : "border-orange-500"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Staff Info */}
                <h3 className="font-serif font-bold text-xl text-amber-100 group-hover:text-amber-300 transition-colors flex items-center justify-center gap-1.5">
                  <span>{staff.name}</span>
                </h3>

                {/* Role Badge */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-black/50 border rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  <Icon className={`w-3.5 h-3.5 ${isOwner ? "text-amber-400" : "text-orange-400"}`} />
                  <span className={isOwner ? "text-amber-400" : "text-orange-400"}>{staff.role}</span>
                </div>

                {/* Description */}
                <p className="text-zinc-500 text-xs mt-4 font-medium leading-relaxed">
                  {isOwner 
                    ? "Bertanggung jawab atas pengelolaan sistem backend, hosting, serta pengembangan fitur in-game."
                    : "Bertugas menjaga ketertiban server, membantu pemain baru, dan memproses laporan pelanggaran."
                  }
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
