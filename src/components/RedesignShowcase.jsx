import React, { useState } from 'react'

const RedesignShowcase = () => {
  const [activeProject, setActiveProject] = useState(0)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      id: 1,
      name: "NewChurch Live",
      category: "Religious Organization",
      description: "Transformed a traditional church website into a modern, engaging digital platform that connects the community and enhances spiritual growth.",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Modern spiritual messaging",
        "Enhanced community features",
        "Mobile-responsive design",
        "Improved user engagement"
      ]
    },
    {
      id: 2,
      name: "POWR2",
      category: "Industrial Energy",
      description: "Redesigned an industrial energy company's website to showcase their cutting-edge technology and sustainable solutions with a professional, clean interface.",
      beforeImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Professional industrial design",
        "Clear service presentation",
        "Enhanced technical credibility",
        "Improved lead generation"
      ]
    },
    {
      id: 3,
      name: "American University Bulgaria",
      category: "Education",
      description: "Created a comprehensive educational platform that showcases academic excellence and provides seamless navigation for students, faculty, and prospective applicants.",
      beforeImage: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Student-focused interface",
        "Academic program showcase",
        "Enhanced admissions process",
        "Mobile-first approach"
      ]
    },
    {
      id: 4,
      name: "Ventura Foods",
      category: "Food & Beverage",
      description: "Transformed a food company's digital presence with appetizing visuals, streamlined product showcases, and enhanced brand storytelling.",
      beforeImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Appetizing visual design",
        "Product showcase enhancement",
        "Brand story integration",
        "Customer engagement boost"
      ]
    },
    {
      id: 5,
      name: "Verus Aerospace",
      category: "Aerospace Technology",
      description: "Developed a high-tech aerospace website featuring advanced drone technology, security solutions, and cutting-edge innovation in defense systems.",
      beforeImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Advanced tech presentation",
        "Security-focused design",
        "Innovation showcase",
        "Professional credibility"
      ]
    }
  ]

  const additionalProjects = [
    {
      id: 6,
      name: "TechFlow Solutions",
      category: "Software Development",
      description: "Redesigned a software company's website to showcase their development expertise with a clean, modern interface that appeals to enterprise clients.",
      beforeImage: "https://images.unsplash.com/photo-1486312338219-ce68e2c6448d?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Enterprise-grade presentation",
        "Clean modern interface",
        "Technical expertise showcase",
        "Lead conversion optimization"
      ]
    },
    {
      id: 7,
      name: "GreenLife Wellness",
      category: "Healthcare & Wellness",
      description: "Transformed a wellness center's digital presence with calming visuals and intuitive appointment booking to enhance patient experience.",
      beforeImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Calming wellness design",
        "Online appointment system",
        "Patient-centered interface",
        "Trust building elements"
      ]
    },
    {
      id: 8,
      name: "UrbanArchitects",
      category: "Architecture & Design",
      description: "Created a stunning portfolio website for an architecture firm that showcases their innovative designs and attracts high-end clients.",
      beforeImage: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Visual portfolio showcase",
        "Architectural excellence display",
        "High-end client targeting",
        "Project case studies"
      ]
    },
    {
      id: 9,
      name: "EcoMarket Pro",
      category: "E-commerce",
      description: "Developed a comprehensive e-commerce platform for organic products with seamless shopping experience and sustainable brand messaging.",
      beforeImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Seamless shopping experience",
        "Sustainable brand messaging",
        "Mobile commerce optimization",
        "Trust & security features"
      ]
    },
    {
      id: 10,
      name: "FinanceForward",
      category: "Financial Services",
      description: "Redesigned a financial advisory firm's website to build trust and credibility while simplifying complex financial concepts for clients.",
      beforeImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Trust & credibility building",
        "Complex concept simplification",
        "Professional presentation",
        "Client portal integration"
      ]
    },
    {
      id: 11,
      name: "CreativeStudio",
      category: "Creative Agency",
      description: "Built a vibrant, creative portfolio website that showcases artistic work and attracts creative projects from diverse industries.",
      beforeImage: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Vibrant creative showcase",
        "Artistic portfolio display",
        "Interactive gallery features",
        "Creative industry appeal"
      ]
    },
    {
      id: 12,
      name: "SportsPro Training",
      category: "Sports & Fitness",
      description: "Developed an energetic fitness website with online training programs, class scheduling, and community features for athletes.",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Energetic fitness branding",
        "Online training integration",
        "Class scheduling system",
        "Community engagement features"
      ]
    },
    {
      id: 13,
      name: "LuxuryRealty",
      category: "Real Estate",
      description: "Created an elegant real estate website showcasing luxury properties with virtual tours and advanced search functionality.",
      beforeImage: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop&crop=center",
      afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center",
      improvements: [
        "Luxury property showcase",
        "Virtual tour integration",
        "Advanced search filters",
        "High-end client experience"
      ]
    }
  ]

  const allProjects = [...projects, ...additionalProjects]
  const displayedProjects = showAllProjects ? allProjects : projects

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % displayedProjects.length)
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length)
  }

  const currentProject = displayedProjects[activeProject]

  const toggleShowMore = () => {
    setShowAllProjects(!showAllProjects)
    if (!showAllProjects) {
      // When showing more, reset to first project
      setActiveProject(0)
    } else {
      // When showing less, ensure active project is within range
      setActiveProject(0)
    }
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="text-center">
          <span className="text-cyan-500 font-semibold text-lg tracking-wider uppercase mb-4 block">
            BEFORE & AFTER
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Featured Website Redesigns
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            Our web design agency reimagines digital experiences for brands of all sizes and across industries.
          </p>
          <p className="text-gray-500 text-lg">
            <span className="font-semibold text-gray-700">Explore our redesign portfolio.</span>
          </p>
        </div>

        {/* Company Logos Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12 flex-wrap max-w-5xl mx-auto">
          {displayedProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`
                relative px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105
                ${activeProject === index 
                  ? 'bg-white shadow-lg border-2 border-cyan-500' 
                  : 'bg-white/50 hover:bg-white/80 border-2 border-transparent'
                }
                ${showAllProjects ? 'text-sm' : 'text-base'}
              `}
            >
              <div className="text-center">
                <div className={`
                  ${showAllProjects ? 'text-lg' : 'text-2xl'} font-bold mb-1 transition-colors duration-300
                  ${activeProject === index ? 'text-cyan-600' : 'text-gray-600'}
                `}>
                  {project.name.split(' ').map(word => word[0]).join('')}
                </div>
                <div className={`${showAllProjects ? 'text-xs' : 'text-xs'} text-gray-500 font-medium truncate max-w-20`}>
                  {showAllProjects ? project.name.split(' ')[0] : project.name}
                </div>
              </div>
              
              {/* Active indicator */}
              {activeProject === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Before & After Label */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center justify-center gap-4">
          <span className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold text-sm">
            BEFORE
          </span>
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-green-500"></div>
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-green-500"></div>
          <span className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold text-sm">
            AFTER
          </span>
        </div>
      </div>

      {/* Main Showcase Area */}
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevProject}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextProject}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Website Showcase */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
          
          {/* Project Info Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {currentProject.category}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {currentProject.name}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              {currentProject.description}
            </p>
          </div>

          {/* Before/After Images */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            
            {/* Before Image */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                Before
              </div>
              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src={currentProject.beforeImage}
                    alt={`${currentProject.name} - Before Redesign`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 text-white px-4 py-2 rounded-lg font-semibold">
                      Original Design
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image */}
            <div className="relative group">
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                After
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative">
                  <img 
                    src={currentProject.afterImage}
                    alt={`${currentProject.name} - After Redesign`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 text-gray-900 px-4 py-2 rounded-lg font-semibold">
                      ✨ Redesigned
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Improvements List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentProject.improvements.map((improvement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium text-sm">{improvement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
        <button 
          onClick={toggleShowMore}
          className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:scale-105 hover:shadow-xl"
        >
          <span className="flex items-center gap-3">
            {showAllProjects ? 'SHOW LESS PROJECTS' : 'CLICK HERE TO VIEW MORE'}
            <svg 
              className={`w-5 h-5 transform transition-all duration-300 ${
                showAllProjects 
                  ? 'rotate-180 group-hover:-translate-y-1' 
                  : 'group-hover:translate-y-1'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        {showAllProjects && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setActiveProject(projects.length + index)}
              >
                <div className="relative">
                  <img 
                    src={project.afterImage}
                    alt={`${project.name} - Redesign`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {project.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description.substring(0, 120)}...
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.improvements.slice(0, 2).map((improvement, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {improvement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default RedesignShowcase