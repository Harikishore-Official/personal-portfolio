# Customization Guide

This guide will help you customize the portfolio template to match your brand and personal information.

## Quick Start

1. **Edit `config/portfolio.ts`** - All content is managed here
2. **Add your images** - Place images in `public/images/`
3. **Update site URL** - Change `siteConfig.url` in `config/portfolio.ts`
4. **Customize colors** - Edit CSS variables in `app/globals.css`

## Configuration File

The main configuration file is `config/portfolio.ts`. Here's what you need to update:

### Personal Information

```typescript
export const personalInfo = {
  name: 'John Doe', // Your full name
  role: 'Full Stack Developer', // Your job title/role
  bio: 'Passionate about...', // Short bio (2-3 sentences)
  email: 'john.doe@example.com', // Your email
  phone: '+1 (555) 123-4567', // Your phone number
  location: 'San Francisco, CA', // Your location
  availability: 'Available for...', // Availability status
}
```

### Social Links

Add or remove social media platforms:

```typescript
export const socialLinks = [
  {
    icon: Github, // Import from lucide-react
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    platform: 'github',
  },
  // Add more...
]
```

**Available Icons** from Lucide React:

- `Github`, `Linkedin`, `Mail`, `Twitter`, `Instagram`, `Youtube`, etc.

### Skills

Customize your technical skills:

```typescript
export const skills = [
  { name: 'TypeScript', level: 95 }, // 0-100
  { name: 'React', level: 98 },
  // Add your skills...
]
```

### Projects

Add your projects with proper structure:

```typescript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Detailed project description...',
    techStack: ['React', 'Next.js', 'TypeScript'], // Technologies used
    image: '/images/project-1.jpg', // Image path in public folder
    liveUrl: 'https://yourproject.com', // Live demo URL
    githubUrl: 'https://github.com/username/repo', // GitHub URL
    featured: true, // Show in main view
  },
]
```

**Note**: Only projects with `featured: true` are displayed on the homepage.

### Section Descriptions

Customize section text:

```typescript
export const sectionDescriptions = {
  hero: {
    subtitle: 'Your hero subtitle here',
    ctaPrimary: 'Get In Touch',
    ctaSecondary: 'View My Work',
  },
  about: {
    description: `Paragraph 1 of your about section.
    
Paragraph 2 of your about section.`,
  },
  projects: {
    description: 'Your projects section description',
  },
  contact: {
    description: 'Contact section description',
    intro: 'Contact section intro text',
  },
}
```

### Site Configuration

Update site-wide settings:

```typescript
export const siteConfig = {
  name: 'Portfolio',
  description: 'Your portfolio description',
  url: 'https://yoursite.com', // ⚠️ Important: Update this!
  ogImage: '/og-image.jpg', // Open Graph image
  author: personalInfo.name,
  creator: personalInfo.name,
}
```

### Office Hours

Customize your availability:

```typescript
export const officeHours = `Monday - Friday: 9:00 AM - 6:00 PM PST
Weekend appointments available upon request`
```

## Images

### Adding Images

1. **Profile Image**: Place in `public/images/profile.jpg`
2. **Project Images**: Add to `public/images/project-{number}.jpg`
3. **OG Image**: Add to `public/og-image.jpg`

### Image Specifications

- **Profile**: 600x600px or square aspect ratio
- **Projects**: 1200x800px or 3:2 aspect ratio
- **OG Image**: 1200x630px

### Using Unsplash

Add your images to `next.config.js`:

```javascript
images: {
  domains: ['images.unsplash.com'], // Add your image domains
}
```

Then use in your config:

```typescript
image: 'https://images.unsplash.com/photo-...'
```

## Colors

### Customizing Theme

Edit `app/globals.css`:

```css
:root {
  --background: 0 0% 100%; /* Light background */
  --foreground: 222.2 84% 4.9%; /* Text color */
  --primary: 221.2 83.2% 45%; /* Primary color */
  --secondary: 210 40% 96.1%; /* Secondary color */
  --muted: 210 40% 96.1%; /* Muted color */
  --accent: 221.2 83.2% 45%; /* Accent color */
  --card: 0 0% 100%; /* Card background */
  --border: 214.3 31.8% 91.4%; /* Border color */
}

.dark {
  --background: 222.2 84% 4.9%; /* Dark background */
  --foreground: 210 40% 98%; /* Light text */
  --primary: 217.2 91.2% 59.8%; /* Primary in dark mode */
  --secondary: 217.2 32.6% 17.5%; /* Secondary in dark mode */
  /* ... adjust dark mode colors */
}
```

**Color format**: HSL (Hue, Saturation, Lightness)

## Typography

### Changing Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Change to other Google Fonts:
import { Roboto } from 'next/font/google'
const font = Roboto({ weight: ['400', '700'], subsets: ['latin'] })
```

### Available Fonts

- Inter (current)
- Roboto
- Open Sans
- Montserrat
- Playfair Display

## Adding New Sections

1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add section description in `config/portfolio.ts`

## Navigation

Customize navigation links:

```typescript
export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
  // Add more...
]
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Update `siteConfig.url` in `config/portfolio.ts`
4. Redeploy

### Other Platforms

1. Build: `npm run build`
2. Start: `npm start`
3. Update `siteConfig.url` to your domain

## SEO

### Meta Tags

Automatically generated from `config/portfolio.ts`. Update:

- `personalInfo.name` → Title
- `personalInfo.bio` → Description
- `siteConfig.url` → Canonical URL

### Open Graph

Add `/public/og-image.jpg` (1200x630px) for social sharing.

### Sitemap

Automatically generated at `/sitemap.xml` from `app/sitemap.ts`.

## Support

Need help? Check:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
