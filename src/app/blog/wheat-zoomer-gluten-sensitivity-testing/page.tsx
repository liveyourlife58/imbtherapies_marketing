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
      <h2>What is the Vibrant Wellness Wheat Zoomer Test?</h2>
      <p>Think of wheat sensitivity like having a security system that's too sensitive - it reacts to things that shouldn't be a problem. The Wheat Zoomer test is like having a detective investigate exactly how your body responds to wheat and gluten, so you can finally understand why you might be feeling unwell after eating bread, pasta, or other wheat products.</p>
      
      <p>This isn't just a simple "yes or no" test. The Wheat Zoomer is the most comprehensive wheat sensitivity test available, checking for multiple types of reactions including allergies, sensitivities, and even autoimmune responses. It's like getting a complete health report specifically about how wheat affects your body.</p>
      
      <h2>Who Should Consider This Test?</h2>
      <p>If you suspect you have wheat sensitivity, multiple food sensitivities, intestinal permeability, autoimmune disorders, or chronic inflammation, you may benefit from this comprehensive panel. Here are some common situations where the Wheat Zoomer can help:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Digestive Symptoms</h3>
          <p class="text-sm text-gray-700 mb-4">If you experience these digestive issues after eating wheat:</p>
          <ul class="space-y-2 text-sm">
            <li>• Diarrhea or constipation</li>
            <li>• Stomach cramping and discomfort</li>
            <li>• Nausea after eating</li>
            <li>• Bloating sensation</li>
            <li>• Excessive gas</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Overall Health Issues</h3>
          <p class="text-sm text-gray-700 mb-4">Sometimes wheat sensitivity shows up in unexpected ways:</p>
          <ul class="space-y-2 text-sm">
            <li>• Excessive fatigue after meals</li>
            <li>• Joint pains and inflammation</li>
            <li>• Brain fog or lack of concentration</li>
            <li>• Headaches, including migraines</li>
            <li>• Low vitamin D status</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-yellow-800 mb-4">Neurological & Skin Symptoms</h3>
        <p class="text-sm text-gray-700 mb-4">Wheat sensitivity can also affect your nervous system and skin:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• Memory loss or balance problems</li>
            <li>• Numbness or tingling</li>
            <li>• Anxiety or mood changes</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• Eczema or psoriasis</li>
            <li>• Skin rashes or irritation</li>
            <li>• Chronic inflammation</li>
          </ul>
        </div>
      </div>
      
      <h2>Why is This Test Important?</h2>
      <p>Here's something that might surprise you: <strong>One out of seven Americans is at least somewhat sensitive to wheat.</strong> That's a lot of people who might be feeling unwell without knowing why.</p>
      
      <p>Wheat sensitivity can cause serious health problems over time, including:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-4">Immediate Health Risks</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Leaky gut syndrome</strong> - damages your intestinal lining</li>
            <li>• <strong>Autoimmune disease</strong> - including Celiac disease</li>
            <li>• <strong>Neurological symptoms</strong> - brain fog, memory issues</li>
            <li>• <strong>Chronic inflammation</strong> - throughout your body</li>
          </ul>
        </div>
        
        <div class="bg-orange-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">Long-term Health Risks</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Heart disease</strong> - from chronic inflammation</li>
            <li>• <strong>Diabetes</strong> - blood sugar regulation issues</li>
            <li>• <strong>Cancer</strong> - increased risk from inflammation</li>
            <li>• <strong>Arthritis</strong> - joint inflammation and pain</li>
          </ul>
        </div>
      </div>
      
      <p>Uncovering wheat sensitivities is an easy and critical step in developing a nutritional plan to reduce inflammation and prevent disease. The sooner you know, the sooner you can start feeling better.</p>
      
      <h2>What Makes This Test Special?</h2>
      <p>The Wheat Zoomer isn't your average gluten test. Here's what makes it different:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">Comprehensive Testing</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Tests for Celiac disease</strong> - autoimmune reaction to gluten</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Non-gluten wheat sensitivity</strong> - reactions to other wheat proteins</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Intestinal permeability</strong> - checks for leaky gut</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Easy & Accurate</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <span><strong>Simple blood test</strong> - can be done at home or at a lab</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <span><strong>Highly accurate</strong> - >99% accuracy and 100% specificity</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <span><strong>Trusted by doctors</strong> - used by healthcare providers worldwide</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">Advanced Technology</h3>
        <p class="text-sm text-gray-700 mb-4">The test uses cutting-edge technology to detect:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>IgE, IgA, and IgG antibodies</strong> - different types of immune reactions</li>
            <li>• <strong>Celiac markers</strong> - specific markers for autoimmune disease</li>
            <li>• <strong>Intestinal permeability</strong> - how well your gut barrier works</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Wheat germ sensitivity</strong> - reactions to wheat germ proteins</li>
            <li>• <strong>Gluten-induced autoimmunity</strong> - autoimmune reactions to gluten</li>
            <li>• <strong>Cross-reactivity</strong> - reactions to similar proteins in other foods</li>
          </ul>
        </div>
      </div>
      
      <h2>About Vibrant Wellness</h2>
      <p>Vibrant Wellness is a trusted lab company that specializes in advanced health testing. They're based in California and are certified by the highest standards in the industry. Their mission is simple: help people understand what's really going on in their bodies so they can get better.</p>
      
      <p>Instead of guessing what might be wrong with your health, Vibrant Wellness believes in testing first. They use the latest technology to give you real answers about your wheat sensitivity, so you can make informed decisions about your diet and wellness.</p>
      
      <h2>How to Prepare for Your Test</h2>
      <p>Getting ready for your Wheat Zoomer test is simple, but there are a few important things to know:</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Test Preparation</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-sm mb-3 text-blue-800">What You Need to Do</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>Continue your normal diet</strong> - don't eliminate gluten before testing</li>
              <li>• <strong>No need to fast</strong> - eat normally before the test</li>
              <li>• <strong>Stay hydrated</strong> - drink plenty of water</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-3 text-green-800">What to Avoid</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>Stop immune supplements</strong> - 48 hours before testing</li>
              <li>• <strong>Wait after antibiotics</strong> - 4 weeks after treatment</li>
              <li>• <strong>Follow instructions</strong> - read the test kit carefully</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">How the Test Works</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-blue-600 font-bold">1</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Blood Draw</h4>
            <p class="text-xs text-gray-600">A simple blood draw (fasting recommended but not required)</p>
          </div>
          <div class="text-center">
            <div class="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-green-600 font-bold">2</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Lab Analysis</h4>
            <p class="text-xs text-gray-600">Advanced testing for multiple wheat and gluten markers</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-purple-600 font-bold">3</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Get Results</h4>
            <p class="text-xs text-gray-600">Detailed report showing your specific wheat sensitivity profile</p>
          </div>
        </div>
      </div>
      
      <h2>What Does the Test Actually Check?</h2>
      <p>The Wheat Zoomer is incredibly thorough - it's like having a complete health checkup specifically for wheat sensitivity. Here's what it looks for:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-4">Gluten Proteins</h3>
          <p class="text-sm text-gray-700 mb-4">Tests for reactions to all gluten components:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Alpha, beta, gamma gliadin</strong> - main gluten proteins</li>
            <li>• <strong>Glutenin family</strong> - high and low molecular weight</li>
            <li>• <strong>Deamidated gliadins</strong> - modified gluten proteins</li>
            <li>• <strong>Transglutaminase</strong> - enzyme involved in Celiac disease</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-yellow-800 mb-4">Non-Gluten Wheat Proteins</h3>
          <p class="text-sm text-gray-700 mb-4">Tests for reactions to other wheat components:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Wheat germ agglutinin (WGA)</strong> - lectin protein</li>
            <li>• <strong>Farinins and globulins</strong> - storage proteins</li>
            <li>• <strong>Serpins</strong> - protease inhibitors</li>
            <li>• <strong>Amylase/protease inhibitors</strong> - enzyme inhibitors</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-green-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-green-800 mb-4">Gut Health Markers</h3>
        <p class="text-sm text-gray-700 mb-4">The test also checks important gut health indicators:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>Zonulin protein</strong> - regulates gut barrier function</li>
            <li>• <strong>Anti-zonulin antibodies</strong> - indicates leaky gut</li>
            <li>• <strong>Anti-actin antibodies</strong> - intestinal damage markers</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Anti-LPS antibodies</strong> - bacterial toxin response</li>
            <li>• <strong>Wheat IgE antibodies</strong> - allergic reactions</li>
            <li>• <strong>Intestinal permeability</strong> - gut barrier integrity</li>
          </ul>
        </div>
      </div>
      
      <h2>What Happens After You Get Your Results?</h2>
      <p>Once you receive your Wheat Zoomer results, you'll have a clear picture of exactly how your body responds to wheat and gluten. The report will show you:</p>
      
      <ul>
        <li><strong>Your sensitivity level</strong> - from no reaction to severe sensitivity</li>
        <li><strong>Specific proteins you react to</strong> - gluten, non-gluten wheat proteins, or both</li>
        <li><strong>Gut health status</strong> - whether you have leaky gut or other issues</li>
        <li><strong>Personalized recommendations</strong> - specific dietary changes for your situation</li>
      </ul>
      
      <p>Our team at IMBTherapies will help you understand your results and create a personalized plan to manage your wheat sensitivity. This might include dietary changes, specific supplements, or other treatments based on what the test reveals.</p>
      
      <h2>Ready to Find Out What's Really Going On?</h2>
      <p>If you're tired of guessing whether wheat is causing your health problems, the Wheat Zoomer test can give you real answers. It's like having a roadmap to better health - you'll finally know exactly how wheat affects your body and what you need to do to feel better.</p>
      
      <p><a href="/portal/patient/product/33735" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Order Your Wheat Zoomer Test Today</a></p>
      
      <p>Have questions? We're here to help! Contact us to learn more about how the Wheat Zoomer test can benefit your health journey.</p>
      
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
            Ready to Test for Gluten Sensitivity?
          </h3>
          <p className="text-gray-600 mb-6">
            Order your Vibrant Wellness Wheat Zoomer test today and get personalized insights into your gluten sensitivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portal/patient/product/33735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
              style={{ backgroundColor: '#5A6E8C' }}
            >
              Order Wheat Zoomer Test
            </a>
            <a
              href="/supplements/welcome/imbt"
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
