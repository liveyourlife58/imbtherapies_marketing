// SEO Configuration and Utilities

export const seoConfig = {
  siteName: 'IMB Therapies',
  siteUrl: 'https://imbtherapies.com',
  defaultTitle: 'IMB Therapies - At-Home Digestive & Food Sensitivity Testing',
  defaultDescription: 'Professional at-home digestive and food sensitivity lab testing kits with personalized supplements for optimal digestive and immune health.',
  defaultImage: '/images/gut-health.webp',
  twitterHandle: '@imbtherapies',
  facebookAppId: 'your-facebook-app-id',
  locale: 'en_US',
  type: 'website',
};

export const keywords = {
  primary: [
    'Vibrant Wellness Gut Zoomer',
    'Vibrant Wellness Wheat Zoomer',
    'Vibrant Wellness Food Sensitivity Complete',
    'Gut Zoomer test',
    'Wheat Zoomer test',
    'Food Sensitivity Complete test',
    'Vibrant Wellness',
    'Fullscript',
    'Vibrant Wellness tests',
    'Fullscript supplements',
    'digestive testing',
    'food sensitivity testing',
    'at-home lab testing',
    'gut health testing',
    'digestive supplements',
    'immune health supplements'
  ],
  secondary: [
    'Vibrant Wellness Gut Zoomer test',
    'Vibrant Wellness Wheat Zoomer test',
    'Vibrant Wellness Food Sensitivity Complete test',
    'Vibrant Wellness lab testing',
    'Vibrant Wellness at-home testing',
    'Fullscript Multi-Probiotic',
    'Fullscript Digestive Enzymes',
    'Fullscript Selenium',
    'food intolerance testing',
    'microbiome testing',
    'digestive health',
    'gut microbiome analysis',
    'food sensitivity complete',
    'gut zoomer test',
    'wheat zoomer test',
    'probiotic supplements',
    'digestive enzymes',
    'selenium supplements'
  ],
  longTail: [
    'Vibrant Wellness Gut Zoomer at home test',
    'Vibrant Wellness Wheat Zoomer gluten sensitivity test',
    'Vibrant Wellness Food Sensitivity Complete 200 foods test',
    'order Vibrant Wellness Gut Zoomer test',
    'order Vibrant Wellness Wheat Zoomer test',
    'order Vibrant Wellness Food Sensitivity Complete test',
    'Vibrant Wellness Gut Zoomer results',
    'Vibrant Wellness Wheat Zoomer results',
    'Vibrant Wellness Food Sensitivity Complete results',
    'Fullscript professional digestive health supplements',
    'Fullscript immune system support supplements',
    'Vibrant Wellness comprehensive food intolerance testing',
    'Vibrant Wellness lab results',
    'Fullscript supplement protocol',
    'Vibrant Wellness test ordering',
    'Fullscript supplement ordering'
  ]
};

export const generateMetaTags = (pageData: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
}) => {
  const title = pageData.title ? `${pageData.title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
  const description = pageData.description || seoConfig.defaultDescription;
  const image = pageData.image || seoConfig.defaultImage;
  const url = pageData.url || seoConfig.siteUrl;
  const allKeywords = [...keywords.primary, ...keywords.secondary, ...(pageData.keywords || [])];

  return {
    title,
    description,
    keywords: allKeywords.join(', '),
    openGraph: {
      title,
      description,
      url,
      siteName: seoConfig.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: seoConfig.locale,
      type: seoConfig.type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: seoConfig.twitterHandle,
    },
  };
};

export const generateStructuredData = (type: 'organization' | 'website' | 'medical-business' | 'product' | 'service') => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
  };

  switch (type) {
    case 'organization':
      return {
        ...baseData,
        '@type': 'Organization',
        logo: {
          '@type': 'ImageObject',
          url: `${seoConfig.siteUrl}/logo.png`,
        },
        sameAs: [
          'https://www.facebook.com/imbtherapies',
          'https://www.instagram.com/imbtherapies',
          'https://www.linkedin.com/company/imbtherapies',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'English',
        },
      };

    case 'medical-business':
      return {
        ...baseData,
        '@type': 'MedicalBusiness',
        medicalSpecialty: 'Digestive Health',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Health Testing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalTest',
                name: 'Gut Zoomer Test',
                description: 'Comprehensive gut microbiome analysis',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalTest',
                name: 'Food Sensitivity Complete',
                description: 'Complete food sensitivity and intolerance testing',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'MedicalTest',
                name: 'Wheat Zoomer Test',
                description: 'Specialized wheat and gluten sensitivity testing',
              },
            },
          ],
        },
      };

    default:
      return baseData;
  }
};
