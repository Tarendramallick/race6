"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { toggleCart, getCartCount } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/turn6-logo-red.png" alt="Turn6 Racing Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-xl text-white">Turn6 Racing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/80 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-white/80 hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/shop" className="text-white/80 hover:text-primary transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-white/80 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-primary transition-colors font-medium">
              Contact
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-primary relative hover:bg-gray-800"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white text-xs">
                  {getCartCount()}
                </Badge>
              )}
            </Button>

            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-primary relative hover:bg-gray-800"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {getCartCount() > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white text-xs">
                  {getCartCount()}
                </Badge>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-white hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800 shadow-lg">
              <Link
                href="/"
                className="block px-3 py-3 text-white/80 hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="block px-3 py-3 text-white/80 hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-3 text-white/80 hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="block px-3 py-3 text-white/80 hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-white/80 hover:text-primary hover:bg-gray-800 transition-colors font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href="/booking" onClick={() => setIsOpen(false)}>
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
