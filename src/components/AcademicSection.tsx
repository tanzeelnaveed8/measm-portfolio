import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
     Trophy,
     GraduationCap,
     Rocket,
     Globe,
     Target,
     BookOpen,
     Award,
     Briefcase,
     Zap,
     Star,
     ShieldCheck,
     ChevronRight
} from 'lucide-react';

const colors = {
     primary: '#0706F1',
     muted: '#1E293B',
     background: '#0B0B0B',
     foreground: '#F8FAFC',
};

// Animation Variants
const fadeUp = {
     hidden: { opacity: 0, y: 30 },
     visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" }
     }
};

const stagger = {
     visible: { transition: { staggerChildren: 0.1 } }
};

const AcademicSection = () => {
     const [activeTab, setActiveTab] = useState('all');

     // 01 / Education & Honors
     const educationHonors = [
          {
               title: "High Schooling",
               tag: "Secondary Education",
               description: "Completed secondary studies from Penn Foster High School (USA).",
               icon: <GraduationCap className="w-6 h-6" />,
               org: "Penn Foster High School"
          },
          {
               title: "Undergraduate Studies",
               tag: "Business Analytics",
               description: "Pursuing undergraduate program focused on Business Analytics.",
               icon: <BookOpen className="w-6 h-6" />,
               org: "University of North Texas"
          },
          {
               title: "Delta Epsilon Tau Induction",
               tag: "Honor Society",
               description: "Recognized for distance education excellence and academic integrity (2025).",
               icon: <ShieldCheck className="w-6 h-6" />,
               org: "Academic Council"
          },
          {
               title: "4.0 GPA (U.S. Accredited)",
               tag: "Academic Excellence",
               description: "Maintaining a perfect GPA across high-rigor, U.S. accredited secondary education.",
               icon: <GraduationCap className="w-6 h-6" />,
               org: "High School"
          },
          {
               title: "John Locke Institute",
               tag: "Summer Scholar",
               description: "Summer Scholar and Essay Finalist at the prestigious John Locke Institute.",
               icon: <BookOpen className="w-6 h-6" />,
               org: "Oxford/Princeton"
          }
     ];


     // 02 / Scholarships & Accelerators
     const accelerators = [
          {
               title: "LaunchX & LeanGap",
               description: "95–97% Merit-based Scholarships for global entrepreneurship programs.",
               icon: <Rocket className="w-5 h-5" />,
          },
          {
               title: "The Knowledge Society",
               description: "Frontier technology focus, developing solutions for world-scale problems.",
               icon: <Zap className="w-5 h-5" />,
          },
          {
               title: "Ivy League Merit Scholar",
               description: "Scholarships (20-50%) from Yale, Dartmouth, and Oxford.",
               icon: <Star className="w-5 h-5" />,
          }
     ];

     // 03 / Benchmarks (Age 16)
     const benchmarks = [
          { title: "CFA Program", status: "Candidate", goal: "Level I (Feb 2026)", icon: <Briefcase className="w-5 h-5" />, org: "Finance" },
          { title: "Oxford ELLT", status: "Certified", goal: "Advanced Proficiency", icon: <Globe className="w-5 h-5" />, org: "Languages" },
          { title: "GMAT / GRE", status: "Preparing", goal: "750+ / 320+", icon: <Target className="w-5 h-5" />, org: "Testing" },
     ];

     // 04 / Specializations
     const specializations = [
          { title: "Wharton Business Analytics", description: "Focused on data-driven entrepreneurship and strategic scaling.", icon: <Award className="w-6 h-6" /> },
          { title: "MIT Sloan Innovation", description: "Strategic innovation and technology management certification.", icon: <Award className="w-6 h-6" /> },
          { title: "Cloud & AI (Google/AWS)", description: "Technical certifications in frontier cloud computing and AI infrastructure.", icon: <Award className="w-6 h-6" /> },
     ];

     return (
          <div className="min-h-screen bg-[#141414]/50 text-[#F8FAFC] font-sans selection:bg-[#0706F1] selection:text-primary">
               <section id="academic-portfolio" className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32">
                    {/* Decorative background elements */}
                    <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-[#0706F1]/10 blur-[120px]" />
                    <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#0706F1]/10 blur-[120px]" />

                    <div className="relative mx-auto max-w-6xl">
                         {/* Header */}
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeUp}
                              className="mb-10 max-w-3xl space-y-3 sm:mb-12 sm:space-y-4 md:mb-16 md:space-y-6"
                         >
                              <div className="inline-flex items-center gap-2 rounded-full border border-[#0706F1]/20 bg-[#0706F1]/5 px-3 py-1.5 backdrop-blur-sm sm:gap-3 sm:px-4 sm:py-2">
                                   <Trophy size={14} className="text-primary sm:h-4 sm:w-4" />
                                   <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]">
                                        Academic & Global Leadership
                                   </span>
                              </div>
                              <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-[#F8FAFC] sm:text-5xl md:text-6xl lg:text-7xl">
                                   Academic <br />
                                   Excellence<span className="text-primary"></span>
                              </h2>
                              <p className="text-sm leading-relaxed text-slate-400 sm:text-base md:text-lg lg:text-xl max-w-2xl">
                                   High-achieving profile (4.0 GPA) focused on the intersection of AI, entrepreneurship, and global policy at age 16.
                              </p>
                         </motion.div>

                         {/* 01 / Education & Major Honors */}
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeUp}
                              className="mb-6 sm:mb-8 md:mb-10"
                         >
                              <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-primary sm:text-xs">
                                   01 / Education & Honors
                              </p>
                              <h3 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl md:text-3xl">
                                   Institutional Recognition
                              </h3>
                         </motion.div>

                         <motion.div
                              className="mb-16 grid gap-4 sm:mb-20 sm:gap-6 lg:grid-cols-3"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={stagger}
                         >
                              {educationHonors.map((item, index) => (
                                   <motion.div
                                        key={item.title}
                                        variants={fadeUp}
                                        className="group relative overflow-hidden rounded-2xl border border-[#0706F1]/20 bg-gradient-to-br from-[#0706F1]/[0.08] via-[#111] to-[#111] p-6 transition-all duration-500 hover:border-[#0706F1]/40 hover:shadow-lg  hover:shadow-[#0706F1]/20 hover:-translate-y-2 sm:rounded-3xl sm:p-8 md:p-10"
                                   >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#06142c]/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#0706F1]/5 blur-3xl transition-all duration-700 group-hover:bg-[#0706F1]/10" />

                                        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0706F1]/10 text-xs font-black text-primary ring-2 ring-[#0706F1]/20 sm:right-6 sm:top-6 sm:h-10 sm:w-10">
                                             {index + 1}
                                        </div>

                                        <div className="relative">
                                             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0706F1]/20 to-[#0706F1]/5 text-primary transition-all duration-300 group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16">
                                                  {item.icon}
                                             </div>
                                             <span className="mb-3 inline-block rounded-full bg-[#0706F1]/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary border-border ring-1 ring-[#0706F1]/20 sm:mb-4">
                                                  {item.tag}
                                             </span>
                                             <h4 className="mb-2 text-lg font-black uppercase leading-tight tracking-tight text-[#F8FAFC] sm:mb-3 sm:text-xl md:text-2xl">
                                                  {item.title}
                                             </h4>
                                             <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                                                  {item.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>

                         {/* 02 / Global Nominations & Accelerators */}
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeUp}
                              className="mb-6 sm:mb-8 md:mb-10"
                         >
                              <div className="flex items-center gap-2 sm:gap-3">
                                   <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0706F1]/10 text-xs font-black text-primary ring-1 ring-[#0706F1]/20 sm:h-8 sm:w-8">
                                        02
                                   </span>
                                   <div>
                                        <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70 sm:text-xs">
                                             Scholarships & Accelerators
                                        </p>
                                        <h3 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl md:text-3xl">
                                             Innovation & Ventures
                                        </h3>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              className="mb-16 grid grid-cols-1 gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={stagger}
                         >
                              {accelerators.map((item) => (
                                   <motion.div
                                        key={item.title}
                                        variants={fadeUp}
                                        className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#111] p-5 transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0706F1]/10 sm:rounded-2xl sm:p-6"
                                   >
                                        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#0706F1]/60 via-[#0706F1]/30 to-transparent" />
                                        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#0706F1]/5 blur-2xl transition-all duration-500 group-hover:h-32 group-hover:w-32" />
                                        <div className="relative">
                                             <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0706F1]/15 to-[#0706F1]/5 text-primary ring-1 ring-[#0706F1]/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-[#0706F1]/40 sm:mb-4 sm:h-12 sm:w-12">
                                                  {item.icon}
                                             </div>
                                             <h4 className="mb-1.5 text-sm font-bold leading-tight text-[#F8FAFC] transition-colors group-hover:text-primary/40 sm:mb-2 sm:text-base">
                                                  {item.title}
                                             </h4>
                                             <p className="text-xs leading-relaxed text-slate-400">
                                                  {item.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>

                         {/* 03 / Benchmarks & Milestones */}
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeUp}
                              className="mb-6 sm:mb-8 md:mb-10"
                         >
                              <div className="flex items-center gap-2 sm:gap-3">
                                   <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0706F1]/10 text-xs font-black text-primary ring-1 ring-[#0706F1]/20 sm:h-8 sm:w-8">
                                        03
                                   </span>
                                   <div>
                                        <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70 sm:text-xs">
                                             Academic Benchmarks (Age 16)
                                        </p>
                                        <h3 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl md:text-3xl">Strategic Milestones</h3>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              className="mb-16 grid grid-cols-1 gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={stagger}
                         >
                              {benchmarks.map((item) => (
                                   <motion.div
                                        key={item.title}
                                        variants={fadeUp}
                                        className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#111] p-5 transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0706F1]/10 sm:rounded-2xl sm:p-6"
                                   >
                                        {/* Top gradient line */}
                                        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#0706F1]/60 via-[#0706F1]/30 to-transparent" />

                                        {/* Background glow */}
                                        <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#0706F1]/5 blur-2xl transition-all duration-500 group-hover:h-32 group-hover:w-32" />

                                        {/* Status badge */}
                                        <span className="absolute top-6 right-6 rounded-full bg-[#0706F1]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary ring-1 ring-[#0706F1]/20">
                                             {item.status}
                                        </span>

                                        <div className="relative">
                                             {/* Icon */}
                                             <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0706F1]/15 to-[#0706F1]/5 text-primary ring-1 ring-[#0706F1]/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-[#0706F1]/40 sm:mb-4 sm:h-12 sm:w-12">
                                                  {item.icon}
                                             </div>

                                             {/* Title */}
                                             <h4 className="mb-1.5 text-sm font-bold leading-tight text-[#F8FAFC] transition-colors  sm:mb-2 sm:text-base">
                                                  {item.title}
                                             </h4>

                                             {/* Description / Goal */}
                                             <p className="text-xs leading-relaxed text-slate-400">
                                                  {item.goal}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </motion.div>

                         {/* 04 / Specializations */}
                         <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeUp}
                              className="mb-6 sm:mb-8 md:mb-10"
                         >
                              <div className="flex items-center gap-2 sm:gap-3">
                                   <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0706F1]/10 text-xs font-black text-primary ring-1 ring-[#0706F1]/20 sm:h-8 sm:w-8">
                                        04
                                   </span>
                                   <div>
                                        <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70 sm:text-xs">
                                             Academic Specializations
                                        </p>
                                        <h3 className="text-xl font-bold text-[#F8FAFC] sm:text-2xl md:text-3xl">
                                             Deep Expertise
                                        </h3>
                                   </div>
                              </div>
                         </motion.div>

                         <motion.div
                              className="grid gap-4 sm:gap-6 lg:grid-cols-3"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={stagger}
                         >
                              {specializations.map((item) => (
                                   <motion.div
                                        key={item.title}
                                        variants={fadeUp}
                                        className="group relative overflow-hidden rounded-2xl border border-[#0706F1]/20 bg-gradient-to-br from-[#111] via-[#0706F1]/[0.03] to-[#111] p-6 transition-all duration-500 hover:border-[#0706F1]/40 hover:shadow-xl hover:shadow-[#0706F1]/10 hover:-translate-y-2 sm:rounded-3xl sm:p-8"
                                   >
                                        <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-[#0706F1]/10 to-transparent" />
                                        <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-[#0706F1]/5 blur-3xl transition-all duration-700 group-hover:bg-[#0706F1]/20" />
                                        <div className="relative">
                                             <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0706F1]/20 to-[#0706F1]/5 text-primary transition-all duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                                                  {item.icon}
                                             </div>
                                             <h4 className="mb-2 text-lg font-black uppercase leading-tight tracking-tight text-[#F8FAFC]  transition-colors">
                                                  {item.title}
                                             </h4>
                                             <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
                                                  {item.description}
                                             </p>
                                        </div>
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0706F1]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                   </motion.div>
                              ))}
                         </motion.div>
                    </div>
               </section>


          </div>
     );
};

export default AcademicSection;