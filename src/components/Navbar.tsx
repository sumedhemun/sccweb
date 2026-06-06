'use client'

import { useState } from 'react'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 animate-slide-in-left">
          <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold text-primary">SCC School</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 animate-slide-in-right">
          <button
            onClick={() => scrollTo('home')}
            className="text-primary hover:text-gold transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('vision')}
            className="text-primary hover:text-gold transition-colors font-medium"
          >
            Vision
          </button>
          <button
            onClick={() => scrollTo('mission')}
            className="text-primary hover:text-gold transition-colors font-medium"
          >
            Mission
          </button>
          <button
            onClick={() => scrollTo('principles')}
            className="text-primary hover:text-gold transition-colors font-medium"
          >
            Principles
          </button>
          <button className="px-5 py-2 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-6 h-0.5 bg-primary"></div>
          <div className="w-6 h-0.5 bg-primary"></div>
          <div className="w-6 h-0.5 bg-primary"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
          <button
            onClick={() => scrollTo('home')}
            className="block w-full text-left py-2 text-primary hover:text-gold font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('vision')}
            className="block w-full text-left py-2 text-primary hover:text-gold font-medium"
          >
            Vision
          </button>
          <button
            onClick={() => scrollTo('mission')}
            className="block w-full text-left py-2 text-primary hover:text-gold font-medium"
          >
            Mission
          </button>
          <button
            onClick={() => scrollTo('principles')}
            className="block w-full text-left py-2 text-primary hover:text-gold font-medium"
          >
            Principles
          </button>
          <button className="w-full mt-4 px-5 py-2 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  )
}
