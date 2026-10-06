import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Malíř pokojů Praha – Pokorný | Malování bytů',
  description:
    'Malování bytů, domů a kanceláří v celé Praze. Rychle, přesně a bez jediné kapky navíc. Férová cena předem, úklid po práci. Hodnocení 5,0 z 20 recenzí na Google.',
  generator: 'v0.app',
  openGraph: {
    title: 'Malíř pokojů Praha – Pokorný | Malování bytů',
    description:
      'Malování bytů, domů a kanceláří v celé Praze. Férová cena předem, perfektní úklid po práci.',
    locale: 'cs_CZ',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf9f5',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className={`${jakarta.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
