'use client'

import { useState, useEffect, useRef } from 'react'

const DESCRIPTION =
  'Leading product design for a growing digital platform focused on empowering small businesses and franchise operators. Driving end-to-end user experience across onboarding, operations dashboards, and growth tools. Collaborating closely with product and engineering to simplify complex workflows, establish a scalable design system, and deliver features that support real business outcomes.'

const experiences = [
  { period: 'NOW', company: 'Rintisan Waralaba', role: 'Designer', description: DESCRIPTION },
  { period: '2023 - 2025', company: 'Wealth OF NFT', role: 'Designer', description: DESCRIPTION },
  { period: '2018 - 2024', company: 'Beatrix Design', role: 'Freelance', description: DESCRIPTION },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [lineProgress, setLineProgress] = useState(0)
  const [trackHeight, setTrackHeight] = useState(0)

  // Measure timeline track height (content area)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateHeight = () => {
      if (track) setTrackHeight(track.offsetHeight)
    }
    updateHeight()
    const ro = new ResizeObserver(updateHeight)
    ro.observe(track)
    return () => ro.disconnect()
  }, [])

  // Scroll-driven progress: line fills as section is scrolled into view
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const sectionHeight = rect.height
        const viewportHeight = window.innerHeight
        // How far the section has been scrolled: 0 when section top at viewport top, 1 when section fully passed
        const scrolled = Math.max(0, -rect.top)
        const progress = sectionHeight > 0 ? Math.min(1, scrolled / sectionHeight) : 0
        setLineProgress(progress)
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      id="product"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl text-black mb-4">
            My <span className="font-serif font-bold">Career & Experience</span>
          </h2>
          <p className="text-xl text-gray-600">
            Things that shaped me, a mix of everything
          </p>
        </header>

        <div ref={trackRef} className="relative">
          {/* Central timeline track (full height, centered) */}
          <div
            className="absolute top-0 bottom-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #fecdd3, #f9a8d4, #ec4899)',
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
            }}
          />

          {/* Animated fill: grows to current scroll position (line above the dot) */}
          <div
            className="absolute top-0 left-1/2 w-0.5 -translate-x-1/2 rounded-full pointer-events-none will-change-[height]"
            style={{
              height: trackHeight > 0 ? `${lineProgress * trackHeight}px` : 0,
              background: 'linear-gradient(to bottom, #fda4af, #f472b6, #db2777)',
              boxShadow: '0 0 24px rgba(219, 39, 119, 0.5)',
              transition: 'height 0.15s ease-out',
            }}
          />

          {/* Glowing dot: moves along timeline with scroll */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none will-change-transform z-10"
            style={{
              top: trackHeight > 0 ? `${lineProgress * trackHeight}px` : 0,
              width: 14,
              height: 14,
              background: '#ec4899',
              boxShadow: '0 0 0 4px rgba(255,255,255,1), 0 0 20px 4px rgba(236, 72, 153, 0.6), 0 0 40px 8px rgba(236, 72, 153, 0.3)',
              transition: 'top 0.15s ease-out',
            }}
          />

          <div className="relative w-full max-w-4xl mx-auto space-y-14">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-[1fr_80px_1.4fr] gap-6 md:gap-4 items-start"
              >
                {/* Left: placeholder + company + role */}
                <div className="flex gap-4 md:justify-end">
                  <div className="flex gap-4 flex-1 md:max-w-[280px]">
                    <div className="w-16 h-16 rounded-xl bg-gray-200 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-bold text-black text-xl">{exp.company}</p>
                      <p className="text-gray-500 text-base mt-1">{exp.role}</p>
                    </div>
                  </div>
                </div>

                {/* Middle: dates (static dots per entry; scroll dot is on the line) */}
                <div className="flex flex-col items-center justify-start pt-1">
                  <div className="w-3 h-3 rounded-full bg-pink-500 border-2 border-white shadow-md shrink-0 opacity-60" aria-hidden />
                  <div className="mt-3 flex flex-col items-center gap-0.5">
                    {exp.period.includes(' - ') ? (
                      <>
                        <span className="font-bold text-black text-lg">{exp.period.split(' - ')[0]}</span>
                        <span className="w-px h-2 bg-gray-300" />
                        <span className="font-bold text-black text-lg">{exp.period.split(' - ')[1]}</span>
                      </>
                    ) : (
                      <span className="font-bold text-black text-lg">{exp.period}</span>
                    )}
                  </div>
                </div>

                {/* Right: description */}
                <div>
                  <p className="text-gray-700 text-base leading-relaxed text-justify">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
