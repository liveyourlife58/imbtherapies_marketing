'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Heart, Target } from 'lucide-react';

export default function AboutSection() {

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-[36rem] h-[36rem] mx-auto lg:mx-0">
              <Image
                src="/images/RoundDaniel.png"
                alt="Daniel - IMB Therapies Founder"
                fill
                className="object-cover rounded-full shadow-2xl"
                sizes="576px"
              />
              {/* Decorative elements */}
              <div 
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#68B04D' }}
              >
                <Heart className="w-10 h-10 text-white" />
              </div>
              <div 
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: '#5A6E8C' }}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#5A6E8C' }}>
                Meet Daniel
                <span className="block" style={{ color: '#68B04D' }}>Your Health Partner</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Like many who have struggled with digestive health issues, Daniel discovered 
                the power of comprehensive testing and personalized protocols. After experiencing 
                remarkable results with his own health journey, he founded IMBTherapies to share 
                these proven solutions with others facing similar challenges.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)' }}
                >
                  <Target className="w-6 h-6" style={{ color: '#5A6E8C' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#5A6E8C' }}>
                    Personalized Approach
                  </h3>
                  <p className="text-gray-600">
                    Every patient receives a customized treatment plan based on comprehensive 
                    Vibrant Wellness testing and individual health goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(104, 176, 77, 0.1)' }}
                >
                  <Heart className="w-6 h-6" style={{ color: '#68B04D' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#5A6E8C' }}>
                    Holistic Wellness
                  </h3>
                  <p className="text-gray-600">
                    We focus on root cause analysis, combining advanced lab testing with 
                    evidence-based Fullscript supplements and lifestyle modifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)' }}
                >
                  <Award className="w-6 h-6" style={{ color: '#5A6E8C' }} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#5A6E8C' }}>
                    Proven Results
                  </h3>
                  <p className="text-gray-600">
                    Our comprehensive approach has helped hundreds of patients achieve 
                    optimal digestive health and overall wellness.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
