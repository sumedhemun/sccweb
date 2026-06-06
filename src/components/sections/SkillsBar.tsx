'use client'

import { useState } from 'react'

const skills = [
  '📚 Academic Excellence',
  '🎨 Character Development',
  '🌍 Global Perspective',
  '💡 Critical Thinking',
  '🤝 Leadership Skills',
]

export function SkillsBar() {
  const [activeSkill, setActiveSkill] = useState(0)

  return (
    <section className="bg-white px-4 py-8 -mt-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-3 bg-gradient-to-r from-gold to-yellow-400 p-4 rounded-xl shadow-lg">
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => setActiveSkill(index)}
              className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                activeSkill === index
                  ? 'bg-primary text-gold scale-105'
                  : 'bg-white text-primary hover:bg-gray-100'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
