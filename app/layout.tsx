import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'LiftSetup – Best Home Gym Equipment Reviews & Guides',
    template: '%s | LiftSetup',
  },
  description:
    'Find the best home gym equipment for your budget and space. Expert reviews, honest comparisons, and setup guides to help you build your perfect home gym.',
  keywords: [
    'home gym equipment',
    'best home gym equipment',
    'home gym setup',
    'adjustable dumbbells',
    'home gym reviews',
  ],
  authors: [{ name: 'LiftSetup' }],
  creator: 'LiftSetup',
  publisher: 'LiftSetup',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://liftsetup.com',
    siteName: 'LiftSetup',
    title: 'LiftSetup – Best Home Gym Equipment Reviews & Guides',
    description:
      'Find the best home gym equipment for your budget and space. Expert reviews, honest comparisons, and setup guides.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LiftSetup – Best Home Gym Equipment Reviews & Guides',
    description:
      'Find the best home gym equipment for your budget and space.',
    creator: '@liftsetup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
