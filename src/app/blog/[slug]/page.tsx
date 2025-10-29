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
      <p>Think of your gut as a complex ecosystem with trillions of tiny organisms living inside it. The Gut Zoomer test is like having a detailed map of this ecosystem - it shows you exactly what's living in your gut and how it might be affecting your health.</p>
      
      <p>This isn't just any gut test. It's the most comprehensive one available, checking for hundreds of different bacteria, viruses, parasites, and other microorganisms that could be causing your health issues. It's like having a detective investigate your gut to find clues about why you might be feeling unwell.</p>
      
      <h2>Who Should Consider This Test?</h2>
      <p>If you're dealing with ongoing health issues that your doctor can't explain, or if you have digestive problems that won't go away, this test might be exactly what you need. Here are some common situations where the Gut Zoomer can help:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Digestive Problems</h3>
          <p class="text-sm text-gray-700 mb-4">If you're experiencing any of these digestive issues regularly:</p>
          <ul class="space-y-2 text-sm">
            <li>• Constant bloating, gas, or stomach pain</li>
            <li>• Diarrhea or constipation that won't go away</li>
            <li>• Food sensitivities or allergies</li>
            <li>• Heartburn or acid reflux</li>
            <li>• Feeling like food just sits in your stomach</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Overall Health Issues</h3>
          <p class="text-sm text-gray-700 mb-4">Sometimes gut problems show up in unexpected ways:</p>
          <ul class="space-y-2 text-sm">
            <li>• Feeling tired all the time, even after sleeping</li>
            <li>• Skin problems like eczema or rashes</li>
            <li>• Mood swings or feeling anxious or depressed</li>
            <li>• Getting sick frequently</li>
            <li>• Joint pain or inflammation</li>
            <li>• Weight changes you can't explain</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-yellow-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-yellow-800 mb-4">Specific Conditions</h3>
        <p class="text-sm text-gray-700 mb-4">If you've been diagnosed with any of these conditions, the Gut Zoomer can help identify underlying gut issues:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• Irritable Bowel Syndrome (IBS)</li>
            <li>• Inflammatory Bowel Disease (Crohn's or Colitis)</li>
            <li>• Celiac disease or gluten sensitivity</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• Autoimmune conditions</li>
            <li>• Diabetes or metabolic issues</li>
            <li>• Chronic fatigue syndrome</li>
          </ul>
        </div>
      </div>
      
      <h2>Why Your Gut Health Matters</h2>
      <p>Here's something that might surprise you: <strong>70% of your immune system lives in your gut.</strong> That means if your gut isn't healthy, your whole body can suffer.</p>
      
      <p>Think of your gut like the foundation of a house. If the foundation is cracked or unstable, everything built on top of it will have problems too. Your gut health affects everything from your energy levels to your mood to how well you fight off infections.</p>
      
      <p>The Gut Zoomer test helps you understand what's really happening in your gut so you can fix the root cause of your health problems, not just treat the symptoms.</p>
      
      <h2>What Makes This Test Special?</h2>
      <p>The Gut Zoomer isn't your average gut test. Here's what makes it different:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">Comprehensive Testing</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Most comprehensive test available</strong> - checks over 170 different types of bacteria</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Finds harmful organisms</strong> - detects 67 different types of bacteria, viruses, and parasites that can make you sick</span>
            </li>
            <li class="flex items-start">
              <span class="text-purple-600 mr-2">✓</span>
              <span><strong>Checks your digestion</strong> - measures how well your body breaks down food and absorbs nutrients</span>
            </li>
          </ul>
        </div>
        
        <div class="bg-orange-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-orange-800 mb-4">Easy & Accurate</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start">
              <span class="text-orange-600 mr-2">✓</span>
              <span><strong>Easy to do at home</strong> - no need to go to a lab, just follow simple instructions</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-600 mr-2">✓</span>
              <span><strong>Highly accurate</strong> - uses advanced technology that's been tested and proven to work</span>
            </li>
            <li class="flex items-start">
              <span class="text-orange-600 mr-2">✓</span>
              <span><strong>Trusted by doctors</strong> - used by healthcare providers worldwide</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="bg-red-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-red-800 mb-4">Health Insights</h3>
        <p class="text-sm text-gray-700 mb-4">The test also looks for important health markers:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>Inflammation levels</strong> - identifies signs of gut irritation</li>
            <li>• <strong>Immune function</strong> - checks how well your gut supports your immune system</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Nutrient absorption</strong> - sees if you're getting the nutrients you need</li>
            <li>• <strong>Gut barrier function</strong> - checks if your gut lining is working properly</li>
          </ul>
        </div>
      </div>
      
      <h2>About Vibrant Wellness</h2>
      <p>Vibrant Wellness is a trusted lab company that specializes in advanced health testing. They're based in California and are certified by the highest standards in the industry. Their mission is simple: help people understand what's really going on in their bodies so they can get better.</p>
      
      <p>Instead of guessing what might be wrong with your health, Vibrant Wellness believes in testing first. They use the latest technology to give you real answers about your gut health, so you can make informed decisions about your wellness.</p>
      
      <h2>How to Prepare for Your Test</h2>
      <p>Getting ready for your Gut Zoomer test is easy, but there are a few things you need to know to make sure you get accurate results:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-blue-800 mb-4">Important Wait Times</h3>
          <p class="text-sm text-gray-700 mb-4">You don't need to fast, but avoid these things before testing:</p>
          <ul class="space-y-2 text-sm">
            <li><strong>After antibiotics:</strong> Wait 2-4 weeks (most important!)</li>
            <li><strong>After a colonoscopy:</strong> Wait 2 weeks</li>
            <li><strong>After heartburn medication:</strong> Wait 5-14 days</li>
            <li><strong>After digestive supplements:</strong> Wait 2-3 days</li>
          </ul>
        </div>
        
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Short Wait Times</h3>
          <p class="text-sm text-gray-700 mb-4">These only require a short wait:</p>
          <ul class="space-y-2 text-sm">
            <li><strong>After using suppositories:</strong> Wait 2-3 days</li>
            <li><strong>After aspirin or anti-inflammatory drugs:</strong> Wait 2 days</li>
            <li><strong>After antacids:</strong> Wait 2-3 days</li>
            <li><strong>After herbal antimicrobials:</strong> Wait 2-4 weeks</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">How the Test Works</h3>
        <div class="grid md:grid-cols-3 gap-4">
          <div class="text-center">
            <div class="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-blue-600 font-bold">1</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Collect Sample</h4>
            <p class="text-xs text-gray-600">Use the kit we send you to collect a small stool sample at home. It's completely private and easy.</p>
          </div>
          <div class="text-center">
            <div class="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-green-600 font-bold">2</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Mail to Lab</h4>
            <p class="text-xs text-gray-600">Send your sample back to the lab using the prepaid shipping label included in your kit.</p>
          </div>
          <div class="text-center">
            <div class="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-purple-600 font-bold">3</span>
            </div>
            <h4 class="font-semibold text-sm mb-2">Get Results</h4>
            <p class="text-xs text-gray-600">In about a week, you'll receive detailed results explaining exactly what's happening in your gut.</p>
          </div>
        </div>
      </div>
      
      <h2>What Does the Test Actually Check?</h2>
      <p>The Gut Zoomer is incredibly thorough - it's like having a complete health checkup for your gut. Here's what it looks for:</p>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-green-800 mb-4">Good Bacteria (The Helpers)</h3>
          <p class="text-sm text-gray-700 mb-4">Your gut needs certain types of bacteria to work properly. The test checks for over 170 different types of beneficial bacteria, including:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Lactobacillus</strong> - helps digest dairy and supports immune function</li>
            <li>• <strong>Bifidobacterium</strong> - helps break down fiber and produce vitamins</li>
            <li>• <strong>Faecalibacterium</strong> - produces anti-inflammatory compounds</li>
            <li>• <strong>Roseburia</strong> - helps maintain gut barrier function</li>
          </ul>
        </div>
        
        <div class="bg-red-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-red-800 mb-4">Bad Bacteria (The Troublemakers)</h3>
          <p class="text-sm text-gray-700 mb-4">The test also looks for harmful bacteria that can make you sick:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>E. coli</strong> - can cause severe diarrhea and stomach pain</li>
            <li>• <strong>Salmonella</strong> - often causes food poisoning</li>
            <li>• <strong>Helicobacter pylori</strong> - can cause stomach ulcers</li>
            <li>• <strong>Clostridium difficile</strong> - can cause serious digestive problems</li>
          </ul>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-6 my-8">
        <div class="bg-yellow-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-yellow-800 mb-4">Parasites (The Unwanted Guests)</h3>
          <p class="text-sm text-gray-700 mb-4">Sometimes tiny parasites can live in your gut and cause problems:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Giardia</strong> - causes diarrhea and stomach cramps</li>
            <li>• <strong>Cryptosporidium</strong> - can cause severe diarrhea</li>
            <li>• <strong>Blastocystis</strong> - may cause digestive issues</li>
            <li>• <strong>Various worms</strong> - can cause a range of symptoms</li>
          </ul>
        </div>
        
        <div class="bg-purple-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold text-purple-800 mb-4">Fungi & Viruses</h3>
          <p class="text-sm text-gray-700 mb-4">The test also checks for:</p>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Candida</strong> - yeast overgrowth can cause bloating and fatigue</li>
            <li>• <strong>Norovirus</strong> - the "stomach flu" virus</li>
            <li>• <strong>Rotavirus</strong> - common cause of diarrhea in children</li>
            <li>• <strong>Other harmful organisms</strong> that can affect gut health</li>
          </ul>
        </div>
      </div>
      
      <div class="bg-blue-50 p-6 rounded-lg my-8">
        <h3 class="text-lg font-semibold text-blue-800 mb-4">How Well Your Digestion Works</h3>
        <p class="text-sm text-gray-700 mb-4">Beyond just checking what's living in your gut, the test also measures important health markers:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <ul class="space-y-2 text-sm">
            <li>• <strong>Food digestion</strong> - checks for undigested food particles</li>
            <li>• <strong>Inflammation levels</strong> - looks for signs of gut irritation</li>
            <li>• <strong>Nutrient absorption</strong> - sees if you're getting vitamins and minerals</li>
          </ul>
          <ul class="space-y-2 text-sm">
            <li>• <strong>Gut barrier function</strong> - checks if your gut lining is working properly</li>
            <li>• <strong>Antibiotic resistance</strong> - sees if harmful bacteria resist treatment</li>
            <li>• <strong>Probiotic recommendations</strong> - suggests specific supplements for your situation</li>
          </ul>
        </div>
      </div>
      
      <h2>What Happens After You Get Your Results?</h2>
      <p>Once you receive your Gut Zoomer results, you'll have a clear picture of what's happening in your gut. The report will show you:</p>
      
      <ul>
        <li><strong>What bacteria are present</strong> - both good and bad</li>
        <li><strong>Any harmful organisms</strong> that might be causing your symptoms</li>
        <li><strong>How well your digestion is working</strong></li>
        <li><strong>Signs of inflammation</strong> in your gut</li>
        <li><strong>Specific recommendations</strong> for improving your gut health</li>
      </ul>
      
      <p>Our team at IMBTherapies will help you understand your results and create a personalized plan to improve your gut health. This might include dietary changes, specific supplements, or other treatments based on what the test reveals.</p>
      
      <h2>Ready to Find Out What's Really Going On?</h2>
      <p>If you're tired of guessing what might be wrong with your health, the Gut Zoomer test can give you real answers. It's like having a roadmap to better health - you'll finally know exactly what's happening in your gut and what you need to do to fix it.</p>
      
      <p><a href="https://test.imbtherapies.com/patient/product/33407" target="_blank" rel="noopener noreferrer" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Order Your Gut Zoomer Test Kit Today</a></p>
      
      <p>Have questions? We're here to help! Contact us to learn more about how the Gut Zoomer test can benefit your health journey.</p>
      
      <div class="bg-gray-50 p-6 rounded-lg mt-8">
        <h3 class="text-lg font-semibold mb-4">Need Help or Have Questions?</h3>
        <p class="mb-2"><strong>Phone:</strong> 1 (866) 364-0963</p>
        <p class="mb-2"><strong>Email:</strong> support@vibrant-wellness.com</p>
        <p class="mb-2"><strong>Website:</strong> www.vibrant-wellness.com</p>
        <p class="text-sm text-gray-600">1360 Bayport Ave. Ste. B, San Carlos, CA 94070</p>
      </div>
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
            The blog post you&apos;re looking for doesn&apos;t exist.
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
              href="https://test.imbtherapies.com/patient/product/33407"
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
