import React, { useState } from 'react'

const LeadMagnetSection = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setShowError(true)
      return
    }

    setIsSubmitting(true)
    setShowError(false)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')
    }, 2000)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (showError && e.target.value) {
      setShowError(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 py-20 relative overflow-hidden min-h-screen">
        {/* Debug indicator */}
        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs z-50">
          Success State Loaded ✓
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Check Your Email! 📧
            </h2>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-8">
              Your digital trends guide is on its way! We've sent the download link to your inbox.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="text-cyan-400 hover:text-cyan-300 underline transition-colors duration-300"
            >
              Want to download another copy?
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 py-20 relative overflow-hidden min-h-screen">
      {/* Debug indicator */}
      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-xs z-50">
        LeadMagnet Section Loaded ✓
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Stay Ahead in 2025!
            </h2>
            <div className="mb-8">
              <span className="text-cyan-400 font-bold text-2xl">Download</span>
              <span className="text-white text-2xl"> the Top Digital Trends Shaping</span>
              <br />
              <span className="text-white text-2xl">Branding & Web Design</span>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 text-lg">20+ Digital Trends for 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 text-lg">Expert Design Insights</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 text-lg">Actionable Strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-blue-100 text-lg">Free PDF Download</span>
              </div>
            </div>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter Your Email"
                    className={`
                      w-full px-6 py-4 bg-white/10 border-2 rounded-lg text-white placeholder-blue-200 
                      focus:outline-none focus:border-cyan-400 transition-colors duration-300
                      ${showError ? 'border-red-400' : 'border-white/20'}
                    `}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold rounded-lg transition-all duration-300 hover:from-cyan-500 hover:to-blue-600 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-w-[140px]"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>DOWNLOAD</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              
              {showError && (
                <div className="bg-red-500/20 border border-red-400 text-red-200 px-4 py-3 rounded-lg">
                  This field is required.
                </div>
              )}
            </form>

            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>

          {/* Right Content - Book/Guide Mockup */}
          <div className="relative">
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Main Book Cover */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-2xl p-8 relative overflow-hidden">
                {/* Book Spine Effect */}
                <div className="absolute left-0 top-0 w-4 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
                
                {/* Book Content */}
                <div className="relative">
                  <div className="text-right mb-4">
                    <span className="text-6xl font-black text-gray-800">20</span>
                    <span className="text-3xl font-bold text-gray-700">25</span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Digital Trends
                  </h3>
                  <h4 className="text-xl font-bold text-gray-800 mb-6">
                    Guide
                  </h4>
                  
                  {/* Mock Content Preview */}
                  <div className="space-y-3 mb-6">
                    <div className="h-2 bg-gray-400 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-300 rounded w-full"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                  
                  {/* Logo Area */}
                  <div className="absolute bottom-4 right-4">
                    <div className="text-xs font-bold text-gray-600">LOGIXO</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">FREE</span>
              </div>

              {/* Secondary Page Effect */}
              <div className="absolute -right-2 -bottom-2 w-full h-full bg-white rounded-lg shadow-lg -z-10"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-8 left-8 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shadow-lg animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadMagnetSection