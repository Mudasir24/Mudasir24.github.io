# Portfolio Website

A modern, Apple-inspired portfolio website built with React + Vite.

## ✨ Features

- **Apple-style UI/UX** - Clean, minimal design with sophisticated animations
- **Smooth Scroll Animations** - Powered by Framer Motion
- **Fully Responsive** - Looks great on all devices
- **Optimized Performance** - Fast loading with Vite
- **Accessible** - Built with accessibility in mind

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer component
│   └── AnimatedText.jsx # Text animation component
├── sections/           # Main page sections
│   ├── Hero.jsx        # Hero/landing section
│   ├── About.jsx       # About me section
│   ├── Projects.jsx    # Portfolio projects
│   ├── Skills.jsx      # Skills & expertise
│   └── Contact.jsx     # Contact form
├── styles/             # Global styles
│   └── index.css       # CSS variables & base styles
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🎨 Customization

### Colors
Edit the CSS custom properties in `src/styles/index.css`:

```css
:root {
  --color-black: #1d1d1f;
  --color-blue: #0071e3;
  /* ... */
}
```

### Content
- Update personal info in each section component
- Replace placeholder images with your own
- Modify project data in `src/sections/Projects.jsx`
- Update skills in `src/sections/Skills.jsx`

## 📝 License

MIT License - feel free to use this for your own portfolio!
