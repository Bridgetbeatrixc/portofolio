'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="contact" className="relative bg-gradient-to-br from-pink-400 via-pink-500 to-orange-400 py-20 px-4 sm:px-6 lg:px-8">
      {/* Scroll to top - top right of footer section */}
      <button
        onClick={scrollToTop}
        className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Scroll to top"
      >
        <span className="text-2xl">↑</span>
      </button>

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-6">
          Create <span className="italic font-serif">Finnest</span> Products
        </h2>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-black text-white px-6 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition-all text-sm"
        >
          hire me
        </button>
      </div>
    </footer>
  )
}

