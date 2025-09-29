import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const QuoteRequestPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="text-white">
              <p className="text-lg mb-4 text-cyan-300 font-semibold tracking-wide">
                TAKE THE SILK ROAD TO
              </p>
              
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Digitizing Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                  Business Growth
                </span>
              </h1>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Expert</h3>
                  <p className="text-gray-300 text-sm">Team Members</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Results-Driven</h3>
                  <p className="text-gray-300 text-sm">Approach</p>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">Streamlined</h3>
                  <p className="text-gray-300 text-sm">Execution</p>
                </div>
              </div>

              {/* Awards Section */}
              <div className="mb-8">
                <p className="text-gray-300 text-sm mb-4 tracking-wide">
                  PREMIUM DIGITAL AGENCY RECOGNIZED BY
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-white font-bold">IMA</div>
                  <div className="text-white font-bold">AWARDS</div>
                  <div className="text-white font-bold">AWWWARDS</div>
                  <div className="text-white font-bold">HORIZON</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
              {/* Header */}
              <div className="text-center mb-8">
                <p className="text-blue-600 text-sm font-bold mb-4 tracking-widest uppercase">
                  REQUEST A FREE CONSULTATION
                </p>
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                  Let's Create Something<br />
                  <span className="text-blue-600">AMAZING</span> Together
                </h2>
              </div>

              {/* Form */}
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Name*"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company Name*"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="email"
                      placeholder="Email*"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone*"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="Your Message*"
                    rows="5"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-3 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 resize-none text-gray-900 placeholder-gray-500"
                    required
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl flex items-center justify-center"
                  >
                    SUBMIT
                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 opacity-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform rotate-12"></div>
          </div>
          <div className="absolute bottom-20 left-20 w-80 h-80 opacity-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 transform -rotate-6"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default QuoteRequestPage