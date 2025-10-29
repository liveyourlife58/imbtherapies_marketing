'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredPosts = [
    {
      id: 'vibrant-wellness-gut-zoomer-complete-guide',
      title: 'Complete Guide to Vibrant Wellness Gut Zoomer Test',
      excerpt: 'Everything you need to know about the Vibrant Wellness Gut Zoomer test, including what it tests, how to prepare, and understanding your results.',
      author: 'IMB Therapies Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Vibrant Wellness Tests',
      image: '/images/gut_zoomer.png',
    },
    {
      id: 'wheat-zoomer-gluten-sensitivity-testing',
      title: 'Understanding Gluten Sensitivity with Vibrant Wellness Wheat Zoomer',
      excerpt: 'Learn how the Vibrant Wellness Wheat Zoomer test can help identify gluten-related issues and guide your dietary choices.',
      author: 'IMB Therapies Team',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Vibrant Wellness Tests',
      image: '/images/wheat_zoomer.png',
    },
    {
      id: 'food-sensitivity-complete-200-foods',
      title: 'Food Sensitivity Complete: Testing 200+ Foods for Hidden Sensitivities',
      excerpt: 'Discover how the Vibrant Wellness Food Sensitivity Complete test can reveal hidden food sensitivities affecting your health.',
      author: 'IMB Therapies Team',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Vibrant Wellness Tests',
      image: '/images/food_sensitivity_complete.png',
    }
  ];

  return (
    <section 
      id="blog" 
      className="py-20"
      style={{ backgroundColor: 'rgba(104, 176, 77, 0.05)' }}
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
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert insights on Vibrant Wellness testing, digestive health, and personalized nutrition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2"
              style={{ borderColor: 'rgba(0, 67, 110, 0.1)' }}
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                  style={{ backgroundColor: 'rgba(0, 67, 110, 0.1)', color: '#00436E' }}
                >
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00436E' }}>
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200"
                  style={{ color: '#00436E' }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div 
            className="rounded-3xl p-8 shadow-lg border-2"
            style={{ backgroundColor: 'rgba(0, 67, 110, 0.1)', borderColor: 'rgba(0, 67, 110, 0.2)' }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#00436E' }}>
              Stay Updated with Our Latest Articles
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Get expert insights on digestive health, Vibrant Wellness testing, and personalized nutrition delivered to your inbox.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              style={{ color: '#00436E' }}
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
