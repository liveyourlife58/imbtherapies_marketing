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
      <h2>Understanding Food Sensitivities</h2>
      <p>Food sensitivities can cause a wide range of symptoms that often go undiagnosed for years. Unlike food allergies that cause immediate, severe reactions, food sensitivities can cause delayed symptoms that make them difficult to identify. These hidden sensitivities can contribute to chronic inflammation, digestive issues, fatigue, and other health problems.</p>
      
      <h2>What Makes the Vibrant Wellness Food Sensitivity Complete Different?</h2>
      <p>The Vibrant Wellness Food Sensitivity Complete test is the most comprehensive food sensitivity test available, analyzing your immune response to over 200 different foods. This extensive testing approach ensures that no potential trigger foods are missed, giving you a complete picture of your body's response to various foods.</p>
      
      <h3>Comprehensive Food Categories Tested:</h3>
      <ul>
        <li><strong>Dairy Products:</strong> Milk, cheese, yogurt, and other dairy items</li>
        <li><strong>Grains:</strong> Wheat, rice, corn, oats, and other grains</li>
        <li><strong>Proteins:</strong> Beef, chicken, fish, eggs, and plant proteins</li>
        <li><strong>Vegetables:</strong> Common and uncommon vegetables</li>
        <li><strong>Fruits:</strong> Fresh and dried fruits</li>
        <li><strong>Nuts and Seeds:</strong> Tree nuts, peanuts, and various seeds</li>
        <li><strong>Spices and Herbs:</strong> Common cooking spices and herbs</li>
        <li><strong>Beverages:</strong> Coffee, tea, and other drinks</li>
      </ul>
      
      <h2>How the Food Sensitivity Complete Test Works</h2>
      <p>The Vibrant Wellness Food Sensitivity Complete test uses advanced IgG antibody testing to identify delayed food sensitivities. This method is more comprehensive than traditional IgE allergy testing, which only identifies immediate allergic reactions.</p>
      
      <h3>Testing Process:</h3>
      <ol>
        <li><strong>Sample Collection:</strong> Simple blood spot collection at home</li>
        <li><strong>Laboratory Analysis:</strong> Advanced testing for IgG antibodies to 200+ foods</li>
        <li><strong>Result Interpretation:</strong> Detailed analysis of your immune responses</li>
        <li><strong>Personalized Report:</strong> Comprehensive results with actionable recommendations</li>
      </ol>
      
      <h2>Understanding Your Food Sensitivity Results</h2>
      <p>Your Vibrant Wellness Food Sensitivity Complete results will categorize foods into different levels of reactivity, helping you understand which foods may be contributing to your symptoms.</p>
      
      <h3>Result Categories:</h3>
      <ul>
        <li><strong>High Reactivity:</strong> Foods causing strong immune responses - eliminate completely</li>
        <li><strong>Moderate Reactivity:</strong> Foods causing moderate responses - reduce consumption</li>
        <li><strong>Low Reactivity:</strong> Foods causing mild responses - monitor and rotate</li>
        <li><strong>No Reactivity:</strong> Foods that are safe to consume regularly</li>
      </ul>
      
      <h2>Benefits of Comprehensive Food Testing</h2>
      <p>Testing 200+ foods provides several advantages over limited food sensitivity tests:</p>
      <ul>
        <li><strong>Complete Picture:</strong> Identifies all potential trigger foods</li>
        <li><strong>Hidden Sensitivities:</strong> Reveals unexpected food reactions</li>
        <li><strong>Personalized Diet:</strong> Creates a customized elimination plan</li>
        <li><strong>Symptom Resolution:</strong> Helps identify foods causing chronic symptoms</li>
        <li><strong>Preventive Health:</strong> Reduces inflammation and improves overall health</li>
      </ul>
      
      <h2>Common Symptoms of Food Sensitivities</h2>
      <p>Food sensitivities can manifest in many different ways, making them challenging to identify without proper testing:</p>
      
      <h3>Digestive Symptoms:</h3>
      <ul>
        <li>Bloating and gas</li>
        <li>Abdominal pain and cramping</li>
        <li>Diarrhea or constipation</li>
        <li>Nausea and vomiting</li>
        <li>Acid reflux and heartburn</li>
      </ul>
      
      <h3>Systemic Symptoms:</h3>
      <ul>
        <li>Fatigue and low energy</li>
        <li>Headaches and migraines</li>
        <li>Joint pain and inflammation</li>
        <li>Skin rashes and eczema</li>
        <li>Mood changes and irritability</li>
      </ul>
      
      <h2>Implementing Your Food Sensitivity Results</h2>
      <p>Once you receive your Vibrant Wellness Food Sensitivity Complete results, our team will help you create an effective elimination and reintroduction plan:</p>
      
      <h3>Phase 1: Elimination (4-6 weeks)</h3>
      <ul>
        <li>Remove all high and moderate reactivity foods</li>
        <li>Focus on low reactivity and safe foods</li>
        <li>Monitor symptoms for improvement</li>
        <li>Support gut health with targeted supplements</li>
      </ul>
      
      <h3>Phase 2: Reintroduction (6-8 weeks)</h3>
      <ul>
        <li>Gradually reintroduce foods one at a time</li>
        <li>Monitor for symptom return</li>
        <li>Identify which foods can be tolerated</li>
        <li>Create long-term dietary plan</li>
      </ul>
      
      <h2>Supporting Your Food Sensitivity Journey</h2>
      <p>Managing food sensitivities requires more than just dietary changes. Our comprehensive approach includes:</p>
      <ul>
        <li><strong>Personalized Supplement Protocol:</strong> Fullscript supplements to support gut health</li>
        <li><strong>Digestive Support:</strong> Enzymes and probiotics for better digestion</li>
        <li><strong>Immune Support:</strong> Nutrients to reduce inflammation</li>
        <li><strong>Ongoing Monitoring:</strong> Regular follow-up testing to track progress</li>
      </ul>
      
      <h2>Why Choose Vibrant Wellness Food Sensitivity Complete?</h2>
      <p>The Vibrant Wellness Food Sensitivity Complete test offers the most comprehensive food sensitivity analysis available:</p>
      <ul>
        <li><strong>Extensive Testing:</strong> 200+ foods for complete coverage</li>
        <li><strong>Advanced Technology:</strong> Cutting-edge IgG antibody testing</li>
        <li><strong>Accurate Results:</strong> Reliable and reproducible testing methods</li>
        <li><strong>Professional Support:</strong> Expert guidance throughout your journey</li>
        <li><strong>Actionable Results:</strong> Clear recommendations for dietary changes</li>
      </ul>
      
      <h2>Ready to Discover Your Food Sensitivities?</h2>
      <p>If you're experiencing unexplained symptoms or want to optimize your health through personalized nutrition, the Vibrant Wellness Food Sensitivity Complete test can provide the answers you need. <a href="https://imbt.wellproz.com/patient/product/33729" target="_blank" rel="noopener noreferrer">Order your Food Sensitivity Complete test today</a> and take the first step toward identifying hidden food sensitivities that may be affecting your health.</p>
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
              href="https://imbt.wellproz.com/patient/product/33729"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white transition-colors duration-200"
              style={{ backgroundColor: '#5A6E8C' }}
            >
              Order Food Sensitivity Complete Test
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
