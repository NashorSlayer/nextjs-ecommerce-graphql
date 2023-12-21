"use client"
import { ApolloProvider } from '@apollo/client'
import { Inter } from 'next/font/google'
import './globals.css'
import client from '@/lib/client'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import React from "react";

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
          <Provider store={store}>
            {children}
          </Provider>
        </ApolloProvider>
      </body>
    </html >
  )
}