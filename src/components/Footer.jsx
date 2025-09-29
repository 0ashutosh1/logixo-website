import React from 'react'
import { useNavigation } from '../context/NavigationContext'

const Footer = () => {
  const { navigateTo } = useNavigation()

  return (
    <footer className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Let's Grow Your Brand
          </h2>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Main Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Main Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Custom Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Branding Services</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">eCommerce Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Shopify Website Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">WordPress Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Apps & Development */}
          <div>
            <h3 className="text-lg font-bold mb-6">Apps & Development</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Website Cost Calculator</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Conversion Rate Calculator</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Custom Web Development</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Magento Development</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">eCommerce Development</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">WooCommerce Development</a></li>
            </ul>
          </div>

          {/* Location Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Location Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">NYC Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">California Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Miami Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Los Angeles Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Denver Web Design</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">San Francisco Web Design</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Digital Trends</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Top Companies</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Sitemap</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Locations</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Company Locations */}
        <div className="border-t border-blue-500/30 pt-12 mb-12">
          <div className="flex justify-center mb-12">
            <button 
              onClick={() => navigateTo('home')}
              className="text-3xl font-bold hover:text-blue-200 transition-colors"
            >
              LOGIXO
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            {/* Miami */}
            <div>
              <div className="text-6xl font-black text-blue-300/30 mb-4">MI</div>
              <h4 className="font-bold text-lg mb-2">Miami</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                17975 Collins Avenue<br />
                Sunny Isles Beach,<br />
                FL 33160
              </p>
            </div>

            {/* New York */}
            <div>
              <div className="text-6xl font-black text-blue-300/30 mb-4">NY</div>
              <h4 className="font-bold text-lg mb-2">New York</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                18 West 18th Street<br />
                New York, NY 10011
              </p>
            </div>

            {/* Chicago */}
            <div>
              <div className="text-6xl font-black text-blue-300/30 mb-4">CH</div>
              <h4 className="font-bold text-lg mb-2">Chicago</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                625 W Adams St<br />
                Chicago, IL 60661
              </p>
            </div>

            {/* California */}
            <div>
              <div className="text-6xl font-black text-blue-300/30 mb-4">CA</div>
              <h4 className="font-bold text-lg mb-2">California</h4>
              <p className="text-blue-100 text-sm leading-relaxed">
                600 B St,<br />
                San Diego, CA 92101
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-500/30 bg-blue-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            
            {/* Copyright and Links */}
            <div className="flex flex-wrap items-center space-x-6 text-sm text-blue-100">
              <span>©2025 Logixo. All rights reserved</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Manage Your Consent</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:(800)206-9413" 
                className="text-blue-100 hover:text-white transition-colors text-sm"
              >
                Call us at (800) 206-9413
              </a>
              
              {/* Menu Icon */}
              <div className="flex flex-col space-y-1">
                <div className="w-6 h-0.5 bg-blue-200"></div>
                <div className="w-6 h-0.5 bg-blue-200"></div>
                <div className="w-6 h-0.5 bg-blue-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer