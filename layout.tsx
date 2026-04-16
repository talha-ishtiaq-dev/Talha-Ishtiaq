import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Talha Ishtiaq | Shopify & WordPress Developer',
  description: 'Expert Shopify & WordPress developer crafting high-performance e-commerce experiences and custom web solutions.',
  keywords: ['Shopify developer', 'WordPress developer', 'Elementor', 'Liquid', 'ecommerce', 'web development', 'Talha Ishtiaq'],
  authors: [{ name: 'Talha Ishtiaq' }],
  metadataBase: new URL('https://talha-ishtiaq.vercel.app'),
  openGraph: {
    title: 'Talha Ishtiaq | Shopify & WordPress Developer',
    description: 'Expert Shopify & WordPress developer crafting high-performance e-commerce experiences.',
    type: 'website',
    url: 'https://talha-ishtiaq.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talha Ishtiaq | Shopify & WordPress Developer',
    description: 'Expert Shopify & WordPress developer crafting high-performance e-commerce experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
