import React from 'react'
import { useNavigation } from '../context/NavigationContext'

const HeroSection = () => {
  const { navigateTo } = useNavigation()
  return (
    <main className="relative min-h-screen flex items-center px-6 lg:px-8">
      {/* Background floating website mockups - matching DigitalSilk style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Dog DNA Test Results - Top Right */}
        <div className="absolute top-8 right-8 w-80 h-64 opacity-90 animate-float-slow">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-12 hover:rotate-8 transition-transform duration-700">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-10 flex items-center px-4">
              <div className="w-2 h-2 rounded-full bg-white/40 mr-1"></div>
              <div className="w-2 h-2 rounded-full bg-white/40 mr-1"></div>
              <div className="w-2 h-2 rounded-full bg-white/40 mr-3"></div>
              <div className="text-white text-xs font-medium">pawprintgenetics.com</div>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-800">Dog DNA Test Results</div>
                  <div className="text-xs text-gray-500">Comprehensive breed analysis</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-xs font-medium text-blue-800">Golden Retriever - 45%</div>
                </div>
                <div className="bg-green-50 p-2 rounded">
                  <div className="text-xs text-gray-600">Labrador - 30%</div>
                </div>
                <div className="bg-purple-50 p-2 rounded">
                  <div className="text-xs text-gray-600">Border Collie - 25%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enchant Christmas Experience - Center Right */}
        <div className="absolute top-20 right-32 w-96 h-72 opacity-85 animate-float-medium">
          <div className="bg-gradient-to-br from-green-800 via-green-900 to-black rounded-2xl shadow-2xl overflow-hidden transform -rotate-6 hover:-rotate-2 transition-transform duration-700">
            <div className="bg-black/20 h-8 flex items-center px-4">
              <div className="text-white text-xs font-medium">enchantchristmas.com</div>
            </div>
            <div className="p-4 text-white">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold mb-1">ENCHANT</div>
                <div className="text-xs opacity-80">The World's Largest Christmas Light Maze & Village</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-3">
                <div className="text-xs font-medium mb-2">Experience Magic</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-green-600 p-2 rounded text-center text-xs">Light Maze</div>
                  <div className="bg-red-600 p-2 rounded text-center text-xs">Ice Skating</div>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-white text-green-800 px-4 py-2 rounded text-xs font-bold">Get Tickets</button>
              </div>
            </div>
          </div>
        </div>

        {/* Natural Snacks & Beverages - Bottom Left */}
        <div className="absolute bottom-16 right-80 w-88 h-64 opacity-80 animate-float-fast">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-8 hover:rotate-4 transition-transform duration-700">
            <div className="bg-gradient-to-r from-orange-400 to-red-400 h-8 flex items-center px-4">
              <div className="text-white text-xs font-medium">naturalsnacks.com</div>
            </div>
            <div className="p-4">
              <div className="text-center mb-3">
                <div className="text-lg font-bold text-gray-800">Natural</div>
                <div className="text-sm text-gray-600">plant based snacks and beverages</div>
              </div>
              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="bg-red-100 h-12 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-8 bg-red-400 rounded"></div>
                </div>
                <div className="bg-blue-100 h-12 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-8 bg-blue-400 rounded"></div>
                </div>
                <div className="bg-green-100 h-12 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-8 bg-green-400 rounded"></div>
                </div>
                <div className="bg-yellow-100 h-12 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-8 bg-yellow-400 rounded"></div>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-medium">Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* New Development Platform - Bottom Right */}
        <div className="absolute bottom-8 right-12 w-80 h-56 opacity-75 animate-float-slow">
          <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden transform -rotate-8 hover:-rotate-4 transition-transform duration-700">
            <div className="bg-black/20 h-8 flex items-center px-4">
              <div className="text-white text-xs font-medium">newdevelopment.io</div>
            </div>
            <div className="p-4 text-white">
              <div className="text-lg font-bold mb-2">New Development</div>
              <div className="text-xs opacity-80 mb-3">Next-generation development platform</div>
              <div className="space-y-2">
                <div className="bg-white/10 p-2 rounded flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div className="text-xs">Cloud Infrastructure</div>
                </div>
                <div className="bg-white/10 p-2 rounded flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="text-xs">AI-Powered Tools</div>
                </div>
                <div className="bg-white/10 p-2 rounded flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="text-xs">Collaborative Workspace</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Experience Platform - Far Right */}
        <div className="absolute top-48 right-2 w-72 h-52 opacity-70 animate-float-medium">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden transform rotate-15 hover:rotate-12 transition-transform duration-700">
            <div className="bg-gray-700 h-6 flex items-center px-3">
              <div className="text-white text-xs font-medium">digitalexp.com</div>
            </div>
            <div className="p-3 text-white">
              <div className="text-4xl font-black opacity-30 mb-2">DIGITAL</div>
              <div className="text-lg font-bold mb-1">EXPERIENCE</div>
              <div className="text-xs opacity-70 mb-3">Premium digital solutions</div>
              <div className="bg-white/10 p-2 rounded">
                <div className="text-xs">Transform your business with cutting-edge technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen">
          
          {/* Left side - Main content */}
          <div className="lg:col-span-6 text-left">
            <div className="mb-8">
              <p className="text-white/80 text-lg mb-4 tracking-wide">
                PREMIUM WEB DESIGN AGENCY
              </p>
              
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                WE GROW<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  BRANDS
                </span><br />
                ONLINE
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-lg">
                Custom Websites, Branding & Digital Marketing
              </p>
              
              <button 
                onClick={() => navigateTo('quote')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                REQUEST A QUOTE →
              </button>
            </div>

            {/* Awards and Reviews Section */}
            <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-12 mt-16">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="text-white">
                    <span className="text-2xl font-bold">5</span>
                    <span className="text-sm"> Star DesignRush Reviews</span>
                  </div>
                </div>
              </div>
              
              <div className="text-white">
                <div className="text-sm opacity-80">Best Digital Agency of 2024</div>
                <div className="text-2xl font-bold">Forbes</div>
              </div>
            </div>
          </div>

          {/* Right side - Empty space for floating mockups to be visible */}
          <div className="lg:col-span-6 relative h-96 lg:h-full">
            {/* This space is intentionally left for the floating mockups */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection