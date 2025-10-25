import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'How Fullscript Supplements Support Digestive Health | IMB Therapies Blog',
  description: 'Explore how Fullscript supplements can complement your Vibrant Wellness test results for optimal digestive health and personalized nutrition.',
  keywords: [
    'Fullscript supplements',
    'digestive health supplements',
    'professional supplements',
    'personalized nutrition',
    'supplement protocol',
    'digestive wellness'
  ],
  openGraph: {
    title: 'How Fullscript Supplements Support Digestive Health',
    description: 'Explore how Fullscript supplements can complement your Vibrant Wellness test results for optimal digestive health and personalized nutrition.',
    images: ['/images/multi_probiotic.webp'],
    type: 'article',
    publishedTime: '2023-12-28',
    authors: ['IMB Therapies Team'],
  },
};

export default function FullscriptSupplementsBlogPost() {
  const post = {
    id: 'fullscript-supplements-digestive-health',
    title: 'How Fullscript Supplements Support Digestive Health',
    excerpt: 'Explore how Fullscript supplements can complement your Vibrant Wellness test results for optimal digestive health.',
    author: 'IMB Therapies Team',
    date: '2023-12-28',
    readTime: '5 min read',
    category: 'Supplements',
    image: '/images/multi_probiotic.webp',
    content: `
      <h2>Understanding Professional-Grade Supplements</h2>
      <p>After receiving your Vibrant Wellness test results, the next step in your health journey is implementing a personalized supplement protocol. Fullscript provides access to professional-grade supplements that are specifically designed to support your digestive health and overall wellness.</p>
      
      <h2>Why Choose Fullscript Supplements?</h2>
      <p>Fullscript is a trusted platform that provides healthcare practitioners and their patients with access to high-quality, professional-grade supplements. Unlike retail supplements, Fullscript products offer:</p>
      <ul>
        <li><strong>Higher Quality Standards:</strong> Rigorous testing and quality control</li>
        <li><strong>Better Absorption:</strong> Superior formulations for optimal bioavailability</li>
        <li><strong>Professional Guidance:</strong> Expert recommendations based on your test results</li>
        <li><strong>Comprehensive Selection:</strong> Access to specialized supplements not available in stores</li>
        <li><strong>Convenient Delivery:</strong> Direct shipping to your door</li>
      </ul>
      
      <h2>Key Supplements for Digestive Health</h2>
      <p>Based on your Vibrant Wellness test results, our team will recommend specific Fullscript supplements to address your unique needs:</p>
      
      <h3>Multi-Probiotic Supplements</h3>
      <p>Probiotics are beneficial bacteria that help restore and maintain a healthy gut microbiome. Fullscript offers various probiotic formulations including:</p>
      <ul>
        <li><strong>Multi-strain Formulas:</strong> Comprehensive blends of beneficial bacteria</li>
        <li><strong>High Potency Options:</strong> Concentrated doses for therapeutic benefits</li>
        <li><strong>Targeted Strains:</strong> Specific bacteria for particular health concerns</li>
        <li><strong>Delayed Release:</strong> Formulations that survive stomach acid</li>
      </ul>
      
      <h3>Digestive Enzymes</h3>
      <p>Digestive enzymes help break down food and improve nutrient absorption. Fullscript digestive enzyme supplements include:</p>
      <ul>
        <li><strong>Comprehensive Enzyme Blends:</strong> Multiple enzymes for complete digestion</li>
        <li><strong>Targeted Formulas:</strong> Specific enzymes for particular food groups</li>
        <li><strong>High Potency Options:</strong> Strong formulations for digestive support</li>
        <li><strong>Plant-Based Enzymes:</strong> Natural enzyme sources for sensitive individuals</li>
      </ul>
      
      <h3>Essential Minerals</h3>
      <p>Minerals like selenium play crucial roles in digestive and immune health. Fullscript offers high-quality mineral supplements including:</p>
      <ul>
        <li><strong>Bioavailable Forms:</strong> Minerals in forms your body can easily absorb</li>
        <li><strong>Optimal Dosing:</strong> Therapeutic amounts for health benefits</li>
        <li><strong>Quality Assurance:</strong> Third-party tested for purity and potency</li>
        <li><strong>Professional Formulations:</strong> Designed by healthcare practitioners</li>
      </ul>
      
      <h2>Creating Your Personalized Supplement Protocol</h2>
      <p>Your Vibrant Wellness test results provide the foundation for creating a personalized supplement protocol. Our approach includes:</p>
      
      <h3>Assessment Phase</h3>
      <ul>
        <li><strong>Test Result Analysis:</strong> Comprehensive review of your Vibrant Wellness results</li>
        <li><strong>Health History Review:</strong> Consideration of your medical background</li>
        <li><strong>Current Symptoms:</strong> Evaluation of your present health concerns</li>
        <li><strong>Lifestyle Factors:</strong> Assessment of diet, stress, and other influences</li>
      </ul>
      
      <h3>Protocol Development</h3>
      <ul>
        <li><strong>Priority Supplements:</strong> Identification of most important supplements for your needs</li>
        <li><strong>Dosing Recommendations:</strong> Optimal amounts for therapeutic benefits</li>
        <li><strong>Timing Guidelines:</strong> When and how to take each supplement</li>
        <li><strong>Duration Planning:</strong> How long to take each supplement</li>
      </ul>
      
      <h2>Benefits of Professional Supplement Guidance</h2>
      <p>Working with healthcare professionals to develop your supplement protocol offers several advantages:</p>
      <ul>
        <li><strong>Evidence-Based Recommendations:</strong> Supplements chosen based on scientific research</li>
        <li><strong>Personalized Approach:</strong> Tailored to your specific test results and needs</li>
        <li><strong>Quality Assurance:</strong> Access to professional-grade products</li>
        <li><strong>Ongoing Support:</strong> Regular monitoring and protocol adjustments</li>
        <li><strong>Safety Considerations:</strong> Awareness of potential interactions and contraindications</li>
      </ul>
      
      <h2>Integrating Supplements with Lifestyle Changes</h2>
      <p>Supplements work best when combined with appropriate lifestyle modifications. Your comprehensive health plan may include:</p>
      
      <h3>Dietary Modifications</h3>
      <ul>
        <li><strong>Food Elimination:</strong> Removing foods identified as problematic in your tests</li>
        <li><strong>Nutrient-Dense Foods:</strong> Emphasizing foods that support digestive health</li>
        <li><strong>Hydration:</strong> Adequate water intake for optimal digestive function</li>
        <li><strong>Meal Timing:</strong> Strategic timing of meals and supplements</li>
      </ul>
      
      <h3>Lifestyle Support</h3>
      <ul>
        <li><strong>Stress Management:</strong> Techniques to reduce stress and support gut health</li>
        <li><strong>Sleep Optimization:</strong> Quality sleep for digestive and immune function</li>
        <li><strong>Physical Activity:</strong> Appropriate exercise to support overall health</li>
        <li><strong>Environmental Factors:</strong> Reducing exposure to toxins and irritants</li>
      </ul>
      
      <h2>Monitoring Your Progress</h2>
      <p>Regular monitoring helps ensure your supplement protocol is working effectively:</p>
      <ul>
        <li><strong>Symptom Tracking:</strong> Monitoring changes in digestive and overall health</li>
        <li><strong>Follow-up Testing:</strong> Periodic Vibrant Wellness testing to assess progress</li>
        <li><strong>Protocol Adjustments:</strong> Modifying supplements based on results and symptoms</li>
        <li><strong>Professional Support:</strong> Regular consultations with healthcare providers</li>
      </ul>
      
      <h2>Common Supplement Questions</h2>
      <p>Here are answers to frequently asked questions about Fullscript supplements:</p>
      
      <h3>How long should I take supplements?</h3>
      <p>The duration depends on your specific needs and test results. Some supplements may be taken long-term for maintenance, while others are used for shorter periods to address specific issues.</p>
      
      <h3>Can I take multiple supplements together?</h3>
      <p>Yes, most supplements can be taken together, but timing and interactions should be considered. Your healthcare provider will provide specific guidance.</p>
      
      <h3>Are Fullscript supplements safe?</h3>
      <p>Fullscript supplements undergo rigorous testing for quality, purity, and potency. However, it's important to work with a healthcare provider to ensure they're appropriate for your specific needs.</p>
      
      <h2>Getting Started with Fullscript</h2>
      <p>To begin your personalized supplement protocol:</p>
      <ol>
        <li><strong>Complete Vibrant Wellness Testing:</strong> Get comprehensive insights into your health</li>
        <li><strong>Consult with Our Team:</strong> Review your results and develop a plan</li>
        <li><strong>Access Fullscript Platform:</strong> Create your account and view recommended supplements</li>
        <li><strong>Start Your Protocol:</strong> Begin taking supplements as recommended</li>
        <li><strong>Monitor Progress:</strong> Track changes and adjust as needed</li>
      </ol>
      
      <h2>Ready to Optimize Your Health?</h2>
      <p>If you're ready to take the next step in your health journey, start with comprehensive Vibrant Wellness testing to understand your unique needs. Based on your results, we'll create a personalized Fullscript supplement protocol designed to support your digestive health and overall wellness. <a href="https://us.fullscript.com/welcome/imbt" target="_blank" rel="noopener noreferrer">Access the Fullscript platform today</a> and begin your journey to optimal health.</p>
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
            Ready to Start Your Supplement Protocol?
          </h3>
          <p className="text-gray-600 mb-6">
            Access professional-grade Fullscript supplements and create a personalized protocol for your digestive health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://us.fullscript.com/welcome/imbt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
              style={{ backgroundColor: '#68B04D' }}
            >
              Access Fullscript Platform
            </a>
            <a
              href="https://imbt.wellproz.com/patient/home/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-colors duration-200 border-2"
              style={{ color: '#5A6E8C', borderColor: '#5A6E8C' }}
            >
              Order Tests First
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
