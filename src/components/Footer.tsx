import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  explore: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Impact", href: "#impact" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  ventures: [
    { label: "Greyn", href: "#work" },
    { label: "Meetech Labs", href: "#work" },
    { label: "DoorBeyond", href: "#work" },
    { label: "Acceptopia", href: "#work" },
  ],
  connect: [
    { label: "LinkedIn", href: "#", icon: <Linkedin size={16} /> },
    { label: "Twitter", href: "#", icon: <Twitter size={16} /> },
    { label: "Instagram", href: "https://instagram.com/mesamraza.official", icon: <Instagram size={16} /> },
    { label: "Email", href: "mailto:contact@muhammadmeasmraza.com", icon: <Mail size={16} /> },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-[#141414]/50 overflow-hidden border-t border-border px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl">
        {/* Glow effects */}
        <div className="absolute -left-20 top-0 h-32 w-32 rounded-full bg-[#0706F1]/5 blur-3xl sm:h-40 sm:w-40" />
        <div className="absolute -right-20 bottom-0 h-32 w-32 rounded-full bg-[#0706F1]/5 blur-3xl sm:h-40 sm:w-40" />

        {/* Main footer content */}
        <div className="relative mb-12 grid gap-8 sm:mb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h3 className="mb-3 text-lg font-bold text-foreground sm:mb-4 sm:text-xl">
              Measm<span className="text-[#0706F1]">.</span>
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground sm:mb-6 sm:text-sm">
              Climate-Tech Entrepreneur & Global Impact Builder. Building systems that scale.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {footerLinks.connect.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 hover:border-[#0706F1]/40 hover:bg-[#0706F1]/10 hover:text-primary"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              Ventures
            </h4>
            <ul className="space-y-3">
              {footerLinks.ventures.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm text-muted-foreground">
              Get insights on impact, tech, and ventures.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#0706F1]/40 focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
              <button className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0706F1] text-primary-foreground transition-all duration-300 hover:bg-[#0706F1]/90 hover:shadow-lg hover:shadow-[#0706F1]/30">
                <Send size={16} />
              </button>
            </div>
          </div> */}
        </div>

        {/* Divider */}
        <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent sm:mb-12" />

        {/* Big heading at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center sm:mb-8"
        >
          <Link to="/measm" className="group inline-block">
            <h2 className="text-5xl font-black uppercase leading-none tracking-tighter text-foreground transition-all duration-300 group-hover:text-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              Measm<span className="text-[#0706F1] ">.</span>
            </h2>
          </Link>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:gap-4 sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Muhammad Measm Raza. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
