import React, { useState } from 'react'

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      position: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=center",
      content: "Logixo transformed our outdated website into a modern, conversion-focused platform. Our lead generation increased by 300% within the first month. Their attention to detail and understanding of our business goals was exceptional.",
      rating: 5,
      projectType: "Complete Website Redesign"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "GreenEarth Industries",
      position: "Marketing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=center",
      content: "Working with Logixo was a game-changer. They didn't just design a website; they created a digital experience that perfectly represents our sustainability mission. The results speak for themselves - 250% increase in organic traffic.",
      rating: 5,
      projectType: "E-commerce Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Minds Agency",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=center",
      content: "The team at Logixo exceeded our expectations. They delivered a stunning portfolio website that showcases our work beautifully. Client inquiries have increased significantly, and we've attracted higher-value projects.",
      rating: 5,
      projectType: "Portfolio Website"
    },
    {
      id: 4,
      name: "David Park",
      company: "MedCare Solutions",
      position: "Operations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center",
      content: "Logixo understood the complexities of our healthcare industry and created a HIPAA-compliant website that builds trust with patients. The appointment booking system has streamlined our operations significantly.",
      rating: 5,
      projectType: "Healthcare Platform"
    },
    {
      id: 5,
      name: "Jessica Thompson",
      company: "Local Bistro Chain",
      position: "Owner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=center",
      content: "Our restaurant's online presence was virtually non-existent. Logixo created a mouth-watering website with online ordering capabilities. We saw a 400% increase in online orders within two weeks of launch!",
      rating: 5,
      projectType: "Restaurant Website"
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-300/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-cyan-300/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-lg tracking-wider uppercase mb-4 block">
            CLIENT SUCCESS STORIES
          </span>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses who have transformed their digital presence with Logixo.
          </p>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-cyan-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <svg className="w-24 h-24 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            <div className="relative z-10">
              
              {/* Project Type Badge */}
              <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {currentTestimonial.projectType}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8 italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                {renderStars(currentTestimonial.rating)}
                <span className="text-gray-600 text-sm ml-2">({currentTestimonial.rating}/5)</span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-cyan-600 font-semibold">{currentTestimonial.position}</p>
                  <p className="text-gray-600">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`
                transition-all duration-300 rounded-full
                ${activeTestimonial === index 
                  ? 'w-12 h-3 bg-gradient-to-r from-cyan-500 to-blue-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">100+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">300%</div>
            <div className="text-gray-600 font-medium">Average ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">Ready to join our success stories?</p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:scale-105 hover:shadow-xl">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection