import '../styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: 'Realassist-PDF Report Generator',
  description: 'PDF report generator for real estate agents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
