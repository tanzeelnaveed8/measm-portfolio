import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    title: "Why Most Rebrands Fail (And How to Get Yours Right)",
    excerpt: "A deep dive into the strategic mistakes that derail brand transformations — and the framework I use with every client.",
    date: "Jan 15, 2026",
  },
  {
    title: "The Founder's Guide to Positioning",
    excerpt: "Positioning isn't a tagline. It's the strategic decision that shapes everything your company does and says.",
    date: "Dec 8, 2025",
  },
  {
    title: "Design Systems That Actually Scale",
    excerpt: "How to build a design system that grows with your company instead of becoming a bottleneck.",
    date: "Nov 22, 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Blog</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Thoughts & insights
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group cursor-pointer rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40"
            >
              <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar size={14} />
                {post.date}
              </div>

              <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {post.title}
              </h3>

              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>

              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
