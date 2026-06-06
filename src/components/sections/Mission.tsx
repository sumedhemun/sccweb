'use client'

export function Mission() {
  const stats = [
    { number: '500+', label: 'Students Enrolled' },
    { number: '95%', label: 'Success Rate' },
    { number: '30+', label: 'Expert Faculty' },
    { number: '50+', label: 'Years of Excellence' },
  ]

  return (
    <section id="mission" className="py-20 px-4 md:px-0 bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <p className="section-label text-gold">— About Us</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Who is <span className="text-gold">SCC School?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg leading-relaxed mb-6 text-gray-100">
              Our mission is to provide a holistic and inclusive education that nurtures academic excellence, develops essential life skills, and cultivates strong character. We are committed to creating an inspiring learning environment where students are challenged to think creatively, collaborate effectively, and embrace lifelong learning.
            </p>
            <p className="text-lg leading-relaxed mb-8 text-gray-100">
              Through dedicated teaching, innovative pedagogy, and strong partnerships with families and community, we prepare students for success in an ever-changing world.
            </p>
            <button className="btn-primary">
              📥 Download Prospectus ➤
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg border-l-4 border-gold card-hover"
              >
                <div className="text-4xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
