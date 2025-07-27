# Zingly - Magical AI Tools for Startups

A comprehensive AI-powered web application that helps startup founders create compelling marketing content, understand their users, and generate visual inspiration with magical AI tools. Built with Next.js 15, Tailwind CSS, and Google's Gemini AI.

## 🚀 Features

### 📝 Ad Copy Remix
Generate compelling marketing copy across multiple platforms:
- **Google Ads**: Optimized headlines and descriptions
- **Instagram Captions**: Engaging content with emojis and hashtags  
- **Twitter/X Posts**: Viral-ready tweets with character optimization
- **Email Marketing**: Click-worthy subject lines and taglines

### 👤 QuickPersona
Create detailed user personas based on your product:
- Demographic information and background
- Primary goals and motivations
- Key pain points and challenges
- Technology familiarity scoring
- Representative user quotes

### 🎨 MoodBoard AI
Generate visual inspiration for your brand:
- Curated image collections based on theme prompts
- Responsive grid layout for easy browsing
- Fallback system with high-quality stock photography

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui
- **AI Integration**: Google Gemini Pro API
- **TypeScript**: Full type safety
- **Deployment**: Static export ready

## 🔧 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
3. **Get your Gemini API key**:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env.local` file:
     ```
     GEMINI_API_KEY=your_api_key_here
     ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
/app
  /components
    TabSwitcher.tsx       # Main navigation component
    AdCopyTool.tsx        # Ad copy generation tool
    PersonaTool.tsx       # User persona generator
    MoodBoardTool.tsx     # Visual mood board creator
    ResultCard.tsx        # Reusable result display component
    Loader.tsx           # Loading animation component
  /api
    /generate-adcopy/route.ts    # Ad copy generation endpoint
    /generate-personas/route.ts   # Persona generation endpoint
    /generate-images/route.ts     # Mood board generation endpoint
  layout.tsx            # Root layout with metadata
  page.tsx             # Main application page
  globals.css          # Global styles and Tailwind config
/components/ui         # Shadcn/ui components
/lib
  utils.ts            # Utility functions
```

## 🎨 Design System

The application uses a clean, modern design system optimized for startup aesthetics:

- **Color Palette**: Soft whites with blue-gray accents (#64748b, #475569)
- **Typography**: Inter font family with clear hierarchy
- **Components**: Rounded corners (rounded-lg), subtle shadows, hover effects
- **Responsive**: Mobile-first approach with breakpoints for tablet and desktop
- **Accessibility**: ARIA labels, keyboard navigation, proper contrast ratios

## 🚀 Deployment

### Static Export (Recommended)
The app is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

### Deployment Platforms
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Push the `out/` folder to gh-pages branch
- **AWS S3**: Upload `out/` folder contents

### Environment Variables for Production
Make sure to set your `GEMINI_API_KEY` in your deployment platform's environment variables.

## 🔐 API Usage & Limits

The application uses Google's Gemini Pro API:
- **Free Tier**: 60 requests per minute, 1,500 requests per day
- **Rate Limiting**: Built-in error handling for API limits
- **Fallbacks**: Graceful degradation when API is unavailable

## 🧪 Development

### Adding New Tools
1. Create a new component in `/app/components/`
2. Add the corresponding API route in `/app/api/`
3. Update the tabs array in `page.tsx`
4. Follow the existing pattern for state management and error handling

### Customizing Prompts
AI prompts are defined in the API route files. Modify them to:
- Adjust output format and style
- Add industry-specific terminology
- Include additional context or constraints

## 📝 License

MIT License - feel free to use this project for your own applications.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the startup community