'use client';

import { motion } from 'framer-motion';
import { CheckCircle, DollarSign, UserCheck, HeadphonesIcon } from 'lucide-react';

export default function ValuePropositionSection() {
  const valueProps = [
    {
      icon: CheckCircle,
      title: 'Premier Access',
      description: 'Direct access to Vibrant Wellness testing and Fullscript supplements without barriers',
      color: '#68B04D'
    },
    {
      icon: DollarSign,
      title: 'No Consultation Fees',
      description: 'Lowest prices with no required consultation fees - pay only for what you need',
      color: '#5A6E8C'
    },
    {
      icon: UserCheck,
      title: 'Patient Autonomy',
      description: 'Take control of your health journey with complete patient autonomy when you want it',
      color: '#68B04D'
    },
    {
      icon: HeadphonesIcon,
      title: 'In-Person Support',
      description: 'Professional in-person support available whenever you need guidance and assistance',
      color: '#5A6E8C'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#5A6E8C' }}>
            Why Choose
            <span className="block" style={{ color: '#68B04D' }}>IMBTherapies?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The premier destination for Vibrant Wellness testing and Fullscript supplements. 
            Experience healthcare on your terms with complete autonomy and optional support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl border-2 hover:shadow-lg transition-all duration-300"
              style={{ 
                borderColor: 'rgba(90, 110, 140, 0.1)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)'
              }}
            >
              <div 
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${prop.color}15` }}
              >
                <prop.icon className="w-8 h-8" style={{ color: prop.color }} />
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-2xl"
          style={{ backgroundColor: 'rgba(90, 110, 140, 0.05)' }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
            Ready to Take Control of Your Health?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands who have discovered the power of comprehensive testing and personalized supplements. 
            Start your journey with complete autonomy and optional professional support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://imbt.wellproz.com/patient/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#5A6E8C' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order Your Test Kit
            </motion.a>
            <motion.a
              href="https://us.fullscript.com/welcome/imbt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#68B04D' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Supplements
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
