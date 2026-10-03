import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const display = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const body = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://lev7casino.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:
    'Лев Казино — официальный сайт Lev Casino: зеркало, бонус и регистрация онлайн',
  description:
    'Лев казино официальный сайт Lev Casino: играть онлайн, актуальное зеркало, приветственный бонус и быстрая регистрация. Надёжная площадка для игры на деньги с быстрыми выплатами.',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Лев Казино — официальный сайт Lev Casino',
    description:
      'Играть в лев казино онлайн: актуальное зеркало, приветственный бонус и быстрая регистрация на официальном сайте Lev Casino.',
    siteName: 'Lev Casino',
    locale: 'ru_RU',
    images: [
      {
        url: '/images/lev-lion.jpg',
        width: 1200,
        height: 630,
        alt: 'Lev Casino — лев казино официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Лев Казино — официальный сайт Lev Casino',
    description:
      'Играть в лев казино онлайн: зеркало, бонус и регистрация на официальном сайте Lev Casino.',
    images: ['/images/lev-lion.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <head>
        <meta name="yandex-verification" content="262dde156af67192" />
        <meta name="theme-color" content="#0E3B2E" />
        <link rel="canonical" href="https://lev7casino.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
