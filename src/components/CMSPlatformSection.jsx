import React, { useState } from 'react'

const CMSPlatformSection = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState(null)

  const platforms = [
    {
      name: 'WordPress',
      description: 'At Logixo, we deliver high-performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversions. With robust security measures and ongoing support, we ensure your WordPress site remains optimized, secure, and scalable as your business grows.',
      logo: 'W',
      bgColor: 'bg-blue-600',
      hoverBg: 'hover:bg-blue-700',
      textColor: 'text-blue-600'
    },
    {
      name: 'Shopify',
      description: 'Our web design company excels in planning, developing, and scaling Shopify websites to drive growth. From concept to launch, our consultants guide you through every step, while our expert developers and designers transform your vision into a thriving e-store. We turn your ideas into a powerful online presence that fosters growth and success.',
      logo: 'S',
      bgColor: 'bg-green-500',
      hoverBg: 'hover:bg-green-600',
      textColor: 'text-green-600'
    },
    {
      name: 'Magento',
      description: 'As a top-rated Magento web development and design company, we create premium online stores that attract organic traffic, deliver exceptional user experiences, and significantly boost your revenue. Our expertise ensures your Magento site stands out and performs at its best, driving growth and success for your business.',
      logo: 'M',
      bgColor: 'bg-orange-500',
      hoverBg: 'hover:bg-orange-600',
      textColor: 'text-orange-600'
    }
  ]

  return (
    <section className="bg-sky-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Section */}
        <div className="bg-sky-100 px-12 py-20 lg:px-16 flex flex-col justify-center text-slate-800">
          <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-8 text-slate-800">
            CMS Platform Tailored For Client Needs
          </h1>
          
          <p className="text-lg leading-relaxed mb-15 text-slate-600 max-w-lg">
            No matter which Content Management System (CMS) your website utilizes, our experts are here to help. We tailor our services to meet your specific needs, ensuring your CMS is optimized for performance, flexibility, and ease of use.
          </p>

          {/* Mock laptop/website image */}
          <div className="relative w-96 h-60 bg-slate-600 rounded-xl border-8 border-slate-500 overflow-hidden shadow-2xl">
            {/* Screen content */}
            <div className="bg-slate-50 h-full p-5 relative">
              {/* Header bar */}
              <div className="h-2 bg-slate-200 mb-4 rounded"></div>
              
              {/* Content blocks */}
              <div className="grid grid-cols-2 gap-3 h-35">
                <div className="bg-blue-500 rounded-lg opacity-80"></div>
                <div className="bg-emerald-500 rounded-lg opacity-80"></div>
                <div className="bg-amber-500 rounded-lg opacity-80"></div>
                <div className="bg-red-500 rounded-lg opacity-80"></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-5 -left-5 w-15 h-15 bg-emerald-500 rounded-full opacity-70"></div>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-blue-500 rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-sky-100 px-12 py-20 lg:px-16 flex flex-col justify-center space-y-15">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className={`
                relative cursor-pointer transition-all duration-400 ease-out
                ${hoveredPlatform === index ? 'transform translate-x-5 bg-white/80 rounded-2xl p-6 shadow-2xl' : 'transform translate-x-0'}
              `}
              onMouseEnter={() => setHoveredPlatform(index)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              {/* Colored accent bar */}
              <div className={`
                absolute top-0 bottom-0 transition-all duration-400 ease-out rounded-r
                ${hoveredPlatform === index ? '-left-9 w-2' : '-left-15 w-1.5'}
                ${platform.bgColor.replace('bg-', 'bg-')}
              `}></div>

              <div className="flex items-start gap-8 relative">
                {/* Logo */}
                <div className={`
                  w-30 h-30 rounded-2xl flex items-center justify-center text-5xl font-bold text-white flex-shrink-0 transition-all duration-400 ease-out
                  ${platform.bgColor} shadow-xl
                  ${hoveredPlatform === index ? 'scale-110 -rotate-2 shadow-2xl' : 'scale-100 rotate-0'}
                `}>
                  {platform.logo}
                </div>

                {/* Content */}
                <div className="flex-1 relative">
                  <h3 className={`
                    text-3xl font-bold mb-6 transition-all duration-400 ease-out
                    ${hoveredPlatform === index ? `${platform.textColor} transform -translate-y-1` : 'text-slate-800 transform translate-y-0'}
                  `}>
                    {platform.name}
                  </h3>
                  
                  <p className="text-base leading-relaxed text-slate-600 mb-0 transition-all duration-400 ease-out">
                    {platform.description}
                  </p>

                  {/* Animated Development Button */}
                  <div className={`
                    transition-all duration-500 ease-out mt-6
                    ${hoveredPlatform === index ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-5'}
                  `}>
                    <button className={`
                      ${platform.bgColor} ${platform.hoverBg} text-white border-0 px-8 py-4 rounded-full text-base font-semibold cursor-pointer shadow-lg transition-all duration-300 ease-out flex items-center gap-3 hover:transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl
                    `}>
                      <span>Start {platform.name} Development</span>
                      <span className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating decoration elements */}
              {hoveredPlatform === index && (
                <>
                  <div className={`absolute top-5 right-5 w-5 h-5 ${platform.bgColor} rounded-full opacity-30 animate-bounce`}></div>
                  <div className={`absolute bottom-8 right-15 w-3 h-3 ${platform.bgColor} rounded-full opacity-40 animate-pulse`}></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CMSPlatformSection
