import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./../index.css"

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image - Shows first on mobile, second on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <img
            src="/mesam.webp"
            alt="Muhammad Measm Raza"
            className="h-[310px] w-[310px] mt-10 lg:mt-0 rounded-full border-4 border-[#0706F1]/30 object-cover shadow-2xl sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
          />
        </motion.div>

        {/* Text Content - Shows second on mobile, first on desktop */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0B0B0B] px-4 py-1.5 text-xs font-medium text-[#F8FAFC] shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#0706F1]/40 hover:shadow-[0_0_12px_rgba(7,6,241,0.25)]">

              <Sparkles
                size={14}
                className="text-[#0706F1] drop-shadow-[0_0_4px_rgba(7,6,241,0.7)]"
              />

              <span className="tracking-wide">
                Available for Impact
              </span>

            </div>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Muhammad
            <br />
            <span className="text-primary">Measm Raza</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-4 text-base font-medium text-foreground sm:text-lg md:text-xl"
          >
            Founder | Climate-Tech Entrepreneur | Global Impact Builder
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mb-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl lg:max-w-none"
          >
            Building verified climate impact, scalable technology, and globally distributed companies from day one.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-10 text-sm text-muted-foreground"
          >
            Operating globally · Remote-first · Founder-led
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-base font-semibold 
             bg-[#0706F1] text-primary 
             hover:bg-[#0505c7] 
             transition-all duration-300 
             hover:shadow-lg hover:shadow-[#0706F1]/40"
            >
              <a href="#work" className="flex items-center">
                Explore the Work
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 text-base font-semibold
             border-[#0706F1] text-primary
             hover:bg-[#0706F1] hover:text-primary
             transition-all duration-300"
            >
              <a href="#contact">
                Contact Founder
              </a>
            </Button>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
