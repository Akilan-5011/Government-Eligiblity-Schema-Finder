import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Shield, Users, TrendingUp, ArrowRight, Star, CheckCircle } from "lucide-react";
import { schemes, CATEGORIES } from "@/data/schemes";

const stats = [
  { label: "Schemes Listed", value: `${schemes.length}+`, icon: Shield },
  { label: "Categories", value: `${CATEGORIES.length}`, icon: Star },
  { label: "States Covered", value: "29+", icon: Users },
  { label: "Success Rate", value: "95%", icon: TrendingUp },
];

const features = [
  { title: "Smart Eligibility Check", desc: "Answer a few questions and instantly discover schemes you qualify for.", icon: "🎯" },
  { title: "60+ Government Schemes", desc: "Comprehensive database of central and state government welfare programs.", icon: "📋" },
  { title: "Bookmark & Track", desc: "Save schemes for later and track application deadlines.", icon: "🔖" },
  { title: "Voice Search", desc: "Speak your query and find relevant schemes hands-free.", icon: "🎤" },
  { title: "AI Chatbot Assistant", desc: "Get instant answers about scheme eligibility and application process.", icon: "🤖" },
  { title: "State-wise Filtering", desc: "Find schemes specific to your state or available nationwide.", icon: "🗺️" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              🇮🇳 AI-Powered Government Scheme Finder
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-6xl">
              Discover Your{" "}
              <span className="text-gradient">Eligible Benefits</span>{" "}
              in Minutes
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Our intelligent eligibility engine analyzes your profile to find matching central and
              state government schemes — from PM-KISAN to Ayushman Bharat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                to="/eligibility"
                className="inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                <Search className="h-5 w-5" />
                Check My Eligibility
              </Link>
              <Link
                to="/schemes"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Browse All Schemes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/50 py-10">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
              <p className="font-heading text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Everything You Need to Find <span className="text-gradient">Your Benefits</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Powerful tools to navigate India's welfare ecosystem
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <span className="mb-3 block text-3xl">{f.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular categories */}
      <section className="border-t border-border bg-card/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl font-bold text-foreground">
            Popular <span className="text-gradient">Categories</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(cat => (
              <Link
                key={cat}
                to={`/schemes?category=${encodeURIComponent(cat)}`}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-primary p-10 text-center shadow-glow">
            <h2 className="font-heading text-3xl font-bold text-primary-foreground">
              Ready to Find Your Benefits?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              It takes less than 2 minutes to check your eligibility
            </p>
            <div className="mt-6 flex flex-col items-center gap-2">
              {["100% Free", "No Registration Required", "Instant Results"].map(t => (
                <span key={t} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                  <CheckCircle className="h-4 w-4" /> {t}
                </span>
              ))}
            </div>
            <Link
              to="/eligibility"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-card px-8 py-3.5 font-heading text-sm font-semibold text-foreground transition-transform hover:scale-105"
            >
              Get Started Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 GovSchemes — AI-Based Government Scheme Eligibility System. Built for citizens of India.
          </p>
        </div>
      </footer>
    </div>
  );
}
