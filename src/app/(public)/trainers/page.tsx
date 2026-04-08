"use client";

import { motion } from "framer-motion";
import { Award, Target, Zap, Shield, ChevronRight, Binary } from "lucide-react";

export default function TrainersPage() {
  const trainers = [
    {
      name: "Kumar J.",
      role: "Head Architect",
      specialty: "Bodybuilding",
      bio: "Former national bodybuilding champion with 15+ years experience in structural physique transformation. Specializes in mechanical advantage and high-intensity volume.",
      image: "/images/trainer-kumar.png",
      stats: [
        { label: "Success", value: "98%" },
        { label: "Clients", value: "500+" },
        { label: "Exp", value: "15Y" }
      ],
      certs: ["IFBB Certified", "Master Nutrition", "Biomechanics"]
    },
    {
      name: "Sarah L.",
      role: "Kinetic Specialist",
      specialty: "Yoga & Recovery",
      bio: "Internationally certified yoga instructor and mobility expert. Focuses on kinetic chain alignment and advanced recovery protocols for elite athletes.",
      image: "/images/trainer-sarah.png",
      stats: [
        { label: "Mobility", value: "Max" },
        { label: "Recovery", value: "95%" },
        { label: "Exp", value: "10Y" }
      ],
      certs: ["RYT 500", "Fascial Release", "Zen Meditation"]
    },
    {
      name: "Arunan S.",
      role: "Performance Coach",
      specialty: "HIIT & Cardio",
      bio: "Scientific approach to metropolitan endurance. Specializes in metabolic conditioning and explosive power development for urban athletes.",
      image: "/images/trainer-arunan.png",
      stats: [
        { label: "VO2 Max", value: "Elite" },
        { label: "Burn", value: "800kcal/h" },
        { label: "Exp", value: "8Y" }
      ],
      certs: ["HIIT Specialist", "Metabolic Coach", "Endurance Pro"]
    },
    {
      name: "Vane M.",
      role: "Elite Architect",
      specialty: "Powerlifting",
      bio: "Industrial strength specialist. Master of the big three—Squat, Bench, and Deadlift. Building foundational power for the next generation.",
      image: "/images/trainer-vane.png",
      stats: [
        { label: "Iron", value: "Master" },
        { label: "Strength", value: "Max" },
        { label: "Exp", value: "12Y" }
      ],
      certs: ["Powerlifting Fed", "Strength Science", "Bulk Expert"]
    }
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-20 bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-primary/5 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-screen bg-primary/5 blur-[120px] -z-10 pointer-events-none" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24 relative">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Binary className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-primary text-[10px] font-black tracking-[0.3em] uppercase italic">Personnel Protocol // v2.04</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic uppercase  mb-8 font-headline leading-none">
            Staff <br/><span className="text-primary ">Registry</span>
          </h1>
          <p className="text-on-surface-variant text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto font-body font-medium leading-relaxed mb-12 border-l-2 border-primary/30 pl-6">
            The masters of the forge. Our architects are here to rebuild your physics from the ground up with industrial precision and kinetic science.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-surface-container rounded-[2.5rem] border border-outline-variant/10 hover:border-primary transition-all duration-500 shadow-2xl flex flex-col md:flex-row h-full"
            >
              {/* Image Container */}
              <div className="w-full md:w-[45%] h-72 md:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 to-transparent z-10 hidden md:block" />
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                   {trainer.certs.slice(0, 2).map((cert, ci) => (
                      <span key={ci} className="px-3 py-1 bg-background/80 backdrop-blur-md border border-outline-variant/20 rounded-full text-[8px] font-bold text-primary uppercase tracking-tighter">
                         {cert}
                      </span>
                   ))}
                </div>
              </div>

              {/* Content Container */}
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black italic tracking-tighter uppercase mb-1 leading-none">{trainer.name}</h3>
                      <div className="flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                         <p className="text-primary text-[10px] font-black uppercase tracking-widest">{trainer.role}</p>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-2xl border border-primary/20">
                       <Award className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed mb-8 font-body font-medium">
                    {trainer.bio}
                  </p>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10">
                    {trainer.stats.map((stat, si) => (
                      <div key={si} className="text-center p-2 sm:p-3 rounded-2xl bg-surface-container-high border border-outline-variant/10 group-hover:border-primary/20 transition-all flex flex-col items-center justify-center min-h-[70px] sm:min-h-[90px]">
                        <p className="text-[7px] sm:text-[9px] font-black text-on-surface-variant/50 uppercase tracking-[0.2em] mb-1.5 truncate w-full px-1">{stat.label}</p>
                        <p className="text-xs sm:text-base lg:text-xl font-black italic text-primary leading-none break-all sm:break-normal">
                           {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                   <button className="w-full sm:w-auto bg-foreground text-background py-4 px-8 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-xl active:scale-95 duration-200 flex items-center justify-center gap-2">
                      Initialize Protocol
                      <ChevronRight className="w-4 h-4" />
                   </button>
                   <button className="w-full sm:w-auto p-4 rounded-full border border-outline-variant/20 hover:bg-primary/10 hover:border-primary/40 transition-all text-on-surface-variant group-hover:text-primary">
                      <Target className="w-5 h-5" />
                   </button>
                </div>
              </div>

              {/* Hover Effect Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
               <Shield className="w-10 h-10 text-primary mx-auto md:mx-0" />
               <h4 className="text-2xl font-black italic uppercase tracking-tighter">Elite Security</h4>
               <p className="text-on-surface-variant font-medium">Full medical insurance and safety protocols for every trainee. Your physics are safe in our forge.</p>
            </div>
            <div className="space-y-4">
               <Zap className="w-10 h-10 text-primary mx-auto md:mx-0" />
               <h4 className="text-2xl font-black italic uppercase tracking-tighter">Metabolic Science</h4>
               <p className="text-on-surface-variant font-medium">Every session is backed by kinetic energy data and metabolic threshold analysis for optimal results.</p>
            </div>
            <div className="space-y-4">
               <Binary className="w-10 h-10 text-primary mx-auto md:mx-0" />
               <h4 className="text-2xl font-black italic uppercase tracking-tighter">Binary Precision</h4>
               <p className="text-on-surface-variant font-medium">Digital tracking of every rep, set, and recovery cycle. Performance is a mathematical certainty.</p>
            </div>
         </div>
      </section>
    </div>
  );
}
