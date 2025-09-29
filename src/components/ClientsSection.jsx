import React from 'react'

const ClientsSection = () => {
  const clientLogos = [
    // Row 1
    [
      { name: 'ZipTie', logo: 'ZipTie' },
      { name: 'Northwestern University', logo: 'Northwestern | QATAR' },
      { name: 'IBM', logo: 'IBM' },
      { name: 'Buddha Brands', logo: 'BUDDHA BRANDS' },
      { name: 'Paul Stuart', logo: 'Paul Stuart' },
      { name: 'Spar Bernstein', logo: 'SPAR' }
    ],
    // Row 2
    [
      { name: 'Buddha Brands', logo: 'BUDDHA BRANDS' },
      { name: 'Paul Stuart', logo: 'Paul Stuart' },
      { name: 'Spar Bernstein', logo: 'SPAR | BERNSTEIN' },
      { name: 'Babies R Us', logo: 'BABIES R US' },
      { name: 'Rollink', logo: 'Rollink' }
    ],
    // Row 3
    [
      { name: 'Sony', logo: 'SONY' },
      { name: 'Grenco Science', logo: 'G GRENCO SCIENCE' },
      { name: 'Enchant Christmas', logo: 'ENCHANT' },
      { name: 'Xerox', logo: 'xerox' },
      { name: 'Puma Energy', logo: 'PUMA ENERGY' }
    ]
  ]

  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
            CLIENTS ACROSS INDUSTRIES
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Full-Service Web Design Agency
          </h2>
          <div className="text-white/90 text-lg lg:text-xl max-w-4xl mx-auto">
            <p className="mb-2">From startups to Fortune 500 companies,</p>
            <p className="text-2xl font-bold">we create custom solutions that grow brands online</p>
          </div>
        </div>

        {/* Client Logos Grid with Sliding Animation */}
        <div className="space-y-8 mb-16">
          
          {/* Row 1 - Slide Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal space-x-12">
              {[...clientLogos[0], ...clientLogos[0], ...clientLogos[0]].map((client, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[280px] h-32 flex flex-col items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-white text-xl font-bold mb-2 text-center">
                    {client.logo}
                  </div>
                  <div className="text-white/70 text-sm text-center">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Slide Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal-reverse space-x-12">
              {[...clientLogos[1], ...clientLogos[1], ...clientLogos[1]].map((client, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[280px] h-32 flex flex-col items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-white text-xl font-bold mb-2 text-center">
                    {client.logo}
                  </div>
                  <div className="text-white/70 text-sm text-center">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - Slide Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-horizontal space-x-12">
              {[...clientLogos[2], ...clientLogos[2], ...clientLogos[2]].map((client, index) => (
                <div
                  key={`row3-${index}`}
                  className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-w-[280px] h-32 flex flex-col items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-white text-xl font-bold mb-2 text-center">
                    {client.logo}
                  </div>
                  <div className="text-white/70 text-sm text-center">
                    {client.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Explore All Services Button */}
        <div className="text-center">
          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-blue-900 transition-all duration-300 group">
            <span className="flex items-center space-x-2">
              <span>EXPLORE ALL SERVICES</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection