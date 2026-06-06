'use client'

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white px-4 py-20 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="animate-slide-in-left">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
            🎓 Welcome
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            SCC School of <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-6">
            Empowering Future Leaders
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Experience world-class education that nurtures academic excellence, character development, and lifelong learning. Our commitment is to transform young minds into responsible global citizens ready to make a positive impact on the world.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 animate-slide-in-up">
            <button className="btn-primary">
              📋 Explore Programs
            </button>
            <button className="btn-secondary">
              📞 Get in Touch
            </button>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="animate-slide-in-right relative flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gold rounded-full flex items-center justify-center animate-float shadow-2xl">
              <svg
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full p-12"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#2d5016', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#1f3610', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
                <circle cx="50" cy="35" r="14" fill="white" />
                <path d="M 32 55 Q 50 68 68 55" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M 38 55 L 38 85 M 62 55 L 62 85" stroke="white" strokeWidth="4" />
              </svg>
            </div>
            <div className="absolute top-12 right-0 bg-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm text-primary animate-pulse">
              School Profile
            </div>
            <div className="absolute bottom-12 left-0 bg-gold px-4 py-2 rounded-full shadow-lg font-semibold text-sm text-white animate-pulse">
              Since 1990
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
