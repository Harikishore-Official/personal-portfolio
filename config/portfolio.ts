/**
 * Portfolio Configuration
 *
 * This file contains all the content and data for your portfolio.
 * Customize all sections here to personalize your portfolio.
 */

// ============================================================================
// PERSONAL INFORMATION
// ============================================================================

export const personalInfo = {
  name: 'John Doe',
  role: 'Full Stack Developer',
  bio: 'Passionate about crafting elegant solutions to complex problems. I bring ideas to life through clean, efficient code and intuitive user experiences.',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  availability: 'Available for freelance opportunities',
}

// ============================================================================
// SOCIAL LINKS
// ============================================================================

export const socialLinks = [
  {
    iconName: 'Github',
    href: 'https://github.com',
    label: 'GitHub',
    platform: 'github',
  },
  {
    iconName: 'Linkedin',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    platform: 'linkedin',
  },
  {
    iconName: 'Twitter',
    href: 'https://twitter.com',
    label: 'Twitter',
    platform: 'twitter',
  },
  {
    iconName: 'Mail',
    href: 'mailto:john.doe@example.com',
    label: 'Email',
    platform: 'email',
  },
]

// ============================================================================
// SKILLS
// ============================================================================

export const skills = [
  { name: 'TypeScript', level: 95 },
  { name: 'React', level: 98 },
  { name: 'Next.js', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'Python', level: 80 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'AWS', level: 75 },
  { name: 'Docker', level: 78 },
]

// ============================================================================
// PROJECTS
// ============================================================================

export const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A fully-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Built with Next.js and Stripe.',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    image: '/images/project-1.jpg', // Replace with actual image
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    image: '/images/project-2.jpg', // Replace with actual image
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description:
      'Analytics dashboard for social media metrics with data visualization, custom reports, and scheduling capabilities.',
    techStack: ['Vue.js', 'Chart.js', 'Firebase', 'Vuex', 'Vuetify'],
    image: '/images/project-3.jpg', // Replace with actual image
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Real-Time Chat Application',
    description:
      'A real-time messaging app with end-to-end encryption, file sharing, and video call features.',
    techStack: ['React', 'Node.js', 'WebSocket', 'JWT', 'AWS S3'],
    image: '/images/project-4.jpg', // Replace with actual image
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'Blog Platform CMS',
    description:
      'A headless CMS for bloggers with markdown support, SEO optimization, and scheduled publishing.',
    techStack: ['Next.js', 'Sanity CMS', 'MDX', 'NextAuth', 'Vercel'],
    image: '/images/project-5.jpg', // Replace with actual image
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Financial Dashboard',
    description:
      'Personal finance tracking dashboard with expense categorization, budgeting tools, and financial insights.',
    techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Chart.js'],
    image: '/images/project-6.jpg', // Replace with actual image
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
]

// ============================================================================
// NAVIGATION ITEMS
// ============================================================================

export const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// ============================================================================
// FOOTER LINKS
// ============================================================================

export const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

// ============================================================================
// CONTACT INFO
// ============================================================================

export const contactInfo = [
  {
    iconName: 'Mail',
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    iconName: 'Phone',
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    iconName: 'MapPin',
    label: 'Location',
    value: personalInfo.location,
    href: '#',
  },
]

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  name: 'Portfolio',
  description: 'Professional portfolio showcasing modern web development projects and skills',
  url: 'https://yoursite.com', // Replace with your actual site URL
  ogImage: '/og-image.jpg', // Replace with your OG image
  author: personalInfo.name,
  creator: personalInfo.name,
}

// ============================================================================
// OFFICE HOURS
// ============================================================================

export const officeHours =
  'Monday - Friday: 9:00 AM - 6:00 PM PST\nWeekend appointments available upon request'

// ============================================================================
// SECTION DESCRIPTIONS
// ============================================================================

export const sectionDescriptions = {
  hero: {
    subtitle:
      'Crafting beautiful, performant web experiences with modern technologies and clean code. Passionate about turning ideas into digital reality.',
    ctaPrimary: 'Get In Touch',
    ctaSecondary: 'View My Work',
  },
  about: {
    description:
      "I'm a passionate full stack developer with over 5 years of experience building scalable web applications. I specialize in creating user-focused solutions using modern JavaScript frameworks and cloud technologies.\n\nWhen I'm not coding, you'll find me contributing to open source projects, reading tech blogs, or exploring the latest trends in web development. I believe in writing clean, maintainable code and building products that make a real difference.",
  },
  projects: {
    description: 'A collection of projects showcasing my skills and experience in web development',
  },
  contact: {
    description: "Have a project in mind? Let's collaborate and turn your ideas into reality.",
    intro:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the contact methods below.",
  },
}

// ============================================================================
// ANIMATION CONFIGURATION
// ============================================================================

export const animationConfig = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  stagger: 0.1,
  ease: 'easeOut' as const,
}
