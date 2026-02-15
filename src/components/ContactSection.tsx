

import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Send,
  MapPin,
  Calendar as CalendarIcon,
  Clock,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const contactMethods = [
  {
    icon: <Mail size={24} />,
    label: "Email",
    value: "contact@muhammadmeasmraza.com",
    href: "mailto:contact@muhammadmeasmraza.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: <MessageCircle size={24} />,
    label: "WhatsApp",
    value: "+971 56 375 6215",
    href: "https://wa.me/971563756215",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: <Instagram size={24} />,
    label: "Instagram",
    value: "@mesamraza.official",
    href: "https://instagram.com/mesamraza.official",
    color: "from-pink-500/20 to-purple-500/20",
  },
];

const projectTypes = [
  "Climate-Tech Solution",
  "Software Development",
  "Brand Strategy",
  "EdTech Platform",
  "Consulting",
  "Other",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    preferredTime: "",
    message: "",
  });

  //Validation
  const nameRegex = /^[A-Za-z\s]{4,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Name validation
    if (!nameRegex.test(form.name.trim())) {
      toast({
        title: "Invalid Name",
        description: "Name must contain only letters and be at least 4 characters.",
      });
      return;
    }

    // Email validation
    if (!emailRegex.test(form.email.trim())) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          date,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      setForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        preferredTime: "",
        message: "",
      });

      setDate(undefined);
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card/30 px-4 py-16 sm:px-6 sm:py-20 md:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Animated background elements */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#0706F1]/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#0706F1]/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0706F1]/3 blur-3xl" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-10 text-center sm:mb-12 md:mb-16 lg:mb-20"
        >
          <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4 sm:gap-4 md:mb-6">
            <span className="h-[2px] w-8 bg-[#0706F1] sm:w-12" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary sm:text-xs sm:tracking-[0.4em]">
              Get in Touch
            </span>
            <span className="h-[2px] w-8 bg-[#0706F1] sm:w-12" />
          </div>
          <h2 className="mb-3 text-3xl font-black uppercase leading-none tracking-tighter text-foreground sm:mb-4 sm:text-4xl md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl">
            Let's Build
            <br />
            Together<span className="text-primary">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:text-xl">
            Have a project in mind? Choose your preferred way to connect.
          </p>
        </motion.div>

        {/* Contact Methods - Big Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mb-12 grid gap-4 sm:mb-16 sm:gap-6 md:grid-cols-3 lg:mb-20"
        >
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card   p-3 md:p-5 transition-all duration-500 hover:-translate-y-2 hover:border-[#0706F1]/40 hover:shadow-2xl hover:shadow-[#0706F1]/10 sm:rounded-3xl sm:p-6 md:p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative">
                <div className="mb-4 flex h-10 md:h-12 w-10 md:w-12 items-center justify-center rounded-xl bg-[#0706F1]/10 text-primary ring-2 ring-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#0706F1] group-hover:text-primary group-hover:ring-primary sm:mb-6 sm:h-16 sm:w-16 sm:rounded-2xl">
                  {method.icon}
                </div>

                <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-primary sm:mb-2 sm:text-xs">
                  {method.label}
                </p>
                <p className="mb-3 text-[12px] md:text-base md:font-bold text-foreground sm:mb-4 sm:text-lg">
                  {method.value}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary sm:text-sm">
                  Connect Now
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Form + Calendar Section */}
        <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[1fr_4fr]">
          {/* Calendar Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card p-2 sm:rounded-3xl sm:p-6">
              <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                <div className="flex h-6 md:h-10 w-6 md:w-10 items-center justify-center rounded-lg bg-[#0706F1]/10 text-primary ring-2 ring-primary/20 sm:h-12 sm:w-12 sm:rounded-xl">
                  <CalendarIcon size={18} className="sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase tracking-tight text-foreground sm:text-lg">
                    Schedule a Call
                  </h3>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">
                    Pick your preferred date
                  </p>
                </div>
              </div>

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="mx-auto flex flex-col justify-center items-center w-full rounded-xl border border-border bg-background/50 sm:rounded-2xl"
                // // ADDED: Custom styling for the selected date
                // classNames={{
                //   day_selected: "bg-[#0706F1]  text-white hover:bg-[#0706F1] hover:text-white focus:bg-[#0706F1] focus:text-white",
                // }}
              />

              {date && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 space-y-3 sm:mt-6"
                >
                  <div className="flex items-center gap-2 rounded-xl bg-[#0706F1]/10 p-3 ring-1 ring-primary/20 sm:gap-3 sm:rounded-2xl sm:p-4">
                    <Clock size={18} className="text-primary sm:h-5 sm:w-5" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                        Selected Date
                      </p>
                      <p className="text-xs font-medium text-foreground sm:text-sm">
                        {format(date, "PPPP")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Info Card */}
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-5 sm:rounded-3xl sm:p-6 md:p-8">
              <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
                <Sparkles size={18} className="text-primary sm:h-5 sm:w-5" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary sm:text-sm">
                  What to Expect
                </h4>
              </div>
              <ul className="space-y-2.5 text-xs text-muted-foreground sm:space-y-3 sm:text-sm">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0706F1]" />
                  <span>30-minute consultation call</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0706F1]" />
                  <span>Discuss your project goals & requirements</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0706F1]" />
                  <span>Get expert recommendations & next steps</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0706F1]" />
                  <span>Response within 24 hours guaranteed</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-2 py-4 sm:rounded-3xl sm:p-6 md:p-8"
            >
              <div className="mb-6 sm:mb-8">
                <h3 className="mb-1.5 text-xl font-black uppercase tracking-tight text-foreground sm:mb-2 sm:text-2xl">
                  Send a Message
                </h3>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-5">
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <div className="group">
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary sm:mb-2 sm:text-xs">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="h-11 rounded-lg border-border bg-background transition-all focus:border-[#0706F1]/40 focus:ring-2 focus:ring-primary/20 sm:h-12 sm:rounded-xl"
                    />
                  </div>
                  <div className="group">
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary sm:mb-2 sm:text-xs">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="h-11 rounded-lg border-border bg-background transition-all focus:border-[#0706F1]/40 focus:ring-2 focus:ring-primary/20 sm:h-12 sm:rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  <div className="group">
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary sm:mb-2 sm:text-xs">
                      Company
                    </label>
                    <Input
                      placeholder="Your Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="h-11 rounded-lg border-border bg-background transition-all focus:border-[#0706F1]/40 focus:ring-2 focus:ring-primary/20 sm:h-12 sm:rounded-xl"
                    />
                  </div>
                  <div className="group">
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary sm:mb-2 sm:text-xs">
                      Project Type *
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      required
                      className="h-11 w-full rounded-lg border border-border bg-background px-3 text-xs text-foreground transition-all focus:border-[#0706F1]/40 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:h-12 sm:rounded-xl sm:text-sm"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {date && (
                  <div className="group">
                    <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary sm:mb-2 sm:text-xs">
                      Preferred Time
                    </label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="h-11 w-full rounded-lg border border-border bg-background px-3 text-xs text-foreground transition-all focus:border-[#0706F1]/40 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:h-12 sm:rounded-xl sm:text-sm"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="group">
                  <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary sm:mb-2 sm:text-xs">
                    Your Message *
                  </label>
                  <Textarea
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-lg border-border bg-background text-xs transition-all focus:border-[#0706F1]/40 focus:ring-2 focus:ring-[#0706F1]/20 sm:rounded-xl sm:text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group w-full rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#0706F1]/30 sm:text-sm text-text-primary"
                >
                  <Send size={14} className="mr-2 transition-transform group-hover:translate-x-0.5 sm:h-4 sm:w-4" />
                  Send Message
                  <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground sm:mt-10 sm:gap-3 sm:text-sm md:mt-12"
        >
          <MapPin size={14} className="text-primary sm:h-4 sm:w-4" />
          <span>Operating Globally · Remote-First · Available Worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
