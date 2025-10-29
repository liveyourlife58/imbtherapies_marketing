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
      <h2>What is Fullscript and Why Does It Matter?</h2>
      <p>Think of Fullscript like having a personal pharmacy that only carries the highest quality supplements - the kind that doctors and healthcare professionals use. After you get your Vibrant Wellness test results, the next step is creating a personalized supplement plan that actually works for your specific needs.</p>
      
      <p>Fullscript isn't your typical supplement store. It's a professional platform that gives you access to supplements that are tested, proven, and trusted by healthcare providers. It's like having the same quality supplements that your doctor would recommend, but delivered right to your door.</p>
      
      <h2>Why Fullscript Supplements Are Different</h2>
      <p>Here's the thing about supplements: not all of them are created equal. The supplements you find in regular stores often don't work as well as they should. Fullscript changes that by offering professional-grade supplements that actually work:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Superior Quality</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Rigorous testing</strong> - every supplement is tested for purity and potency</li>
            <li>• <strong>Better absorption</strong> - formulated so your body can actually use them</li>
            <li>• <strong>No fillers</strong> - only the active ingredients you need</li>
            <li>• <strong>Professional standards</strong> - the same quality doctors trust</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Personalized Approach</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Based on your test results</strong> - supplements chosen specifically for you</li>
            <li>• <strong>Expert guidance</strong> - professional recommendations you can trust</li>
            <li>• <strong>Specialized products</strong> - supplements you can't find in regular stores</li>
            <li>• <strong>Convenient delivery</strong> - shipped directly to your door</li>
          </ul>
        </div>
      </div>
      
      <h2>Key Supplements for Digestive Health</h2>
      <p>Your Vibrant Wellness test results tell us exactly what your gut needs. Based on those results, our team will recommend specific Fullscript supplements that are perfect for your unique situation:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Probiotics - The Good Bacteria</h3>
          <p class="text-sm text-gray-700 mb-4">These are the "good guys" that help restore balance to your gut:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Multi-strain formulas</strong> - comprehensive blends of beneficial bacteria</li>
            <li>• <strong>High potency options</strong> - concentrated doses for therapeutic benefits</li>
            <li>• <strong>Targeted strains</strong> - specific bacteria for your particular health concerns</li>
            <li>• <strong>Delayed release</strong> - formulations that survive stomach acid</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Digestive Enzymes - The Helpers</h3>
          <p class="text-sm text-gray-700 mb-4">These help your body break down food properly:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Comprehensive enzyme blends</strong> - multiple enzymes for complete digestion</li>
            <li>• <strong>Targeted formulas</strong> - specific enzymes for particular food groups</li>
            <li>• <strong>High potency options</strong> - strong formulations for digestive support</li>
            <li>• <strong>Plant-based enzymes</strong> - natural sources for sensitive individuals</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-purple-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-purple-800 mb-4">Essential Minerals - The Building Blocks</h3>
        <p class="text-sm text-gray-700 mb-4">Minerals like selenium play crucial roles in digestive and immune health:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>Bioavailable forms</strong> - minerals in forms your body can easily absorb</li>
            <li>• <strong>Optimal dosing</strong> - therapeutic amounts for health benefits</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Quality assurance</strong> - third-party tested for purity and potency</li>
            <li>• <strong>Professional formulations</strong> - designed by healthcare practitioners</li>
          </ul>
        </div>
      </div>
      
      <h2>How We Create Your Personalized Plan</h2>
      <p>Creating your supplement protocol isn't just about throwing random supplements at your problems. It's about creating a carefully designed plan that's specifically tailored to your test results and health needs.</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Our Two-Phase Approach</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-sm mb-3 text-blue-800">Phase 1: Assessment</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>Test result analysis</strong> - comprehensive review of your Vibrant Wellness results</li>
              <li>• <strong>Health history review</strong> - consideration of your medical background</li>
              <li>• <strong>Current symptoms</strong> - evaluation of your present health concerns</li>
              <li>• <strong>Lifestyle factors</strong> - assessment of diet, stress, and other influences</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-3 text-green-800">Phase 2: Protocol Development</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>Priority supplements</strong> - identification of most important supplements for your needs</li>
              <li>• <strong>Dosing recommendations</strong> - optimal amounts for therapeutic benefits</li>
              <li>• <strong>Timing guidelines</strong> - when and how to take each supplement</li>
              <li>• <strong>Duration planning</strong> - how long to take each supplement</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2>Why Professional Guidance Matters</h2>
      <p>You might be wondering why you can't just pick up some supplements at the store and call it good. Here's why professional guidance makes all the difference:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">What You Get with Professional Guidance</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Evidence-based recommendations</strong> - supplements chosen based on scientific research</li>
            <li>• <strong>Personalized approach</strong> - tailored to your specific test results and needs</li>
            <li>• <strong>Quality assurance</strong> - access to professional-grade products</li>
            <li>• <strong>Ongoing support</strong> - regular monitoring and protocol adjustments</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-4">What Happens Without It</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Wasted money</strong> - supplements that don't work for your specific needs</li>
            <li>• <strong>Potential interactions</strong> - supplements that might interfere with each other</li>
            <li>• <strong>Wrong dosing</strong> - too much or too little of what you need</li>
            <li>• <strong>No results</strong> - taking supplements that don't address your actual problems</li>
          </ul>
        </div>
      </div>
      
      <h2>Supplements Work Best with Lifestyle Changes</h2>
      <p>Think of supplements like a boost to your health - they work best when combined with the right lifestyle changes. It's like having a great car (supplements) but also needing good roads (lifestyle) to get where you want to go.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Dietary Changes</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Food elimination</strong> - removing foods identified as problematic in your tests</li>
            <li>• <strong>Nutrient-dense foods</strong> - emphasizing foods that support digestive health</li>
            <li>• <strong>Proper hydration</strong> - adequate water intake for optimal digestive function</li>
            <li>• <strong>Meal timing</strong> - strategic timing of meals and supplements</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Lifestyle Support</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Stress management</strong> - techniques to reduce stress and support gut health</li>
            <li>• <strong>Sleep optimization</strong> - quality sleep for digestive and immune function</li>
            <li>• <strong>Physical activity</strong> - appropriate exercise to support overall health</li>
            <li>• <strong>Environmental factors</strong> - reducing exposure to toxins and irritants</li>
          </ul>
        </div>
      </div>
      
      <h2>How to Track Your Progress</h2>
      <p>Taking supplements without tracking your progress is like driving without a map - you might get somewhere, but you won't know if you're going in the right direction. Here's how we help you stay on track:</p>
      
      <div class="bg-purple-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-purple-800 mb-4">Your Progress Tracking Plan</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>Symptom tracking</strong> - monitoring changes in digestive and overall health</li>
            <li>• <strong>Follow-up testing</strong> - periodic Vibrant Wellness testing to assess progress</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Protocol adjustments</strong> - modifying supplements based on results and symptoms</li>
            <li>• <strong>Professional support</strong> - regular consultations with healthcare providers</li>
          </ul>
        </div>
      </div>
      
      <h2>Common Questions About Supplements</h2>
      <p>Here are answers to the most common questions people have about Fullscript supplements:</p>
      
      <div class="bg-yellow-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-yellow-800 mb-4">Frequently Asked Questions</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-semibold text-sm mb-2 text-yellow-700">How long should I take supplements?</h4>
            <p class="text-sm text-gray-700">The duration depends on your specific needs and test results. Some supplements may be taken long-term for maintenance, while others are used for shorter periods to address specific issues. We'll give you specific guidance based on your situation.</p>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-2 text-yellow-700">Can I take multiple supplements together?</h4>
            <p class="text-sm text-gray-700">Yes, most supplements can be taken together, but timing and interactions should be considered. Your healthcare provider will provide specific guidance to ensure they work well together and don't interfere with each other.</p>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-2 text-yellow-700">Are Fullscript supplements safe?</h4>
            <p class="text-sm text-gray-700">Fullscript supplements undergo rigorous testing for quality, purity, and potency. However, it's important to work with a healthcare provider to ensure they're appropriate for your specific needs and won't interact with any medications you're taking.</p>
          </div>
        </div>
      </div>
      
      <h2>How to Get Started with Fullscript</h2>
      <p>Ready to begin your personalized supplement journey? Here's how to get started:</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Step-by-Step Guide</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <div class="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-sm mb-1">Complete Your Testing</h4>
                <p class="text-xs text-gray-600">Get comprehensive Vibrant Wellness test results to guide your supplement protocol</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-sm mb-1">Consult with Our Team</h4>
                <p class="text-xs text-gray-600">Review your results and develop a personalized plan</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-purple-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-sm mb-1">Access Fullscript Platform</h4>
                <p class="text-xs text-gray-600">Create your account and view recommended supplements</p>
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <div class="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-orange-600 font-bold text-sm">4</span>
              </div>
              <div>
                <h4 class="font-semibold text-sm mb-1">Start Your Protocol</h4>
                <p class="text-xs text-gray-600">Begin taking supplements as recommended</p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="bg-red-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-red-600 font-bold text-sm">5</span>
              </div>
              <div>
                <h4 class="font-semibold text-sm mb-1">Monitor Progress</h4>
                <p class="text-xs text-gray-600">Track changes and adjust as needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h2>Ready to Transform Your Health with Fullscript?</h2>
      <p>If you're ready to take control of your digestive health with personalized, professional-grade supplements, the first step is getting your Vibrant Wellness test results. It's like having a roadmap to better health - you'll finally know exactly what your body needs and how to give it the right support.</p>
      
      <p><a href="https://us.fullscript.com/welcome/imbt" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Access Fullscript Platform Today</a></p>
      
      <p>Have questions? We're here to help! Contact us to learn more about how Fullscript supplements can benefit your health journey.</p>
      
      <div class="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 class="text-lg font-semibold mb-4">Need Help or Have Questions?</h3>
        <p class="mb-2"><strong>Phone:</strong> 1 (866) 364-0963</p>
        <p class="mb-2"><strong>Email:</strong> support@vibrant-wellness.com</p>
        <p class="mb-2"><strong>Website:</strong> www.vibrant-wellness.com</p>
        <p class="text-sm text-gray-600">1360 Bayport Ave. Ste. B, San Carlos, CA 94070</p>
      </div>
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
              href="https://test.imbtherapies.com/patient/home/"
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
