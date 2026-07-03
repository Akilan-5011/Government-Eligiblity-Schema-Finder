export default function handler(req, res) {
  const schemes = [
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
    }
    // ...add the rest of your scheme objects here
  ];
  res.status(200).json(schemes);
}