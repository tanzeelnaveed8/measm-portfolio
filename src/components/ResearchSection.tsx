import { motion } from "framer-motion";
import {
  Lightbulb,
  Leaf,
  Cpu,
  FileText,
  ScrollText,
  ClipboardList,
  BookMarked,
  ArrowRight,
} from "lucide-react";

const focusAreas = [
  {
    title: "Digital transformation of SMEs",
    description:
      "How small and medium enterprises adopt technology, scale digitally, and compete in global markets.",
    icon: <Lightbulb size={22} />,
  },
  {
    title: "Sustainability ecosystems",
    description:
      "Systems thinking for climate, ESG, and impact from verification to scalable solutions.",
    icon: <Leaf size={22} />,
  },
  {
    title: "Technology adoption",
    description:
      "Barriers, enablers, and frameworks for adoption across sectors and geographies.",
    icon: <Cpu size={22} />,
  },
];

const publications = [
  {
    type: "Journal Article",
    title: "SME Digital Resilience",
    description:
      "An empirical study on how digital transformation frameworks enable small enterprises to navigate global supply chain disruptions.",
    icon: <FileText size={20} />,
  },
  {
    type: "White Paper",
    title: "The ESG Verification Gap",
    description:
      "Analyzing the trust deficit in sustainability reporting and the role of decentralized verification ecosystems.",
    icon: <ScrollText size={20} />,
  },
  {
    type: "Case Study",
    title: "Emerging Tech Adoption",
    description:
      "Frameworks for integrating AI and automation in traditional manufacturing sectors across Southeast Asia.",
    icon: <ClipboardList size={20} />,
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

const ResearchSection = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32">
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-primary" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Research Portfolio
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            Research<span className="text-primary">.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Intellectual authority, depth, and credibility.
          </p>
        </motion.div>

        {/* Focus Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            01 / Core Specialization
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Research Focus Areas</h3>
        </motion.div>

        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {focusAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
            >
              <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-primary/5 blur-xl transition-all duration-500 group-hover:h-28 group-hover:w-28 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/40">
                  {area.icon}
                </div>
                <h4 className="mb-2 text-base font-bold text-foreground sm:text-lg">
                  {area.title}
                </h4>
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Deep Dive <ArrowRight size={12} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            02 / Scholarly Impact
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Publications</h3>
        </motion.div>

        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Top colored bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 to-primary/10" />

              <div className="p-6 sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/40">
                    {pub.icon}
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {pub.type}
                  </span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-foreground sm:text-xl">
                  {pub.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {pub.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Literary Debut */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            03 / Literary Debut
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-[1.5rem] border border-border bg-gradient-to-br from-card via-card to-primary/[0.03] transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all duration-700 group-hover:bg-primary/10" />

          <div className="relative flex flex-col sm:flex-row">
            <div className="flex items-center justify-center p-8 sm:w-56 sm:p-12">
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/40 sm:h-28 sm:w-28">
                <BookMarked size={40} className="sm:h-12 sm:w-12" />
              </div>
            </div>
            <div className="flex-1 p-6 sm:py-10 sm:pr-10">
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                Book
              </span>
              <h4 className="mt-2 text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                The Young Capitalist
              </h4>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A literary debut exploring the mindset, challenges, and bold decisions behind building ventures at a young age in a global economy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
