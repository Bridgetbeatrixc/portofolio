'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left - name + bullet + roles */}
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-black">Bridget Beatrix Claire</span>
            <span className="text-black">•</span>
            <span className="text-sm text-gray-800">
              Fullstack Developer | AI Engineer | UI Design | Content Creator
            </span>
          </div>

          {/* Right - four pill buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('work')}
              className="bg-gray-200 text-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-300 transition-colors font-medium text-sm"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-gray-200 text-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-300 transition-colors font-medium text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('product')}
              className="bg-gray-200 text-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-300 transition-colors font-medium text-sm"
            >
              Product
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

