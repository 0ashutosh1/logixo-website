import React from 'react'

const ClientLogos = () => {
  const clients = [
    { name: 'Grenco', logo: 'G' },
    { name: 'Enchant', logo: 'ENCHANT' },
    { name: 'BabiesRUs', logo: 'BABIES"R"US' },
    { name: 'Xerox', logo: 'xerox' },
    { name: 'Sony', logo: 'SONY' },
    { name: 'P&G', logo: 'P&G' },
    { name: 'NYU', logo: 'NYU' },
    { name: 'NFL', logo: 'NFL' },
    { name: 'HP', logo: 'HP' },
    { name: 'Grenco', logo: 'G' },
    { name: 'Enchant', logo: 'ENCHANT' },
    { name: 'BabiesRUs', logo: 'BABIES"R"US' }
  ]

  return (
    <section className="relative z-10 py-16 px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Scrolling Logo Container */}
        <div className="relative">
          <div className="flex animate-scroll-horizontal">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 text-white/60 hover:text-white/90 transition-colors duration-300 flex items-center justify-center h-16 min-w-[150px] mx-8"
              >
                <span className="font-bold text-lg lg:text-xl tracking-wide whitespace-nowrap">
                  {client.logo}
                </span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 text-white/60 hover:text-white/90 transition-colors duration-300 flex items-center justify-center h-16 min-w-[150px] mx-8"
              >
                <span className="font-bold text-lg lg:text-xl tracking-wide whitespace-nowrap">
                  {client.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos