"use client"
import { ApolloProvider } from '@apollo/client'
import { Inter } from 'next/font/google'
import './globals.css'
import client from '@/lib/client'




const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html >
  )
}
