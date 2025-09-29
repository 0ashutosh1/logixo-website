import React, { useState, useEffect } from 'react'

const WhyLogixoSection = () => {
  const [activeSection, setActiveSection] = useState(0)
  const [hoveredService, setHoveredService] = useState(null)

  const services = [
    {
      id: 0,
      icon: '🎨',
      title: 'Custom Web Design',
      description: 'Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand\'s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience.'
    },
    {
      id: 1,
      icon: '📱',
      title: 'Responsive Web Design',
      description: 'We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site.'
    },
    {
      id: 2,
      icon: '✨',
      title: 'UX/UI Web Design',
      description: 'Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you\'re looking to build a custom UX/UI or redesign your current one, we\'ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional.'
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Search Engine Optimization',
      description: 'We offer a comprehensive range of services designed to boost your website\'s ranking and attract organic, non-paid Google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.'
    },
    {
      id: 4,
      icon: '🛒',
      title: 'eCommerce Design & Development',
      description: 'We specialize in design and development for leading content management systems (CMS) like Shopify, Magento, and WooCommerce. Our experts can help you build and scale your eCommerce website across platforms, ensuring a seamless and robust online shopping experience for your customers.'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = services.map((_, index) => 
        document.getElementById(`service-${index}`)
      ).filter(Boolean)

      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* Left Side - Sticky Content */}
          <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center p-8 lg:p-16">
            <div className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              WHY LOGIXO?
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Discover Our<br />
              Expertise as a Web<br />
              Design Company
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-12">
              As a full-service web design agency, we handle all your digital 
              needs under one roof. Our custom web design services include 
              thorough research and planning, bespoke designs and digital 
              strategies tailored to grow your reach, drive traffic and 
              encourage engagement.
            </p>

            {/* Analytics Visualization */}
            <div className="relative">
              {/* Pie Chart */}
              <div className="absolute left-0 top-0 w-32 h-32">
                <div className="relative w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">35%</span>
                  </div>
                </div>
                <div className="absolute top-2 -right-2 bg-white px-2 py-1 rounded text-xs font-semibold text-blue-600">
                  35% Increase
                </div>
              </div>

              {/* Website Mockups Stack */}
              <div className="ml-40 relative">
                <div className="space-y-4">
                  {/* Main Website */}
                  <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform rotate-12 hover:rotate-6 transition-transform duration-700 w-64">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-8 flex items-center px-4">
                      <div className="text-white text-xs font-medium">Electric Cars</div>
                    </div>
                    <div className="p-4">
                      <div className="text-lg font-bold text-gray-800 mb-2">WE GROW BRANDS ONLINE</div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-purple-100 h-12 rounded"></div>
                        <div className="bg-blue-100 h-12 rounded"></div>
                      </div>
                      <div className="text-sm text-gray-600">Digital Marketing Excellence</div>
                    </div>
                  </div>

                  {/* Secondary Websites */}
                  <div className="absolute -top-8 -right-8 bg-white rounded-lg shadow-xl overflow-hidden transform -rotate-6 w-48 opacity-90">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-6"></div>
                    <div className="p-3">
                      <div className="text-sm font-bold text-gray-700">ENCHANT</div>
                      <div className="bg-green-100 h-8 rounded mt-2"></div>
                    </div>
                  </div>

                  <div className="absolute top-16 -left-12 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-xl overflow-hidden transform rotate-3 w-40">
                    <div className="p-3 text-white">
                      <div className="text-xs font-bold mb-2">SEO</div>
                      <div className="bg-white/20 h-6 rounded mb-2"></div>
                      <div className="bg-white/30 h-4 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                {/* ROI Badge */}
                <div className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                  ROI
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Scrolling Services */}
          <div className="bg-gradient-to-br from-indigo-800/50 to-purple-900/50 backdrop-blur-sm">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={`service-${index}`}
                className="min-h-[70vh] flex items-center p-6 lg:p-12 relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`w-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 lg:p-10 shadow-2xl transition-all duration-700 ${
                  activeSection === index ? 'opacity-100 translate-y-0 bg-white/15' : 'opacity-70 translate-y-8'
                } ${
                  hoveredService === index ? 'scale-105 bg-white/20 border-cyan-400/50 shadow-cyan-500/25' : 'scale-100'
                }`}>
                  
                  {/* Service Icon */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-8 transition-all duration-500 ${
                    hoveredService === index ? 'shadow-2xl shadow-cyan-500/50 scale-110' : 'shadow-lg'
                  }`}>
                    <div className="text-2xl">
                      {service.icon === '🎨' && (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                          <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>
                      )}
                      {service.icon === '📱' && (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM9 4a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zM9 10a1 1 0 011-1h3a1 1 0 011 1v2a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                        </svg>
                      )}
                      {service.icon === '✨' && (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      )}
                      {service.icon === '🚀' && (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                        </svg>
                      )}
                      {service.icon === '🛒' && (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className={`text-3xl lg:text-4xl font-black text-white mb-6 transition-all duration-500 ${
                    hoveredService === index ? 'text-cyan-400' : ''
                  }`}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className={`text-white/90 text-lg leading-relaxed transition-all duration-500 ${
                    hoveredService === index ? 'text-white' : ''
                  }`}>
                    {service.description}
                  </p>

                  {/* Hover Animation Elements */}
                  <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    hoveredService === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute top-8 right-8 w-32 h-32 bg-cyan-400/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-8 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-300"></div>
                  </div>

                  {/* Website Preview on Hover */}
                  {hoveredService === index && (
                    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 animate-float-slow">
                      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-48 transform rotate-12">
                        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-6 flex items-center px-3">
                          <div className="text-white text-xs font-medium">logixo.com</div>
                        </div>
                        <div className="p-3">
                          <div className="text-sm font-bold text-gray-800 mb-2">{service.title}</div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gradient-to-r from-cyan-200 to-blue-200 rounded"></div>
                            <div className="h-2 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyLogixoSection