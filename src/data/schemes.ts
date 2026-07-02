export interface Scheme {
  id: string;
  name: string;
  category: string;
  description: string;
  eligibility: string;
  benefits: string;
  documents: string[];
  states: string[];
  deadline: string;
  link: string;
  icon: string;
  minAge?: number;
  maxAge?: number;
  maxIncome?: number;
  minIncome?: number;
  genders?: string[];
  occupations?: string[];
  educationLevels?: string[];
  categories?: string[];
}

export const CATEGORIES = [
  "Agriculture", "Education", "Housing", "Health", "Women & Child",
  "Employment", "Social Welfare", "Finance", "Rural Development", "Urban Development",
  "Skill Development", "Insurance", "Pension", "Tribal Welfare", "Minority Welfare"
];

export const STATES = [
  "All India", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

export const OCCUPATIONS = [
  "Farmer", "Student", "Self-Employed", "Government Employee",
  "Private Employee", "Unemployed", "Daily Wage Worker", "Artisan",
  "Fisherman", "Business Owner", "Homemaker", "Retired"
];

export const EDUCATION_LEVELS = [
  "No Formal Education", "Primary (1-5)", "Middle (6-8)", "Secondary (9-10)",
  "Higher Secondary (11-12)", "Graduate", "Post Graduate", "Doctorate", "Diploma/ITI"
];

export const SOCIAL_CATEGORIES = ["General", "OBC", "SC", "ST", "EWS", "Minority"];

export const schemes: Scheme[] = [
  {
    id: "1", name: "PM-KISAN", category: "Agriculture",
    description: "Pradhan Mantri Kisan Samman Nidhi provides income support of ₹6,000 per year to all farmer families across the country in three equal installments.",
    eligibility: "All landholding farmer families with cultivable land", benefits: "₹6,000 per year in 3 installments",
    documents: ["Aadhaar Card", "Land Records", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmkisan.gov.in/", icon: "🌾",
    occupations: ["Farmer"], maxIncome: 200000
  },
  {
    id: "2", name: "PM Awas Yojana (Gramin)", category: "Housing",
    description: "Provides financial assistance to the rural poor for construction of pucca houses with basic amenities.",
    eligibility: "Houseless or living in kutcha/dilapidated houses", benefits: "₹1.20 lakh in plains and ₹1.30 lakh in hilly areas",
    documents: ["Aadhaar Card", "BPL Certificate", "Income Certificate"], states: ["All India"],
    deadline: "2024-12-31", link: "https://pmayg.nic.in/", icon: "🏠",
    maxIncome: 300000
  },
  {
    id: "3", name: "PM Awas Yojana (Urban)", category: "Housing",
    description: "Affordable housing for urban poor with credit linked subsidy for home loans.",
    eligibility: "EWS/LIG/MIG categories in urban areas", benefits: "Interest subsidy of 3-6.5% on home loans",
    documents: ["Aadhaar Card", "Income Proof", "Property Documents"], states: ["All India"],
    deadline: "2024-12-31", link: "https://pmaymis.gov.in/", icon: "🏗️",
    maxIncome: 1800000, categories: ["EWS", "General", "OBC", "SC", "ST"]
  },
  {
    id: "4", name: "PM Ujjwala Yojana", category: "Women & Child",
    description: "Provides free LPG connections to women from BPL households to reduce indoor air pollution.",
    eligibility: "Women from BPL households", benefits: "Free LPG connection with first refill and stove",
    documents: ["Aadhaar Card", "BPL Ration Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmuy.gov.in/", icon: "🔥",
    genders: ["Female"], maxIncome: 200000
  },
  {
    id: "5", name: "Ayushman Bharat (PM-JAY)", category: "Health",
    description: "World's largest health insurance scheme providing ₹5 lakh per family per year for secondary and tertiary care hospitalization.",
    eligibility: "Deprived rural and urban families as per SECC data", benefits: "₹5 lakh health cover per family per year",
    documents: ["Aadhaar Card", "Ration Card", "Income Certificate"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmjay.gov.in/", icon: "🏥",
    maxIncome: 500000
  },
  {
    id: "6", name: "PM Scholarship Scheme", category: "Education",
    description: "Scholarships for wards of ex-servicemen and widows for professional and technical education.",
    eligibility: "Wards of ex-servicemen/widows pursuing professional courses", benefits: "₹2,000-₹3,000 per month",
    documents: ["Aadhaar Card", "Discharge Certificate", "Admission Letter"], states: ["All India"],
    deadline: "2024-10-31", link: "https://scholarships.gov.in/", icon: "📚",
    occupations: ["Student"], minAge: 18, maxAge: 25
  },
  {
    id: "7", name: "Sukanya Samriddhi Yojana", category: "Women & Child",
    description: "Small savings scheme for girl child with attractive interest rate and tax benefits.",
    eligibility: "Girl child below 10 years of age", benefits: "High interest rate (currently 8.2%) with tax benefits",
    documents: ["Birth Certificate", "Parent's Aadhaar", "Address Proof"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.nsiindia.gov.in/", icon: "👧",
    genders: ["Female"], maxAge: 10
  },
  {
    id: "8", name: "PM Mudra Yojana", category: "Finance",
    description: "Provides loans up to ₹10 lakh for non-corporate, non-farm small/micro enterprises.",
    eligibility: "Small business owners, entrepreneurs, self-employed", benefits: "Loans up to ₹10 lakh without collateral",
    documents: ["Aadhaar Card", "Business Plan", "Address Proof"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.mudra.org.in/", icon: "💰",
    occupations: ["Self-Employed", "Business Owner"]
  },
  {
    id: "9", name: "Stand Up India", category: "Finance",
    description: "Facilitates bank loans between ₹10 lakh and ₹1 crore to SC/ST and women entrepreneurs.",
    eligibility: "SC/ST and women entrepreneurs for greenfield projects", benefits: "Bank loans ₹10 lakh to ₹1 crore",
    documents: ["Aadhaar Card", "Caste Certificate", "Business Plan"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.standupmitra.in/", icon: "🚀",
    categories: ["SC", "ST"], genders: ["Female"]
  },
  {
    id: "10", name: "National Pension Scheme", category: "Pension",
    description: "Voluntary defined contribution pension system for citizens of India.",
    eligibility: "Indian citizens aged 18-70 years", benefits: "Tax benefits and pension after retirement",
    documents: ["Aadhaar Card", "PAN Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.npscra.nsdl.co.in/", icon: "👴",
    minAge: 18, maxAge: 70
  },
  {
    id: "11", name: "Atal Pension Yojana", category: "Pension",
    description: "Guaranteed minimum pension of ₹1,000 to ₹5,000 for workers in unorganized sector.",
    eligibility: "Citizens aged 18-40 in unorganized sector", benefits: "Monthly pension of ₹1,000-₹5,000 after 60",
    documents: ["Aadhaar Card", "Bank Account", "Mobile Number"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.npscra.nsdl.co.in/", icon: "💼",
    minAge: 18, maxAge: 40, occupations: ["Daily Wage Worker", "Self-Employed", "Farmer"]
  },
  {
    id: "12", name: "PM Fasal Bima Yojana", category: "Agriculture",
    description: "Comprehensive crop insurance scheme providing financial support to farmers suffering crop loss.",
    eligibility: "All farmers growing notified crops", benefits: "Insurance coverage for crop loss",
    documents: ["Land Records", "Bank Account", "Aadhaar Card"], states: ["All India"],
    deadline: "Seasonal", link: "https://pmfby.gov.in/", icon: "🌱",
    occupations: ["Farmer"]
  },
  {
    id: "13", name: "Soil Health Card Scheme", category: "Agriculture",
    description: "Provides soil health cards to farmers with crop-wise nutrient recommendations.",
    eligibility: "All farmers", benefits: "Free soil testing and nutrient recommendations",
    documents: ["Land Records", "Aadhaar Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://soilhealth.dac.gov.in/", icon: "🧪",
    occupations: ["Farmer"]
  },
  {
    id: "14", name: "National Education Policy Scholarship", category: "Education",
    description: "Scholarships for meritorious students from economically weaker sections.",
    eligibility: "Students with family income below ₹8 lakh", benefits: "Up to ₹50,000 per annum",
    documents: ["Marksheets", "Income Certificate", "Aadhaar Card"], states: ["All India"],
    deadline: "2024-11-30", link: "https://scholarships.gov.in/", icon: "🎓",
    occupations: ["Student"], maxIncome: 800000
  },
  {
    id: "15", name: "PM Vidya Lakshmi Portal", category: "Education",
    description: "Single window for students to access education loans from multiple banks.",
    eligibility: "Students seeking education loans", benefits: "Access to education loans from 38 banks",
    documents: ["Admission Letter", "Aadhaar Card", "Academic Records"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.vidyalakshmi.co.in/", icon: "📖",
    occupations: ["Student"]
  },
  {
    id: "16", name: "Beti Bachao Beti Padhao", category: "Women & Child",
    description: "Campaign to improve the efficiency of welfare services for girls across India.",
    eligibility: "Girl children and their families", benefits: "Awareness, education support, and welfare services",
    documents: ["Birth Certificate", "Aadhaar Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://wcd.nic.in/", icon: "👩‍🎓",
    genders: ["Female"]
  },
  {
    id: "17", name: "Janani Suraksha Yojana", category: "Health",
    description: "Cash assistance to pregnant women for institutional delivery.",
    eligibility: "Pregnant women from BPL families", benefits: "₹1,400 in rural and ₹1,000 in urban areas",
    documents: ["Aadhaar Card", "BPL Card", "ANC Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://nhm.gov.in/", icon: "🤰",
    genders: ["Female"], maxIncome: 300000
  },
  {
    id: "18", name: "PM Jan Dhan Yojana", category: "Finance",
    description: "Financial inclusion program ensuring access to banking services for all households.",
    eligibility: "Any Indian citizen without a bank account", benefits: "Zero balance account, RuPay debit card, ₹2 lakh accident insurance",
    documents: ["Aadhaar Card", "Address Proof"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmjdy.gov.in/", icon: "🏦",
    minAge: 10
  },
  {
    id: "19", name: "MGNREGA", category: "Employment",
    description: "Guarantees 100 days of wage employment in a financial year to rural households.",
    eligibility: "Adult members of rural households willing to do unskilled manual work", benefits: "100 days guaranteed employment, minimum wages",
    documents: ["Job Card", "Aadhaar Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://nrega.nic.in/", icon: "⛏️",
    occupations: ["Daily Wage Worker", "Unemployed", "Farmer"], minAge: 18
  },
  {
    id: "20", name: "Skill India Mission", category: "Skill Development",
    description: "Training and certification for youth to enhance employability across sectors.",
    eligibility: "Youth aged 15-45 years", benefits: "Free skill training and certification",
    documents: ["Aadhaar Card", "Education Certificate"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.skillindia.gov.in/", icon: "🔧",
    minAge: 15, maxAge: 45
  },
  {
    id: "21", name: "PM Kaushal Vikas Yojana", category: "Skill Development",
    description: "Short-term skill training for school/college dropouts and unemployed youth.",
    eligibility: "Youth with no formal skill training", benefits: "Free training + ₹8,000 reward on certification",
    documents: ["Aadhaar Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmkvyofficial.org/", icon: "🛠️",
    minAge: 15, maxAge: 45, occupations: ["Unemployed", "Student", "Daily Wage Worker"]
  },
  {
    id: "22", name: "PM SVANidhi", category: "Finance",
    description: "Micro-credit facility for street vendors to restart livelihood post COVID-19.",
    eligibility: "Street vendors with vending certificate", benefits: "Working capital loan up to ₹50,000",
    documents: ["Vending Certificate", "Aadhaar Card", "Bank Account"], states: ["All India"],
    deadline: "2024-12-31", link: "https://pmsvanidhi.mohua.gov.in/", icon: "🛒",
    occupations: ["Self-Employed"], maxIncome: 300000
  },
  {
    id: "23", name: "Pradhan Mantri Jeevan Jyoti Bima Yojana", category: "Insurance",
    description: "Life insurance scheme providing ₹2 lakh coverage at just ₹436 per year.",
    eligibility: "Citizens aged 18-50 with bank account", benefits: "₹2 lakh life insurance coverage",
    documents: ["Aadhaar Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://jansuraksha.gov.in/", icon: "🛡️",
    minAge: 18, maxAge: 50
  },
  {
    id: "24", name: "PM Suraksha Bima Yojana", category: "Insurance",
    description: "Accident insurance of ₹2 lakh at just ₹20 per year.",
    eligibility: "Citizens aged 18-70 with bank account", benefits: "₹2 lakh accidental death/disability cover",
    documents: ["Aadhaar Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://jansuraksha.gov.in/", icon: "🔒",
    minAge: 18, maxAge: 70
  },
  {
    id: "25", name: "Digital India Programme", category: "Skill Development",
    description: "Initiative to ensure government services are made available electronically.",
    eligibility: "All Indian citizens", benefits: "Digital literacy, e-governance services",
    documents: ["Aadhaar Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://digitalindia.gov.in/", icon: "💻"
  },
  {
    id: "26", name: "Make in India", category: "Employment",
    description: "Initiative to encourage companies to manufacture in India and boost employment.",
    eligibility: "Manufacturers, entrepreneurs, startups", benefits: "Ease of doing business, tax benefits",
    documents: ["Business Registration", "PAN Card", "GST Registration"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.makeinindia.com/", icon: "🏭",
    occupations: ["Business Owner", "Self-Employed"]
  },
  {
    id: "27", name: "Startup India", category: "Finance",
    description: "Action plan to promote startups, boost entrepreneurship and create jobs.",
    eligibility: "DPIIT recognized startups", benefits: "Tax exemptions, easy compliance, funding support",
    documents: ["Incorporation Certificate", "PAN Card", "Business Plan"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.startupindia.gov.in/", icon: "🌟",
    occupations: ["Business Owner", "Self-Employed"]
  },
  {
    id: "28", name: "Swachh Bharat Mission", category: "Rural Development",
    description: "Clean India campaign providing toilets and promoting cleanliness.",
    eligibility: "Households without toilets, particularly in rural areas", benefits: "₹12,000 for toilet construction",
    documents: ["Aadhaar Card", "BPL Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://swachhbharatmission.gov.in/", icon: "🧹",
    maxIncome: 300000
  },
  {
    id: "29", name: "National Rural Livelihood Mission", category: "Rural Development",
    description: "Reduces poverty by enabling poor households to access gainful self-employment.",
    eligibility: "Rural BPL women", benefits: "SHG formation, skill training, credit linkage",
    documents: ["Aadhaar Card", "BPL Certificate", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://aajeevika.gov.in/", icon: "🏘️",
    genders: ["Female"], maxIncome: 300000
  },
  {
    id: "30", name: "PM Gram Sadak Yojana", category: "Rural Development",
    description: "Provides all-weather road connectivity to unconnected rural habitations.",
    eligibility: "Rural habitations with population > 250 (plain) / 100 (hilly)", benefits: "All-weather road connectivity",
    documents: [], states: ["All India"],
    deadline: "Ongoing", link: "https://pmgsy.nic.in/", icon: "🛤️"
  },
  {
    id: "31", name: "Mid Day Meal Scheme", category: "Education",
    description: "Free lunch on working days for children in government and aided schools.",
    eligibility: "Students in classes I-VIII in government schools", benefits: "Nutritious cooked meal every school day",
    documents: ["School Enrollment", "Aadhaar Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://mdm.nic.in/", icon: "🍱",
    occupations: ["Student"], maxAge: 14
  },
  {
    id: "32", name: "National Food Security Act", category: "Social Welfare",
    description: "Provides subsidized food grains to approximately 67% of India's population.",
    eligibility: "Priority households and Antyodaya families", benefits: "Rice at ₹3/kg, wheat at ₹2/kg, coarse grains at ₹1/kg",
    documents: ["Ration Card", "Aadhaar Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://nfsa.gov.in/", icon: "🌾",
    maxIncome: 300000
  },
  {
    id: "33", name: "Deendayal Antyodaya Yojana", category: "Urban Development",
    description: "Skill training and livelihood enhancement for urban poor.",
    eligibility: "Urban poor and homeless", benefits: "Skill training, shelters, and livelihood support",
    documents: ["Aadhaar Card", "Income Certificate"], states: ["All India"],
    deadline: "Ongoing", link: "https://nulm.gov.in/", icon: "🏙️",
    maxIncome: 200000
  },
  {
    id: "34", name: "PM Matru Vandana Yojana", category: "Women & Child",
    description: "Cash incentive of ₹5,000 to pregnant and lactating mothers for first living child.",
    eligibility: "Pregnant women for first live birth", benefits: "₹5,000 in three installments",
    documents: ["Aadhaar Card", "MCP Card", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://wcd.nic.in/", icon: "👶",
    genders: ["Female"], minAge: 19
  },
  {
    id: "35", name: "National SC/ST Hub", category: "Social Welfare",
    description: "Support SC/ST entrepreneurs through public procurement and capacity building.",
    eligibility: "SC/ST entrepreneurs and MSMEs", benefits: "Market access, credit support, skill development",
    documents: ["Caste Certificate", "MSME Registration", "Aadhaar Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.scsthub.in/", icon: "🤝",
    categories: ["SC", "ST"], occupations: ["Business Owner", "Self-Employed"]
  },
  {
    id: "36", name: "PM Vishwakarma Yojana", category: "Skill Development",
    description: "Support for traditional artisans and craftspeople with training, tools, and credit.",
    eligibility: "Traditional artisans and craftspeople", benefits: "Up to ₹3 lakh collateral-free loan, skill training",
    documents: ["Aadhaar Card", "Craft Certificate", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmvishwakarma.gov.in/", icon: "🪔",
    occupations: ["Artisan"]
  },
  {
    id: "37", name: "Pradhan Mantri Matsya Sampada Yojana", category: "Agriculture",
    description: "Scheme for sustainable development of fisheries sector.",
    eligibility: "Fishermen, fish farmers, fish workers", benefits: "Financial assistance for fishing infrastructure",
    documents: ["Aadhaar Card", "Fisher ID", "Bank Account"], states: ["All India"],
    deadline: "2024-12-31", link: "https://pmmsy.dof.gov.in/", icon: "🐟",
    occupations: ["Fisherman"]
  },
  {
    id: "38", name: "Kisan Credit Card", category: "Agriculture",
    description: "Provides farmers with timely access to credit for agricultural needs.",
    eligibility: "All farmers, including tenant farmers", benefits: "Credit up to ₹3 lakh at 4% interest",
    documents: ["Land Records", "Aadhaar Card", "Passport Photo"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmkisan.gov.in/", icon: "💳",
    occupations: ["Farmer"]
  },
  {
    id: "39", name: "National Apprenticeship Promotion Scheme", category: "Employment",
    description: "Promotes apprenticeship training in industries by sharing stipend costs.",
    eligibility: "Youth aged 14+ with minimum 5th pass", benefits: "Stipend during apprenticeship training",
    documents: ["Aadhaar Card", "Education Certificate", "Bank Account"], states: ["All India"],
    deadline: "Ongoing", link: "https://apprenticeshipindia.gov.in/", icon: "👷",
    minAge: 14, maxAge: 30
  },
  {
    id: "40", name: "Unnat Bharat Abhiyan", category: "Education",
    description: "Links higher education institutions with rural communities for development.",
    eligibility: "Higher education institutions and rural communities", benefits: "Knowledge transfer and rural development",
    documents: ["Institution Registration"], states: ["All India"],
    deadline: "Ongoing", link: "https://unnatbharatabhiyan.gov.in/", icon: "🎯",
    occupations: ["Student"]
  },
  {
    id: "41", name: "Rashtriya Krishi Vikas Yojana", category: "Agriculture",
    description: "Incentivizes states to increase public investment in agriculture.",
    eligibility: "Farmers and agricultural organizations", benefits: "Financial support for agricultural development",
    documents: ["Land Records", "Project Proposal"], states: ["All India"],
    deadline: "Ongoing", link: "https://rkvy.nic.in/", icon: "🚜",
    occupations: ["Farmer"]
  },
  {
    id: "42", name: "PM Garib Kalyan Anna Yojana", category: "Social Welfare",
    description: "Free food grains to 80 crore beneficiaries to ensure no one goes hungry.",
    eligibility: "Holders of National Food Security Act ration cards", benefits: "5 kg free food grains per person per month",
    documents: ["Ration Card", "Aadhaar Card"], states: ["All India"],
    deadline: "2024-12-31", link: "https://nfsa.gov.in/", icon: "🍚",
    maxIncome: 200000
  },
  {
    id: "43", name: "Mahila Samman Savings Certificate", category: "Finance",
    description: "One-time small savings scheme for women with 7.5% interest rate.",
    eligibility: "Women and girls of any age", benefits: "7.5% interest rate on deposits up to ₹2 lakh",
    documents: ["Aadhaar Card", "PAN Card"], states: ["All India"],
    deadline: "2025-03-31", link: "https://www.nsiindia.gov.in/", icon: "💎",
    genders: ["Female"]
  },
  {
    id: "44", name: "Pradhan Mantri Vaya Vandana Yojana", category: "Pension",
    description: "Pension scheme for senior citizens providing assured returns.",
    eligibility: "Senior citizens aged 60+", benefits: "Guaranteed pension with 7.4% returns",
    documents: ["Aadhaar Card", "Age Proof", "Bank Account"], states: ["All India"],
    deadline: "2025-03-31", link: "https://licindia.in/", icon: "🧓",
    minAge: 60
  },
  {
    id: "45", name: "PMEGP", category: "Employment",
    description: "PM Employment Generation Programme provides credit-linked subsidy for micro enterprises.",
    eligibility: "Individuals above 18 for manufacturing/service projects", benefits: "15-35% subsidy on project cost",
    documents: ["Aadhaar Card", "Project Report", "EDP Certificate"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.kviconline.gov.in/", icon: "🏪",
    minAge: 18, occupations: ["Unemployed", "Self-Employed"]
  },
  {
    id: "46", name: "National Means-cum-Merit Scholarship", category: "Education",
    description: "Scholarship for meritorious students from economically weaker sections at class 8 level.",
    eligibility: "Class 8 students with 55%+ marks, family income < ₹3.5 lakh", benefits: "₹12,000 per annum from class 9-12",
    documents: ["Marksheets", "Income Certificate", "Aadhaar Card"], states: ["All India"],
    deadline: "2024-10-31", link: "https://scholarships.gov.in/", icon: "🏅",
    occupations: ["Student"], maxIncome: 350000, minAge: 13, maxAge: 18
  },
  {
    id: "47", name: "Post Matric Scholarship for SC", category: "Education",
    description: "Scholarship for SC students pursuing post-matric education.",
    eligibility: "SC students with family income < ₹2.5 lakh", benefits: "Full tuition fee and maintenance allowance",
    documents: ["Caste Certificate", "Income Certificate", "Marksheets"], states: ["All India"],
    deadline: "2024-11-30", link: "https://scholarships.gov.in/", icon: "📜",
    categories: ["SC"], occupations: ["Student"], maxIncome: 250000
  },
  {
    id: "48", name: "Pre Matric Scholarship for Minorities", category: "Education",
    description: "Scholarship for minority students from class 1 to 10.",
    eligibility: "Minority students with family income < ₹1 lakh", benefits: "₹5,700-₹10,700 per annum",
    documents: ["Minority Certificate", "Income Certificate", "Marksheets"], states: ["All India"],
    deadline: "2024-10-31", link: "https://scholarships.gov.in/", icon: "📗",
    categories: ["Minority"], occupations: ["Student"], maxIncome: 100000
  },
  {
    id: "49", name: "PM CARES for Children", category: "Social Welfare",
    description: "Support for children who lost parents to COVID-19.",
    eligibility: "Children who lost both parents/legal guardian to COVID-19", benefits: "₹10 lakh on turning 23, free education, health insurance",
    documents: ["Death Certificate", "Aadhaar Card", "School Certificate"], states: ["All India"],
    deadline: "Ongoing", link: "https://pmcaresforchildren.in/", icon: "🤲",
    maxAge: 18
  },
  {
    id: "50", name: "Indira Gandhi National Old Age Pension", category: "Pension",
    description: "Monthly pension for BPL senior citizens.",
    eligibility: "BPL citizens aged 60+", benefits: "₹200-₹500 per month",
    documents: ["Aadhaar Card", "Age Proof", "BPL Certificate"], states: ["All India"],
    deadline: "Ongoing", link: "https://nsap.nic.in/", icon: "👵",
    minAge: 60, maxIncome: 200000
  },
  {
    id: "51", name: "Indira Gandhi National Widow Pension", category: "Pension",
    description: "Monthly pension for BPL widows aged 40-79.",
    eligibility: "BPL widows aged 40-79", benefits: "₹300 per month",
    documents: ["Aadhaar Card", "Death Certificate of Spouse", "BPL Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://nsap.nic.in/", icon: "🕯️",
    genders: ["Female"], minAge: 40, maxAge: 79, maxIncome: 200000
  },
  {
    id: "52", name: "National Handicapped Finance Development Corporation", category: "Social Welfare",
    description: "Financial assistance for persons with disabilities for self-employment.",
    eligibility: "Persons with 40%+ disability", benefits: "Loans at concessional rates for self-employment",
    documents: ["Disability Certificate", "Aadhaar Card", "Project Report"], states: ["All India"],
    deadline: "Ongoing", link: "https://nhfdc.nic.in/", icon: "♿"
  },
  {
    id: "53", name: "Rashtriya Swasthya Bima Yojana", category: "Health",
    description: "Health insurance for BPL families in unorganized sector.",
    eligibility: "BPL families and certain unorganized sector workers", benefits: "₹30,000 health cover per family per year",
    documents: ["BPL Card", "Aadhaar Card", "Smart Card"], states: ["All India"],
    deadline: "Ongoing", link: "https://www.rsby.gov.in/", icon: "🏨",
    maxIncome: 200000, occupations: ["Daily Wage Worker", "Self-Employed"]
  },
  {
    id: "54", name: "Rajasthan Palanhar Yojana", category: "Social Welfare",
    description: "Financial assistance for orphan children in Rajasthan.",
    eligibility: "Orphan children in Rajasthan", benefits: "₹500-₹1,000 per month for education",
    documents: ["Death Certificate of Parents", "Aadhaar Card", "School Certificate"], states: ["Rajasthan"],
    deadline: "Ongoing", link: "https://sje.rajasthan.gov.in/", icon: "🌺",
    maxAge: 18
  },
  {
    id: "55", name: "Karnataka Bhagyalakshmi Scheme", category: "Women & Child",
    description: "Financial support for girl children born in BPL families in Karnataka.",
    eligibility: "Girl children in BPL families in Karnataka", benefits: "₹1 lakh at age 18",
    documents: ["Birth Certificate", "BPL Card", "Aadhaar Card"], states: ["Karnataka"],
    deadline: "Ongoing", link: "https://dwcd.karnataka.gov.in/", icon: "🌸",
    genders: ["Female"], maxIncome: 200000
  },
  {
    id: "56", name: "Tamil Nadu Free Laptop Scheme", category: "Education",
    description: "Free laptops to government school students in Tamil Nadu.",
    eligibility: "Students in classes 11-12 in government schools in TN", benefits: "Free laptop with educational software",
    documents: ["School ID", "Aadhaar Card", "Community Certificate"], states: ["Tamil Nadu"],
    deadline: "Ongoing", link: "https://www.tn.gov.in/", icon: "💻",
    occupations: ["Student"], minAge: 15, maxAge: 19
  },
  {
    id: "57", name: "Kerala Snehapoorvam Scheme", category: "Social Welfare",
    description: "Educational financial assistance for orphans in Kerala.",
    eligibility: "Orphan students in Kerala up to class 12", benefits: "₹300-₹500 per month",
    documents: ["Death Certificate", "School Certificate", "Aadhaar Card"], states: ["Kerala"],
    deadline: "Ongoing", link: "https://sjd.kerala.gov.in/", icon: "📚",
    occupations: ["Student"], maxAge: 18
  },
  {
    id: "58", name: "West Bengal Kanyashree Prakalpa", category: "Women & Child",
    description: "Conditional cash transfer for girl students in West Bengal.",
    eligibility: "Girls aged 13-18 in school with family income < ₹1.2 lakh", benefits: "₹750/year + ₹25,000 one-time grant at 18",
    documents: ["School Certificate", "Income Certificate", "Aadhaar Card"], states: ["West Bengal"],
    deadline: "Ongoing", link: "https://wbkanyashree.gov.in/", icon: "🌷",
    genders: ["Female"], minAge: 13, maxAge: 18, maxIncome: 120000
  },
  {
    id: "59", name: "Maharashtra Majhi Kanya Bhagyashree", category: "Women & Child",
    description: "Financial support for families with girl children in Maharashtra.",
    eligibility: "Families with 1-2 girl children, income < ₹7.5 lakh", benefits: "₹50,000 insurance + ₹1 lakh at age 18",
    documents: ["Birth Certificate", "Income Certificate", "Aadhaar Card"], states: ["Maharashtra"],
    deadline: "Ongoing", link: "https://womenchild.maharashtra.gov.in/", icon: "🌻",
    genders: ["Female"], maxIncome: 750000
  },
  {
    id: "60", name: "UP Kanya Sumangala Yojana", category: "Women & Child",
    description: "Financial assistance at different stages for girls in UP.",
    eligibility: "Families in UP with income < ₹3 lakh with girl child", benefits: "₹15,000 total in 6 installments from birth to graduation",
    documents: ["Birth Certificate", "Income Certificate", "Aadhaar Card"], states: ["Uttar Pradesh"],
    deadline: "Ongoing", link: "https://mksy.up.gov.in/", icon: "🌹",
    genders: ["Female"], maxIncome: 300000
  }
];
