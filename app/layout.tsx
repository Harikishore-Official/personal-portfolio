import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig, personalInfo } from '@/config/portfolio'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description: personalInfo.bio,
  keywords: [
    'portfolio',
    'developer',
    'full stack',
    'web development',
    'react',
    'next.js',
    'typescript',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.bio,
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.bio,
    creator: personalInfo.name,
  },
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
