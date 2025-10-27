'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo, sectionDescriptions, personalInfo, officeHours } from '@/config/portfolio'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Phone,
  MapPin,
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="contact" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-24 bg-gradient-to-r from-primary to-accent"></div>
          <p className="text-foreground/70 mx-auto mt-6 max-w-2xl text-lg">
            {sectionDescriptions.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">Let&apos;s Connect</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                {sectionDescriptions.contact.intro}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {contactInfo.map(info => {
                const IconComponent = iconMap[info.iconName] || Mail
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group flex items-center gap-4 rounded-lg p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="bg-primary/10 rounded-lg p-3 transition-colors group-hover:bg-primary">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">{info.label}</p>
                      <p className="font-medium text-foreground transition-colors group-hover:text-primary">
                        {info.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="mb-4 text-lg font-semibold text-foreground">Office Hours</h4>
              <p className="text-foreground/70 whitespace-pre-line">{officeHours}</p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl bg-card p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-foreground/20 placeholder:text-foreground/50 w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-foreground/20 placeholder:text-foreground/50 w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-foreground/20 placeholder:text-foreground/50 w-full resize-none rounded-lg border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  backgroundColor: 'hsl(var(--primary))',
                }}
                className="w-full flex items-center justify-center px-6 py-3 text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
