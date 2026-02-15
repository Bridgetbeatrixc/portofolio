'use client'

import { useState } from 'react'
import PlaceholderImage from './PlaceholderImage'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('Development')

  const filters = ['Design', 'Development', 'AI']

  const projects = [
    {
      id: 1,
      title: '01 - Mobile App Mockup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'UI/UX Case Study',
      image: '/placeholder-project.jpg',
    },
    {
      id: 2,
      title: '02 - Mobile App Mockup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'UI/UX Case Study',
      image: '/placeholder-project.jpg',
    },
    {
      id: 3,
      title: '03 - Mobile App Mockup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tag: 'UI/UX Case Study',
      image: '/placeholder-project.jpg',
    },
  ]

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-12">Project & Portofolio</h2>

        {/* Filter Tabs - underline active */}
        <div className="flex gap-6 mb-12 border-b border-gray-200 pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`pb-2 -mb-0.5 font-medium transition-all text-sm ${
                activeFilter === filter
                  ? 'text-pink-500 border-b-2 border-pink-500'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards - tag bottom left, arrow bottom right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="w-full h-56">
                <PlaceholderImage 
                  alt={project.title}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-black mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                    {project.tag}
                  </span>
                  <span className="text-gray-400 text-sm">View more →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

