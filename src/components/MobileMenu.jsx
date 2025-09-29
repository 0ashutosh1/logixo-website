import React from 'react'

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-white tracking-wider">
          LOGIXO
        </h1>
        <div className="flex items-center space-x-4">
          <button className="bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
            REQUEST A QUOTE
          </button>
          <button 
            onClick={onClose}
            className="text-white"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Content */}
      <div className="flex h-full">
        {/* Left Side - Main Navigation */}
        <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
          <div className="space-y-6">
            <div className="group">
              <a 
                href="#" 
                className="text-4xl lg:text-6xl font-bold text-white hover:text-blue-300 transition-colors duration-300 flex items-center group"
              >
                SERVICES
                <svg className="w-8 h-8 ml-4 transform rotate-90 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="group">
              <a 
                href="#" 
                className="text-4xl lg:text-6xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
              >
                CASE STUDIES
              </a>
            </div>

            <div className="group">
              <a 
                href="#" 
                className="text-4xl lg:text-6xl font-bold text-white hover:text-blue-300 transition-colors duration-300 flex items-center"
              >
                WORK BY INDUSTRY
                <svg className="w-8 h-8 ml-4 transform rotate-90 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="group">
              <a 
                href="#" 
                className="text-4xl lg:text-6xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
              >
                DIGITAL TRENDS
              </a>
            </div>

            <div className="group">
              <a 
                href="#" 
                className="text-4xl lg:text-6xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
              >
                ABOUT
              </a>
            </div>

            <div className="group">
              <a 
                href="#" 
                className="text-4xl lg:text-6xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Background Design Elements */}
        <div className="hidden lg:block flex-1 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            {/* Decorative background elements */}
            <div className="absolute top-20 right-20 w-80 h-80 bg-white/10 backdrop-blur-sm rounded-lg transform rotate-12"></div>
            <div className="absolute bottom-20 right-10 w-60 h-60 bg-white/10 backdrop-blur-sm rounded-lg transform -rotate-6"></div>
            <div className="absolute top-1/2 right-32 w-40 h-40 bg-blue-400/20 rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu