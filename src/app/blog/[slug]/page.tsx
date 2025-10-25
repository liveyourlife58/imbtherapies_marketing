import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Footer from '@/components/Footer';

// This would typically come from a CMS or database
const blogPosts = {
  'vibrant-wellness-gut-zoomer-complete-guide': {
    id: 'vibrant-wellness-gut-zoomer-complete-guide',
    title: 'Complete Guide to Vibrant Wellness Gut Zoomer Test',
    excerpt: 'Everything you need to know about the Vibrant Wellness Gut Zoomer test, including what it tests, how to prepare, and understanding your results.',
    content: `
      <h2>What is the Vibrant Wellness Gut Zoomer Test?</h2>
      <p>The Vibrant Wellness Gut Zoomer is a comprehensive test that analyzes your gut microbiome, digestive function, and intestinal health markers. This advanced diagnostic tool provides detailed insights into your digestive health, helping identify potential issues that may be affecting your overall wellness.</p>
      
      <h2>What Does the Gut Zoomer Test For?</h2>
      <p>The Vibrant Wellness Gut Zoomer test examines several key areas:</p>
      <ul>
        <li><strong>Microbiome Analysis:</strong> Evaluates the diversity and balance of beneficial and harmful bacteria in your gut</li>
        <li><strong>Digestive Enzymes:</strong> Measures your body's ability to break down proteins, fats, and carbohydrates</li>
        <li><strong>Inflammation Markers:</strong> Identifies signs of intestinal inflammation that may indicate underlying health issues</li>
        <li><strong>Intestinal Permeability:</strong> Assesses the integrity of your gut barrier function</li>
        <li><strong>Immune Function:</strong> Evaluates how your gut health affects your immune system</li>
      </ul>
      
      <h2>How to Prepare for Your Gut Zoomer Test</h2>
      <p>Proper preparation ensures accurate results from your Vibrant Wellness Gut Zoomer test:</p>
      <ol>
        <li><strong>Stop Probiotics:</strong> Discontinue probiotic supplements 48 hours before testing</li>
        <li><strong>Avoid Antibiotics:</strong> Wait at least 4 weeks after completing antibiotic treatment</li>
        <li><strong>Maintain Normal Diet:</strong> Continue your regular eating habits for accurate baseline results</li>
        <li><strong>Stay Hydrated:</strong> Drink plenty of water in the days leading up to your test</li>
        <li><strong>Follow Instructions:</strong> Carefully read and follow the test kit instructions provided</li>
      </ol>
      
      <h2>Understanding Your Gut Zoomer Results</h2>
      <p>Your Vibrant Wellness Gut Zoomer results will include:</p>
      <ul>
        <li><strong>Detailed Microbiome Report:</strong> Comprehensive analysis of your gut bacteria</li>
        <li><strong>Digestive Function Assessment:</strong> Evaluation of your digestive enzyme levels</li>
        <li><strong>Inflammation Analysis:</strong> Identification of inflammatory markers</li>
        <li><strong>Personalized Recommendations:</strong> Customized dietary and lifestyle suggestions</li>
        <li><strong>Supplement Protocol:</strong> Targeted Fullscript supplement recommendations</li>
      </ul>
      
      <h2>Next Steps After Your Gut Zoomer Test</h2>
      <p>Once you receive your Vibrant Wellness Gut Zoomer results, our team will help you:</p>
      <ol>
        <li><strong>Review Results:</strong> Schedule a consultation to discuss your findings</li>
        <li><strong>Create Action Plan:</strong> Develop a personalized approach to improve your gut health</li>
        <li><strong>Implement Changes:</strong> Start with dietary modifications and lifestyle adjustments</li>
        <li><strong>Add Supplements:</strong> Begin targeted Fullscript supplement protocol</li>
        <li><strong>Monitor Progress:</strong> Track improvements and adjust your plan as needed</li>
      </ol>
      
      <h2>Why Choose Vibrant Wellness Gut Zoomer?</h2>
      <p>The Vibrant Wellness Gut Zoomer test offers several advantages:</p>
      <ul>
        <li><strong>Comprehensive Analysis:</strong> Most thorough gut health assessment available</li>
        <li><strong>Advanced Technology:</strong> Cutting-edge testing methods for accurate results</li>
        <li><strong>Personalized Insights:</strong> Customized recommendations based on your unique results</li>
        <li><strong>Professional Support:</strong> Expert guidance throughout your health journey</li>
        <li><strong>Proven Results:</strong> Trusted by healthcare providers worldwide</li>
      </ul>
      
      <h2>Ready to Get Started?</h2>
      <p>If you're ready to take control of your digestive health with the Vibrant Wellness Gut Zoomer test, <a href="https://imbt.wellproz.com/patient/product/33407" target="_blank" rel="noopener noreferrer">order your test kit today</a>. Our team is here to support you every step of the way.</p>
    `,
    author: 'IMB Therapies Team',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Vibrant Wellness Tests',
    image: '/images/gut_zoomer.png',
    featured: true
  }
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | IMB Therapies Blog`,
    description: post.excerpt,
    keywords: [
      'Vibrant Wellness Gut Zoomer',
      'gut microbiome test',
      'digestive health testing',
      'gut health analysis',
      'microbiome testing',
      'digestive function test'
    ],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-colors duration-200"
            style={{ backgroundColor: '#5A6E8C' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogNavigation />
      {/* Header */}
      <div className="py-20 mt-16" style={{ background: 'linear-gradient(135deg, #5A6E8C 0%, #68B04D 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-200 mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              Share
            </span>
          </div>
          
          <span 
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: 'white' }}
          >
            {post.category}
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative h-96 mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          />
        </div>

        <article 
          className="prose prose-lg max-w-none"
          style={{ 
            color: '#374151',
            lineHeight: '1.7'
          }}
        >
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="blog-content"
            style={{
              '--tw-prose-headings': '#5A6E8C',
              '--tw-prose-links': '#5A6E8C',
              '--tw-prose-bold': '#5A6E8C',
            } as React.CSSProperties}
          />
        </article>

        {/* Author Info */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src="/images/imbt_logo.png"
                alt="IMB Therapies Logo"
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg" style={{ color: '#5A6E8C' }}>
                {post.author}
              </h3>
              <p className="text-gray-600">
                Expert team dedicated to helping you achieve optimal digestive health through advanced testing and personalized care.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl text-center" style={{ backgroundColor: 'rgba(90, 110, 140, 0.1)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#5A6E8C' }}>
            Ready to Take Control of Your Digestive Health?
          </h3>
          <p className="text-gray-600 mb-6">
            Order your Vibrant Wellness Gut Zoomer test today and get personalized insights into your gut health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://imbt.wellproz.com/patient/product/33407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
              style={{ backgroundColor: '#5A6E8C' }}
            >
              Order Gut Zoomer Test
            </a>
            <a
              href="https://us.fullscript.com/welcome/imbt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-colors duration-200 border-2"
              style={{ color: '#68B04D', borderColor: '#68B04D' }}
            >
              View Supplements
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
