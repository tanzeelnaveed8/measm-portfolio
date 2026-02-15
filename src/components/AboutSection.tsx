import { motion } from "framer-motion";
import { Globe, Users, Rocket, Trophy, Target } from "lucide-react";

const stats = [
  { icon: Globe, value: "15+", label: "Countries Impacted" },
  { icon: Users, value: "1000+", label: "Youth Trained" },
  { icon: Rocket, value: "10+", label: "Ventures Founded" },
  { icon: Trophy, value: "5+", label: "Awards & Recognitions" },
];

const tags = ["Operating globally", "Remote-first", "Founder-led"];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header - matching style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-xl space-y-6"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-12 bg-[#0706F1]" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              About Me
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            Real-world
            <br />
            problems<span className="text-primary">.</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            I build systems that solve real-world problems at scale.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-14">
          {/* Left column - text (3/5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4 sm:space-y-5">
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg">
                I am a young founder, researcher, and global impact builder leading multi-sector ventures across climate-tech, ESG infrastructure, technology platforms, and digital services.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                I operate remote-first, globally distributed teams, build scalable products, publish research, and launch solutions designed for international adoption and measurable impact.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                My work sits at the intersection of technology, sustainability, and execution, focused on transparency, verification, and systems that scale beyond borders.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
              {tags.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-full border border-[#0706F1]/20 bg-[#0706F1]/5 px-4 py-1.5 text-xs font-medium text-primary sm:text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-[#0706F1]/30 sm:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground sm:text-xl">The Mission</h3>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                I am the Founder and Executive Lead of Meetech Labs, a parent organization that builds and operates ventures across climate-tech, technology platforms, education, and digital infrastructure.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                My approach has always been execution-first. Instead of focusing on theory, I assemble teams, validate ideas, and build real products.
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - stats (2/5) */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group rounded-2xl border border-border bg-card p-4 text-center transition-all duration-300 hover:border-[#0706F1]/40 hover:shadow-lg hover:shadow-[#0706F1]/5 sm:p-6"
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary transition-colors duration-300 group-hover:bg-[#0706F1]/20 sm:h-12 sm:w-12">
                    <stat.icon size={20} className="sm:h-6 sm:w-6" />
                  </div>
                  <p className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
