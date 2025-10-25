'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TestTube, Shield, Heart, Clock, Users, Award } from 'lucide-react';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: TestTube,
      title: 'Professional Lab Testing',
      description: 'FDA-approved testing methods with CLIA-certified laboratories for accurate, reliable results.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Shield,
      title: 'Food Sensitivity Analysis',
      description: 'Comprehensive testing for 200+ food items to identify hidden sensitivities affecting your health.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Heart,
      title: 'Digestive Health Panel',
      description: 'Complete analysis of gut microbiome, digestive enzymes, and intestinal health markers.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Clock,
      title: 'Fast Results',
      description: 'Receive your detailed results and personalized recommendations within 5-7 business days.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Access to certified nutritionists and health professionals for personalized guidance.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee with our comprehensive testing and supplement protocols.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <section 
      id="testing" 
      className="py-20"
      style={{ backgroundColor: 'rgba(90, 110, 140, 0.05)' }}
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
            Why Choose Our
            <span className="block" style={{ color: '#68B04D' }}>Testing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade testing with personalized insights to help you understand and optimize your digestive health.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2"
              style={{ borderColor: 'rgba(90, 110, 140, 0.1)' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: feature.color === 'text-primary' ? 'rgba(90, 110, 140, 0.1)' : 'rgba(104, 176, 77, 0.1)' }}
              >
                <feature.icon className="w-8 h-8" style={{ color: feature.color === 'text-primary' ? '#5A6E8C' : '#68B04D' }} />
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 rounded-3xl p-8 shadow-lg border-2"
          style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)', borderColor: 'rgba(90, 110, 140, 0.2)' }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50,000+', label: 'Tests Completed' },
              { number: '98%', label: 'Accuracy Rate' },
              { number: '5-7', label: 'Days for Results' },
              { number: '200+', label: 'Food Items Tested' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="p-4"
              >
                <div className="text-3xl font-bold mb-2" style={{ color: '#5A6E8C' }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
