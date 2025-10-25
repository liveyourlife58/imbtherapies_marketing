'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Shield, Clock } from 'lucide-react';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    'Professional lab testing',
    'Personalized supplement protocol',
    'Expert health guidance',
    '100% satisfaction guarantee'
  ];

  return (
    <section id='supplements' className='py-20 relative overflow-hidden' style={{ background: 'linear-gradient(135deg, #5A6E8C, rgba(90, 110, 140, 0.9), rgba(90, 110, 140, 0.8))' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl'
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className='absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl'
          style={{ backgroundColor: 'rgba(104, 176, 77, 0.3)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <Shield className="w-4 h-4 mr-2" />
            Limited Time Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl opacity-90 mb-8 max-w-3xl mx-auto"
          >
            Get comprehensive digestive health testing and personalized supplements delivered to your door. 
            Join thousands who have discovered their optimal health.
          </motion.p>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-center text-white"
              >
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="backdrop-blur-md rounded-3xl p-8 max-w-md mx-auto mb-8 border-2"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <div className="text-center">
              <div className="text-sm opacity-80 mb-2">Complete Testing Kit</div>
              <div className="text-4xl font-bold mb-2">$199</div>
              <div className="text-sm opacity-80 mb-4">One-time payment</div>
              <div className="flex items-center justify-center text-sm opacity-80">
                <Clock className="w-4 h-4 mr-2" />
                Results in 5-7 days
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="https://imbt.wellproz.com/patient/home/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block text-center"
              style={{ color: '#5A6E8C' }}
            >
              Order Your Test Kit Now
            </motion.a>
            <motion.a
              href="https://us.fullscript.com/welcome/imbt"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block text-center"
              style={{ color: '#5A6E8C' }}
            >
              Order Supplements
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-200 shadow-lg"
              style={{ color: 'white' }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.backgroundColor = 'white'; (e.target as HTMLElement).style.color = '#5A6E8C'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.backgroundColor = 'transparent'; (e.target as HTMLElement).style.color = 'white'; }}
            >
              Speak with an Expert
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm opacity-80"
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              HIPAA Compliant
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2" />
              CLIA Certified Labs
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Fast Results
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
