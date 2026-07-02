import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { schemes } from "@/data/schemes";

interface Message {
  role: "user" | "bot";
  text: string;
}

const RESPONSES: Record<string, string> = {
  farmer: `Here are top schemes for farmers:\n🌾 **PM-KISAN** - ₹6,000/year income support\n🌱 **PM Fasal Bima** - Crop insurance\n💳 **Kisan Credit Card** - Credit at 4% interest\n🧪 **Soil Health Card** - Free soil testing`,
  student: `Schemes for students:\n📚 **PM Scholarship** - ₹2,000-3,000/month\n📖 **Vidya Lakshmi** - Education loans from 38 banks\n🎓 **NEP Scholarship** - Up to ₹50,000/year\n🏅 **Means-cum-Merit** - ₹12,000/year`,
  women: `Schemes for women:\n🔥 **PM Ujjwala** - Free LPG connection\n👶 **PM Matru Vandana** - ₹5,000 for mothers\n💎 **Mahila Samman Certificate** - 7.5% interest\n👧 **Sukanya Samriddhi** - High interest savings`,
  housing: `Housing schemes:\n🏠 **PM Awas Yojana (Rural)** - ₹1.20 lakh\n🏗️ **PM Awas Yojana (Urban)** - Interest subsidy 3-6.5%`,
  health: `Health schemes:\n🏥 **Ayushman Bharat** - ₹5 lakh health cover\n🤰 **Janani Suraksha** - Cash for institutional delivery`,
  pension: `Pension schemes:\n💼 **Atal Pension** - ₹1,000-5,000/month after 60\n👴 **NPS** - Tax benefits + pension\n🧓 **PM Vaya Vandana** - 7.4% guaranteed returns`,
  loan: `Loan & finance schemes:\n💰 **PM Mudra** - Up to ₹10 lakh without collateral\n🚀 **Stand Up India** - ₹10L-1Cr for SC/ST/Women\n🌟 **Startup India** - Tax exemptions & funding`,
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(RESPONSES)) {
    if (lower.includes(key)) return response;
  }
  if (lower.includes("hello") || lower.includes("hi")) {
    return "Hello! 👋 I can help you find government schemes. Try asking about schemes for **farmers**, **students**, **women**, **housing**, **health**, **pension**, or **loans**.";
  }
  if (lower.includes("how") && lower.includes("apply")) {
    return "To apply for schemes:\n1. Go to **Check Eligibility** page\n2. Fill in your details\n3. View matching schemes\n4. Click **Apply** to visit the official portal";
  }
  const matchingSchemes = schemes.filter(s => lower.includes(s.name.toLowerCase().split(" ")[0].toLowerCase()));
  if (matchingSchemes.length > 0) {
    const s = matchingSchemes[0];
    return `**${s.name}** ${s.icon}\n\n${s.description}\n\n**Benefits:** ${s.benefits}\n**Eligibility:** ${s.eligibility}`;
  }
  return "I can help you find schemes! Ask about:\n• Schemes for **farmers**, **students**, or **women**\n• **Housing**, **health**, or **pension** schemes\n• **Loan** and finance schemes\n• How to **apply** for schemes";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! 👋 I'm your Government Schemes Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: getBotResponse(userMsg) }]);
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 right-4 z-50 flex h-[28rem] w-80 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg sm:right-6"
          >
            <div className="gradient-primary px-4 py-3">
              <h3 className="font-heading text-sm font-semibold text-primary-foreground">Scheme Assistant 🤖</h3>
              <p className="text-xs text-primary-foreground/70">Ask about government schemes</p>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-xl px-3 py-2 text-sm ${
                    msg.role === "user"
                      ? "gradient-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}>
                    <div className="whitespace-pre-line">{msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-3">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && send()}
                  placeholder="Ask about schemes..."
                  className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button onClick={send} className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary text-primary-foreground">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full gradient-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 sm:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
}
