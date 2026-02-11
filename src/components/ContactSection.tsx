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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-background via-background to-card/30 px-4 py-20 sm:px-6 md:py-28 lg:py-32"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Animated background elements */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 blur-3xl" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <div className="mb-4 flex items-center justify-center gap-4 sm:mb-6">
            <span className="h-[2px] w-12 bg-primary" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              Get in Touch
            </span>
            <span className="h-[2px] w-12 bg-primary" />
          </div>
          <h2 className="mb-4 text-4xl font-black uppercase leading-none tracking-tighter text-foreground sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Let's Build
            <br />
            Together<span className="text-primary">.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Have a project in mind? Choose your preferred way to connect.
          </p>
        </motion.div>

        {/* Contact Methods - Big Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mb-20 grid gap-4 sm:gap-6 md:grid-cols-3"
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
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 sm:p-8"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-2 ring-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
                  {method.icon}
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
                  {method.label}
                </p>
                <p className="mb-4 text-lg font-bold text-foreground">
                  {method.value}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
                  Connect Now
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Form + Calendar Section */}
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_4fr]">
          {/* Calendar Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-2 ring-primary/20">
                  <CalendarIcon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-foreground">
                    Schedule a Call
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Pick your preferred date
                  </p>
                </div>
              </div>

              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                className="mx-auto w-full rounded-2xl border border-border bg-background/50"
              />

              {date && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 space-y-3"
                >
                  <div className="flex items-center gap-3 rounded-2xl bg-primary/10 p-4 ring-1 ring-primary/20">
                    <Clock size={20} className="text-primary" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">
                        Selected Date
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {format(date, "PPPP")}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Info Card */}
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-8">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles size={20} className="text-primary" />
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
                  What to Expect
                </h4>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>30-minute consultation call</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Discuss your project goals & requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>Get expert recommendations & next steps</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
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
              className="rounded-3xl border border-border bg-card p-8"
            >
              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-black uppercase tracking-tight text-foreground">
                  Send a Message
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and I'll get back to you soon.
                </p>
              </div>

              <div className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-border bg-background transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="group">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="h-12 rounded-xl border-border bg-background transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                      Company
                    </label>
                    <Input
                      placeholder="Your Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="h-12 rounded-xl border-border bg-background transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="group">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                      Project Type *
                    </label>
                    <select
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                      required
                      className="h-12 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                    <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                      Preferred Time
                    </label>
                    <select
                      value={form.preferredTime}
                      onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                      className="h-12 w-full rounded-xl border border-border bg-background px-3 text-sm text-foreground transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                  <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors group-focus-within:text-primary">
                    Your Message *
                  </label>
                  <Textarea
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-xl border-border bg-background transition-all focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="group w-full rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
                >
                  <Send size={16} className="mr-2 transition-transform group-hover:translate-x-0.5" />
                  Send Message
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
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
          className="relative z-10 mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground"
        >
          <MapPin size={16} className="text-primary" />
          <span>Operating Globally · Remote-First · Available Worldwide</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
