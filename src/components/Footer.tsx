'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' }
    ],
    services: [
      { name: 'Digestive Testing', href: '#testing' },
      { name: 'Food Sensitivity', href: '#food-sensitivity' },
      { name: 'Supplements', href: '#supplements' },
      { name: 'Health Coaching', href: '#coaching' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Shipping Info', href: '#shipping' },
      { name: 'Returns', href: '#returns' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'HIPAA Notice', href: '#hipaa' },
      { name: 'Medical Disclaimer', href: '#disclaimer' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer 
      id="contact" 
      className="text-white"
      style={{ backgroundColor: '#00436E' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/images/imbt_logo.png"
                    alt="IMB Therapies Logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <span className="text-2xl font-bold">IMBTherapies</span>
              </div>
              <p className="leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Professional at-home digestive and food sensitivity testing with personalized supplements for optimal health. 
                Trusted by thousands of customers nationwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  <Mail className="w-4 h-4 mr-3" style={{ color: '#68B04D' }} />
                  <span>support@imbtherapies.com</span>
                </div>
                <div className="flex items-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  <Phone className="w-4 h-4 mr-3" style={{ color: '#68B04D' }} />
                  <span>1-800-IMB-HEALTH</span>
                </div>
                <div className="flex items-center" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  <MapPin className="w-4 h-4 mr-3" style={{ color: '#68B04D' }} />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-4 capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="transition-colors duration-200"
                        style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'white'}
                        onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 mb-12"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Health Tips
            </h3>
            <p className="mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Get the latest insights on digestive health, nutrition, and wellness delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
                style={{ backgroundColor: '#68B04D' }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t pt-8" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm mb-4 lg:mb-0"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              © {currentYear} IMB Therapies. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    color: 'rgba(255, 255, 255, 0.6)' 
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#68B04D';
                    (e.target as HTMLElement).style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)';
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
