'use client';

import { motion } from 'framer-motion';
import { TestTube, Shield, Heart, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0, 67, 110, 0.2) 0%, rgba(0, 67, 110, 0.1) 50%, rgba(0, 67, 110, 0.05) 100%)'
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
          style={{ backgroundColor: 'rgba(0, 67, 110, 0.3)' }}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
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
              style={{ backgroundColor: 'rgba(0, 67, 110, 0.1)', color: '#00436E' }}
            >
              <Shield className="w-4 h-4 mr-2" />
              Professional Lab Testing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block" style={{ color: '#00436E' }}>Precision Health</span>
              <span className="block">
                <span style={{ color: '#68B04D' }}>Testing,</span>
                <span style={{ color: '#00436E' }}> Delivered</span>
              </span>
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
                style={{ backgroundColor: '#00436E', boxShadow: '0 10px 15px -3px rgba(0, 67, 110, 0.3)' }}
              >
                Order Your Test Kit
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-200 border-2 shadow-lg"
                style={{ color: '#00436E', borderColor: '#00436E' }}
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
               {/* Results Images Display */}
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 1.0 }}
                 className="relative w-full h-[500px] flex gap-0 mb-0 mt-0"
               >
                 {/* Sample Report */}
                 <div className="relative w-1/2 h-full">
                   <Image
                     src="/images/SampleReport.webp"
                     alt="Sample Test Report"
                     fill
                     className="object-cover scale-85"
                     style={{ transform: 'rotate(-10deg)' }}
                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                   />
                 </div>
                 
                 {/* Complete Markers List */}
                 <div className="relative w-1/2 h-full">
                   <Image
                     src="/images/CompleteMarkersList.webp"
                     alt="Complete Markers List"
                     fill
                     className="object-cover scale-85"
                     style={{ transform: 'rotate(10deg)' }}
                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                   />
                 </div>
               </motion.div>


               {/* Floating Elements */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 3, repeat: Infinity }}
                 className="absolute top-16 -right-4 text-white rounded-full p-3 shadow-lg"
                 style={{ backgroundColor: '#68B04D' }}
               >
                 <CheckCircle className="w-6 h-6" />
               </motion.div>

               <motion.div
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                 className="absolute text-white rounded-full p-3 shadow-lg"
                 style={{ backgroundColor: '#00436E', bottom: '50px', left: '9px' }}
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
