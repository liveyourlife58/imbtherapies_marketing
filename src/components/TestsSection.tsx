'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { TestTube, Shield, Heart } from 'lucide-react';

const TestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tests = [
    {
      name: 'Vibrant Wellness Gut Zoomer',
      description: 'Comprehensive Vibrant Wellness gut microbiome analysis of your digestive function and intestinal health markers.',
      image: '/images/gut_zoomer.png',
      features: ['Vibrant Wellness Microbiome Analysis', 'Digestive Enzymes', 'Inflammation Markers'],
      icon: TestTube,
      color: '#00436E',
      orderLink: 'https://imbt.wellproz.com/patient/product/33407'
    },
    {
      name: 'Vibrant Wellness Wheat Zoomer',
      description: 'Advanced Vibrant Wellness testing for wheat and gluten-related sensitivities and autoimmune responses.',
      image: '/images/wheat_zoomer.png',
      features: ['Gluten Sensitivity', 'Autoimmune Markers', 'Celiac Screening'],
      icon: Shield,
      color: '#68B04D',
      orderLink: 'https://imbt.wellproz.com/patient/product/33735'
    },
    {
      name: 'Vibrant Wellness Food Sensitivity Complete',
      description: 'Comprehensive Vibrant Wellness testing for 200+ food items to identify hidden sensitivities affecting your health.',
      image: '/images/food_sensitivity_complete.png',
      features: ['200+ Foods Tested', 'IgG Antibodies', 'Personalized Results'],
      icon: Heart,
      color: '#00436E',
      orderLink: 'https://imbt.wellproz.com/patient/product/33729'
    }
  ];

  return (
    <section 
      id="vibrant-tests" 
      className="py-20"
      style={{ backgroundColor: 'rgba(0, 67, 110, 0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#00436E' }}>
            Professional Lab Testing by
            <span className="block" style={{ color: '#68B04D' }}>Vibrant Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced diagnostic testing by Vibrant Wellness to uncover the root causes of digestive issues and food sensitivities. 
            Get comprehensive Vibrant Wellness lab results delivered directly to your door.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tests.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2"
              style={{ borderColor: 'rgba(0, 67, 110, 0.1)' }}
            >
              {/* Test Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <Image
                  src={test.image}
                  alt={test.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Test Info */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${test.color}20` }}
                  >
                    <test.icon className="w-6 h-6" style={{ color: test.color }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: '#00436E' }}>
                    {test.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {test.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {test.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="text-sm px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${test.color}10`, color: test.color }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.a
                  href={test.orderLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-200 shadow-lg border-2"
                  style={{ color: '#00436E', borderColor: '#00436E' }}
                >
                  Order This Test
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
          className="mt-16"
        >
          <div 
            className="rounded-3xl p-8 shadow-lg border-2 text-center"
            style={{ backgroundColor: 'rgba(104, 176, 77, 0.1)', borderColor: 'rgba(104, 176, 77, 0.2)' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#68B04D' }}>
              Not Seeing What You&apos;re Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Browse our complete catalog of Vibrant Wellness tests and find the perfect testing panel for your health journey.
            </p>
            <motion.a
              href="https://imbt.wellproz.com/patient/home/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              style={{ color: '#68B04D' }}
            >
              View Full Test Catalog
            </motion.a>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#00436E' }}>
            Frequently Asked Questions
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'How accurate are Vibrant Wellness tests?',
                answer: 'Vibrant Wellness uses CLIA-certified laboratories and FDA-approved testing methods to ensure the highest accuracy. Their tests are trusted by healthcare providers worldwide and meet the highest industry standards for reliability.'
              },
              {
                question: 'How long does it take to get results?',
                answer: 'Most Vibrant Wellness tests provide results within 5-7 business days after the lab receives your sample. You\'ll receive a detailed report with comprehensive analysis and personalized recommendations.'
              },
              {
                question: 'Do I need a doctor\'s order to take these tests?',
                answer: 'No, you can order Vibrant Wellness tests directly through IMBTherapies without a doctor\'s prescription. However, we recommend consulting with a healthcare provider to interpret your results and create a personalized treatment plan.'
              },
              {
                question: 'What makes Vibrant Wellness tests different from other at-home tests?',
                answer: 'Vibrant Wellness tests are among the most comprehensive available, using advanced technology to analyze hundreds of markers. They\'re used by healthcare professionals and provide detailed, actionable insights that go beyond basic screening.'
              },
              {
                question: 'Can I use my insurance to pay for these tests?',
                answer: 'Vibrant Wellness tests are typically not covered by insurance, but we offer competitive pricing and no consultation fees. Many patients find the investment worthwhile for the comprehensive insights and personalized recommendations.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border-2"
                style={{ borderColor: 'rgba(0, 67, 110, 0.1)' }}
              >
                <h4 className="text-lg font-bold mb-3" style={{ color: '#00436E' }}>
                  {faq.question}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate are Vibrant Wellness tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vibrant Wellness uses CLIA-certified laboratories and FDA-approved testing methods to ensure the highest accuracy. Their tests are trusted by healthcare providers worldwide and meet the highest industry standards for reliability."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to get results?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Vibrant Wellness tests provide results within 5-7 business days after the lab receives your sample. You'll receive a detailed report with comprehensive analysis and personalized recommendations."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need a doctor's order to take these tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, you can order Vibrant Wellness tests directly through IMBTherapies without a doctor's prescription. However, we recommend consulting with a healthcare provider to interpret your results and create a personalized treatment plan."
                }
              },
              {
                "@type": "Question",
                "name": "What makes Vibrant Wellness tests different from other at-home tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vibrant Wellness tests are among the most comprehensive available, using advanced technology to analyze hundreds of markers. They're used by healthcare professionals and provide detailed, actionable insights that go beyond basic screening."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use my insurance to pay for these tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vibrant Wellness tests are typically not covered by insurance, but we offer competitive pricing and no consultation fees. Many patients find the investment worthwhile for the comprehensive insights and personalized recommendations."
                }
              }
            ]
          }),
        }}
      />
    </section>
  );
};

export default TestsSection;
