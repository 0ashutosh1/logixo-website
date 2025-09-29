import React, { useState } from 'react'

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('FEATURED')
  const [showAll, setShowAll] = useState(false)

  const portfolioData = {
    FEATURED: [
      {
        id: 1,
        name: 'RE/MAX',
        image: '/api/placeholder/400/300',
        type: 'Real Estate Platform',
        gradient: 'from-blue-500 to-purple-600'
      },
      {
        id: 2,
        name: 'Northwestern University',
        image: '/api/placeholder/400/300',
        type: 'Educational Institution',
        gradient: 'from-purple-500 to-pink-600'
      },
      {
        id: 3,
        name: 'BÖ',
        image: '/api/placeholder/400/300',
        type: 'Design Studio',
        gradient: 'from-blue-600 to-purple-500'
      },
      {
        id: 4,
        name: 'Rollink',
        image: '/api/placeholder/400/300',
        type: 'Travel Gear',
        gradient: 'from-purple-600 to-blue-500'
      },
      {
        id: 5,
        name: 'Paul Stuart',
        image: '/api/placeholder/400/300',
        type: 'Fashion Brand',
        gradient: 'from-indigo-500 to-purple-600'
      },
      {
        id: 6,
        name: 'G2 ESPORTS',
        image: '/api/placeholder/400/300',
        type: 'Gaming Organization',
        gradient: 'from-blue-500 to-purple-500'
      }
    ],
    B2B: [
      {
        id: 7,
        name: 'Ventura Foods',
        image: '/api/placeholder/400/300',
        type: 'Food Manufacturing',
        gradient: 'from-orange-500 to-red-500'
      },
      {
        id: 8,
        name: 'POWR2',
        image: '/api/placeholder/400/300',
        type: 'Energy Solutions',
        gradient: 'from-green-500 to-blue-500'
      },
      {
        id: 9,
        name: 'FieldEdge',
        image: '/api/placeholder/400/300',
        type: 'Field Service Software',
        gradient: 'from-teal-500 to-green-500'
      },
      {
        id: 10,
        name: 'MOD',
        image: '/api/placeholder/400/300',
        type: 'Business Solutions',
        gradient: 'from-gray-600 to-gray-800'
      },
      {
        id: 11,
        name: 'TechCorp',
        image: '/api/placeholder/400/300',
        type: 'Technology Services',
        gradient: 'from-blue-600 to-indigo-700'
      },
      {
        id: 12,
        name: 'DataFlow',
        image: '/api/placeholder/400/300',
        type: 'Data Analytics',
        gradient: 'from-purple-600 to-pink-600'
      }
    ],
    B2C: [
      {
        id: 13,
        name: 'Northwestern University',
        image: '/api/placeholder/400/300',
        type: 'Educational Services',
        gradient: 'from-purple-500 to-pink-600'
      },
      {
        id: 14,
        name: 'Absolute Dogs',
        image: '/api/placeholder/400/300',
        type: 'Pet Training',
        gradient: 'from-yellow-500 to-orange-500'
      },
      {
        id: 15,
        name: 'Rollink',
        image: '/api/placeholder/400/300',
        type: 'Travel Products',
        gradient: 'from-teal-500 to-blue-500'
      },
      {
        id: 16,
        name: 'Lifestyle Co',
        image: '/api/placeholder/400/300',
        type: 'Consumer Goods',
        gradient: 'from-pink-500 to-purple-500'
      },
      {
        id: 17,
        name: 'Paul Stuart',
        image: '/api/placeholder/400/300',
        type: 'Fashion Retail',
        gradient: 'from-indigo-500 to-purple-600'
      },
      {
        id: 18,
        name: 'BUDDHA BRANDS',
        image: '/api/placeholder/400/300',
        type: 'Wellness Products',
        gradient: 'from-green-500 to-teal-500'
      }
    ],
    ECOMMERCE: [
      {
        id: 19,
        name: 'Absolute Dogs',
        image: '/api/placeholder/400/300',
        type: 'Pet E-commerce',
        gradient: 'from-yellow-500 to-orange-500'
      },
      {
        id: 20,
        name: 'Rollink',
        image: '/api/placeholder/400/300',
        type: 'Travel Store',
        gradient: 'from-teal-500 to-blue-500'
      },
      {
        id: 21,
        name: 'BÖ',
        image: '/api/placeholder/400/300',
        type: 'Design Marketplace',
        gradient: 'from-purple-600 to-pink-500'
      },
      {
        id: 22,
        name: 'G2 ESPORTS',
        image: '/api/placeholder/400/300',
        type: 'Gaming Merchandise',
        gradient: 'from-red-500 to-purple-500'
      },
      {
        id: 23,
        name: 'Paul Stuart',
        image: '/api/placeholder/400/300',
        type: 'Fashion E-commerce',
        gradient: 'from-gray-700 to-gray-900'
      },
      {
        id: 24,
        name: 'BUDDHA BRANDS',
        image: '/api/placeholder/400/300',
        type: 'Wellness Shop',
        gradient: 'from-green-400 to-cyan-500'
      }
    ]
  }

  const allProjects = portfolioData[activeFilter] || []
  const currentProjects = showAll ? allProjects : allProjects.slice(0, 4)

  const handleViewAll = () => {
    setShowAll(!showAll)
  }

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setShowAll(false) // Reset to show only 4 when changing filters
  }

  return (
    <section className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-4">OUR WORK</div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Featured Website Design Projects
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Custom B2C, B2B and eCommerce solutions<br />
            optimized for traffic, engagement and conversion.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {['FEATURED', 'B2B', 'B2C', 'ECOMMERCE'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`relative px-6 py-3 text-sm font-semibold rounded-md transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 mb-1">
                    {filter === 'FEATURED' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                      </svg>
                    )}
                    {filter === 'B2B' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                      </svg>
                    )}
                    {filter === 'B2C' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.5 8H16c-.8 0-1.56.31-2.14.86l-2.78 2.78c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L15.5 10H16l1.8 5.4H14v6.6z"/>
                      </svg>
                    )}
                    {filter === 'ECOMMERCE' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                      </svg>
                    )}
                  </div>
                  <span>{filter}</span>
                  {activeFilter === filter && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} transform hover:scale-105 transition-all duration-500 cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-white/30"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border border-white/20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-white/10"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
                
                {/* Project Info */}
                <div>
                  <div className="text-white/80 text-sm font-medium mb-2">{project.type}</div>
                  <h3 className="text-3xl font-black text-white mb-4">{project.name}</h3>
                </div>

                {/* Website Mockup */}
                <div className="relative">
                  <div className="transform rotate-12 group-hover:rotate-6 transition-transform duration-500">
                    {/* Main Website */}
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden mb-4 transform -rotate-3">
                      <div className="bg-gray-100 h-6 flex items-center px-3 space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="p-4 h-32 bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="text-xs font-bold text-gray-800 mb-2">{project.name}</div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                          <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                        </div>
                        <div className="mt-2 flex space-x-1">
                          <div className="w-8 h-6 bg-blue-200 rounded"></div>
                          <div className="w-8 h-6 bg-green-200 rounded"></div>
                          <div className="w-8 h-6 bg-purple-200 rounded"></div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Website */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform rotate-6 scale-75 ml-8 -mt-16">
                      <div className="bg-gray-100 h-4 flex items-center px-2 space-x-1">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="p-2 h-20 bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="text-xs font-bold text-gray-600 mb-1">{project.name}</div>
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                          <div className="h-1 bg-gray-200 rounded w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="font-semibold">View Project</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAll}
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            {showAll ? 'Show Less Projects' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection