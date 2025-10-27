'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { personalInfo, socialLinks, sectionDescriptions, animationConfig } from '@/config/portfolio'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
  Twitter: Mail, // Default to Mail if Twitter icon is not used
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationConfig.stagger * 2,
        delayChildren: animationConfig.duration.fast,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: animationConfig.duration.slow,
        ease: animationConfig.ease,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      {/* Background Gradient */}
      <div
        className="from-primary/10 to-accent/10 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground">{personalInfo.name}</span>
            <span className="mt-2 block text-primary">{personalInfo.role}</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-foreground/70 mx-auto mb-8 max-w-2xl text-lg sm:text-xl"
          variants={itemVariants}
        >
          {sectionDescriptions.hero.subtitle}
        </motion.p>

        <motion.div
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={itemVariants}
        >
          <a 
            href="#contact" 
            aria-label={sectionDescriptions.hero.ctaPrimary}
            style={{
              backgroundColor: 'hsl(var(--primary))',
            }}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white hover:opacity-90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {sectionDescriptions.hero.ctaPrimary}
          </a>
          <a 
            href="#projects" 
            aria-label={sectionDescriptions.hero.ctaSecondary}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border-2 border-foreground/20 text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {sectionDescriptions.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          className="mb-16 flex justify-center gap-6"
          variants={itemVariants}
          role="list"
          aria-label="Social links"
        >
          {socialLinks.slice(0, 3).map(social => {
            const IconComponent = iconMap[social.iconName] || Mail
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-foreground/20 rounded-lg border p-3 transition-all duration-200 hover:scale-110 hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`Visit my ${social.label} profile`}
                role="listitem"
              >
                <IconComponent className="h-5 w-5" />
              </a>
            )
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 transform"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="text-foreground/60 h-6 w-6 transition-colors hover:text-primary" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
