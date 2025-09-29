import React, { useState, useEffect, useRef } from 'react'

const WebsiteDesignProcess = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isSticky, setIsSticky] = useState(false)
  const scrollContainerRef = useRef(null)
  const sectionRef = useRef(null)
  const currentXRef = useRef(0)
  const targetXRef = useRef(0)
  const rafRef = useRef(null)

  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      subtitle: "At Logixo, we begin every project with comprehensive research to understand your business goals, target audience, and competitive landscape. Our strategic approach ensures your website aligns perfectly with your vision.",
      features: [
        "In-depth business analysis and goal setting",
        "Target audience research and persona development", 
        "Competitive analysis and market positioning",
        "Custom digital strategy roadmap creation"
      ],
      icon: "�"
    },
    {
      number: "02", 
      title: "Planning & Architecture",
      subtitle: "Logixo's expert team maps out your website's structure and user experience flow. We create detailed wireframes and sitemaps that serve as the foundation for an intuitive, conversion-focused website.",
      features: [
        "Custom sitemap and user flow development",
        "Interactive wireframing and prototyping",
        "Content strategy and information architecture",
        "Technical requirements and feature planning"
      ],
      icon: "📐"
    },
    {
      number: "03",
      title: "Visual Design & Branding", 
      subtitle: "Our creative team at Logixo brings your brand to life through stunning visual designs. We create unique, modern interfaces that not only look amazing but also drive user engagement and conversions.",
      features: [
        "Custom UI/UX design tailored to your brand",
        "Interactive prototypes and design systems",
        "Brand integration and visual identity enhancement",
        "Mobile-first responsive design approach"
      ],
      icon: "🎨"
    },
    {
      number: "04",
      title: "Development & Integration",
      subtitle: "Logixo's development team uses cutting-edge technologies to build fast, secure, and scalable websites. We ensure your site performs flawlessly across all devices and platforms.",
      features: [
        "Modern frontend development with React/Next.js",
        "Custom backend solutions and API integrations", 
        "Database design and content management systems",
        "Third-party service integrations and automation"
      ],
      icon: "⚙️"
    },
    {
      number: "05",
      title: "Testing & Quality Assurance",
      subtitle: "At Logixo, quality is paramount. Our rigorous testing process ensures your website functions perfectly, loads quickly, and provides an exceptional user experience across all devices and browsers.",
      features: [
        "Comprehensive cross-browser and device testing",
        "Performance optimization and speed testing",
        "Security audits and vulnerability assessments",
        "User experience testing and feedback integration"
      ],
      icon: "🛡️"
    },
    {
      number: "06", 
      title: "Launch & Growth Support",
      subtitle: "Logixo doesn't just launch your website - we ensure its continued success. Our ongoing support includes monitoring, updates, and optimization to help your business grow online.",
      features: [
        "Seamless deployment and go-live support",
        "Performance monitoring and analytics setup", 
        "Ongoing maintenance and security updates",
        "Growth-focused optimization and feature enhancements"
      ],
      icon: "🚀"
    }
  ]

  useEffect(() => {
    let ticking = false
    
    // Animation loop for smooth horizontal scrolling
    const animate = () => {
      const el = scrollContainerRef.current
      if (el) {
        const current = currentXRef.current
        const target = targetXRef.current
        const next = current + (target - current) * 0.12
        currentXRef.current = next
        el.style.transform = `translateX(-${next}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false
            return
          }

          const section = sectionRef.current
          const rect = section.getBoundingClientRect()
          const sectionHeight = section.offsetHeight
          const windowHeight = window.innerHeight

          const shouldBeSticky = rect.top <= 0 && rect.bottom > windowHeight
          setIsSticky(shouldBeSticky)

          if (shouldBeSticky) {
            const progress = Math.abs(rect.top) / (sectionHeight - windowHeight)
            const clampedProgress = Math.max(0, Math.min(1, progress))
            setScrollProgress(clampedProgress)

            const totalSteps = steps.length
            const stepProgress = clampedProgress * totalSteps
            const newStep = Math.floor(stepProgress)
            const finalStep = Math.min(newStep, totalSteps - 1)
            setCurrentStep(finalStep)

            if (scrollContainerRef.current) {
              const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth
              const targetScrollLeft = clampedProgress * maxScrollLeft
              targetXRef.current = targetScrollLeft
            }
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-gradient-to-br from-slate-800 via-slate-700 via-purple-900 to-purple-800 relative min-h-500vh"
    >
      <div className={`
        ${isSticky ? 'fixed' : 'relative'} 
        top-0 left-0 w-full h-screen overflow-hidden 
        flex flex-col transition-all duration-700 ease-out
        ${isSticky ? 'shadow-2xl' : ''}
      `}>
        
        {/* Header Section */}
        <div className="text-center px-8 pt-15 pb-10 relative">
          <h2 className="text-5xl font-black text-white mb-6 leading-tight">
            Logixo's Website Design Process
          </h2>
          <p className="text-white/90 text-xl leading-relaxed max-w-4xl mx-auto">
            Discover how Logixo crafts exceptional digital experiences through our proven 6-step process.
            We transform your vision into powerful websites that drive <span className="text-cyan-400 font-semibold">business growth</span>.
          </p>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-8 right-8 h-1 bg-white/10 rounded-sm overflow-hidden">
            <div 
              className="h-full bg-cyan-400 rounded-sm transition-transform duration-100 ease-out shadow-cyan-glow"
              style={{
                transform: `translateX(${(scrollProgress * 100) - 100}%)`
              }}
            ></div>
          </div>

          {/* Step Indicators */}
          <div className="absolute -bottom-5 left-8 right-8 flex justify-between items-center">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`
                  w-3 h-3 rounded-full transition-all duration-400 ease-out
                  ${currentStep >= index ? 'bg-cyan-400' : 'bg-white/30'}
                  ${currentStep === index ? 'border-2 border-cyan-400 shadow-lg shadow-cyan-400/30' : 'border-2 border-transparent'}
                `}
              ></div>
            ))}
          </div>
        </div>

        {/* Scrolling Content */}
        <div className="flex-1 px-8 pt-10 pb-8 overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-16 h-full will-change-transform transform translate-x-0"
          >
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`
                  min-w-[400px] max-w-[400px] relative transition-all duration-600 ease-out
                  ${currentStep === index ? 'opacity-100 scale-105' : 'opacity-60 scale-100'}
                `}
              >
                
                {/* Icon */}
                <div className={`
                  w-20 h-20 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-all duration-400 ease-out
                  ${currentStep === index ? 'bg-cyan-400 shadow-lg shadow-cyan-400/40' : 'bg-white/10'}
                `}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className={`
                  text-3xl font-bold mb-5 transition-colors duration-400 ease-out
                  ${currentStep === index ? 'text-cyan-400' : 'text-white'}
                `}>
                  {step.title}
                </h3>

                <p className="text-white/90 text-base leading-relaxed mb-8">
                  {step.subtitle}
                </p>

                {/* Features List */}
                <div className="mb-10">
                  {step.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className={`
                        flex items-start mb-4 transition-opacity duration-400 ease-out
                        ${currentStep === index ? 'opacity-100' : 'opacity-70'}
                      `}
                    >
                      <span className="text-cyan-400 mr-3 mt-0.5 text-sm">▶</span>
                      <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Step Number */}
                <div className={`
                  absolute bottom-0 right-0 text-9xl font-black leading-none pointer-events-none transition-colors duration-600 ease-out
                  ${currentStep === index ? 'text-cyan-400/30' : 'text-white/10'}
                `}>
                  {step.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteDesignProcess
