'use client'

const principles = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for excellence in every endeavor, setting high standards and continuously improving to achieve our best.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We uphold honesty, fairness, and transparency in all our actions and relationships with others.',
  },
  {
    icon: '🌍',
    title: 'Inclusivity',
    description: 'We embrace diversity and create a welcoming community where every individual is valued and respected.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'We encourage creative thinking and embrace new ideas to provide modern, relevant education.',
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'We foster continuous personal and academic growth, encouraging students to overcome challenges and reach their potential.',
  },
  {
    icon: '❤️',
    title: 'Compassion',
    description: 'We cultivate empathy and caring attitudes, promoting kindness and social responsibility in our community.',
  },
]

export function Principles() {
  return (
    <section id="principles" className="py-20 px-4 md:px-0 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="section-label">— Core Values</p>
        <h2 className="section-title">
          Our Core <span className="gold">Principles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-gray-200 card-hover shadow-md hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 inline-block animate-bounce">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
