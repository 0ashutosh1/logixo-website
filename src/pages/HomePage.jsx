import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ClientLogos from '../components/ClientLogos'
import ServicesSection from '../components/ServicesSection'
import PortfolioSection from '../components/PortfolioSection'
import ClientsSection from '../components/ClientsSection'
import WhyLogixoSection from '../components/WhyLogixoSection'
import CMSPlatformSection from '../components/CMSPlatformSection'
import WebsiteDesignProcess from '../components/WebsiteDesignProcess'
import PricingSection from '../components/PricingSection'
import RedesignShowcase from '../components/RedesignShowcase'
import TestimonialsSection from '../components/TestimonialsSection'
import LeadMagnetSection from '../components/LeadMagnetSection'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ClientLogos />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <WhyLogixoSection />
      <CMSPlatformSection />
      <WebsiteDesignProcess />
      <PricingSection />
      <RedesignShowcase />
      <TestimonialsSection />
      <LeadMagnetSection />
      <Footer />
    </>
  )
}

export default HomePage