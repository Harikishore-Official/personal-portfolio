import Link from 'next/link'

/**
 * Skip to main content link for accessibility
 * Allows keyboard users to bypass navigation
 */
export default function SkipLink() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-6 focus:py-3 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Skip to main content"
    >
      Skip to main content
    </Link>
  )
}
