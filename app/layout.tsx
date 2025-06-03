import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Studio Smalt - Design agile, social marketing, conseil business',
  description: 'Studio Smalt accompagne les équipes produit, tech et marketing dans la création d\'interfaces claires, utiles et testées.',
  keywords: ['design', 'UX', 'UI', 'product design', 'web design', 'facilitation', 'freelance'],
  authors: [{ name: 'Salomé Mullet' }],
  creator: 'Salomé Mullet',
  publisher: 'Studio Smalt',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://studio-smalt.fr',
    siteName: 'Studio Smalt',
    title: 'Studio Smalt - Design agile, social marketing, conseil business',
    description: 'Studio Smalt accompagne les équipes produit, tech et marketing dans la création d\'interfaces claires, utiles et testées.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Smalt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Smalt - Design agile, social marketing, conseil business',
    description: 'Studio Smalt accompagne les équipes produit, tech et marketing dans la création d\'interfaces claires, utiles et testées.',
    images: ['/images/og-image.jpg'],
    creator: '@StudioSmalt',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
