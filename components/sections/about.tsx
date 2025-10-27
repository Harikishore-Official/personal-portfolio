'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { personalInfo, skills, sectionDescriptions, animationConfig } from '@/config/portfolio'

export default function About() {
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
    <section id="about" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">About Me</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="relative mx-auto h-80 w-80 overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="from-primary/20 to-accent/20 absolute inset-0 bg-gradient-to-br" />
              {/* Placeholder for profile image - replace with actual image */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-accent text-2xl font-bold text-white">
                AJ
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Hello, I&apos;m {personalInfo.name.split(' ')[0]}
              </h3>
              {sectionDescriptions.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-foreground/70 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="mb-4 text-xl font-semibold text-foreground">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
