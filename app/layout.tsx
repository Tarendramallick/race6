import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import "./globals.css"

export const metadata: Metadata = {
  title: "Turn6 Racing - Professional Racing Simulators & Training",
  description:
    "Experience the ultimate in racing simulation with Turn6 Racing. Professional sim racing, VR experiences, and manual transmission training.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <CartProvider>
          <Navigation />
          <Suspense fallback={null}>{children}</Suspense>
          <CartSidebar />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}
