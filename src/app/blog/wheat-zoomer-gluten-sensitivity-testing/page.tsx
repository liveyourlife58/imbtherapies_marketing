import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Understanding Gluten Sensitivity with Vibrant Wellness Wheat Zoomer | IMB Therapies Blog',
  description: 'Learn how the Vibrant Wellness Wheat Zoomer test can help identify gluten-related issues and guide your dietary choices for better digestive health.',
  keywords: [
    'Vibrant Wellness Wheat Zoomer',
    'gluten sensitivity test',
    'wheat sensitivity testing',
    'gluten intolerance test',
    'celiac screening',
    'wheat allergy testing'
  ],
  openGraph: {
    title: 'Understanding Gluten Sensitivity with Vibrant Wellness Wheat Zoomer',
    description: 'Learn how the Vibrant Wellness Wheat Zoomer test can help identify gluten-related issues and guide your dietary choices for better digestive health.',
    images: ['/images/wheat_zoomer.png'],
    type: 'article',
    publishedTime: '2024-01-10',
    authors: ['IMB Therapies Team'],
  },
};

export default function WheatZoomerBlogPost() {
  const post = {
    id: 'wheat-zoomer-gluten-sensitivity-testing',
    title: 'Understanding Gluten Sensitivity with Vibrant Wellness Wheat Zoomer',
    excerpt: 'Learn how the Vibrant Wellness Wheat Zoomer test can help identify gluten-related issues and guide your dietary choices.',
    author: 'IMB Therapies Team',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Vibrant Wellness Tests',
    image: '/images/wheat_zoomer.png',
    content: `
      <h2>What is Gluten Sensitivity?</h2>
      <p>Gluten sensitivity affects millions of people worldwide, causing a wide range of symptoms that can significantly impact quality of life. Unlike celiac disease, which is an autoimmune condition, gluten sensitivity (also known as non-celiac gluten sensitivity) doesn't cause damage to the small intestine but can still cause uncomfortable symptoms.</p>
      
      <h2>How the Vibrant Wellness Wheat Zoomer Works</h2>
      <p>The Vibrant Wellness Wheat Zoomer test is a comprehensive analysis that goes beyond basic gluten testing. This advanced diagnostic tool examines multiple markers related to wheat and gluten sensitivity, providing detailed insights into how your body responds to these proteins.</p>
      
      <h3>What the Wheat Zoomer Tests For:</h3>
      <ul>
        <li><strong>Gluten Sensitivity Markers:</strong> Identifies immune responses to gluten proteins</li>
        <li><strong>Wheat Allergy Indicators:</strong> Detects allergic reactions to wheat components</li>
        <li><strong>Celiac Disease Screening:</strong> Evaluates markers associated with celiac disease</li>
        <li><strong>Cross-Reactivity:</strong> Tests for reactions to similar proteins in other foods</li>
        <li><strong>Intestinal Permeability:</strong> Assesses gut barrier function related to gluten exposure</li>
      </ul>
      
      <h2>Understanding Your Wheat Zoomer Results</h2>
      <p>Your Vibrant Wellness Wheat Zoomer results will provide detailed information about your body's response to wheat and gluten. The test results are categorized into different levels of sensitivity, helping you understand the severity of your reaction and guide your dietary choices.</p>
      
      <h3>Result Categories:</h3>
      <ul>
        <li><strong>High Reactivity:</strong> Strong immune response requiring strict gluten avoidance</li>
        <li><strong>Moderate Reactivity:</strong> Moderate sensitivity that may benefit from reduced gluten intake</li>
        <li><strong>Low Reactivity:</strong> Mild sensitivity that may be managed with dietary modifications</li>
        <li><strong>No Reactivity:</strong> No significant immune response to wheat or gluten</li>
      </ul>
      
      <h2>Benefits of Wheat Zoomer Testing</h2>
      <p>The Vibrant Wellness Wheat Zoomer test offers several advantages over traditional gluten testing:</p>
      <ul>
        <li><strong>Comprehensive Analysis:</strong> Tests multiple markers for complete picture</li>
        <li><strong>Early Detection:</strong> Identifies sensitivity before severe symptoms develop</li>
        <li><strong>Personalized Results:</strong> Provides specific guidance based on your unique response</li>
        <li><strong>Cross-Reactivity Testing:</strong> Identifies other foods that may cause similar reactions</li>
        <li><strong>Gut Health Assessment:</strong> Evaluates intestinal barrier function</li>
      </ul>
      
      <h2>Preparing for Your Wheat Zoomer Test</h2>
      <p>To ensure accurate results from your Vibrant Wellness Wheat Zoomer test, follow these preparation guidelines:</p>
      <ol>
        <li><strong>Continue Normal Diet:</strong> Don't eliminate gluten before testing</li>
        <li><strong>Stop Supplements:</strong> Discontinue immune-modulating supplements 48 hours prior</li>
        <li><strong>Avoid Antibiotics:</strong> Wait 4 weeks after antibiotic treatment</li>
        <li><strong>Stay Hydrated:</strong> Maintain normal fluid intake</li>
        <li><strong>Follow Instructions:</strong> Carefully read the test kit instructions</li>
      </ol>
      
      <h2>Next Steps After Your Wheat Zoomer Test</h2>
      <p>Once you receive your Vibrant Wellness Wheat Zoomer results, our team will help you:</p>
      <ol>
        <li><strong>Interpret Results:</strong> Understand what your test results mean</li>
        <li><strong>Create Dietary Plan:</strong> Develop a personalized approach to managing gluten sensitivity</li>
        <li><strong>Identify Alternatives:</strong> Find gluten-free options that work for you</li>
        <li><strong>Monitor Progress:</strong> Track improvements in symptoms and overall health</li>
        <li><strong>Adjust Protocol:</strong> Modify your approach based on your response</li>
      </ol>
      
      <h2>Why Choose Vibrant Wellness Wheat Zoomer?</h2>
      <p>The Vibrant Wellness Wheat Zoomer test is the most comprehensive gluten sensitivity test available, offering:</p>
      <ul>
        <li><strong>Advanced Technology:</strong> Cutting-edge testing methods for accurate results</li>
        <li><strong>Comprehensive Analysis:</strong> Multiple markers for complete assessment</li>
        <li><strong>Professional Support:</strong> Expert guidance throughout your health journey</li>
        <li><strong>Personalized Recommendations:</strong> Customized advice based on your results</li>
        <li><strong>Proven Accuracy:</strong> Trusted by healthcare providers worldwide</li>
      </ul>
      
      <h2>Ready to Get Tested?</h2>
      <p>If you suspect gluten sensitivity or want to understand your body's response to wheat and gluten, the Vibrant Wellness Wheat Zoomer test can provide the answers you need. <a href="https://imbt.wellproz.com/patient/product/33735" target="_blank" rel="noopener noreferrer">Order your Wheat Zoomer test today</a> and take the first step toward better digestive health.</p>
    `
  };

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
            Ready to Test for Gluten Sensitivity?
          </h3>
          <p className="text-gray-600 mb-6">
            Order your Vibrant Wellness Wheat Zoomer test today and get personalized insights into your gluten sensitivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://imbt.wellproz.com/patient/product/33735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
              style={{ backgroundColor: '#5A6E8C' }}
            >
              Order Wheat Zoomer Test
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
