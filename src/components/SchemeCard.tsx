import { Scheme } from "@/data/schemes";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck, ExternalLink, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  scheme: Scheme;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  matchScore?: number;
  matchReasons?: string[];
  index?: number;
}

export default function SchemeCard({ scheme, isBookmarked, onToggleBookmark, matchScore, matchReasons, index = 0 }: Props) {
  const categoryColors: Record<string, string> = {
    Agriculture: "bg-success/15 text-success",
    Education: "bg-primary/15 text-primary",
    Housing: "bg-accent/15 text-accent",
    Health: "bg-destructive/15 text-destructive",
    "Women & Child": "bg-secondary/15 text-secondary",
    Employment: "bg-warning/15 text-warning",
    Finance: "bg-primary/15 text-primary",
    "Social Welfare": "bg-secondary/15 text-secondary",
    "Rural Development": "bg-success/15 text-success",
    "Skill Development": "bg-accent/15 text-accent",
    Insurance: "bg-primary/15 text-primary",
    Pension: "bg-warning/15 text-warning",
    "Urban Development": "bg-secondary/15 text-secondary",
    "Tribal Welfare": "bg-success/15 text-success",
    "Minority Welfare": "bg-accent/15 text-accent",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      {matchScore && (
        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-xs font-bold text-primary-foreground">
          {matchScore}%
        </div>
      )}

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{scheme.icon}</span>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground leading-tight">
                {scheme.name}
              </h3>
              <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColors[scheme.category] || "bg-muted text-muted-foreground"}`}>
                {scheme.category}
              </span>
            </div>
          </div>
          <button
            onClick={() => onToggleBookmark(scheme.id)}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-primary" />
            ) : (
              <Bookmark className="h-5 w-5" />
            )}
          </button>
        </div>

        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{scheme.description}</p>

        <div className="mb-3 rounded-lg bg-muted/50 p-3">
          <p className="text-xs font-medium text-foreground">Benefits</p>
          <p className="text-sm text-muted-foreground">{scheme.benefits}</p>
        </div>

        {matchReasons && matchReasons.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1">
            {matchReasons.map((reason, i) => (
              <span key={i} className="rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
                ✓ {reason}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {scheme.deadline}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {scheme.states[0]}
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            to={`/scheme/${scheme.id}`}
            className="flex-1 rounded-lg bg-primary/10 px-3 py-2 text-center text-sm font-medium text-primary transition-colors hover:bg-primary/20"
          >
            View Details
          </Link>
          <a
            href={scheme.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-lg gradient-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Apply <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
