import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Measm doesn't just build products — he builds systems that scale. His climate-tech vision transformed how we approach ESG verification across our entire portfolio.",
    name: "Ahmad Al-Farsi",
    role: "Managing Director",
    company: "Gulf Ventures Capital",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
  },
  {
    quote:
      "Working with Meetech Labs was a turning point for us. The team delivered a production-grade platform in weeks, not months. Measm's execution-first approach is rare and refreshing.",
    name: "Rachel Morrison",
    role: "COO",
    company: "Nexus Digital, USA",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
  },
  {
    quote:
      "We hired Meetech for a complex SaaS build. What impressed me most was the transparency — every milestone tracked, every decision documented. True founder-led delivery.",
    name: "Omar Siddiqui",
    role: "Founder & CEO",
    company: "ScaleUp MENA",
    image: "https://i.pravatar.cc/150?img=53",
    rating: 5,
  },
  {
    quote:
      "Measm's research on digital transformation of SMEs directly influenced our strategy. His ability to bridge academic rigor with real-world execution is unmatched for someone his age.",
    name: "Dr. Elena Fischer",
    role: "Director of Innovation",
    company: "European Digital Council",
    image: "https://i.pravatar.cc/150?img=44",
    rating: 5,
  },
  {
    quote:
      "DoorBeyond rebranded our entire identity. The strategic depth behind every design decision showed a level of maturity and vision that most agencies twice their size lack.",
    name: "James Whitfield",
    role: "CMO",
    company: "Forge & Partners, UK",
    image: "https://i.pravatar.cc/150?img=60",
    rating: 5,
  },
  {
    quote:
      "From UNICEF collaborations to global youth programs, Measm walks the talk. His impact work isn't performative — it's structural, scalable, and deeply intentional.",
    name: "Priya Sharma",
    role: "Program Lead",
    company: "Global Youth Alliance",
    image: "https://i.pravatar.cc/150?img=45",
    rating: 5,
  },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const featured = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:py-32"
    >
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
            <span className="h-[2px] w-12 bg-[#0706F1]"></span>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            What Clients
            <br />
            Say<span className="text-primary">.</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            Trust built through execution, not promises.
          </p>
        </motion.div>

        {/* Featured testimonial - big spotlight card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card via-card to-primary/[0.03] transition-all duration-500 hover:border-[#0706F1]/30 hover:shadow-xl hover:shadow-[#0706F1]/5 sm:rounded-[1.5rem]">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#0706F1]/5 blur-3xl transition-all duration-700 group-hover:bg-[#0706F1]/10 sm:-right-12 sm:-top-12 sm:h-40 sm:w-40" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-[#0706F1]/5 blur-3xl sm:-bottom-8 sm:-left-8 sm:h-32 sm:w-32" />

            <div className="relative p-6 sm:p-8 md:p-10 lg:p-14">
              <Quote
                size={36}
                className="mb-4 text-primary/15 sm:mb-6 sm:h-12 sm:w-12"
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-6 text-base font-medium leading-relaxed text-foreground sm:mb-8 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:leading-snug">
                    &ldquo;{featured.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={featured.image}
                      alt={featured.name}
                      className="h-12 w-12 rounded-full border-2 border-[#0706F1]/30 object-cover sm:h-14 sm:w-14 md:h-16 md:w-16"
                    />
                    <div>
                      <p className="text-sm font-bold text-foreground sm:text-base md:text-lg">
                        {featured.name}
                      </p>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        {featured.role}, {featured.company}
                      </p>
                      <div className="mt-1 flex gap-0.5">
                        {Array.from({ length: featured.rating }).map((_, j) => (
                          <Star
                            key={j}
                            size={12}
                            className="fill-amber-500  outline-amber-500 sm:h-3.5 sm:w-3.5"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-6 flex items-center gap-2 sm:mt-8 sm:gap-3">
                <button
                  onClick={prev}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-[#0706F1]/40 hover:text-primary sm:h-10 sm:w-10 md:h-12 md:w-12"
                >
                  <ChevronLeft size={16} className="sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={next}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-[#0706F1]/40 hover:text-primary sm:h-10 sm:w-10 md:h-12 md:w-12"
                >
                  <ChevronRight size={16} className="sm:h-5 sm:w-5" />
                </button>
                <span className="ml-2 text-xs font-medium text-muted-foreground">
                  {String(active + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid of all testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-primary">
            Voices
          </p>
          <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
            From Our Partners
          </h3>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              onClick={() => setActive(i)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0706F1]/5 sm:p-7 ${active === i
                ? "border-[#0706F1]/40 shadow-lg shadow-[#0706F1]/10"
                : "border-border hover:border-[#0706F1]/30"
                }`}
            >
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full bg-[#0706F1]/5 blur-xl transition-all duration-500 group-hover:h-24 group-hover:w-24 group-hover:bg-[#0706F1]/10" />

              <div className="relative">
                <Quote size={20} className="mb-3 text-primary/20" />

                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full border border-[#0706F1]/20 object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-amber-500 " />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
