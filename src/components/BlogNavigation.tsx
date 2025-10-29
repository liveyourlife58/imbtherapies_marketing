'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Testing Kits', href: '/#vibrant-tests' },
    { name: 'Supplements', href: '/#fullscript-supplements' },
    { name: 'How It Works', href: '/#how-it-works' },
    { name: 'About', href: '/#about' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg"
      style={{
        backgroundColor: '#00436E',
        borderBottom: '1px solid rgba(0, 67, 110, 0.3)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/imbt_logo.png"
                  alt="IMB Therapies Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-xl font-bold text-white">
                IMBTherapies
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-green-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/blog"
              className="px-6 py-2 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#68B04D' }}
            >
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsScrolled(!isScrolled)}
              className="text-white hover:text-green-300 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-blue-200/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-green-300 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-lg text-white font-semibold transition-all duration-200"
                style={{ backgroundColor: '#68B04D' }}
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
