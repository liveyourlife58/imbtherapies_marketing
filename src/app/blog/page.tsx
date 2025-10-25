import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog - Vibrant Wellness Tests & Digestive Health Insights',
  description: 'Expert insights on digestive health, Vibrant Wellness testing, and personalized nutrition. Learn about Gut Zoomer, Wheat Zoomer, and Food Sensitivity Complete tests.',
  keywords: [
    'digestive health blog',
    'Vibrant Wellness blog',
    'gut health articles',
    'food sensitivity testing blog',
    'microbiome testing insights',
    'digestive wellness tips'
  ]
};

// Blog post data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 'vibrant-wellness-gut-zoomer-complete-guide',
    title: 'Complete Guide to Vibrant Wellness Gut Zoomer Test',
    excerpt: 'Everything you need to know about the Vibrant Wellness Gut Zoomer test, including what it tests, how to prepare, and understanding your results.',
    content: 'The Vibrant Wellness Gut Zoomer is a comprehensive test that analyzes your gut microbiome...',
    author: 'IMB Therapies Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Vibrant Wellness Tests',
    image: '/images/gut_zoomer.png',
    featured: true
  },
  {
    id: 'wheat-zoomer-gluten-sensitivity-testing',
    title: 'Understanding Gluten Sensitivity with Vibrant Wellness Wheat Zoomer',
    excerpt: 'Learn how the Vibrant Wellness Wheat Zoomer test can help identify gluten-related issues and guide your dietary choices.',
    content: 'Gluten sensitivity affects millions of people worldwide...',
    author: 'IMB Therapies Team',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Vibrant Wellness Tests',
    image: '/images/wheat_zoomer.png',
    featured: true
  },
  {
    id: 'food-sensitivity-complete-200-foods',
    title: 'Food Sensitivity Complete: Testing 200+ Foods for Hidden Sensitivities',
    excerpt: 'Discover how the Vibrant Wellness Food Sensitivity Complete test can reveal hidden food sensitivities affecting your health.',
    content: 'Food sensitivities can cause a wide range of symptoms...',
    author: 'IMB Therapies Team',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Vibrant Wellness Tests',
    image: '/images/food_sensitivity_complete.png',
    featured: false
  },
  {
    id: 'gut-microbiome-health-guide',
    title: 'The Ultimate Guide to Gut Microbiome Health',
    excerpt: 'Learn how to optimize your gut microbiome for better digestive health, immunity, and overall wellness.',
    content: 'Your gut microbiome plays a crucial role in your overall health...',
    author: 'IMB Therapies Team',
    date: '2024-01-01',
    readTime: '10 min read',
    category: 'Digestive Health',
    image: '/images/gut-health.webp',
    featured: false
  },
  {
    id: 'fullscript-supplements-digestive-health',
    title: 'How Fullscript Supplements Support Digestive Health',
    excerpt: 'Explore how Fullscript supplements can complement your Vibrant Wellness test results for optimal digestive health.',
    content: 'After receiving your Vibrant Wellness test results...',
    author: 'IMB Therapies Team',
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Supplements',
    image: '/images/multi_probiotic.webp',
    featured: false
  }
];

const categories = [
  'All',
  'Vibrant Wellness Tests',
  'Digestive Health',
  'Supplements'
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <BlogNavigation />
      {/* Header */}
      <div className="py-20 mt-16" style={{ background: 'linear-gradient(135deg, #5A6E8C 0%, #68B04D 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Digestive Health Blog
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Expert insights on Vibrant Wellness testing, digestive health, and personalized nutrition. 
            Learn about Gut Zoomer, Wheat Zoomer, and Food Sensitivity Complete tests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full border-2 transition-colors duration-200"
              style={{ 
                borderColor: category === 'All' ? '#5A6E8C' : 'rgba(90, 110, 140, 0.3)',
                color: category === 'All' ? '#5A6E8C' : '#6B7280',
                backgroundColor: category === 'All' ? 'rgba(90, 110, 140, 0.1)' : 'transparent'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8" style={{ color: '#5A6E8C' }}>
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2"
                  style={{ borderColor: 'rgba(90, 110, 140, 0.1)' }}
                >
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: '#68B04D', color: 'white' }}
                      >
                        Featured
                      </span>
                    </div>
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
                      style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)', color: '#5A6E8C' }}
                    >
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#5A6E8C' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 font-semibold transition-colors duration-200"
                      style={{ color: '#5A6E8C' }}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#5A6E8C' }}>
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2"
                style={{ borderColor: 'rgba(90, 110, 140, 0.1)' }}
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
                    style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)', color: '#5A6E8C' }}
                  >
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#5A6E8C' }}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200"
                    style={{ color: '#5A6E8C' }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
