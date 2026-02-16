import { motion } from "framer-motion";
import {
  Building2,
  Leaf,
  Monitor,
  GraduationCap,
  Globe,
  Layers,
  Wifi,
  Users,
  Settings,
  ArrowRight,
} from "lucide-react";

const ventureAreas = [
  {
    title: "Climate-tech",
    description:
      "Verified impact, ESG infrastructure, and solutions built for scale and accountability.",
    icon: <Leaf size={22} />,
  },
  {
    title: "Digital platforms",
    description:
      "Products and systems that connect stakeholders, not silos, designed for international adoption.",
    icon: <Monitor size={22} />,
  },
  {
    title: "Education & innovation",
    description:
      "Programs, research, and capacity-building for the next generation of builders and leaders.",
    icon: <GraduationCap size={22} />,
  },
  {
    title: "Global services",
    description:
      "Remote-first delivery, distributed teams, and operations that work across borders and time zones.",
    icon: <Globe size={22} />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Independent scalability",
    description:
      "Each venture is designed to grow on its own with clear ownership, metrics, and path to sustainability.",
  },
  {
    step: "02",
    title: "International readiness",
    description:
      "From day one, ventures are built for global deployment: compliance, localization, and distributed execution.",
  },
  {
    step: "03",
    title: "Transparent governance",
    description:
      "Reporting, verification, and accountability are built into how we operate and measure impact.",
  },
];

const operatingModel = [
  {
    title: "Remote-first",
    description:
      "Teams and operations are distributed by design, no single HQ required to deliver at scale.",
    icon: <Wifi size={22} />,
  },
  {
    title: "Distributed execution",
    description:
      "Work happens where talent and opportunity are; coordination and systems keep everything aligned.",
    icon: <Users size={22} />,
  },
  {
    title: "System-based growth",
    description:
      "Processes, platforms, and governance scale with the portfolio, not ad hoc, but repeatable.",
    icon: <Settings size={22} />,
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

const EcosystemSection = () => {
  return (
    <section className="relative bg-[#141414]/50 overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32">
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
              Strategic Ecosystem
            </span>
          </div>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Ventures<span className="text-primary">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            Meetech Labs & Ecosystem scale beyond one project.
          </p>
        </motion.div>

        {/* Parent org + Multi-sector - full width hero cards */}
        <motion.div
          className="mb-16 grid gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[
            {
              icon: <Building2 size={24} />,
              title: "Parent organization",
              desc: "Meetech Labs builds and operates ventures across sectors, providing structure, capital readiness, and shared infrastructure.",
            },
            {
              icon: <Layers size={24} />,
              title: "Multi-sector focus",
              desc: "Climate-tech, digital platforms, education, and global services united by execution-first and transparent governance.",
            },
          ].map((card) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/[0.03] p-6 transition-all duration-500 hover:border-[#0706F1]/30 hover:shadow-xl hover:shadow-[#0706F1]/5 sm:rounded-[1.5rem] sm:p-7 md:p-9"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#0706F1]/5 blur-2xl transition-all duration-700 group-hover:bg-[#0706F1]/10 sm:-right-8 sm:-top-8 sm:h-32 sm:w-32" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary ring-1 ring-focus-ring/20 transition-all duration-300 group-hover:bg-[#0706F1]/15 group-hover:ring-focus-ring/40 sm:mb-5 sm:h-14 sm:w-14 sm:rounded-2xl">
                  {card.icon}
                </div>
                <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-foreground sm:mb-3 sm:text-xl md:text-2xl">
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Venture Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            02 / Vertical Focus
          </p>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">Venture Areas</h3>
        </motion.div>

        <motion.div
          className="mb-16 grid grid-cols-1 gap-4 sm:mb-20 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {ventureAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0706F1]/5 sm:rounded-2xl sm:p-6"
            >
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[#0706F1]/5 blur-xl transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-[#0706F1]/10 sm:-bottom-6 sm:-right-6 sm:h-20 sm:w-20 sm:group-hover:h-28 sm:group-hover:w-28" />
              <div className="relative">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0706F1]/10 text-primary ring-1 ring-focus-ring/20 transition-all duration-300 group-hover:bg-[#0706F1]/15 group-hover:ring-focus-ring/40 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  {area.icon}
                </div>
                <h4 className="mb-2 text-sm font-bold text-foreground sm:text-base">{area.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How Ventures Are Built */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            03 / Process
          </p>
          <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
            How Ventures Are Built
          </h3>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Our process is designed to turn high-impact theories into sustainable, market-ready realities through three foundational layers.
          </p>
        </motion.div>

        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {processSteps.map((step) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0706F1]/5 sm:p-8"
            >
              <span className="absolute -left-2 top-4 text-[5rem] font-black leading-none text-[#F8FAFC]/[0.04] sm:text-[6rem]">
                {step.step}
              </span>
              <div className="relative pt-10 sm:pt-12">
                <h4 className="mb-3 text-lg font-bold text-foreground sm:text-xl">
                  {step.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Operating Model */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            04 / Framework
          </p>
          <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">
            Operating Model
          </h3>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            A framework for repeatable success across borders.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {operatingModel.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0706F1]/5"
            >
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[#0706F1]/5 blur-xl transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-[#0706F1]/10" />
              <div className="relative flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-[#0706F1]/15 group-hover:ring-primary/40">
                  {item.icon}
                </div>
                <div>
                  <h4 className="mb-1 text-base font-bold text-foreground">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcosystemSection;
