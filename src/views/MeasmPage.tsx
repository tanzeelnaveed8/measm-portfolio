import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const MeasmPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0B0B] px-4 py-12 sm:px-6">

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-4 top-4 sm:left-8 sm:top-8"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#1E293B]/30 px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#F8FAFC] transition-all duration-300 hover:border-[#0706F1]/50 hover:bg-[#0706F1]/10"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </motion.div>

      {/* Center content */}
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >

          {/* Title */}
          <h1 className="mb-8 text-[15vw] font-black uppercase leading-none tracking-tighter text-[#F8FAFC] sm:text-[12vw] md:text-[10vw]">
            Measm<span className="text-[#0706F1]">.</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg font-medium text-[#F8FAFC]/80 sm:text-xl md:text-2xl"
          >
            Climate-Tech Entrepreneur & Global Impact Builder
          </motion.p>

          {/* Info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-[#94A3B8]"
          >
            <span>Operating Globally</span>
            <span className="h-1 w-1 rounded-full bg-[#0706F1]/60" />
            <span>Remote-First</span>
            <span className="h-1 w-1 rounded-full bg-[#0706F1]/60" />
            <span>Founder-Led</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative pb-8"
      >
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs font-medium text-[#94A3B8]">
            © {new Date().getFullYear()} Muhammad Measm Raza. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs font-medium text-[#94A3B8] transition-colors hover:text-[#0706F1]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-medium text-[#94A3B8] transition-colors hover:text-[#0706F1]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full border border-[#0706F1]/20 bg-[#0706F1]/10 blur-sm"
      />

      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[15%] left-[15%] h-24 w-24 rounded-full border border-[#0706F1]/20 bg-[#0706F1]/10 blur-sm"
      />

      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] bottom-[25%] h-20 w-20 rounded-full border border-[#0706F1]/20 bg-[#0706F1]/10 blur-sm"
      />
    </div>
  );
};

export default MeasmPage;
