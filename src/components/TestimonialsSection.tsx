'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      content: 'After years of digestive issues, this test finally gave me the answers I needed. The personalized supplement protocol has completely transformed my health.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      content: 'The food sensitivity test revealed several hidden triggers I never knew about. My energy levels and overall well-being have improved dramatically.',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Teacher',
      content: 'Professional, accurate, and incredibly helpful. The customer support team guided me through every step, and the results were life-changing.',
      rating: 5,
      image: 'ER'
    },
    {
      name: 'David Thompson',
      role: 'Business Owner',
      content: 'As someone skeptical of at-home testing, I was amazed by the accuracy and detail of the results. Highly recommend to anyone serious about their health.',
      rating: 5,
      image: 'DT'
    },
    {
      name: 'Lisa Park',
      role: 'Nurse',
      content: 'The comprehensive digestive panel provided insights that even my doctor found valuable. The supplement recommendations are spot-on.',
      rating: 5,
      image: 'LP'
    },
    {
      name: 'James Wilson',
      role: 'Personal Trainer',
      content: 'Finally found the root cause of my digestive issues. The testing process was simple, and the results were delivered exactly when promised.',
      rating: 5,
      image: 'JW'
    }
  ];

  return (
    <section id='testimonials' className='py-20' style={{ backgroundColor: 'rgba(90, 110, 140, 0.05)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#5A6E8C' }}>
            What Our
            <span style={{ color: '#68B04D' }}> Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have discovered their optimal health through our comprehensive testing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2"
              style={{ borderColor: 'rgba(90, 110, 140, 0.1)' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'rgba(90, 110, 140, 0.2)' }}>
                  <span className="font-bold text-lg" style={{ color: '#5A6E8C' }}>
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold" style={{ color: '#5A6E8C' }}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-4">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="rounded-3xl p-8 shadow-lg max-w-2xl mx-auto border-2" style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)', borderColor: 'rgba(90, 110, 140, 0.2)' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl font-bold mr-4" style={{ color: '#5A6E8C' }}>4.9</div>
              <div>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600">Based on 2,847 reviews</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              &ldquo;Outstanding service and life-changing results. Highly recommend to anyone serious about their digestive health.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
