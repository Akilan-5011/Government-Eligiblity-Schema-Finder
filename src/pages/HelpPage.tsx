import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Search, BookOpen, Shield, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "How does the eligibility check work?", a: "Our system compares your personal details (age, income, occupation, state, category) against the eligibility criteria of 60+ government schemes to find your best matches." },
  { q: "Is this service free?", a: "Yes! This service is completely free. We help citizens discover government welfare schemes they're entitled to." },
  { q: "How accurate are the results?", a: "Our rule-based engine matches your profile against official scheme criteria. Results are indicative — always verify on the official scheme portal before applying." },
  { q: "Can I save schemes for later?", a: "Yes! Click the bookmark icon on any scheme card to save it. View all your bookmarks in the Dashboard page." },
  { q: "How do I use voice search?", a: "Click the microphone button on the Eligibility page and speak your details. For example: 'I am a farmer, age 35, income 150000'." },
  { q: "What documents do I need?", a: "Required documents vary by scheme. Each scheme's detail page lists the specific documents needed. Common ones include Aadhaar Card, Income Certificate, and Bank Account details." },
  { q: "Are state-specific schemes included?", a: "Yes! We include schemes from multiple states including Karnataka, Tamil Nadu, Rajasthan, West Bengal, Maharashtra, Kerala, and UP, in addition to all central government schemes." },
  { q: "How do I apply for a scheme?", a: "Click 'Apply' on any scheme card to visit the official government portal where you can submit your application." },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Help & <span className="text-gradient">Support</span>
            </h1>
            <p className="mt-2 text-muted-foreground">Everything you need to know about using GovSchemes</p>
          </div>

          {/* Quick links */}
          <div className="mb-10 grid gap-4 md:grid-cols-3">
            {[
              { to: "/eligibility", icon: Search, label: "Check Eligibility", desc: "Find matching schemes", color: "bg-primary/10 text-primary" },
              { to: "/schemes", icon: Shield, label: "Browse Schemes", desc: "View all 60+ schemes", color: "bg-secondary/10 text-secondary" },
              { to: "/dashboard", icon: BookOpen, label: "Dashboard", desc: "Your saved schemes", color: "bg-accent/10 text-accent" },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* How to use */}
          <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 font-heading text-xl font-bold text-foreground">How to Use</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Fill Your Details", desc: "Enter your age, income, occupation, state, and other personal details on the eligibility page." },
                { step: "2", title: "Get Matched Schemes", desc: "Our AI engine analyzes your profile and shows all eligible government schemes ranked by relevance." },
                { step: "3", title: "Review & Bookmark", desc: "Browse through results, read details, and bookmark schemes you're interested in." },
                { step: "4", title: "Apply Online", desc: "Click 'Apply' to visit the official portal and submit your application with required documents." },
              ].map(item => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <h2 className="mb-4 font-heading text-xl font-bold text-foreground">
            <HelpCircle className="mr-2 inline h-5 w-5 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group rounded-xl border border-border bg-card shadow-card"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-foreground">
                  {faq.q}
                  <span className="ml-2 text-muted-foreground transition-transform group-open:rotate-180">▾</span>
                </summary>
                <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>

          {/* Chatbot tip */}
          <div className="mt-10 rounded-2xl gradient-primary p-6 text-center">
            <MessageCircle className="mx-auto mb-2 h-8 w-8 text-primary-foreground" />
            <h3 className="font-heading text-lg font-bold text-primary-foreground">Need More Help?</h3>
            <p className="mt-1 text-sm text-primary-foreground/80">
              Click the chat button in the bottom-right corner to talk to our AI assistant about any scheme!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
