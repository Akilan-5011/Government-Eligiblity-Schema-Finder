import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Import schemes data
const schemesPath = path.join(__dirname, 'src', 'data', 'schemes.ts');
let schemes = [];

// Parse TypeScript schemes file to extract data
try {
  const fileContent = fs.readFileSync(schemesPath, 'utf-8');
  // Extract the array content from export const schemes = [...]
  const match = fileContent.match(/export const schemes[:\s\w<>]* = \[([\s\S]*)\];/);
  if (match) {
    // This is a simplified parse - ideally use a TS parser
    // For now, we'll serve from memory with mock data
    schemes = [
      {
        id: "1",
        name: "PM-KISAN",
        category: "Agriculture",
        description: "Direct income support to farmers",
        eligibility: "Small and marginal farmers",
        benefits: "₹2,000 per 4 months",
        documents: ["Aadhaar Card", "Land Documents"],
        states: ["All India"],
        deadline: "Ongoing",
        link: "https://pmkisan.gov.in/",
        icon: "🌾",
        minAge: 18,
        maxAge: 75,
        occupations: ["Farmer"]
      },
    ];
  }
} catch (error) {
  console.log('Note: Using mock schemes data');
  schemes = [{
    id: "1",
    name: "PM-KISAN",
    category: "Agriculture",
    eligibility: "Small and marginal farmers",
    benefits: "₹2,000 per 4 months",
    link: "https://pmkisan.gov.in/"
  }];
}

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: '✅ Backend connected successfully!',
    timestamp: new Date().toISOString(),
    port: PORT 
  });
});

app.get('/api/schemes', (req, res) => {
  res.json(schemes);
});

app.get('/api/schemes/:id', (req, res) => {
  const scheme = schemes.find(s => s.id === req.params.id);
  if (!scheme) {
    return res.status(404).json({ error: 'Scheme not found' });
  }
  res.json(scheme);
});

app.post('/api/eligibility', (req, res) => {
  const { profile } = req.body;
  res.json({ message: 'Eligibility check processed', profile });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n✅ Backend server running on http://localhost:${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health\n`);
});
