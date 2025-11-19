# 🍽️ Hearthé AI

> Smart meal decision assistant for busy urban professionals

An AI-powered mobile web app that helps busy college students and young professionals make smarter food choices by analyzing nutrition, budget, and time constraints.

![Screenshot](docs/screenshot.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Roadmap](#roadmap)
- [License](#license)

## 🎯 Overview

### Target Users
- **Age**: 18-45 years old
- **Demographics**: College students and early-career professionals
- **Location**: Urban areas
- **Pain Points**:
  - Limited time for meal planning
  - Frequent use of convenience stores and delivery services
  - Lack of nutritional knowledge
  - Budget constraints

### Solution
Hearthé AI provides:
- 📷 **Photo-based food recognition** for easy logging
- 💡 **Micro-suggestions** for small, actionable improvements
- 💰 **Budget-aware recommendations** within your daily spending limit
- ⏱️ **Time-efficient alternatives** for busy schedules
- 📊 **Comparative analysis** between current and healthier alternatives

## ✨ Features

### 🏠 Home (`/`)
Track your daily nutrition and budget at a glance with the **Daily Balance** card.

- **Daily Balance Card**
  - **Remaining Budget**: Prominently displayed with a progress bar.
  - **Nutrition Stats**: Calories and Protein progress in a clean, card-based layout.
  - **Date Indicator**: Shows the current date with a nature-inspired badge.
- **Quick Actions**
  - Scan food photo → Navigate to `/scan`
  - Budget-based recommendations → Navigate to `/recommend`
  - View recent meal logs → Navigate to `/history`
- **Recent Logs**
  - Recent meal history
  - Micro-suggestion applied indicators

### 📷 Scan (`/scan`)
Analyze your meal with a conversational AI experience.

- **Conversational UI**
  - Friendly status messages (e.g., "Identifying ingredients...", "Calculating nutrition...")
  - **Warm Glow Animation**: Pulsing "Hearth" colors replace static loading bars.
- **Analysis Results**
  - Estimated food name
  - Nutrition breakdown (calories, protein, carbs, fat)
  - Price estimation
- **Micro-Suggestions**
  - Small, actionable improvements
  - Impact preview (e.g., "-150 kcal, -1500원")

### ✨ Recommend (`/recommend`)
Get personalized meal recommendations with helpful insights.

- **Smart Filters** (Real-time filtering)
  - Budget range selector (5K-15K won)
  - Preparation time filter (0-30 minutes)
  - No-cook toggle (instant meals)
- **Micro-Suggestion Cards**
  - **Friendly Badges**: "💡 Suggestion" highlights trade-offs (e.g., "Save Money", "More Protein").
  - **Organic Design**: Rounded cards with soft shadows.
  - **Detailed Comparison**: Expandable nutrition details.

### 📊 History (`/history`)
Review your eating patterns and progress.

- **Weekly Summary**
  - Average calories per day
  - Average budget spent
  - Total meals logged
  - Date range
- **Meal Log List**
  - Chronological meal history
  - Expandable nutrition details
  - Micro-suggestion applied badges

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: Geist Sans, Geist Mono

### Design
- **Design System**: "Organic Warmth" (Hearth & Nature)
- **Responsive**: Mobile-first (max-width: 28rem)
- **Dark Mode**: Supported via Tailwind
- **Icons**: Inline SVG (custom stroke icons)
- **Animations**: Warm glow, shimmer, fade-in transitions

### Development
- **Node.js**: >=20.9.0
- **Package Manager**: npm
- **Version Control**: Git

## 🚀 Getting Started

### Prerequisites

**Node.js 20 or higher is required.** This project uses `.nvmrc` for version management.

#### Option 1: Using nvm (Recommended)

```bash
# Install nvm if you haven't
brew install nvm

# Add to your shell config (~/.zshrc or ~/.bashrc)
echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.zshrc
echo '[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"' >> ~/.zshrc
source ~/.zshrc

# Install and use Node.js 20
nvm install
nvm use
```

#### Option 2: Direct Installation

Download Node.js 20.x LTS from [nodejs.org](https://nodejs.org/)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/hearthe-ai.git
    cd hearthe-ai
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    ```
    http://localhost:3000
    ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
hearthe-ai/
├── src/
│   ├── app/
│   │   ├── (tabs)/              # Tab pages group
│   │   │   ├── layout.tsx       # Shared layout with TabBar
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── scan/
│   │   │   │   └── page.tsx     # Scan page
│   │   │   ├── recommend/
│   │   │   │   └── page.tsx     # Recommend page
│   │   │   └── history/
│   │   │       └── page.tsx     # History page
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css          # Global styles + animations
│   ├── components/
│   │   ├── layout/
│   │   │   └── TabBar.tsx       # Bottom navigation
│   │   ├── home/
│   │   │   ├── TodaySummaryCard.tsx
│   │   │   ├── QuickActions.tsx
│   │   │   └── RecentLogs.tsx
│   │   ├── scan/
│   │   │   ├── CameraPreview.tsx
│   │   │   ├── AnalyzingState.tsx
│   │   │   ├── ResultView.tsx
│   │   │   └── ComparisonCard.tsx
│   │   ├── recommend/
│   │   │   ├── FilterSection.tsx
│   │   │   └── RecommendationList.tsx
│   │   └── history/
│   │       └── HistoryList.tsx
│   ├── lib/
│   │   └── mock/                # Mock data (temporary)
│   │       ├── todaySummary.ts
│   │       ├── recentLogs.ts
│   │       ├── recommendations.ts
│   │       ├── scanResult.ts
│   │       ├── historySummary.ts
│   │       └── historyLogs.ts
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── public/                      # Static assets
├── .nvmrc                       # Node.js version specification
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

## 🎨 Design System

### "Organic Warmth" Palette

The design system is inspired by Hestia (Hearth) and Demeter (Nature), focusing on warmth and comfort.

- **Hearth (Primary)**: Warm Terracotta (`#D97757`)
  - Used for: Main actions, budget progress, active states
- **Nature (Secondary)**: Sage Green (`#8DA399`)
  - Used for: Nutrition stats, success indicators, badges
- **Cream (Background)**: Soft Beige (`#FDFBF7`)
  - Used for: App background (replaces pure white for reduced eye strain)
- **Stone (Neutral)**: Soft Charcoal (`#4A4543`)
  - Used for: Text, borders, inactive states

### Typography & Shapes

- **Font**: Geist Sans (Clean, modern sans-serif)
- **Shapes**: `rounded-3xl` for all cards and buttons to mimic organic forms.
- **Shadows**: `shadow-soft` for a diffused, gentle depth.

### Animations

- **Warm Glow**: Pulsing animation for the AI scanning state.
- **Fade In**: Smooth entry for cards and details.
- **Transitions**: Gentle color shifts (300ms).

## 🗺️ Roadmap

### Current Status ✅
- [x] Complete UI implementation
- [x] Pastel tone design system
- [x] SVG icon integration
- [x] Shimmer animations
- [x] Dark mode support
- [x] Mock data structure
- [x] UX improvements (P1 critical fixes)
  - Fixed QuickActions routing (distinct destinations)
  - Connected FilterSection to real-time filtering
  - Dynamic recommendation updates based on user preferences

### Upcoming Features ⏳

**Phase 1: Backend Integration**
- [ ] RESTful API development
- [ ] Database schema design
- [ ] User authentication
- [ ] Meal logging API

**Phase 2: AI Integration**
- [ ] Food recognition AI model
- [ ] Nutrition database integration
- [ ] Price estimation algorithm
- [ ] Recommendation engine

**Phase 3: Enhanced Features**
- [ ] Real-time photo capture
- [ ] Barcode scanning
- [ ] Social sharing
- [ ] Weekly/monthly reports
- [ ] Goal setting and tracking

**Phase 4: Optimization**
- [ ] Performance optimization
- [ ] PWA implementation
- [ ] Offline mode
- [ ] Push notifications

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

For more information, visit [our documentation](docs/) or [한글 문서](README.ko.md).
