import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import BlogNavigation from '@/components/BlogNavigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Food Sensitivity Complete: Testing 200+ Foods for Hidden Sensitivities | IMB Therapies Blog',
  description: 'Discover how the Vibrant Wellness Food Sensitivity Complete test can reveal hidden food sensitivities affecting your health with comprehensive 200+ food testing.',
  keywords: [
    'Vibrant Wellness Food Sensitivity Complete',
    'food sensitivity test 200 foods',
    'food intolerance testing',
    'hidden food sensitivities',
    'IgG food sensitivity test',
    'comprehensive food testing'
  ],
  openGraph: {
    title: 'Food Sensitivity Complete: Testing 200+ Foods for Hidden Sensitivities',
    description: 'Discover how the Vibrant Wellness Food Sensitivity Complete test can reveal hidden food sensitivities affecting your health with comprehensive 200+ food testing.',
    images: ['/images/food_sensitivity_complete.png'],
    type: 'article',
    publishedTime: '2024-01-05',
    authors: ['IMB Therapies Team'],
  },
};

export default function FoodSensitivityCompleteBlogPost() {
  const post = {
    id: 'food-sensitivity-complete-200-foods',
    title: 'Food Sensitivity Complete: Testing 200+ Foods for Hidden Sensitivities',
    excerpt: 'Discover how the Vibrant Wellness Food Sensitivity Complete test can reveal hidden food sensitivities affecting your health.',
    author: 'IMB Therapies Team',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Vibrant Wellness Tests',
    image: '/images/food_sensitivity_complete.png',
    content: `
      <h2>What is the Vibrant Wellness Food Sensitivity Complete Test?</h2>
      <p>Think of food sensitivities like having a hidden enemy in your diet - foods that seem harmless but are actually causing your body to react in ways that make you feel unwell. The Food Sensitivity Complete test is like having a detective investigate every single food you might eat to find out which ones are secretly causing your health problems.</p>
      
      <p>This isn't just a simple "test a few foods" approach. The Food Sensitivity Complete test checks your body's reaction to over 200 different foods - that's more comprehensive than any other test available. It's like getting a complete health report on how your body responds to almost everything you might eat.</p>
      
      <h2>Who Should Consider This Test?</h2>
      <p>If you're experiencing mysterious health issues that your doctor can't explain, or if you suspect certain foods might be making you feel unwell, this comprehensive test can help. Here are some common situations where the Food Sensitivity Complete test can make a difference:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Digestive Problems</h3>
          <p class="text-sm text-gray-700 mb-4">If you experience these digestive issues regularly:</p>
          <ul class="space-y-2 text-sm">
            <li>• Bloating and gas after eating</li>
            <li>• Stomach pain and cramping</li>
            <li>• Diarrhea or constipation</li>
            <li>• Nausea and vomiting</li>
            <li>• Acid reflux and heartburn</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Overall Health Issues</h3>
          <p class="text-sm text-gray-700 mb-4">Sometimes food sensitivities show up in unexpected ways:</p>
          <ul class="space-y-2 text-sm">
            <li>• Fatigue and low energy</li>
            <li>• Headaches and migraines</li>
            <li>• Joint pain and inflammation</li>
            <li>• Skin rashes and eczema</li>
            <li>• Mood changes and irritability</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-yellow-800 mb-4">Chronic Health Conditions</h3>
        <p class="text-sm text-gray-700 mb-4">Food sensitivities can contribute to or worsen these conditions:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• Autoimmune diseases</li>
            <li>• Chronic fatigue syndrome</li>
            <li>• Fibromyalgia</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• Irritable Bowel Syndrome (IBS)</li>
            <li>• Inflammatory Bowel Disease</li>
            <li>• Chronic inflammation</li>
          </ul>
        </div>
      </div>
      
      <h2>Why is This Test Important?</h2>
      <p>Here's something that might surprise you: <strong>Food sensitivities affect up to 20% of the population</strong>, but most people don't realize they have them because the symptoms can be delayed by hours or even days after eating.</p>
      
      <p>Unlike food allergies that cause immediate, obvious reactions, food sensitivities are like a slow poison - they cause subtle, ongoing problems that can seriously impact your quality of life over time.</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-4">Immediate Health Risks</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Chronic inflammation</strong> - damages your body over time</li>
            <li>• <strong>Digestive problems</strong> - ongoing gut issues</li>
            <li>• <strong>Immune system overload</strong> - constant stress on your immune system</li>
            <li>• <strong>Nutrient malabsorption</strong> - can't absorb nutrients properly</li>
          </ul>
        </div>
        
        <div class="bg-orange-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">Long-term Health Risks</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Autoimmune diseases</strong> - increased risk from chronic inflammation</li>
            <li>• <strong>Heart disease</strong> - inflammation affects cardiovascular health</li>
            <li>• <strong>Diabetes</strong> - blood sugar regulation problems</li>
            <li>• <strong>Mental health issues</strong> - brain fog, anxiety, depression</li>
          </ul>
        </div>
      </div>
      
      <p>Finding and eliminating your food sensitivities is like removing the root cause of many health problems. It's not just about feeling better today - it's about preventing serious health issues in the future.</p>
      
      <h2>What Makes This Test Special?</h2>
      <p>The Food Sensitivity Complete test isn't your average food test. Here's what makes it different:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">Comprehensive Testing</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Tests 200+ foods</strong> - more comprehensive than any other test</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>IgG antibody testing</strong> - detects delayed food sensitivities</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>All food categories</strong> - dairy, grains, proteins, vegetables, fruits, nuts, spices</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Easy & Accurate</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <span><strong>Simple blood spot test</strong> - can be done at home</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <span><strong>Highly accurate</strong> - advanced laboratory analysis</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">✓</span>
              <span><strong>Personalized results</strong> - specific recommendations for your situation</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">What Foods Are Tested?</h3>
        <p class="text-sm text-gray-700 mb-4">The test covers all major food categories:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>Dairy Products</strong> - milk, cheese, yogurt, butter</li>
            <li>• <strong>Grains</strong> - wheat, rice, corn, oats, quinoa</li>
            <li>• <strong>Proteins</strong> - beef, chicken, fish, eggs, beans</li>
            <li>• <strong>Vegetables</strong> - common and uncommon varieties</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Fruits</strong> - fresh and dried fruits</li>
            <li>• <strong>Nuts & Seeds</strong> - tree nuts, peanuts, various seeds</li>
            <li>• <strong>Spices & Herbs</strong> - common cooking ingredients</li>
            <li>• <strong>Beverages</strong> - coffee, tea, and other drinks</li>
          </ul>
        </div>
      </div>
      
      <h2>How the Test Works</h2>
      <p>Getting tested is simple and can be done in the comfort of your own home:</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Testing Process</h3>
        <div class="grid md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-blue-600 font-bold">1</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Order Test</h4>
            <p class="text-xs text-gray-600">Order your test kit online</p>
          </div>
          <div class="text-center">
            <div class="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-green-600 font-bold">2</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Collect Sample</h4>
            <p class="text-xs text-gray-600">Simple blood spot collection at home</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-purple-600 font-bold">3</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Lab Analysis</h4>
            <p class="text-xs text-gray-600">Advanced testing for 200+ foods</p>
          </div>
          <div class="text-center">
            <div class="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-orange-600 font-bold">4</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Get Results</h4>
            <p class="text-xs text-gray-600">Detailed report with recommendations</p>
          </div>
        </div>
      </div>
      
      <h2>Understanding Your Results</h2>
      <p>Your test results will show you exactly how your body reacts to each food, organized into clear categories:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-red-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-4">High Reactivity Foods</h3>
          <p class="text-sm text-gray-700 mb-4">These foods cause strong immune responses:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Eliminate completely</strong> - avoid these foods entirely</li>
            <li>• <strong>Strong symptoms</strong> - likely causing your health problems</li>
            <li>• <strong>Priority foods</strong> - focus on these first</li>
          </ul>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-yellow-800 mb-4">Moderate Reactivity Foods</h3>
          <p class="text-sm text-gray-700 mb-4">These foods cause moderate responses:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Reduce consumption</strong> - eat less frequently</li>
            <li>• <strong>Monitor symptoms</strong> - watch for reactions</li>
            <li>• <strong>Rotate foods</strong> - don't eat daily</li>
          </ul>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Low Reactivity Foods</h3>
          <p class="text-sm text-gray-700 mb-4">These foods cause mild responses:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Monitor and rotate</strong> - eat occasionally</li>
            <li>• <strong>Watch for patterns</strong> - note any symptoms</li>
            <li>• <strong>Safe in moderation</strong> - generally okay to eat</li>
          </ul>
        </div>
        
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">No Reactivity Foods</h3>
          <p class="text-sm text-gray-700 mb-4">These foods are safe for you:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Eat regularly</strong> - these are your safe foods</li>
            <li>• <strong>No restrictions</strong> - enjoy without worry</li>
            <li>• <strong>Build your diet</strong> - focus on these foods</li>
          </ul>
        </div>
      </div>
      
      <h2>What Happens After You Get Your Results?</h2>
      <p>Once you receive your Food Sensitivity Complete results, you'll have a clear roadmap to better health. Our team at IMBTherapies will help you create a personalized plan to manage your food sensitivities effectively.</p>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Your Personalized Action Plan</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div>
            <h4 class="font-semibold text-sm mb-3 text-blue-800">Phase 1: Elimination (4-6 weeks)</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>Remove high reactivity foods</strong> - eliminate completely</li>
              <li>• <strong>Reduce moderate reactivity foods</strong> - eat less frequently</li>
              <li>• <strong>Focus on safe foods</strong> - build your diet around these</li>
              <li>• <strong>Monitor symptoms</strong> - track improvements</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-sm mb-3 text-green-800">Phase 2: Reintroduction (6-8 weeks)</h4>
            <ul class="space-y-2 text-sm">
              <li>• <strong>Add foods back slowly</strong> - one at a time</li>
              <li>• <strong>Watch for reactions</strong> - note any symptoms</li>
              <li>• <strong>Identify tolerances</strong> - see what you can handle</li>
              <li>• <strong>Create long-term plan</strong> - sustainable diet</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h2>Supporting Your Health Journey</h2>
      <p>Managing food sensitivities is about more than just changing your diet. Our comprehensive approach includes:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">Personalized Supplements</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Fullscript supplements</strong> - professional-grade quality</li>
            <li>• <strong>Digestive enzymes</strong> - help break down food</li>
            <li>• <strong>Probiotics</strong> - support gut health</li>
            <li>• <strong>Anti-inflammatory nutrients</strong> - reduce inflammation</li>
          </ul>
        </div>
        
        <div class="bg-orange-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">Ongoing Support</h3>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Regular follow-up</strong> - track your progress</li>
            <li>• <strong>Diet adjustments</strong> - modify as needed</li>
            <li>• <strong>Supplement optimization</strong> - fine-tune your protocol</li>
            <li>• <strong>Lifestyle guidance</strong> - holistic approach</li>
          </ul>
        </div>
      </div>
      
      <h2>About Vibrant Wellness</h2>
      <p>Vibrant Wellness is a trusted lab company that specializes in advanced health testing. They're based in California and are certified by the highest standards in the industry. Their mission is simple: help people understand what's really going on in their bodies so they can get better.</p>
      
      <p>Instead of guessing what might be wrong with your health, Vibrant Wellness believes in testing first. They use the latest technology to give you real answers about your food sensitivities, so you can make informed decisions about your diet and wellness.</p>
      
      <h2>Ready to Find Out What's Really Going On?</h2>
      <p>If you're tired of feeling unwell and suspect certain foods might be the culprit, the Food Sensitivity Complete test can give you real answers. It's like having a roadmap to better health - you'll finally know exactly which foods are helping or hurting your body.</p>
      
      <p><a href="/patient/product/33729" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Order Your Food Sensitivity Complete Test Today</a></p>
      
      <p>Have questions? We're here to help! Contact us to learn more about how the Food Sensitivity Complete test can benefit your health journey.</p>
      
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
            Ready to Discover Your Food Sensitivities?
          </h3>
          <p className="text-gray-600 mb-6">
            Order your Vibrant Wellness Food Sensitivity Complete test today and get comprehensive insights into 200+ foods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/patient/product/33729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
              style={{ backgroundColor: '#5A6E8C' }}
            >
              Order Food Sensitivity Complete Test
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
