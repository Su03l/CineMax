# 🎬 CineMax - Cinema Website

<div align="center">
  <img src="/app/assets/cineMax.png" alt="CineMax Logo"  />
</div>



A modern, responsive cinema website built with Next.js 16 and React 19. Features a beautiful movie browsing experience with dark/light theme support, mobile-first responsive design, and seamless user interactions.


## Features

###  Movie Experience
- **Browse Movies**: Explore a curated collection of 30+ movies with detailed information
- **Movie Details**: View comprehensive movie pages with synopsis, cast, and booking options
- **Search Functionality**: Find movies by title, genre, or description
- **Responsive Movie Cards**: Beautiful cards with hover effects and smooth transitions

###  Theme System
- **Dark/Light Mode**: Complete theme switching with system preference detection
- **Theme Persistence**: Your theme preference is saved and restored
- **Smooth Transitions**: Seamless theme switching animations
- **Hydration Safe**: Proper server-side rendering with theme support

###  Mobile-First Design
- **Responsive Layout**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Mobile Navigation**: Fully functional hamburger menu with slide-in animation
- **Touch-Friendly**: All interactions work perfectly on touch devices
- **Mobile Menu**: Complete navigation with backdrop overlay and auto-close

###  Performance & UX
- **Fast Loading**: Next.js 16 with Turbopack for lightning-fast development
- **Modern UI**: Built with Radix UI components for accessibility
- **Smooth Animations**: CSS transitions and transforms for buttery smooth interactions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

##  Tech Stack

### Core Framework
- **Next.js 16.0.0** - React framework with App Router
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5.0** - Type-safe development

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **next-themes** - Theme switching made easy

### Additional Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

##  Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Su03l/-CineMax.git
   cd -CineMax
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code analysis

##  Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage with hero section
│   ├── movies/            # Movies section
│   │   ├── page.tsx       # Movies listing page
│   │   └── [id]/          # Dynamic movie detail pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles and theme variables
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header with mobile menu
│   ├── Footer.tsx         # Footer component
│   ├── MovieCard.tsx      # Movie card component
│   ├── SearchBar.tsx      # Search functionality
│   ├── ThemeToggle.tsx    # Theme switcher button
│   └── theme-provider.tsx # Theme context provider
├── data/                  # Static data
│   └── movies.ts          # Movie database (30+ movies)
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
```

##  Key Features Implemented

###  Homepage (`/`)
- **Hero Section**: Featured movie with stunning background image
- **Movie Grid**: Recently showing movies with responsive layout
- **Features Section**: Why choose CineMax with icons and descriptions

###  Movies Section (`/movies`)
- **Movie Grid**: Filterable and searchable movie collection
- **Search Bar**: Real-time search by title, genre, or description
- **Movie Cards**: Interactive cards with hover effects

###  Movie Details (`/movies/[id]`)
- **Hero Section**: Full-width movie poster with overlay
- **Movie Information**: Genre badges, duration, showtimes, pricing
- **Booking Section**: Interactive ticket booking interface
- **Responsive Design**: Perfect layout on all devices

###  Theme System
- **Automatic Detection**: Respects user's system preference
- **Manual Toggle**: Easy theme switching in header
- **Persistent Storage**: Remembers your theme choice
- **Hydration Safe**: No flash of wrong theme on page load

##  Recent Fixes & Improvements

###  Mobile Menu Implementation
- Added functional hamburger menu for mobile devices
- Slide-in navigation with backdrop overlay
- Touch-friendly interactions and animations
- Auto-close on navigation and outside clicks

###  Theme System Fixes
- Fixed React hydration errors with theme switching
- Proper client/server component separation
- Theme persistence and smooth transitions
- Dark mode genre badge visibility improvements

###  Responsive Design
- Mobile-first approach with proper breakpoints
- Touch-friendly button sizes and spacing
- Optimized layouts for tablets and mobile devices

###  Performance Optimizations
- Next.js 16 with Turbopack for fast development
- Optimized images and lazy loading
- Efficient component structure and code splitting

##  Design System

### Color Palette
- **Primary**: Dynamic theme-aware colors (blue in light, white in dark)
- **Background**: Adaptive backgrounds for both themes
- **Text**: High contrast text colors for readability
- **Accents**: Subtle accent colors for interactive elements

### Typography
- **Headings**: Bold, responsive typography with proper hierarchy
- **Body Text**: Readable text with optimal line heights
- **Interactive Elements**: Clear visual feedback for buttons and links

### Components
- **Movie Cards**: Consistent styling with hover effects
- **Navigation**: Clean, accessible navigation with mobile menu
- **Forms**: Styled form elements with proper validation states

##  Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is private and proprietary.

##  Developer

Created with  by [@su03l]

---

**CineMax** - Your premier cinema experience. Discover the latest blockbusters and enjoy an unforgettable movie experience with our state-of-the-art facilities and premium services.
