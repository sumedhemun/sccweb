# SCC School - Modern Next.js Website

A beautifully designed, modern school website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Features smooth animations, responsive design, and professional UI components.

## 🎨 Features

- ✨ **Modern & Professional UI** with smooth animations
- 📱 **Fully Responsive** design (mobile, tablet, desktop)
- 🎯 **Hero Section** with call-to-action buttons
- 📚 **Skills Bar** with interactive elements
- 🔮 **Vision Section** showcasing school values
- 📊 **Mission Section** with statistics
- 🌟 **Principles Section** with 6 core values
- 🧭 **Smooth Scroll Navigation**
- ⚡ **Fast Performance** with Next.js optimization
- 🎭 **Beautiful Animations** with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS Animations
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, make sure you have installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## 🚀 Installation & Setup

1. **Navigate to project directory**:
   ```bash
   cd c:\Users\sumedhe\Documents\GitHub\sccweb
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
└── components/
    ├── Navbar.tsx          # Navigation bar
    ├── Footer.tsx          # Footer
    └── sections/
        ├── Hero.tsx        # Hero section
        ├── SkillsBar.tsx   # Skills bar
        ├── Vision.tsx      # Vision section
        ├── Mission.tsx     # Mission section
        └── Principles.tsx  # Principles section
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize colors:
```js
colors: {
  primary: '#2d5016',  // Primary green
  gold: '#f0c649',     // Gold accent
}
```

### Content
Update content in respective component files:
- Hero section: `src/components/sections/Hero.tsx`
- Vision section: `src/components/sections/Vision.tsx`
- Mission section: `src/components/sections/Mission.tsx`
- Principles: `src/components/sections/Principles.tsx`

## 🚀 Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created with ❤️ for SCC School
