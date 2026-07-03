# 🏛️ Government Eligibility Schema Finder

A modern web application that helps users discover and understand government schemes and benefits they are eligible for. This tool simplifies access to complex government eligibility criteria by providing an intuitive interface to search, filter, and learn about various government schemes.

**Live Demo:** [government-eligiblity-schema-finder-kappa.vercel.app](https://government-eligiblity-schema-finder-kappa.vercel.app)

---

## 📋 Features

- **Comprehensive Scheme Database** - Access detailed information about various government schemes across multiple categories
- **Smart Eligibility Checker** - Interactive form-based eligibility assessment for government benefits
- **Advanced Filtering** - Filter schemes by category, state, age, occupation, and other criteria
- **Detailed Scheme Information** - View eligibility requirements, benefits, required documents, and deadlines
- **User-Friendly Interface** - Clean, responsive design built with modern web technologies
- **Real-time Search** - Quickly find schemes matching your profile
- **Dark Mode Support** - Comfortable viewing experience in any lighting condition

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Ultra-fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **React Hook Form** - Efficient form management
- **Zod** - Schema validation
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Recharts** - Data visualization

### Backend
- **Express.js** - Node.js web server
- **CORS** - Cross-origin resource sharing
- **Node.js** - Runtime environment

### Development Tools
- **ESLint** - Code quality
- **Playwright** - End-to-end testing
- **Vitest** - Unit testing
- **PostCSS** - CSS processing
- **Bun** - Package manager

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akilan-5011/Government-Eligiblity-Schema-Finder.git
   cd Government-Eligiblity-Schema-Finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or with bun
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

### Running the Application

**Development Mode (Frontend only):**
```bash
npm run dev
# Runs Vite dev server on http://localhost:5173
```

**Backend Server:**
```bash
npm run backend
# Runs Express server on http://localhost:5000
```

**Full Stack Development (Frontend + Backend):**
```bash
npm run dev:full
# Runs both frontend and backend concurrently
```

**Production Build:**
```bash
npm run build
# Builds optimized production bundle
```

**Preview Production Build:**
```bash
npm run preview
# Serves the production build locally
```

---

## 📁 Project Structure

```
├── src/
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── data/             # Schemes data and configurations
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # CSS and styling
│   └── App.tsx           # Main application component
├── api/                  # API endpoint handlers
├── public/               # Static assets
├── server.js             # Express backend server
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

---

## 🔌 API Endpoints

The backend exposes the following REST API endpoints:

### Health Check
```
GET /api/health
```
Returns server status and health information.

### Get All Schemes
```
GET /api/schemes
```
Returns a list of all available government schemes.

### Get Scheme Details
```
GET /api/schemes/:id
```
Returns detailed information about a specific scheme by ID.

### Check Eligibility
```
POST /api/eligibility
```
Processes eligibility criteria and returns matching schemes.

**Request Body:**
```json
{
  "profile": {
    "age": 25,
    "state": "Tamil Nadu",
    "occupation": "Farmer",
    "income": 200000
  }
}
```

---

## 🧪 Testing

**Run Tests:**
```bash
npm run test
# Runs all tests once
```

**Watch Mode:**
```bash
npm run test:watch
# Runs tests in watch mode for development
```

**Linting:**
```bash
npm run lint
# Checks code quality with ESLint
```

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite dev server (frontend) |
| `npm run backend` | Start Express backend server |
| `npm run dev:full` | Run frontend and backend concurrently |
| `npm run build` | Build production bundle |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code quality checks |
| `npm run test` | Run test suite once |
| `npm run test:watch` | Run tests in watch mode |

---

## 📊 Supported Government Schemes

The application includes information about various government schemes, including:

- **PM-KISAN** - Direct income support to farmers
- Agriculture and Rural Development schemes
- Social Security schemes
- Education and Skill Development programs
- Health and Wellness initiatives
- Employment and Entrepreneurship schemes

*Database is continuously updated with new schemes*

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🐛 Known Issues & Limitations

- Schemes database is mock data for demonstration purposes
- Backend uses simplified parsing for scheme data
- Real-time eligibility verification requires integration with government databases

---

## 🎯 Roadmap

- [ ] Integration with official government databases
- [ ] Multi-language support
- [ ] Mobile app version
- [ ] Advanced analytics dashboard
- [ ] Document upload and verification
- [ ] Email notifications for scheme updates
- [ ] User profile management
- [ ] Scheme comparison tool

---

## 📞 Support

For issues, questions, or suggestions:

- Open an [issue](https://github.com/Akilan-5011/Government-Eligiblity-Schema-Finder/issues)
- Create a [discussion](https://github.com/Akilan-5011/Government-Eligiblity-Schema-Finder/discussions)
- Contact the maintainer

---

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/) and [Express.js](https://expressjs.com/)

---

**Last Updated:** July 3, 2026

