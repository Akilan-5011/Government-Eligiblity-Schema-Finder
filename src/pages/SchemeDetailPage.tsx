import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, MapPin, FileText, CheckCircle, Bookmark, BookmarkCheck } from "lucide-react";
import { schemes } from "@/data/schemes";
import { useBookmarks } from "@/hooks/use-bookmarks";

export default function SchemeDetailPage() {
  const { id } = useParams();
  const scheme = schemes.find(s => s.id === id);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!scheme) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">Scheme Not Found</h1>
          <Link to="/schemes" className="mt-4 text-primary hover:underline">Browse all schemes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mx-auto max-w-3xl">
          <Link to="/schemes" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Schemes
          </Link>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="mb-6 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <span className="text-5xl">{scheme.icon}</span>
                <div>
                  <h1 className="font-heading text-2xl font-bold text-foreground">{scheme.name}</h1>
                  <span className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {scheme.category}
                  </span>
                </div>
              </div>
              <button onClick={() => toggleBookmark(scheme.id)} className="text-muted-foreground hover:text-primary">
                {isBookmarked(scheme.id) ? <BookmarkCheck className="h-6 w-6 text-primary" /> : <Bookmark className="h-6 w-6" />}
              </button>
            </div>

            <p className="mb-6 text-muted-foreground">{scheme.description}</p>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-success/10 p-4">
                <h3 className="mb-1 text-sm font-semibold text-success">Benefits</h3>
                <p className="text-sm text-foreground">{scheme.benefits}</p>
              </div>
              <div className="rounded-xl bg-primary/10 p-4">
                <h3 className="mb-1 text-sm font-semibold text-primary">Eligibility</h3>
                <p className="text-sm text-foreground">{scheme.eligibility}</p>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-warning" /> Deadline: {scheme.deadline}</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-destructive" /> {scheme.states.join(", ")}</span>
            </div>

            {scheme.documents.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-3 flex items-center gap-2 font-heading text-lg font-semibold text-foreground">
                  <FileText className="h-5 w-5 text-primary" /> Required Documents
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {scheme.documents.map(doc => (
                    <div key={doc} className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-success" /> {doc}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <a
              href={scheme.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-primary py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Apply Now <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
