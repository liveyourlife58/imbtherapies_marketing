'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Pill, Shield, Heart } from 'lucide-react';

const SupplementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const supplements = [
    {
      name: 'Fullscript Multi-Probiotic',
      description: 'Comprehensive Fullscript probiotic blend with multiple strains to support optimal gut microbiome health and digestive function.',
      image: '/images/multi_probiotic.webp',
      benefits: ['Gut Health', 'Immune Support', 'Digestive Balance'],
      icon: Pill,
      color: '#68B04D'
    },
    {
      name: 'Fullscript Digestive Enzymes',
      description: 'High-potency Fullscript enzyme blend to support proper digestion and nutrient absorption for optimal digestive health.',
      image: '/images/digestive_enzymes.webp',
      benefits: ['Digestion Support', 'Nutrient Absorption', 'Comfort'],
      icon: Shield,
      color: '#5A6E8C'
    },
    {
      name: 'Fullscript Selenium',
      description: 'Essential Fullscript mineral supplement to support immune system function and antioxidant protection for overall wellness.',
      image: '/images/selenium.webp',
      benefits: ['Immune Support', 'Antioxidant', 'Cellular Health'],
      icon: Heart,
      color: '#68B04D'
    }
  ];

  return (
    <section 
      id="fullscript-supplements" 
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#5A6E8C' }}>
            Premium Supplements by
            <span className="block" style={{ color: '#68B04D' }}>Fullscript</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade Fullscript supplements specifically selected to support your digestive and immune health journey. 
            Access the Fullscript platform for personalized supplement protocols.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {supplements.map((supplement, index) => (
            <motion.div
              key={supplement.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2"
              style={{ borderColor: 'rgba(90, 110, 140, 0.1)' }}
            >
              {/* Supplement Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={supplement.image}
                  alt={supplement.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Supplement Info */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${supplement.color}20` }}
                  >
                    <supplement.icon className="w-6 h-6" style={{ color: supplement.color }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#5A6E8C' }}>
                    {supplement.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {supplement.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {supplement.benefits.map((benefit, benefitIndex) => (
                    <div 
                      key={benefitIndex}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${supplement.color}10`, color: supplement.color }}
                    >
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href="https://us.fullscript.com/welcome/imbt"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-200 shadow-lg border-2"
                  style={{ color: '#5A6E8C', borderColor: '#5A6E8C' }}
                >
                  Order This Supplement
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div 
            className="rounded-3xl p-8 shadow-lg border-2"
            style={{ backgroundColor: 'rgba(104, 176, 77, 0.1)', borderColor: 'rgba(104, 176, 77, 0.2)' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#68B04D' }}>
              Personalized Fullscript Supplement Protocol
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Based on your test results, our experts will create a customized Fullscript supplement plan tailored to your specific health needs.
            </p>
            <motion.a
              href="https://us.fullscript.com/welcome/imbt"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg border-2"
              style={{ color: '#68B04D', borderColor: '#68B04D' }}
            >
              View All Fullscript Supplements
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupplementsSection;
