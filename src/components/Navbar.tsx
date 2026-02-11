import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Impact", href: "#impact" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);

    setTimeout(() => {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <div
        className={`relative w-full max-w-5xl overflow-hidden rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "border-border/60 bg-background/95 shadow-xl shadow-black/20"
            : "border-border bg-background/80 shadow-lg shadow-black/10"
        } backdrop-blur-xl`}
      >
        {/* Glow effect */}
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500" />

        <div className="relative px-5 py-3.5 sm:px-6 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group relative text-xl font-black tracking-tight text-foreground sm:text-2xl"
            >
              Measm
              <span className="text-primary transition-all duration-300 group-hover:text-foreground">
                .
              </span>
              <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {activeSection !== link.href && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 bg-primary/50 transition-all duration-300 group-hover:w-full" />
                  )}
                </a>
              ))}

              <Button
                asChild
                size="sm"
                className="ml-2 rounded-full px-5 font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="flex items-center gap-1.5">
                  Get in Touch
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 md:hidden"
              onClick={() => setOpen(!open)}
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden md:hidden"
              >
                <div className="mt-4 space-y-1 border-t border-border pt-4">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                        activeSection === link.href
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-card hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      <ArrowRight
                        size={16}
                        className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                  >
                    <Button
                      asChild
                      size="sm"
                      className="mt-3 w-full rounded-full font-bold uppercase tracking-wider"
                    >
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="flex items-center justify-center gap-2"
                      >
                        Get in Touch
                        <ArrowRight size={14} />
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
