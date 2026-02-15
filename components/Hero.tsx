'use client'

import { useState, useEffect, useRef } from 'react'

const ROLES = ['designer', 'developer', 'AI engineer']
const TYPE_DELAY = 120
const PAUSE_AFTER_TYPE = 2000
const DELETE_DELAY = 80
const PAUSE_AFTER_DELETE = 500

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const scheduledNextRef = useRef(false)

  useEffect(() => {
    const word = ROLES[roleIndex]
    if (!isDeleting) {
      if (displayText.length < word.length) {
        const t = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), TYPE_DELAY)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
      return () => clearTimeout(t)
    } else {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), DELETE_DELAY)
        return () => clearTimeout(t)
      }
      if (!scheduledNextRef.current) {
        scheduledNextRef.current = true
        const t = setTimeout(() => {
          setRoleIndex((i) => (i + 1) % ROLES.length)
          setIsDeleting(false)
          scheduledNextRef.current = false
        }, PAUSE_AFTER_DELETE)
        return () => clearTimeout(t)
      }
    }
  }, [roleIndex, displayText, isDeleting])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen bg-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col justify-center">
      {/* SVG gradient overlay - pink/orange/purple blurred ellipses */}
      <div className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <svg
          className="absolute inset-0 w-full h-full object-cover"
          viewBox="0 0 1440 783"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g filter="url(#hero_filter0)">
            <ellipse cx="832.5" cy="391.283" rx="1020.5" ry="191.283" fill="url(#hero_paint0)" />
          </g>
          <g filter="url(#hero_filter1)">
            <ellipse cx="807.684" cy="380.79" rx="746.707" ry="139.963" fill="url(#hero_paint1)" />
          </g>
          <defs>
            <filter id="hero_filter0" x="-388" y="0" width="2441" height="782.566" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_6_41" />
            </filter>
            <filter id="hero_filter1" x="-39.0233" y="140.827" width="1693.41" height="479.926" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_6_41" />
            </filter>
            <linearGradient id="hero_paint0" x1="832.5" y1="200" x2="832.5" y2="582.566" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF7BCA" />
              <stop offset="1" stopColor="#FFC56F" stopOpacity="0.46" />
            </linearGradient>
            <linearGradient id="hero_paint1" x1="807.684" y1="240.827" x2="807.684" y2="520.754" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F22FB0" />
              <stop offset="1" stopColor="#F58A25" stopOpacity="0" />
              <stop offset="1" stopColor="#7061A3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto w-full relative flex flex-col justify-center flex-1 z-10">
        {/* Headline: image will overlap bottom of "real problems." */}
        <div className="text-center mb-2 lg:mb-0 relative z-10 order-1">
          <h1 className="font-bold text-black leading-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
            I Craft products that solve{' '}
            <br />
            <span className="font-serif italic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">real problems.</span>
          </h1>
        </div>

        {/* 3-column hero grid: image overlaps headline and side text */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center relative order-2 flex-1">
          {/* Left: intro + reach-out card — image overlaps from right */}
          <div className="space-y-5 order-2 lg:order-1 relative z-10">
            <p className="text-lg lg:text-xl text-gray-800">Hi folks! i&apos;m bridget 👋</p>
            <p className="text-lg lg:text-xl text-gray-800">
              You can call me a{' '}
              <span className="font-serif font-semibold underline underline-offset-4 decoration-2 inline-block min-w-[10ch] text-xl lg:text-2xl">
                {displayText}
                <span className="inline-block ml-0.5" aria-hidden style={{ animation: 'blink 0.8s ease-in-out infinite' }}>|</span>
              </span>
            </p>
            <div className="mt-6">
              <div
                className="px-6 py-5 text-center shadow-lg"
                style={{
                  borderRadius: '23px',
                  border: '2px solid #98F9FF',
                  background: 'radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%), rgba(255, 255, 255, 0.25)',
                  backgroundBlendMode: 'overlay, normal',
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)',
                }}
              >
                <p className="text-gray-800 font-medium mb-4 text-lg">Reach Out To Me</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-black text-white hover:opacity-90 transition-opacity" aria-label="TikTok">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity" aria-label="LinkedIn" style={{ backgroundColor: '#0A66C2' }}>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5">
                      <path fill="#fff" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity" aria-label="WhatsApp" style={{ backgroundColor: '#25D366' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5">
                      <path fill="#ffffff" d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Center: profile image — top of head overlaps "real problems." */}
          <div className="flex justify-center order-1 lg:order-2 relative z-20 
                -translate-y-[125px] lg:-translate-y-32 xl:-translate-y-40">

            <img
              src="/bridget.png"
              alt="Bridget Beatrix Claire"
              className="w-80 sm:w-100 lg:w-[22rem] xl:w-[26rem] aspect-[3/4] object-cover object-top "
            />
          </div>

          {/* Right: description + CTA — image overlaps from left */}
          <div className="space-y-6 order-3 relative z-10">
            <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
              I&apos;m very passionate in designing and building products that help to solve real-world problems but still visually pleasing.
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all font-medium text-base w-full sm:w-auto"
              >
                <span>Lets Connect</span>
                <span aria-hidden>→</span>
              </button>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 transition-colors underline text-center sm:text-left"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
