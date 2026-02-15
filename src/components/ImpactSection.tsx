import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  GraduationCap,
  Globe,
  Handshake,
  Mic,
  Heart,
  Shield,
  Rocket,
  BookOpen,
  Lightbulb,
  Users,
} from "lucide-react";

const recognition = [
  {
    title: "Awards & Recognition",
    description:
      "Recognition and support through Oxford-affiliated programs and global scholarship initiatives.",
    tags: ["Oxford Scholars", "Scholarships", "Global Programs"],
    icon: <Trophy size={22} />,
  },
  {
    title: "Nominations",
    description:
      "Nominated for peace, changemaking, and youth leadership awards at regional and global levels.",
    tags: ["Peace Prizes", "Changemaker Awards"],
    icon: <Award size={22} />,
  },
];

const programs = [
  {
    name: "Yale",
    description: "Leadership and global affairs programs.",
    icon: <GraduationCap size={20} />,
  },
  {
    name: "Google",
    description: "Certifications and innovation programs.",
    icon: <Lightbulb size={20} />,
  },
  {
    name: "TKS",
    description: "The Knowledge Society — innovation and future-building.",
    icon: <Rocket size={20} />,
  },
  {
    name: "LaunchX",
    description: "Entrepreneurship and venture-building.",
    icon: <BookOpen size={20} />,
  },
  {
    name: "LeanGap",
    description: "Lean methodology and execution frameworks.",
    icon: <Shield size={20} />,
  },
];

const citizenship = [
  {
    title: "Global Youth Advocate",
    description:
      "Partnerships and initiatives with UNICEF in youth, education, and sustainable development.",
    tag: "UNICEF",
    icon: <Heart size={22} />,
  },
  {
    title: "Diplomatic Representation",
    description:
      "Representing organizations and causes on global stages — policy, sustainability, and youth.",
    tag: "Global Ambassador",
    icon: <Handshake size={22} />,
  },
  {
    title: "Public Address",
    description:
      "Speaking and facilitating at conferences, panels, and global forums on impact, tech, and leadership.",
    tag: "Conferences",
    icon: <Mic size={22} />,
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ImpactSection = () => {
  return (
    <section id="impact" className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl space-y-4 sm:mb-16 sm:space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#0706F1]" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Global Recognition & Service
            </span>
          </div>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Impact<span className="text-primary">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            Proof of responsibility.
          </p>
        </motion.div>

        {/* 01 — Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            01 / Recognition
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Awards & Nominations</h3>
        </motion.div>

        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {recognition.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-gradient-to-br from-card via-card to-primary/[0.03] p-7 transition-all duration-500 hover:border-[#0706F1]/30 hover:shadow-xl hover:shadow-[#0706F1]/5 sm:p-9"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#0706F1]/5 blur-2xl transition-all duration-700 group-hover:bg-[#0706F1]/10" />
              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0706F1]/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-[#0706F1]/15 group-hover:ring-primary/40">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-xl font-black uppercase tracking-tight text-foreground sm:text-2xl">
                  {item.title}
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#0706F1]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 02 — Academic & Corporate Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            02 / Academic & Corporate Path
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Global Programs</h3>
        </motion.div>

        <motion.div
          className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0706F1]/5"
            >
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[#0706F1]/5 blur-xl transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-[#0706F1]/10" />
              <div className="relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-[#0706F1]/15 group-hover:ring-primary/40">
                  {prog.icon}
                </div>
                <h4 className="mb-1 text-base font-bold text-foreground">{prog.name}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {prog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 03 — Global Citizenship */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            03 / Global Citizenship
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Leadership & Service</h3>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {citizenship.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0706F1]/5"
            >
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 to-primary/10" />
              <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-[#0706F1]/15 group-hover:ring-primary/40">
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-[#0706F1]/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {item.tag}
                  </span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
