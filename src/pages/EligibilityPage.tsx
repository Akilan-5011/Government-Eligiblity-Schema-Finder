import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mic, MicOff, Search, User, Briefcase, GraduationCap, MapPin, IndianRupee, Users } from "lucide-react";
import { STATES, OCCUPATIONS, EDUCATION_LEVELS, SOCIAL_CATEGORIES } from "@/data/schemes";
import { UserProfile, findEligibleSchemes } from "@/lib/eligibility-engine";

export default function EligibilityPage() {
  const navigate = useNavigate();
  const [listening, setListening] = useState(false);
  const [form, setForm] = useState<UserProfile>({
    name: "", age: 25, gender: "Male", occupation: "Student",
    annualIncome: 200000, state: "All India", educationLevel: "Graduate", category: "General"
  });

  const update = (key: keyof UserProfile, value: string | number) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const results = findEligibleSchemes(form);
    sessionStorage.setItem("eligibility-results", JSON.stringify(results));
    sessionStorage.setItem("user-profile", JSON.stringify(form));
    navigate("/results");
  };

  const startVoice = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Voice search is not supported in your browser. Try Chrome.");
      return;
    }
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = false;
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      if (transcript.includes("farmer")) update("occupation", "Farmer");
      if (transcript.includes("student")) update("occupation", "Student");
      if (transcript.includes("woman") || transcript.includes("female")) update("gender", "Female");
      const ageMatch = transcript.match(/age\s*(\d+)/);
      if (ageMatch) update("age", parseInt(ageMatch[1]));
      const incomeMatch = transcript.match(/income\s*(\d+)/);
      if (incomeMatch) update("annualIncome", parseInt(incomeMatch[1]));
    };
    recognition.start();
  };

  const selectClass = "w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";
  const inputClass = selectClass;

  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Check Your <span className="text-gradient">Eligibility</span>
            </h1>
            <p className="mt-2 text-muted-foreground">Fill in your details to discover matching government schemes</p>
            <button
              onClick={startVoice}
              className={`mt-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all ${
                listening
                  ? "gradient-accent text-accent-foreground animate-pulse"
                  : "border border-border bg-card text-foreground hover:bg-muted"
              }`}
            >
              {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              {listening ? "Listening..." : "Use Voice Input"}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <User className="h-4 w-4 text-primary" /> Full Name
                </label>
                <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Enter your name" className={inputClass} required />
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Users className="h-4 w-4 text-primary" /> Age
                </label>
                <input type="number" value={form.age} onChange={e => update("age", parseInt(e.target.value) || 0)} min={0} max={120} className={inputClass} required />
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Users className="h-4 w-4 text-secondary" /> Gender
                </label>
                <select value={form.gender} onChange={e => update("gender", e.target.value)} className={selectClass}>
                  {["Male", "Female", "Other"].map(g => <option key={g}>{g}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Briefcase className="h-4 w-4 text-accent" /> Occupation
                </label>
                <select value={form.occupation} onChange={e => update("occupation", e.target.value)} className={selectClass}>
                  {OCCUPATIONS.map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <IndianRupee className="h-4 w-4 text-success" /> Annual Income (₹)
                </label>
                <input type="number" value={form.annualIncome} onChange={e => update("annualIncome", parseInt(e.target.value) || 0)} min={0} className={inputClass} required />
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <MapPin className="h-4 w-4 text-destructive" /> State
                </label>
                <select value={form.state} onChange={e => update("state", e.target.value)} className={selectClass}>
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <GraduationCap className="h-4 w-4 text-warning" /> Education Level
                </label>
                <select value={form.educationLevel} onChange={e => update("educationLevel", e.target.value)} className={selectClass}>
                  {EDUCATION_LEVELS.map(e => <option key={e}>{e}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <Users className="h-4 w-4 text-primary" /> Social Category
                </label>
                <select value={form.category} onChange={e => update("category", e.target.value)} className={selectClass}>
                  {SOCIAL_CATEGORIES.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl gradient-primary py-3.5 font-heading text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Search className="h-5 w-5" /> Find Eligible Schemes
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
