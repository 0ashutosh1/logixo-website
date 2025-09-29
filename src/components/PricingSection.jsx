import React from 'react'

const PricingSection = () => {
  const pricingFactors = [
    {
      title: "Your choice of platform",
      description: "also plays a role in the cost. Templated solutions are more affordable while developing a fully custom site will increase the project's total expense."
    },
    {
      title: "Custom graphic elements",
      description: "are essential for enhancing your web presence. However, the more complex the design requirements, the higher the overall cost."
    },
    {
      title: "After launching",
      description: "your new website, the next step is to outperform competitors in search engine rankings and secure top positions in your industry."
    },
    {
      title: "Our full-service",
      description: "web design company offers expertise to clients of all sizes. You can use our design cost calculator below for an estimate or schedule a free consultation with one of our experts to discuss your project's specifics."
    }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-tight">
            Custom Web Design Pricing For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Each Client's Objectives
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-white/90 text-xl leading-relaxed">
              Every website design project comes with unique challenges and specific requirements 
              that influence its final cost. A simple project typically ranges from{' '}
              <span className="text-cyan-400 font-semibold">$25,000</span> to{' '}
              <span className="text-cyan-400 font-semibold">$30,000</span>, 
              while more complex endeavors can reach{' '}
              <span className="text-cyan-400 font-semibold">$50,000</span> to{' '}
              <span className="text-cyan-400 font-semibold">$60,000</span> or more.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed">
              The technical setup of your website, which directly impacts its performance, is a key 
              factor in determining cost. More complex setups that demand significant time and effort 
              will naturally increase the overall price.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10 flex items-center gap-3">
                CALCULATE YOUR WEBSITE
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Pricing Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingFactors.map((factor, index) => (
            <div 
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Card Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {factor.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {factor.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Transform your vision into a powerful digital presence with Logixo's expert web design services. 
              Our team is ready to create something extraordinary for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection