import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import { MatchResult } from "@/lib/eligibility-engine";
import { UserProfile } from "@/lib/eligibility-engine";
import SchemeCard from "@/components/SchemeCard";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { CATEGORIES } from "@/data/schemes";

export default function ResultsPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState<MatchResult[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [filterCategory, setFilterCategory] = useState("All");
  const { isBookmarked, toggleBookmark } = useBookmarks();

  useEffect(() => {
    const r = sessionStorage.getItem("eligibility-results");
    const p = sessionStorage.getItem("user-profile");
    if (r) setResults(JSON.parse(r));
    if (p) setProfile(JSON.parse(p));
    if (!r) navigate("/eligibility");
  }, [navigate]);

  const maxScore = results.length > 0 ? results[0].matchScore : 1;
  const filtered = filterCategory === "All"
    ? results
    : results.filter(r => r.scheme.category === filterCategory);

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link to="/eligibility" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Eligibility Check
          </Link>

          <div className="mb-8">
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Your <span className="text-gradient">Matching Schemes</span>
            </h1>
            {profile && (
              <p className="mt-2 text-muted-foreground">
                Found <strong className="text-foreground">{results.length}</strong> schemes for{" "}
                {profile.name || "you"} — {profile.occupation}, {profile.state}, ₹{profile.annualIncome.toLocaleString()} income
              </p>
            )}
          </div>

          <div className="mb-6 flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            {["All", ...CATEGORIES].map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  filterCategory === cat
                    ? "gradient-primary text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <p className="text-lg text-muted-foreground">No matching schemes found for this filter.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((r, i) => (
                <SchemeCard
                  key={r.scheme.id}
                  scheme={r.scheme}
                  isBookmarked={isBookmarked(r.scheme.id)}
                  onToggleBookmark={toggleBookmark}
                  matchScore={Math.round((r.matchScore / maxScore) * 100)}
                  matchReasons={r.matchReasons}
                  index={i}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
