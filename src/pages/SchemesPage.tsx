import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { schemes, CATEGORIES, STATES } from "@/data/schemes";
import SchemeCard from "@/components/SchemeCard";
import { useBookmarks } from "@/hooks/use-bookmarks";

export default function SchemesPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [state, setState] = useState("All");
  const { isBookmarked, toggleBookmark } = useBookmarks();

  const filtered = useMemo(() => {
    return schemes.filter(s => {
      if (search && !s.name.toLowerCase().includes(search.toLowerCase()) && !s.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (category !== "All" && s.category !== category) return false;
      if (state !== "All" && !s.states.includes(state) && !s.states.includes("All India")) return false;
      return true;
    });
  }, [search, category, state]);

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">
            All <span className="text-gradient">Government Schemes</span>
          </h1>
          <p className="mb-8 text-muted-foreground">{schemes.length} schemes available</p>

          <div className="mb-6 flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search schemes..."
                className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-3">
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map(c => <option key={c}>{c}</option>)}
              </select>
              <select
                value={state}
                onChange={e => setState(e.target.value)}
                className="rounded-lg border border-border bg-card px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="All">All States</option>
                {STATES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <Filter className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">No schemes found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((s, i) => (
                <SchemeCard key={s.id} scheme={s} isBookmarked={isBookmarked(s.id)} onToggleBookmark={toggleBookmark} index={i} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
