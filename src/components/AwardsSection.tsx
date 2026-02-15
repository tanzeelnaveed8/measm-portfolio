import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  Globe,
  Star,
  Medal,
  Crown,
  Target,
  Users,
  BookOpen,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const majorAwards = [
  {
    title: "Global Recognition Award 2025",
    description:
      "For outstanding youth leadership and innovation with measurable global impact.",
    icon: <Trophy size={22} />,
    tag: "Global Impact",
  },
  {
    title: "Global Youth Leadership Award 2025",
    description:
      "Honoring exceptional contributions to youth empowerment and systemic change. Author of The Young Capitalist: Became the world's youngest research-based author in the domains of business and finance.",
    icon: <Crown size={22} />,
    tag: "Leadership",
  },
  {
    title: "Official World Record (Europe)",
    description:
      "Recognized as the Youngest Founder of a Multi-Sector Social Enterprise.",
    icon: <Star size={22} />,
    tag: "World Record",
  },
];

const nominations = [
  {
    title: "International Children's Peace Prize",
    description:
      "Acknowledged for advancing peace, education, and equality on a global scale.",
    icon: <Globe size={20} />,
  },
  {
    title: "Global Student Prize 2025",
    description:
      "Among the world's top youth changemakers shaping the future of education and innovation.",
    icon: <Target size={20} />,
  },
  {
    title: "Gloria Barron Prize for Young Heroes",
    description:
      "Celebrated for demonstrated courage and leadership in community transformation.",
    icon: <Medal size={20} />,
  },
  {
    title: "Tällberg-SNF-Eliasson Global Leadership Prize 2025",
    description:
      "Recognized for outstanding leadership with global impact and policy influence.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Ashoka Young Changemakers",
    description:
      "Selected for entrepreneurial work driving sustainable social innovation.",
    icon: <Award size={20} />,
  },
];

const leadership = [
  {
    title: "Global Youth Ambassador",
    organization: "Theirworld",
    description: "Advocating for education equity and global youth empowerment.",
    icon: <Globe size={20} />,
  },
  {
    title: "Director Nominee",
    organization: "Global Peace Chain",
    description: "Representing youth leadership in peace and diplomacy.",
    icon: <Users size={20} />,
  },
  {
    title: "Chapter Leader",
    organization: "State of Youth",
    description: "Leading initiatives for youth engagement and empowerment.",
    icon: <Target size={20} />,
  },
  {
    title: "Ambassador",
    organization: "Girl Rising & YLC 1.0",
    description: "Promoting gender equity, education, and sustainable development.",
    icon: <Sparkles size={20} />,
  },
  {
    title: "Public Relations & Engagement Officer",
    organization: "Youth Development Network (YDN)",
    description:
      "Spearheading strategic communications, partnerships, and youth engagement campaigns for one of Pakistan's most recognized development organizations.",
    icon: <Briefcase size={20} />,
  },
];

const academicHonors = [
  {
    title: "Gold Medalist",
    description:
      "Business, Finance, and Economics Olympiads & Competitions. Consistently recognized for academic excellence and problem-solving at national and international levels.",
    icon: <Medal size={22} />,
  },
  {
    title: "Delta Epsilon Tau National Honor Society",
    description:
      "Alpha Epsilon Chapter (Penn Foster). Personalized Membership Certificate (2025) awarded for exceptional academic achievement and distinction in distance learning.",
    icon: <GraduationCap size={22} />,
  },
  {
    title: "Gold Key of Excellence (2025)",
    description:
      "Delta Epsilon Tau National Honor Society. Presented as a symbol of honor and recognition for academic excellence, integrity, and leadership in education.",
    icon: <BookOpen size={22} />,
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

const AwardsSection = () => {
  return (
    <section id="awards" className="relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-[#0706F1]/5 blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-[#0706F1]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl space-y-3 sm:mb-12 sm:space-y-4 md:mb-16 md:space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0706F1]/20 bg-[#0706F1]/5 px-3 py-1.5 backdrop-blur-sm sm:gap-3 sm:px-4 sm:py-2">
            <Trophy size={14} className="text-primary sm:h-4 sm:w-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]">
              Awards & Global Recognitions
            </span>
          </div>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Recognition<span className="text-primary">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            Proven track record of impact, innovation, and leadership honored by world-renowned
            institutions and global organizations.
          </p>
        </motion.div>

        {/* 01 Major Awards & World Records */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <p className="mb-1 text-[10px] font-medium uppercase tracking-widest text-primary sm:text-xs">
            01 / Major Awards & World Records
          </p>
          <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            Global Recognition & Records
          </h3>
        </motion.div>

        <motion.div
          className="mb-16 grid gap-4 sm:mb-20 sm:gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {majorAwards.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-[#0706F1]/20 bg-gradient-to-br from-primary/[0.08] via-card to-card p-6 transition-all duration-500 hover:border-[#0706F1]/40 hover:shadow-xl  hover:shadow-[#0706F1]/20 hover:-translate-y-2 sm:rounded-3xl sm:p-8 md:p-10"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Glow effect */}
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#0706F1]/20 blur-3xl transition-all duration-700 group-hover:bg-[#0706F1]/30" />

              {/* Number badge */}
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#0706F1]/10 text-xs font-black text-primary ring-2 ring-primary/20 sm:right-6 sm:top-6 sm:h-10 sm:w-10 sm:text-sm">
                {index + 1}
              </div>

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0706F1]/20 to-[#0706F1]/5 text-primary ring-2 ring-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/50 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                  {item.icon}
                </div>
                <span className="mb-3 inline-block rounded-full bg-[#0706F1]/15 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary ring-1 ring-primary/20 sm:mb-4 sm:px-4 sm:py-1 sm:text-[11px]">
                  {item.tag}
                </span>
                <h4 className="mb-2 text-lg font-black uppercase leading-tight tracking-tight text-foreground sm:mb-3 sm:text-xl md:text-2xl">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 02 Global Nominations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0706F1]/10 text-xs font-black text-primary ring-1 ring-primary/20 sm:h-8 sm:w-8">
              02
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70 sm:text-xs">
                Global Nominations
              </p>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                International Recognition
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
          {nominations.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0706F1]/10 sm:rounded-2xl sm:p-6"
            >
              {/* Gradient line on top */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#0706F1]/5 blur-2xl transition-all duration-500 group-hover:h-32 group-hover:w-32 group-hover:bg-[#0706F1]/10" />
              <div className="relative">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0706F1]/15 to-[#0706F1]/5 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/40 sm:mb-4 sm:h-12 sm:w-12 sm:rounded-xl">
                  {item.icon}
                </div>
                <h4 className="mb-1.5 text-sm font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:mb-2 sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 03 Leadership Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0706F1]/10 text-xs font-black text-primary ring-1 ring-primary/20 sm:h-8 sm:w-8">
              03
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70 sm:text-xs">
                Leadership Positions & Ambassadorships
              </p>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">Global Service</h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 grid gap-4 sm:mb-20 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {leadership.map((item) => (
            <motion.div
              key={item.title + item.organization}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-card to-primary/[0.02] transition-all duration-500 hover:border-[#0706F1]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0706F1]/10 sm:rounded-2xl"
            >
              {/* Top gradient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary via-primary/60 to-primary/20" />

              <div className="p-5 sm:p-6 md:p-7">
                <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4 sm:gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#0706F1]/15 to-[#0706F1]/5 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/40 sm:h-11 sm:w-11 sm:rounded-xl">
                    {item.icon}
                  </div>
                  <span className="rounded-full bg-[#0706F1]/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-primary ring-1 ring-primary/20 sm:px-3 sm:py-1 sm:text-[10px]">
                    {item.organization}
                  </span>
                </div>
                <h4 className="mb-1.5 text-base font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:mb-2 sm:text-lg md:text-xl">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  {item.description}
                </p>
              </div>

              {/* Bottom glow */}
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-[#0706F1]/5 blur-2xl transition-all duration-500 group-hover:bg-[#0706F1]/10" />
            </motion.div>
          ))}
        </motion.div>

        {/* 04 Academic Honors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 md:mb-10"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0706F1]/10 text-xs font-black text-primary ring-1 ring-primary/20 sm:h-8 sm:w-8">
              04
            </span>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-widest text-primary/70 sm:text-xs">
                Academic Honors
              </p>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
                Excellence in Education
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
          {academicHonors.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-[#0706F1]/20 bg-gradient-to-br from-card via-primary/[0.03] to-card p-6 transition-all duration-500 hover:border-[#0706F1]/40 hover:shadow-xl  hover:shadow-[#0706F1]/20 hover:-translate-y-2 sm:rounded-3xl sm:p-8 md:p-10"
            >
              {/* Decorative corner accent */}
              <div className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-primary/10 to-transparent" />

              {/* Glow effect */}
              <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-[#0706F1]/20 blur-3xl transition-all duration-700 group-hover:bg-[#0706F1]/30" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0706F1]/20 to-[#0706F1]/5 text-primary ring-2 ring-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/50 sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-lg font-black uppercase leading-tight tracking-tight text-foreground sm:mb-3 sm:text-xl md:text-2xl">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm md:text-base">
                  {item.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
