import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notes App with Next and Drizzle',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex min-h-full flex-col bg-slate-100`}
      >
        <header className="bg-slate-300 px-8 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold">Notes App</h1>
          </Link>
        </header>

        <div className="flex grow">{children}</div>

        <footer className="bg-slate-900 p-8 text-white">
          Made with a lot of trial and error.
        </footer>
      </body>
    </html>
  )
}
