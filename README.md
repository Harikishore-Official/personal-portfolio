# Portfolio Template

A modern, professional, and production-ready portfolio template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Perfect for developers, designers, and creative professionals looking to showcase their work.

## ✨ Features

### 🎨 Design & UI

- **Modern Design System**: Consistent colors, spacing, typography, and components
- **Dark/Light Mode**: Automatic theme switching based on system preference
- **Smooth Animations**: Framer Motion powered transitions with consistent timing
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Reusable Components**: Button variants, cards, and UI primitives

### ♿ Accessibility

- **WCAG AA Compliant**: Proper color contrast and keyboard navigation
- **ARIA Labels**: Comprehensive screen reader support
- **Skip to Content**: Keyboard users can bypass navigation
- **Focus Styles**: Clear visual indicators for keyboard navigation

### ⚡ Performance

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Optimized Animations**: Smooth 60fps animations with Framer Motion
- **Code Splitting**: Automatic code splitting for optimal loading
- **Lighthouse Scores**: 90+ in all categories (Performance, Accessibility, SEO)

### 🔧 Developer Experience

- **TypeScript**: Full type safety throughout the codebase
- **Configuration-Driven**: All content in `config/portfolio.ts`
- **Modular Structure**: Clean, organized component architecture
- **Inline Documentation**: JSDoc comments and code explanations

### 📊 SEO & Metadata

- **Open Graph**: Rich previews on social media platforms
- **Twitter Cards**: Optimized Twitter sharing
- **Sitemap**: Automatic sitemap generation
- **Meta Tags**: Comprehensive SEO optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd portfolio-nextjs
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information

All personal information is managed in `config/portfolio.ts`. Simply edit this file to customize:

```typescript
export const personalInfo = {
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Your bio description',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
}
```

### Projects

Add or modify projects in the same config file:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    techStack: ['React', 'Next.js', 'TypeScript'],
    image: '/images/project-1.jpg',
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/username',
    featured: true,
  },
  // ... more projects
]
```

### Social Links

Update social media links:

```typescript
export const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    platform: 'github',
  },
  // ... more social links
]
```

### Site Configuration

Update site URL and metadata:

```typescript
export const siteConfig = {
  name: 'Your Portfolio',
  description: 'Your portfolio description',
  url: 'https://yoursite.com',
  ogImage: '/og-image.jpg',
  author: 'Your Name',
  creator: 'Your Name',
}
```

### Theme Colors

Customize colors in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 45%; /* Your primary color */
  --accent: 221.2 83.2% 45%; /* Your accent color */
  /* ... more colors */
}
```

## 📦 Project Structure

```
portfolio-nextjs/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── sitemap.ts           # Sitemap generation
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/            # Page sections
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── projects.tsx     # Projects section
│   │   ├── contact.tsx      # Contact section
│   │   └── footer.tsx       # Footer section
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx       # Button component
│   │   └── card.tsx         # Card component
│   ├── navigation.tsx       # Navigation bar
│   ├── back-to-top.tsx      # Back to top button
│   └── skip-link.tsx        # Skip to content link
├── config/                  # Configuration files
│   └── portfolio.ts         # Portfolio data and settings
├── lib/                     # Utility functions
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   ├── images/              # Image assets
│   └── robots.txt           # Robots configuration
├── types/                   # TypeScript types
│   └── index.ts             # Type definitions
└── ...config files
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📤 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Deploy**

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🎯 Features in Detail

### Design System

- **Consistent Spacing**: Using Tailwind's 8px grid system
- **Typography**: Custom font scaling with Inter
- **Color Palette**: Semantic color variables for easy theming
- **Component Variants**: Primary, secondary, and outline button styles

### Accessibility

- ✅ Keyboard navigation throughout
- ✅ ARIA labels and landmarks
- ✅ Focus indicators for all interactive elements
- ✅ Screen reader friendly structure
- ✅ WCAG AA color contrast compliance

### Performance

- ✅ Optimized images with Next.js Image component
- ✅ Lazy loading for below-the-fold content
- ✅ Code splitting and tree shaking
- ✅ Minified production build
- ✅ Efficient animations (60fps)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode with React

## 📞 Support

For questions or support, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
