import React, { useState } from 'react'
import { useNavigation } from '../context/NavigationContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const { navigateTo } = useNavigation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleQuoteClick = () => {
    navigateTo('quote')
  }

  return (
    <>
      <header className="relative z-50 px-6 py-4 lg:px-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => navigateTo('home')}
              className="text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors"
            >
              LOGIXO
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleQuoteClick}
              className="bg-white text-purple-900 px-4 py-2 lg:px-6 lg:py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm lg:text-base"
            >
              REQUEST A QUOTE
            </button>
            
            <button 
              onClick={toggleMenu}
              className="text-white flex items-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="ml-2 text-sm font-semibold tracking-wider">MENU</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Left side - Original content (dimmed) */}
          <div className="flex-1 bg-black/50"></div>
          
          {/* Right side - Menu */}
          <div className="w-full max-w-md lg:max-w-lg bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col">
            {/* Header in overlay */}
            <div className="flex items-center justify-between px-6 py-4 lg:px-8 border-b border-white/10">
            <button 
              onClick={() => navigateTo('home')}
              className="text-xl lg:text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition-colors"
            >
              LOGIXO
            </button>              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleQuoteClick}
                  className="border border-white text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded text-xs lg:text-sm font-semibold hover:bg-white hover:text-purple-900 transition-colors"
                >
                  REQUEST A QUOTE
                </button>
                
                <button 
                  onClick={toggleMenu}
                  className="text-white"
                >
                  <svg className="w-6 h-6 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="flex-1 px-6 py-8 lg:px-8">
              <nav className="space-y-6 lg:space-y-8">
                <div className="group">
                  <a 
                    href="#services" 
                    className="text-2xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    SERVICES
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 ml-4 transform rotate-90 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                <div className="group">
                  <a 
                    href="#case-studies" 
                    className="text-2xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    CASE STUDIES
                  </a>
                </div>

                <div className="group">
                  <a 
                    href="#work-by-industry" 
                    className="text-2xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 flex items-center"
                  >
                    WORK BY INDUSTRY
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 ml-4 transform rotate-90 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                </div>

                <div className="group">
                  <a 
                    href="#digital-trends" 
                    className="text-2xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    DIGITAL TRENDS
                  </a>
                </div>

                <div className="group">
                  <a 
                    href="#about" 
                    className="text-2xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    ABOUT
                  </a>
                </div>

                <div className="group">
                  <a 
                    href="#contact" 
                    className="text-2xl lg:text-4xl font-bold text-white hover:text-blue-300 transition-colors duration-300 block"
                  >
                    CONTACT
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}


    </>
  )
}

export default Header