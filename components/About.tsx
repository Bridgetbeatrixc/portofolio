export default function About() {
  const cards = [
    {
      title: 'designer',
      subtitle: 'Crafting Experiences',
      description: 'I design intuitive, user-centered interfaces that balance clarity, usability, and visual polish across digital products.',
    },
    {
      title: 'developer',
      subtitle: 'Building What Scales',
      description: 'I build fast, accessible applications with clean, scalable architecture that turns design into reliable, production-ready experiences.',
    },
    {
      title: 'AI engineer',
      subtitle: 'Powering Smart Products',
      description: 'I create AI-powered features and workflows that make products smarter, more adaptive, and more valuable to users.',
    },
  ]

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to right, rgba(255, 240, 245, 0.4), rgba(240, 248, 255, 0.5))',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl sm:text-6xl font-bold text-black mb-8">
          About <span className="font-serif italic">me</span>
        </h2>
        <p className="text-lg text-gray-700 mb-14 max-w-3xl">
          I design and build digital products that blend thoughtful user experience with solid engineering. With a background in UI/UX, frontend development, and digital growth.
        </p>

        {/* Skill cards with continuous gradient border (pink → neutral → blue) */}
        <div
          className="p-[1px] rounded-xl mb-14 w-full"
          style={{
            background: 'linear-gradient(to right, #e9b4c9, #d4d4d8, #a5c9e0)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 bg-white rounded-[11px] overflow-hidden">
            {cards.map((card) => (
              <div key={card.title} className="p-6">
                <h3 className="text-2xl font-bold font-serif italic text-black mb-1 lowercase">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{card.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech - Stack: single box, gradient border (light blue), title + subtitle + empty area */}
        <div
          className="p-[1px] rounded-xl w-full"
          style={{
            background: 'linear-gradient(to right, #b8d4e8, #a5c9e0)',
          }}
        >
          <div className="bg-white rounded-xl p-6 min-h-[140px]">
            <h3 className="text-2xl font-bold font-serif italic text-black mb-1">
              Tech - Stack
            </h3>
            <p className="text-sm text-gray-400 mb-6">Tools I used</p>
            <div className="min-h-[60px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
