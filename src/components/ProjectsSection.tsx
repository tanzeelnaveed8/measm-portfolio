// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Eye,
//   Leaf,
//   Cpu,
//   Globe,
//   Zap,
//   MapPin,
//   ExternalLink,
//   Code,
//   Shield,
//   Users,
//   Clock,
//   CheckCircle,
//   Target,
//   Settings,
//   Award,
//   Headphones,
//   DoorOpen,
//   Sparkles,
//   Heart,
//   Gamepad2,
//   Trophy,
//   UsersRound,
// } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { ScrollArea } from "@/components/ui/scroll-area";

// interface ProjectSection {
//   label: string;
//   heading: string;
//   description?: string;
//   items: { title: string; description: string; icon: React.ReactNode }[];
// }

// interface ProjectStat {
//   value: string;
//   label: string;
// }

// interface Project {
//   title: string;
//   description: string;
//   tags: string[];
//   image: string;
//   accent: "featured" | "popular";
//   link?: string;
//   sections: ProjectSection[];
//   stats?: ProjectStat[];
//   highlights?: string[];
// }

// const projects: Project[] = [
//   {
//     title: "Greyn",
//     description:
//       "Scalable technology and climate systems built for verification, impact, and scale beyond borders.",
//     tags: ["Climate-Tech", "ESG", "Verification"],
//     image: "/greyn.png",
//     accent: "featured",
//     link: "",
//     sections: [
//       {
//         label: "01 // Foundations",
//         heading: "What we stand for",
//         items: [
//           {
//             title: "Climate",
//             description: "Verified impact and ESG infrastructure.",
//             icon: <Leaf size={20} />,
//           },
//           {
//             title: "Technology",
//             description: "Platforms that connect systems, not silos.",
//             icon: <Cpu size={20} />,
//           },
//           {
//             title: "Scale",
//             description: "Global deployment, remote-first execution.",
//             icon: <Globe size={20} />,
//           },
//         ],
//       },
//       {
//         label: "02 // Methodology",
//         heading: "Core Features",
//         description:
//           "Greyn is architected to eliminate friction in verification and deployment, ensuring that global impact is as measurable as it is scalable.",
//         items: [
//           {
//             title: "Transparent & verifiable",
//             description: "Every outcome tracked and reported for real accountability.",
//             icon: <Eye size={18} />,
//           },
//           {
//             title: "Execution-first",
//             description: "Teams, products, and go-to-market shipped, not theorized.",
//             icon: <Zap size={18} />,
//           },
//           {
//             title: "Built for borders",
//             description: "Designed for international adoption and measurable impact.",
//             icon: <MapPin size={18} />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Meetech",
//     description:
//       "We design and develop modern web, mobile, and software solutions. Our mission is to solve real business problems with scalable, secure, and future-focused technology.",
//     tags: ["Development", "Software", "Global"],
//     image: "/meetech.png",
//     accent: "popular",
//     link: "",
//     highlights: [
//       "Founder-led teams",
//       "Global clients: UAE & USA",
//       "Production-grade systems",
//       "No hype, just execution",
//     ],
//     stats: [
//       { value: "12+", label: "Countries" },
//       { value: "50+", label: "Enterprise clients" },
//       { value: "99.9%", label: "Uptime SLA" },
//       { value: "24/7", label: "Support coverage" },
//     ],
//     sections: [
//       {
//         label: "01 // Purpose",
//         heading: "Our Mission & Vision",
//         items: [
//           {
//             title: "Our Mission",
//             description:
//               "To design and develop reliable web, app, and software solutions that solve real business problems. We deliver modern, secure, and scalable technology by combining creativity, technical expertise, and a future-focused mindset for clients in Dubai, the USA, and beyond.",
//             icon: <Target size={20} />,
//           },
//           {
//             title: "Our Vision",
//             description:
//               "To become a globally trusted technology partner that transforms ideas into impactful digital products, empowering businesses worldwide through innovation, quality, and scalable solutions.",
//             icon: <Eye size={20} />,
//           },
//         ],
//       },
//       {
//         label: "02 // Trust",
//         heading: "Trusted by founders & businesses across UAE, USA & beyond",
//         description:
//           "From startups to enterprises, we deliver production-grade solutions that scale globally.",
//         items: [
//           {
//             title: "Delivery across time zones",
//             description: "Clear processes, no surprises.",
//             icon: <Clock size={18} />,
//           },
//           {
//             title: "Built to scale with you",
//             description: "Long-term partnerships.",
//             icon: <Globe size={18} />,
//           },
//           {
//             title: "SOC2 & GDPR Compliant",
//             description: "24/7 Support Coverage.",
//             icon: <Shield size={18} />,
//           },
//         ],
//       },
//       {
//         label: "03 // Why Us",
//         heading: "What makes us #1",
//         description:
//           "Execution, systems, people, and standards. We don't cut corners.",
//         items: [
//           {
//             title: "Execution",
//             description:
//               "We ship on time. Clear milestones, defined deliverables, and no scope creep. Our track record speaks for itself.",
//             icon: <Zap size={18} />,
//           },
//           {
//             title: "Systems",
//             description:
//               "Rigorous processes from discovery to deployment. Version control, testing, and documentation are non-negotiable.",
//             icon: <Settings size={18} />,
//           },
//           {
//             title: "People",
//             description:
//               "Senior engineers and designers who care about craft. Low turnover, high accountability, direct communication.",
//             icon: <Users size={18} />,
//           },
//           {
//             title: "Standards",
//             description:
//               "Security, accessibility, and performance baked in. We build for production, not demos.",
//             icon: <Award size={18} />,
//           },
//         ],
//       },
//       {
//         label: "04 // Leadership",
//         heading: "Team & leadership philosophy",
//         description: "Founder-led. Structured teams. Clear ownership.",
//         items: [
//           {
//             title: "Leadership Close to Delivery",
//             description:
//               "Our leadership sets direction and stays close to delivery. We don't hide behind layers. Decisions are made by people who build.",
//             icon: <CheckCircle size={18} />,
//           },
//         ],
//       },
//     ],
//   },
// {
//     title: "Acceptopia",
//     description:
//       "A modern, gamified platform designed to transform the US university application journey into an interactive, motivating, and stress-free experience.",
//     tags: ["EdTech", "Gamification", "Platform"],
//     image: "/acceptopia.png",
//     accent: "popular",
//     link: "",
//     highlights: [
//       "Gamified application journey",
//       "Multiplayer collaboration",
//       "AI-powered guidance",
//       "Group accountability",
//     ],
//     sections: [
//       {
//         label: "01 // Brand Introduction",
//         heading: "What is Acceptopia",
//         description:
//           "Acceptopia is a modern, gamified platform designed to transform the US university application journey into an interactive, motivating, and stress-free experience.",
//         items: [
//           {
//             title: "Game-driven experience",
//             description:
//               "Instead of treating college applications like a checklist, Acceptopia turns the entire process into a game with levels, achievements, and milestones.",
//             icon: <Gamepad2 size={20} />,
//           },
//           {
//             title: "Multiplayer collaboration",
//             description:
//               "Students can team up, share progress, and motivate each other through a multiplayer-style experience with group accountability.",
//             icon: <UsersRound size={20} />,
//           },
//           {
//             title: "Achievements & milestones",
//             description:
//               "Every step forward is rewarded. From completing essays to submitting applications, students earn achievements that track their journey.",
//             icon: <Trophy size={20} />,
//           },
//         ],
//       },
//       {
//         label: "02 // Mission",
//         heading: "Our Mission",
//         description:
//           "To simplify the university application process by creating a game-driven, stress-free experience that guides students step-by-step toward their dream schools.",
//         items: [
//           {
//             title: "Simplify the process",
//             description:
//               "Break down the overwhelming application process into clear, manageable steps that feel like progress, not pressure.",
//             icon: <Target size={18} />,
//           },
//           {
//             title: "Guide every student",
//             description:
//               "Provide structured guidance so no student feels lost, regardless of background or resources.",
//             icon: <Sparkles size={18} />,
//           },
//           {
//             title: "Make it stress-free",
//             description:
//               "Transform anxiety into excitement by gamifying every milestone on the path to acceptance.",
//             icon: <Heart size={18} />,
//           },
//         ],
//       },
//       {
//         label: "03 // Vision",
//         heading: "Our Vision",
//         description:
//           "To become the world's leading platform where applying to universities is not a burden but an exciting journey, making education accessible, interactive, and empowering for every student globally.",
//         items: [
//           {
//             title: "Global accessibility",
//             description:
//               "A platform that empowers students worldwide to navigate US university admissions with confidence.",
//             icon: <Globe size={18} />,
//           },
//           {
//             title: "Interactive education",
//             description:
//               "Redefining how students engage with their future through interactive, game-based learning experiences.",
//             icon: <Gamepad2 size={18} />,
//           },
//           {
//             title: "Empowering every student",
//             description:
//               "Breaking barriers so every student, regardless of background, has the tools to pursue their dream education.",
//             icon: <Award size={18} />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "Oatify",
//     description:
//       "A trusted breakfast brand promoting balanced living through gluco-friendly nutrition that supports stable energy levels and healthier lifestyles.",
//     tags: ["Food-Tech", "Health", "Wellness"],
//     image: "/oatify.jpeg",
//     accent: "featured",
//     link: "",
//     sections: [
//       {
//         label: "01 // Vision",
//         heading: "Our Vision",
//         description:
//           "Oatify aims to become a trusted and preferred breakfast brand that promotes balanced living through gluco-friendly nutrition. The vision is to help individuals and families maintain stable energy levels and healthier lifestyles by making smart breakfast choices every day.",
//         items: [
//           {
//             title: "Trusted breakfast brand",
//             description:
//               "Building trust through consistent quality and gluco-friendly nutrition that delivers on its promise.",
//             icon: <Award size={20} />,
//           },
//           {
//             title: "Balanced living",
//             description:
//               "Promoting a lifestyle of balance where nutrition supports sustained energy and overall wellness.",
//             icon: <Heart size={20} />,
//           },
//           {
//             title: "Smart choices daily",
//             description:
//               "Making healthy breakfast decisions simple and accessible for individuals and families every morning.",
//             icon: <Target size={20} />,
//           },
//         ],
//       },
//       {
//         label: "02 // Mission",
//         heading: "Our Mission",
//         description:
//           "Oatify is committed to providing high-quality, gluco-balanced oats that support steady blood sugar levels and sustained energy. The brand focuses on making healthy eating simple, accessible, and enjoyable, encouraging better morning habits and long-term wellness.",
//         items: [
//           {
//             title: "Steady blood sugar",
//             description:
//               "Gluco-balanced oats designed to maintain stable blood sugar levels throughout the morning.",
//             icon: <Zap size={18} />,
//           },
//           {
//             title: "Sustained energy",
//             description:
//               "High-quality nutrition that provides lasting energy without crashes or sugar spikes.",
//             icon: <Heart size={18} />,
//           },
//           {
//             title: "Simple & accessible",
//             description:
//               "Making healthy eating enjoyable and easy to incorporate into daily routines for long-term wellness.",
//             icon: <CheckCircle size={18} />,
//           },
//         ],
//       },
//       {
//         label: "03 // Brand Story",
//         heading: "The story behind Oatify",
//         description:
//           "Oatify was created with the belief that breakfast should nourish the body, not cause energy crashes or sugar spikes. In today's fast-paced world, many people struggle with unhealthy morning choices that affect their focus and productivity. Oatify offers a smarter alternative — gluco-balanced oats designed to support stable energy and a healthier start to the day. It's more than just oats; it's a step toward a balanced lifestyle.",
//         items: [
//           {
//             title: "Nourish, not crash",
//             description:
//               "Born from the belief that breakfast should fuel your body with sustained energy, not cause sugar spikes.",
//             icon: <Sparkles size={18} />,
//           },
//           {
//             title: "Smarter alternative",
//             description:
//               "Addressing the challenge of unhealthy morning choices that impact focus and productivity in fast-paced lives.",
//             icon: <Target size={18} />,
//           },
//           {
//             title: "Beyond just oats",
//             description:
//               "More than a product — it's a commitment to balanced living and healthier daily habits.",
//             icon: <Leaf size={18} />,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
//   },
// };

// const ProjectsSection = () => {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   return (
//     <section
//       id="work"
//       className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:py-24"
//     >
//       <div className="relative z-10 mx-auto w-full max-w-6xl">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-10 max-w-xl space-y-4 sm:mb-14 sm:space-y-6"
//         >
//           <div className="flex items-center gap-4">
//             <span className="h-[2px] w-12 bg-[#0706F1]" />
//             <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
//               Selected Work
//             </span>
//           </div>
//           <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
//             What we
//             <br />
//             Build
//             {/* <span className="text-primary">.</span> */}
//           </h2>
//           <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
//             Modern solutions that drive growth and scale with you.
//           </p>
//         </motion.div>

//         {/* Cards grid */}
//         <motion.ul
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
//           role="list"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-40px" }}
//           variants={containerVariants}
//         >
//           {projects.map((project) => (
//             <motion.li key={project.title} variants={itemVariants}>
//               <article
//                 onClick={() => setSelectedProject(project)}
//                 className="group relative h-[350px] cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-700 hover:shadow-xl  hover:shadow-[#0706F1]/20 sm:h-[400px] lg:h-[550px]"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-full w-full object-cover grayscale-[0.4] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

//                 <div className="absolute bottom-0 left-0 w-full space-y-3 p-4 sm:space-y-4 sm:p-6 lg:p-12">
//                   <div className="flex gap-2">
//                     <span className="rounded bg-[#0706F1]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary sm:px-3 sm:text-[10px]">
//                       {project.accent === "featured" ? "Featured" : "Popular"}
//                     </span>
//                   </div>

//                   <div>
//                     <h3 className="text-xl font-black uppercase leading-tight text-foreground sm:text-2xl lg:text-3xl">
//                       {project.title}
//                     </h3>
//                     <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
//                       {project.description}
//                     </p>
//                   </div>

//                   <div className="flex translate-y-4 items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:gap-3 sm:text-[11px]">
//                     Learn More <ArrowRight size={14} className="sm:h-4 sm:w-4" />
//                   </div>
//                 </div>

//                 <div className="absolute right-4 top-4 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:right-6 sm:top-6 lg:right-10 lg:top-10">
//                   <div className="rounded-xl bg-[#0706F1] p-2.5 text-primary-foreground shadow-2xl shadow-[#0706F1]/40 sm:rounded-2xl sm:p-3 lg:p-4">
//                     <Eye size={16} className="sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//                   </div>
//                 </div>
//               </article>
//             </motion.li>
//           ))}
//         </motion.ul>
//       </div>

//       {/* Project Detail Dialog */}
//       <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
//         <DialogContent className="max-h-[90vh] w-[95vw] max-w-3xl overflow-hidden border-border bg-background p-0">
//           <ScrollArea className="max-h-[90vh]">
//             <div className="p-5 sm:p-8">
//               <DialogHeader className="mb-6">
//                 {selectedProject?.image && (
//                   <div className="mb-5 overflow-hidden rounded-xl">
//                     <img
//                       src={selectedProject.image}
//                       alt={selectedProject.title}
//                       className="aspect-video w-full object-cover"
//                     />
//                   </div>
//                 )}

//                 <div>
//                   <DialogTitle className="text-2xl font-bold text-foreground sm:text-3xl">
//                     {selectedProject?.title}
//                   </DialogTitle>
//                   <DialogDescription className="mt-2 text-sm text-muted-foreground sm:text-base">
//                     {selectedProject?.description}
//                   </DialogDescription>
//                 </div>

//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {selectedProject?.tags.map((tag) => (
//                     <Badge key={tag} variant="secondary" className="text-xs font-medium">
//                       {tag}
//                     </Badge>
//                   ))}
//                 </div>

//                 {selectedProject?.link && (
//                   <a
//                     href={selectedProject.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
//                   >
//                     Visit Website <ExternalLink size={14} />
//                   </a>
//                 )}
//               </DialogHeader>

//               {/* Highlights */}
//               {selectedProject?.highlights && (
//                 <div className="mb-8 flex flex-wrap gap-2">
//                   {selectedProject.highlights.map((h, i) => (
//                     <span
//                       key={i}
//                       className="inline-flex items-center gap-1.5 rounded-full border border-[#0706F1]/20 bg-[#0706F1]/5 px-3 py-1 text-xs font-medium text-primary"
//                     >
//                       <CheckCircle size={12} />
//                       {h}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Stats */}
//               {selectedProject?.stats && (
//                 <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
//                   {selectedProject.stats.map((stat, i) => (
//                     <div
//                       key={i}
//                       className="rounded-xl border border-border bg-card p-4 text-center"
//                     >
//                       <p className="text-2xl font-bold text-foreground">{stat.value}</p>
//                       <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Dynamic sections */}
//               {selectedProject?.sections.map((section, si) => (
//                 <div key={si} className="mb-8 last:mb-0">
//                   <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
//                     {section.label}
//                   </p>
//                   <h3 className="mb-3 text-lg font-bold text-foreground sm:text-xl">
//                     {section.heading}
//                   </h3>
//                   {section.description && (
//                     <p className="mb-5 text-sm text-muted-foreground sm:text-base">
//                       {section.description}
//                     </p>
//                   )}

//                   {/* Grid for 3 items, list for others */}
//                   {section.items.length === 3 ? (
//                     <div className="grid gap-3 sm:grid-cols-3">
//                       {section.items.map((item, i) => (
//                         <div
//                           key={i}
//                           className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-[#0706F1]/30"
//                         >
//                           <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#0706F1]/10 text-primary">
//                             {item.icon}
//                           </div>
//                           <p className="mb-1 text-sm font-bold text-foreground">{item.title}</p>
//                           <p className="text-xs text-muted-foreground">{item.description}</p>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <div className="space-y-3">
//                       {section.items.map((item, i) => (
//                         <div
//                           key={i}
//                           className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-[#0706F1]/30"
//                         >
//                           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0706F1]/10 text-primary">
//                             {item.icon}
//                           </div>
//                           <div>
//                             <p className="text-sm font-bold text-foreground">{item.title}</p>
//                             <p className="text-xs text-muted-foreground">{item.description}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </ScrollArea>
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// };

// export default ProjectsSection;

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Leaf,
  Cpu,
  Globe,
  Zap,
  MapPin,
  ExternalLink,
  Code,
  Shield,
  Users,
  Clock,
  CheckCircle,
  Target,
  Settings,
  Award,
  Headphones,
  DoorOpen,
  Sparkles,
  Heart,
  Gamepad2,
  Trophy,
  UsersRound,
  LayoutGrid,
  BookOpen,
  Search,
  ShieldCheck,
  Handshake,
  MessageSquare,
  Briefcase,
  ShoppingCart,
  Rocket,
  GraduationCap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ProjectSection {
  label: string;
  heading: string;
  description?: string;
  items: { title: string; description: string; icon: React.ReactNode }[];
}

interface ProjectStat {
  value: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  accent: "featured" | "popular";
  link?: string;
  sections: ProjectSection[];
  stats?: ProjectStat[];
  highlights?: string[];
}

const projects: Project[] = [
  {
    title: "Greyn",
    description:
      "Scalable technology and climate systems built for verification, impact, and scale beyond borders.",
    tags: ["Climate-Tech", "ESG", "Verification"],
    image: "/greyn.png",
    accent: "featured",
    link: "",
    sections: [
      {
        label: "01 // Foundations",
        heading: "What we stand for",
        items: [
          {
            title: "Climate",
            description: "Verified impact and ESG infrastructure.",
            icon: <Leaf size={20} />,
          },
          {
            title: "Technology",
            description: "Platforms that connect systems, not silos.",
            icon: <Cpu size={20} />,
          },
          {
            title: "Scale",
            description: "Global deployment, remote-first execution.",
            icon: <Globe size={20} />,
          },
        ],
      },
      {
        label: "02 // Methodology",
        heading: "Core Features",
        description:
          "Greyn is architected to eliminate friction in verification and deployment, ensuring that global impact is as measurable as it is scalable.",
        items: [
          {
            title: "Transparent & verifiable",
            description: "Every outcome tracked and reported for real accountability.",
            icon: <Eye size={18} />,
          },
          {
            title: "Execution-first",
            description: "Teams, products, and go-to-market shipped, not theorized.",
            icon: <Zap size={18} />,
          },
          {
            title: "Built for borders",
            description: "Designed for international adoption and measurable impact.",
            icon: <MapPin size={18} />,
          },
        ],
      },
    ],
  },
  {
    title: "Meetech",
    description:
      "We design and develop modern web, mobile, and software solutions. Our mission is to solve real business problems with scalable, secure, and future-focused technology.",
    tags: ["Development", "Software", "Global"],
    image: "/meetech.png",
    accent: "popular",
    link: "",
    highlights: [
      "Founder-led teams",
      "Global clients: UAE & USA",
      "Production-grade systems",
      "No hype, just execution",
    ],
    stats: [
      { value: "12+", label: "Countries" },
      { value: "50+", label: "Enterprise clients" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Support coverage" },
    ],
    sections: [
      {
        label: "01 // Purpose",
        heading: "Our Mission & Vision",
        items: [
          {
            title: "Our Mission",
            description:
              "To design and develop reliable web, app, and software solutions that solve real business problems. We deliver modern, secure, and scalable technology by combining creativity, technical expertise, and a future-focused mindset for clients in Dubai, the USA, and beyond.",
            icon: <Target size={20} />,
          },
          {
            title: "Our Vision",
            description:
              "To become a globally trusted technology partner that transforms ideas into impactful digital products, empowering businesses worldwide through innovation, quality, and scalable solutions.",
            icon: <Eye size={20} />,
          },
        ],
      },
      {
        label: "02 // Trust",
        heading: "Trusted by founders & businesses across UAE, USA & beyond",
        description:
          "From startups to enterprises, we deliver production-grade solutions that scale globally.",
        items: [
          {
            title: "Delivery across time zones",
            description: "Clear processes, no surprises.",
            icon: <Clock size={18} />,
          },
          {
            title: "Built to scale with you",
            description: "Long-term partnerships.",
            icon: <Globe size={18} />,
          },
          {
            title: "SOC2 & GDPR Compliant",
            description: "24/7 Support Coverage.",
            icon: <Shield size={18} />,
          },
        ],
      },
    ],
  },
  {
    title: "Acceptopia",
    description:
      "A modern, gamified platform designed to transform the US university application journey into an interactive, motivating, and stress-free experience.",
    tags: ["EdTech", "Gamification", "Platform"],
    image: "/acceptopia.png",
    accent: "popular",
    link: "",
    highlights: [
      "Gamified application journey",
      "Multiplayer collaboration",
      "AI-powered guidance",
      "Group accountability",
    ],
    sections: [
      {
        label: "01 // Brand Introduction",
        heading: "What is Acceptopia",
        description:
          "Acceptopia is a modern, gamified platform designed to transform the US university application journey into an interactive, motivating, and stress-free experience.",
        items: [
          {
            title: "Game-driven experience",
            description:
              "Instead of treating college applications like a checklist, Acceptopia turns the entire process into a game with levels, achievements, and milestones.",
            icon: <Gamepad2 size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "Oatify",
    description:
      "A trusted breakfast brand promoting balanced living through gluco-friendly nutrition that supports stable energy levels and healthier lifestyles.",
    tags: ["Food-Tech", "Health", "Wellness"],
    image: "/oatify.jpeg",
    accent: "featured",
    link: "",
    sections: [
      {
        label: "01 // Vision",
        heading: "Our Vision",
        description: "Oatify aims to become a trusted and preferred breakfast brand.",
        items: [
          {
            title: "Trusted breakfast brand",
            description: "Building trust through consistent quality.",
            icon: <Award size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "StudySphere",
    description: "AI-powered SAT prep & global student support platform with personalized learning tools and 24/7 mentorship.",
    tags: ["EdTech", "AI", "Academic Support"],
    image: "/studysphere.png",
    accent: "featured",
    link: "https://studyspheretutorial.agencyfbinternational.com",
    stats: [
      { value: "2,000+", label: "Students" },
      { value: "10+", label: "Countries" },
      { value: "+180", label: "Avg. SAT Score" },
    ],
    sections: [
      {
        label: "01 // Purpose",
        heading: "Personalized Learning",
        items: [
          {
            title: "AI-Powered Prep",
            description: "Customized SAT preparation tailored to individual student weaknesses.",
            icon: <Rocket size={20} />,
          },
          {
            title: "Global Mentorship",
            description: "24/7 access to mentors for academic and emotional support.",
            icon: <GraduationCap size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "Demeter",
    description: "Mobile app that scans products to reveal health, halal, environmental, and ethical ratings instantly.",
    tags: ["AI", "Consumer Transparency", "Sustainability"],
    image: "/demeter.png",
    accent: "popular",
    link: "",
    sections: [
      {
        label: "01 // Methodology",
        heading: "Conscious Consumption",
        description: "Demeter empowers users to make informed purchasing decisions based on ethics and health.",
        items: [
          {
            title: "Instant Scanning",
            description: "Get immediate health and halal ratings for consumer goods.",
            icon: <Search size={20} />,
          },
          {
            title: "Ethical Verification",
            description: "Deep dive into environmental and ethical impact of brands.",
            icon: <Leaf size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "Rise and Restore",
    description: "Pakistan's first trans-inclusive youth-led NGO, delivering entrepreneurship and digital literacy.",
    tags: ["Nonprofit", "Social Impact", "Gender Equity"],
    image: "/rise-restore.png",
    accent: "featured",
    link: "https://riseandrestore.io",
    stats: [
      { value: "800+", label: "Youth Trained" },
      { value: "60%", label: "Female Participation" },
      { value: "3", label: "Micro-enterprises" },
    ],
    sections: [
      {
        label: "01 // Mission",
        heading: "Empowerment & Equity",
        items: [
          {
            title: "Trans-Inclusive",
            description: "Breaking barriers in conservative regions through inclusive training.",
            icon: <Heart size={20} />,
          },
          {
            title: "Digital Literacy",
            description: "Equipping underserved youth with the tools for the digital economy.",
            icon: <Users size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "IntroUp",
    description: "Real-time mock interviews with AI-driven feedback to improve confidence, articulation, and job readiness.",
    tags: ["CareerTech", "AI Simulation", "HR"],
    image: "/introup.png",
    accent: "popular",
    link: "",
    sections: [
      {
        label: "01 // Capability",
        heading: "Bridge to Employment",
        items: [
          {
            title: "AI Feedback",
            description: "Immediate analysis of articulation and confidence levels.",
            icon: <MessageSquare size={20} />,
          },
          {
            title: "Placement Success",
            description: "Helped 150+ students secure internships and jobs.",
            icon: <Briefcase size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "IronEdge Sports",
    description: "Affordable, high-quality sports equipment designed for young athletes in developing countries.",
    tags: ["Sports", "E-commerce", "Community"],
    image: "/ironedge.png",
    accent: "popular",
    link: "",
    sections: [
      {
        label: "01 // Community Impact",
        heading: "Empowering Athletes",
        items: [
          {
            title: "Sponsorships",
            description: "Sponsored 25+ local sports teams for regional championships.",
            icon: <Trophy size={20} />,
          },
          {
            title: "Accessibility",
            description: "Reducing the financial barrier to entry for competitive sports.",
            icon: <ShoppingCart size={20} />,
          },
        ],
      },
    ],
  },
  {
    title: "Future Founders Bootcamp",
    description: "Free virtual business course for youth in developing countries, teaching startup fundamentals.",
    tags: ["Education", "Entrepreneurship", "Social Impact"],
    image: "/bootcamp.png",
    accent: "featured",
    link: "",
    sections: [
      {
        label: "01 // Curriculum",
        heading: "Building Tomorrow",
        items: [
          {
            title: "Business Fundamentals",
            description: "Teaching core startup principles to students across 5 countries.",
            icon: <BookOpen size={20} />,
          },
          {
            title: "Measurable Growth",
            description: "Average business knowledge gains of 60% among participants.",
            icon: <Award size={20} />,
          },
        ],
      },
    ],
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => (
  <article
    onClick={onClick}
    className="group relative h-[350px] cursor-pointer overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-700 hover:shadow-xl  hover:shadow-[#0706F1]/20 sm:h-[400px] lg:h-[550px]"
  >
    <img
      src={project.image}
      alt={project.title}
      className="h-full w-full object-cover grayscale-[0.4] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

    <div className="absolute bottom-0 left-0 w-full space-y-3 p-4 sm:space-y-4 sm:p-6 lg:p-12">
      <div className="flex gap-2">
        <span className="rounded bg-[#0706F1]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-primary sm:px-3 sm:text-[10px]">
          {project.accent === "featured" ? "Featured" : "Popular"}
        </span>
      </div>

      <div>
        <h3 className="text-xl font-black uppercase leading-tight text-foreground sm:text-2xl lg:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-3 sm:text-sm">
          {project.description}
        </p>
      </div>

      <div className="flex translate-y-4 items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:gap-3 sm:text-[11px]">
        Learn More <ArrowRight size={14} className="sm:h-4 sm:w-4" />
      </div>
    </div>

    <div className="absolute right-4 top-4 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:right-6 sm:top-6 lg:right-10 lg:top-10">
      <div className="rounded-xl bg-[#0706F1] text-primary p-2.5  shadow-2xl shadow-[#0706F1]/40 sm:rounded-2xl sm:p-3 lg:p-4">
        <Eye size={16} className="sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
      </div>
    </div>
  </article>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  // NEW: Track if detail was opened from the gallery popup to handle back navigation correctly
  const [openedFromPortfolio, setOpenedFromPortfolio] = useState(false);

  // Handle closing detail view
  const handleDetailClose = () => {
    setSelectedProject(null);
    // If it was opened from the ecosystem list, go back to it
    if (openedFromPortfolio) {
      setShowAllProjects(true);
      setOpenedFromPortfolio(false);
    }
  };

  return (
    <section
      id="work"
      className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-16 sm:px-6 md:py-20 lg:py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-14 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-4 sm:space-y-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-[#0706F1]" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              What we
              <br />
              Build
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
              Modern solutions that drive growth and scale with you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={() => {
                setShowAllProjects(true);
                setOpenedFromPortfolio(false);
              }}
              variant="outline"
              className="group h-auto border-2 text-primary border-[#0706F1]/20 bg-transparent px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em]  transition-all hover:border-[#0706F1] hover:bg-[#0706F1] hover:text-primary"
            >
              View All Projects
              <LayoutGrid size={16} className="ml-2 transition-transform group-hover:rotate-12" />
            </Button>
          </motion.div>
        </div>

        {/* Cards grid (Initial view) */}
        <motion.ul
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {projects.slice(0, 3).map((project) => (
            <motion.li key={project.title} variants={itemVariants}>
              <ProjectCard
                project={project}
                onClick={() => {
                  setOpenedFromPortfolio(false);
                  setSelectedProject(project);
                }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* View All Projects Dialog */}
      <Dialog open={showAllProjects} onOpenChange={setShowAllProjects}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-7xl overflow-hidden border-border bg-background p-0">
          {/* Accessibility Header */}
          <DialogHeader className="sr-only">
            <DialogTitle>Our Ecosystem - All Projects</DialogTitle>
          </DialogHeader>

          <ScrollArea className="h-full max-h-[90vh]">
            <div className="p-6 sm:p-10 lg:p-16">
              <div className="mb-12 text-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                  Full Portfolio
                </span>
                <h2 className="mt-2 text-3xl font-black uppercase tracking-tighter text-foreground sm:text-5xl">
                  Our Ecosystem
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard
                    key={`all-${project.title}`}
                    project={project}
                    onClick={() => {
                      setOpenedFromPortfolio(true); // Flag that we came from here
                      setShowAllProjects(false);
                      setSelectedProject(project);
                    }}
                  />
                ))}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={handleDetailClose}>
        <DialogContent className="max-h-[90vh] w-[95vw] max-w-3xl overflow-hidden border-border bg-background p-0">
          <ScrollArea className="max-h-[90vh]">
            <div className="p-5 sm:p-8">
              <DialogHeader className="mb-6">
                {selectedProject?.image && (
                  <div className="mb-5 overflow-hidden rounded-xl">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                )}

                <div>
                  <DialogTitle className="text-2xl font-bold text-foreground sm:text-3xl">
                    {selectedProject?.title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-sm text-muted-foreground sm:text-base">
                    {selectedProject?.description}
                  </DialogDescription>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              {selectedProject?.stats && (
                <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {selectedProject.stats.map((stat, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-card p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              )}

              {selectedProject?.sections.map((section, si) => (
                <div key={si} className="mb-8 last:mb-0">
                  <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                    {section.label}
                  </p>
                  <h3 className="mb-3 text-lg font-bold text-foreground sm:text-xl">
                    {section.heading}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 rounded-xl border border-border bg-card p-4 transition-colors hover:border-[#0706F1]/30"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0706F1]/10 text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;