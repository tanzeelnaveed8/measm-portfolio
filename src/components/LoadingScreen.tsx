import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background px-4"
    >
      {/* Animated background elements */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-[#0706F1]/5 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[#0706F1]/5 blur-3xl sm:h-96 sm:w-96" />

      {/* Main content */}
      <div className="relative z-10 w-full text-center">
        {/* MEASM text with letter animation */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-5xl font-black uppercase leading-none tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem]">
            {["M", "e", "a", "s", "m"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-foreground"
                style={{ transformOrigin: "bottom" }}
              >
                {letter}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block text-primary"
            >
              .
            </motion.span>
          </h1>
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mx-auto w-full max-w-xs sm:max-w-sm"
        >
          <div className="mb-3 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full bg-[#0706F1]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-6 px-4 text-xs font-medium text-muted-foreground sm:mt-8 sm:text-sm"
        >
          Climate-Tech Entrepreneur & Global Impact Builder
        </motion.p>
      </div>

      {/* Animated dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute bottom-8 flex gap-2 sm:bottom-12"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-2 w-2 rounded-full bg-[#0706F1]"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
