/**
 * Type definitions for the portfolio application
 */

export interface Project {
  id: number
  title: string
  description: string
  techStack: string[]
  image: string
  liveUrl: string
  githubUrl: string
  featured?: boolean
}

export interface Skill {
  name: string
  level: number
}

export interface ContactInfo {
  label: string
  value: string
  href: string
  iconName: string
}

export interface NavigationItem {
  label: string
  href: string
}

export interface SocialLink {
  href: string
  label: string
  iconName: string
  platform: string
}

export interface PersonalInfo {
  name: string
  role: string
  bio: string
  email: string
  phone: string
  location: string
  availability: string
}

export interface SectionDescriptions {
  hero: {
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    description: string
  }
  projects: {
    description: string
  }
  contact: {
    description: string
    intro: string
  }
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  author: string
  creator: string
}
