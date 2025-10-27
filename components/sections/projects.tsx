'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { projects, sectionDescriptions, animationConfig } from '@/config/portfolio'

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: animationConfig.stagger,
        delayChildren: animationConfig.duration.fast,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Featured Projects</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="text-foreground/70 mx-auto mt-6 max-w-2xl text-lg">
            {sectionDescriptions.projects.description}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects
            .filter(p => p.featured)
            .map(project => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group cursor-pointer overflow-hidden rounded-xl bg-card shadow-lg transition-all duration-300 hover:shadow-2xl"
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
              >
                <div className="from-primary/20 to-accent/20 relative h-48 overflow-hidden bg-gradient-to-br">
                  {/* Placeholder for project image */}
                  <div className="text-primary/20 absolute inset-0 flex items-center justify-center text-6xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    fill
                    className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    loading="lazy"
                  />
                  {hoveredId === project.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="bg-foreground/50 absolute inset-0 flex items-center justify-center gap-4"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-card p-3 text-foreground shadow-lg transition-transform hover:scale-110"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-6 w-6 text-primary" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-card p-3 text-foreground shadow-lg transition-transform hover:scale-110"
                        aria-label="View code on GitHub"
                      >
                        <Github className="h-6 w-6 text-primary" />
                      </a>
                    </motion.div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <p
                    className="text-foreground/70 mb-4 line-clamp-3 text-sm"
                    aria-label={project.description}
                  >
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent"
                    >
                      Live Site
                      <ExternalLink className="inline h-4 w-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                    >
                      Code
                      <Github className="inline h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
