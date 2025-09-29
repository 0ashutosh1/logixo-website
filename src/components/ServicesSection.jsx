import React from 'react'

const ServicesSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left side - Content */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Creative Web Agency Delivering<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Custom Solutions
              </span>
            </h2>

            {/* Service Points */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Custom Web Design Solutions <span className="text-cyan-400">To Drive Conversions</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Effective Marketing Campaigns <span className="text-cyan-400">To Generate Growth</span>
                  </h3>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Tailored Branding Strategies <span className="text-cyan-400">To Drive Engagement</span>
                  </h3>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <div className="text-white/90 text-lg leading-relaxed mb-8">
              <p>
                Logixo is a web design company & digital marketing agency focused on growing 
                brands online. We create effective brand strategies, custom web design, development, 
                and digital marketing solutions to generate greater brand engagement and conversions. 
                We work closely with our clients to ensure each project meets their brand guidelines and 
                business goals and provide technical and marketing expertise to ensure optimal results.
              </p>
            </div>

            {/* Video Preview */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-6 flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-white">
                  <h4 className="text-lg font-bold mb-1">See Our Work in Action</h4>
                  <p className="text-white/70 text-sm">1 MINUTE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Website Mockups with Award */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Award Trophy */}
              <div className="absolute -left-12 top-8 z-20">
                <div className="w-24 h-32 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-full relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-yellow-500 rounded-full"></div>
                  <div className="absolute bottom-0 w-full h-8 bg-yellow-600 rounded-b-lg"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-yellow-700 rounded-full"></div>
                </div>
              </div>

              {/* Stacked Website Mockups */}
              <div className="relative space-y-4 transform rotate-12 hover:rotate-6 transition-transform duration-700">
                
                {/* Top Website - Travel/Experience */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform -rotate-3">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 h-8 flex items-center px-4">
                    <div className="text-white text-xs font-medium">experienceco.com</div>
                  </div>
                  <div className="p-4">
                    <div className="text-lg font-bold text-gray-800 mb-2">Collaborate for Each Traveler</div>
                    <div className="text-sm text-gray-600 mb-3">Unforgettable experiences worldwide</div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-green-100 h-16 rounded flex items-center justify-center text-xs font-medium">Adventure</div>
                      <div className="bg-blue-100 h-16 rounded flex items-center justify-center text-xs font-medium">Culture</div>
                      <div className="bg-purple-100 h-16 rounded flex items-center justify-center text-xs font-medium">Luxury</div>
                    </div>
                  </div>
                </div>

                {/* Middle Website - Multisensory Experience */}
                <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-lg shadow-2xl overflow-hidden transform rotate-2 ml-8">
                  <div className="bg-black/20 h-8 flex items-center px-4">
                    <div className="text-white text-xs font-medium">multisensory.com</div>
                  </div>
                  <div className="p-4 text-white">
                    <div className="text-xl font-bold mb-2">MULTISENSORY</div>
                    <div className="text-lg mb-2">EXPERIENCES</div>
                    <div className="text-sm opacity-80 mb-3">Immersive digital interactions</div>
                    <div className="bg-white/20 p-3 rounded">
                      <div className="text-xs">Engage all senses with cutting-edge technology</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Website - Digital Experience */}
                <div className="bg-gradient-to-br from-indigo-800 to-purple-900 rounded-lg shadow-2xl overflow-hidden transform -rotate-1 ml-4">
                  <div className="bg-black/20 h-8 flex items-center px-4">
                    <div className="text-white text-xs font-medium">digitalexp.agency</div>
                  </div>
                  <div className="p-4 text-white">
                    <div className="text-lg font-bold mb-2">DIGITAL EXPERIENCE</div>
                    <div className="text-sm opacity-80 mb-3">At 3 locations nationwide</div>
                    <div className="space-y-2">
                      <div className="bg-white/10 p-2 rounded text-xs">Interactive Installations</div>
                      <div className="bg-white/10 p-2 rounded text-xs">Virtual Reality Tours</div>
                    </div>
                  </div>
                </div>

                {/* Additional smaller mockup */}
                <div className="absolute bottom-0 right-0 w-48 bg-white rounded-lg shadow-xl overflow-hidden transform rotate-6">
                  <div className="bg-orange-500 h-6 flex items-center px-3">
                    <div className="text-white text-xs font-medium">portfolio.com</div>
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-bold text-gray-800 mb-2">Finding Success</div>
                    <div className="text-xs text-gray-600">That's What We're There</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection