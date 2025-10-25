'use client';

import { motion } from 'framer-motion';
import { TestTube, Shield, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(90, 110, 140, 0.2) 0%, rgba(90, 110, 140, 0.1) 50%, rgba(90, 110, 140, 0.05) 100%)'
      }}
      aria-label="Hero section for digestive health testing services"
    >
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
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(90, 110, 140, 0.3)' }}
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
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(104, 176, 77, 0.1)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)', color: '#5A6E8C' }}
            >
              <Shield className="w-4 h-4 mr-2" />
              Professional Lab Testing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: '#5A6E8C' }}
            >
              Discover Your
              <span className="text-white block px-4 py-2 rounded-lg" style={{ backgroundColor: '#5A6E8C' }}>Digestive Health</span>
              <span style={{ color: '#68B04D' }}>From Home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Professional at-home digestive and food sensitivity testing kits with personalized supplements for optimal digestive and immune health.
            </motion.p>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {[
                'Comprehensive digestive health analysis',
                'Food sensitivity identification',
                'Personalized supplement recommendations',
                'Professional lab results in 5-7 days'
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center text-gray-700"
                >
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#68B04D' }} />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="https://imbt.wellproz.com/patient/home/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg inline-block text-center"
                style={{ backgroundColor: '#5A6E8C', boxShadow: '0 10px 15px -3px rgba(90, 110, 140, 0.3)' }}
              >
                Order Your Test Kit
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 border-2 shadow-lg"
                style={{ color: '#5A6E8C', borderColor: '#5A6E8C' }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

           {/* Right Column - Visual */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative"
           >
             <div className="relative">
               {/* Gut Health Image */}
               <motion.div
                 whileHover={{ scale: 1.02 }}
                 className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mb-6 mt-16"
               >
                 <Image
                   src="/images/gut-health.webp"
                   alt="Digestive Health Testing"
                   fill
                   className="object-cover"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                 />
               </motion.div>

               {/* Text Content */}
               <div className="text-center">
                 <h3 className="text-2xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
                   Complete Digestive Panel
                 </h3>
                 <p className="text-gray-600 mb-6">
                   Comprehensive Vibrant Wellness Gut Zoomer, Wheat Zoomer, and Food Sensitivity Complete testing for digestive health, food sensitivities, and gut microbiome analysis. 
                   Paired with personalized Fullscript supplements for optimal results.
                 </p>
                 <div className="grid grid-cols-3 gap-4 text-sm">
                   <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)' }}>
                     <TestTube className="w-6 h-6 mx-auto mb-2" style={{ color: '#5A6E8C' }} />
                     <span className="font-medium" style={{ color: '#5A6E8C' }}>Gut Permeability</span>
                   </div>
                   <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)' }}>
                     <Shield className="w-6 h-6 mx-auto mb-2" style={{ color: '#5A6E8C' }} />
                     <span className="font-medium" style={{ color: '#5A6E8C' }}>Food Sensitivities</span>
                   </div>
                   <div className="rounded-lg p-3" style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)' }}>
                     <Heart className="w-6 h-6 mx-auto mb-2" style={{ color: '#68B04D' }} />
                     <span className="font-medium" style={{ color: '#5A6E8C' }}>Immune Health</span>
                   </div>
                 </div>
               </div>

               {/* Floating Elements */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute -top-4 -right-4 text-white rounded-full p-3 shadow-lg"
                 style={{ backgroundColor: '#68B04D' }}
               >
                 <CheckCircle className="w-6 h-6" />
               </motion.div>

               <motion.div
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                 className="absolute -bottom-4 -left-4 text-white rounded-full p-3 shadow-lg"
                 style={{ backgroundColor: '#5A6E8C' }}
               >
                 <TestTube className="w-6 h-6" />
               </motion.div>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
