import { motion } from "framer-motion";
import { Bookmark, TrendingUp, Clock } from "lucide-react";
import { schemes } from "@/data/schemes";
import { useBookmarks } from "@/hooks/use-bookmarks";
import SchemeCard from "@/components/SchemeCard";

export default function DashboardPage() {
  const { bookmarks, isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarkedSchemes = schemes.filter(s => bookmarks.includes(s.id));

  const upcomingDeadlines = schemes
    .filter(s => s.deadline !== "Ongoing" && s.deadline !== "Seasonal")
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 5);

  const categoryCounts = schemes.reduce((acc, s) => {
    acc[s.category] = (acc[s.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="mb-2 font-heading text-3xl font-bold text-foreground">
            Your <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="mb-8 text-muted-foreground">Track your bookmarked schemes and upcoming deadlines</p>

          {/* Stats row */}
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Bookmark className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{bookmarks.length}</p>
                  <p className="text-sm text-muted-foreground">Bookmarked Schemes</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                  <Clock className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{upcomingDeadlines.length}</p>
                  <p className="text-sm text-muted-foreground">Upcoming Deadlines</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <TrendingUp className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{schemes.length}</p>
                  <p className="text-sm text-muted-foreground">Total Schemes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category distribution */}
          <div className="mb-8 rounded-xl border border-border bg-card p-5 shadow-card">
            <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">Schemes by Category</h2>
            <div className="space-y-3">
              {topCategories.map(([cat, count]) => (
                <div key={cat}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-foreground">{cat}</span>
                    <span className="text-muted-foreground">{count}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(count / schemes.length) * 100}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full rounded-full gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming deadlines */}
          {upcomingDeadlines.length > 0 && (
            <div className="mb-8">
              <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">
                ⏰ Upcoming Deadlines
              </h2>
              <div className="space-y-2">
                {upcomingDeadlines.map(s => (
                  <div key={s.id} className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{s.icon}</span>
                      <div>
                        <p className="text-sm font-medium text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.category}</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-warning/10 px-3 py-1 text-xs font-medium text-warning">
                      {s.deadline}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bookmarks */}
          <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">
            🔖 Your Bookmarked Schemes
          </h2>
          {bookmarkedSchemes.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <Bookmark className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
              <p className="text-muted-foreground">No bookmarked schemes yet. Browse schemes and click the bookmark icon to save them.</p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {bookmarkedSchemes.map((s, i) => (
                <SchemeCard key={s.id} scheme={s} isBookmarked={isBookmarked(s.id)} onToggleBookmark={toggleBookmark} index={i} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
