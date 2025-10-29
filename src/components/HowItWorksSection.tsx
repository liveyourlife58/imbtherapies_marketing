'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, TestTube, FileText, Pill, ArrowRight } from 'lucide-react';

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Package,
      title: 'Order Your Kit',
      description: 'Choose from our comprehensive testing panels and receive your kit within 2-3 business days.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: TestTube,
      title: 'Collect Sample',
      description: 'Follow our simple instructions to collect your sample in the comfort of your own home.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: FileText,
      title: 'Get Results',
      description: 'Receive detailed lab results and personalized health insights within 5-7 business days.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Pill,
      title: 'Start Supplements',
      description: 'Begin your personalized supplement protocol based on your unique test results.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#5A6E8C' }}>
            How It
            <span style={{ color: '#68B04D' }}> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, convenient, and professional. Get comprehensive health insights from the comfort of your home.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 relative`}
                >
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-white" style={{ backgroundColor: '#5A6E8C' }}>
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="lg:hidden flex justify-center mt-6"
                  >
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className='rounded-3xl p-8 text-white border-2' style={{ background: 'linear-gradient(to right, #5A6E8C, rgba(90, 110, 140, 0.9), rgba(90, 110, 140, 0.8))', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Health Journey?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of satisfied customers who have discovered their optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://test.imbtherapies.com/patient/home/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg inline-block text-center"
                style={{ color: '#5A6E8C' }}
              >
                Order Your Test Kit Today
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
