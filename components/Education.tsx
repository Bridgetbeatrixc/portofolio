import PlaceholderImage from './PlaceholderImage'

export default function Education() {
  const educations = [
    {
      name: 'Universitas Ciputra',
      degree: 'Bachelor of Computer Science',
      location: 'Surabaya, Indonesia',
      period: '2023 - 2026',
      logo: '/placeholder-logo.jpg',
    },
    {
      name: 'Korea University',
      degree: 'Student Exchange - IESNA',
      location: 'Seoul, South Korea',
      period: 'Aug 2024 - Dec 2024',
      logo: '/placeholder-logo.jpg',
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-black mb-12">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-pink-500 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <PlaceholderImage 
                    alt={edu.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-1">{edu.name}</h3>
                  <p className="text-gray-700 font-medium mb-1">{edu.degree}</p>
                  <p className="text-gray-600 text-sm mb-1">{edu.location}</p>
                  <p className="text-gray-600 text-sm">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

