import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Code,
  Lightbulb,
  TrendingUp,
  Users,
  Download,
  Calendar,
  MapPin,
} from "lucide-react";

const experience = [
  {
    role: "Founder & CEO",
    company: "Meetech Labs",
    location: "Remote · Global",
    period: "2021 - Present",
    description:
      "Leading a founder-led software development company delivering production-grade web, mobile, and SaaS solutions to clients across UAE, USA, and beyond.",
    achievements: [
      "Built and scaled remote-first engineering teams across 12+ countries",
      "Delivered 50+ enterprise-grade projects with 99.9% uptime SLA",
      "Established SOC2 & GDPR compliant development processes",
    ],
  },
  {
    role: "Founder",
    company: "Greyn",
    location: "Remote · Global",
    period: "2022 - Present",
    description:
      "Building scalable climate-tech infrastructure for ESG verification and impact measurement across borders.",
    achievements: [
      "Developed verification systems for transparent climate impact tracking",
      "Partnered with international organizations for global deployment",
      "Created frameworks for measurable, scalable environmental outcomes",
    ],
  },
  {
    role: "Founder",
    company: "DoorBeyond",
    location: "Remote · Global",
    period: "2023 - Present",
    description:
      "Strategic branding and creative agency transforming bold ideas into lasting brand identities.",
    achievements: [
      "Rebranded 20+ companies across tech, health, and finance sectors",
      "Developed brand strategies that doubled client conversion rates",
      "Built reputation for founder-led, execution-first creative work",
    ],
  },
];

const education = [
  {
    degree: "Leadership & Global Affairs",
    institution: "Yale University",
    period: "2024",
    type: "Program",
  },
  {
    degree: "Innovation & Future-Building",
    institution: "The Knowledge Society (TKS)",
    period: "2023",
    type: "Program",
  },
  {
    degree: "Entrepreneurship & Venture-Building",
    institution: "LaunchX",
    period: "2023",
    type: "Program",
  },
  {
    degree: "Oxford Scholars Program",
    institution: "Oxford University",
    period: "2022",
    type: "Scholarship",
  },
];

const skills = [
  {
    category: "Leadership",
    items: ["Strategic Planning", "Team Building", "Global Operations", "Founder-led Execution"],
    icon: <Users size={20} />,
  },
  {
    category: "Technical",
    items: ["Full-Stack Development", "Cloud Architecture", "DevOps", "System Design"],
    icon: <Code size={20} />,
  },
  {
    category: "Business",
    items: ["Venture Building", "Product Strategy", "Go-to-Market", "Fundraising"],
    icon: <TrendingUp size={20} />,
  },
  {
    category: "Impact",
    items: ["Climate-Tech", "ESG Frameworks", "Youth Development", "Policy Advocacy"],
    icon: <Lightbulb size={20} />,
  },
];

const certifications = [
  "Google Innovation & Certifications",
  "LeanGap Methodology & Execution",
  "UNICEF Youth Advocacy",
  "Global Ambassador Programs",
];

const languages = [
  { name: "English", level: "Native" },
  { name: "Urdu", level: "Native" },
  { name: "Arabic", level: "Conversational" },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-12 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
                Professional Journey
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-5xl md:text-6xl">
              Resume<span className="text-primary">.</span>
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
              Building systems, leading teams, creating impact.
            </p>
          </div>

          <button className="group flex items-center gap-2 rounded-full border border-primary bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30">
            <Download size={16} />
            Download CV
          </button>
        </motion.div>

        {/* 01 — Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            01 / Experience
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Professional Background
          </h3>
        </motion.div>

        <motion.div
          className="mb-20 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-all duration-700 group-hover:bg-primary/10" />

              <div className="relative p-6 sm:p-8">
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">
                      {exp.role}
                    </h4>
                    <p className="text-base font-medium text-primary sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:text-right">
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1.5 sm:justify-end">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 02 — Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            02 / Education
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            Academic & Programs
          </h3>
        </motion.div>

        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {education.map((edu, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/5 blur-xl transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-primary/10" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/40">
                  <GraduationCap size={20} />
                </div>
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                  {edu.type}
                </span>
                <h4 className="mb-1 text-base font-bold text-foreground sm:text-lg">
                  {edu.degree}
                </h4>
                <p className="mb-1 text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground/70">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 03 — Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            03 / Skills & Expertise
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Core Competencies</h3>
        </motion.div>

        <motion.div
          className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-primary/5 blur-xl transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-primary/10" />

              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/40">
                  {skill.icon}
                </div>
                <h4 className="mb-3 text-base font-bold text-foreground">{skill.category}</h4>
                <div className="space-y-1.5">
                  {skill.items.map((item, j) => (
                    <p key={j} className="text-xs text-muted-foreground">
                      • {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 04 — Additional */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                04 / Certifications
              </p>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Professional Credentials
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Award size={16} />
                  </div>
                  <p className="text-sm text-foreground">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
                05 / Languages
              </p>
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Communication
              </h3>
            </div>

            <div className="space-y-3">
              {languages.map((lang, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Globe size={16} />
                    </div>
                    <p className="text-sm font-medium text-foreground">{lang.name}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                    {lang.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
