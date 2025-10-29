import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PerformanceOptimizations from "@/components/PerformanceOptimizations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IMB Therapies - Vibrant Wellness Gut Zoomer, Wheat Zoomer & Food Sensitivity Complete Tests",
    template: "%s | IMB Therapies"
  },
  description: "Professional Vibrant Wellness Gut Zoomer, Wheat Zoomer, and Food Sensitivity Complete tests with personalized Fullscript supplements. Get comprehensive at-home digestive and food sensitivity testing delivered to your door.",
  keywords: [
    "Vibrant Wellness",
    "Vibrant Wellness Gut Zoomer",
    "Vibrant Wellness Wheat Zoomer", 
    "Vibrant Wellness Food Sensitivity Complete",
    "Gut Zoomer test",
    "Wheat Zoomer test",
    "Food Sensitivity Complete test",
    "Vibrant Wellness tests",
    "Vibrant Wellness lab testing",
    "Vibrant Wellness at-home testing",
    "Fullscript",
    "Fullscript supplements",
    "Fullscript Multi-Probiotic",
    "Fullscript Digestive Enzymes",
    "Fullscript Selenium",
    "digestive testing",
    "food sensitivity testing",
    "at-home lab testing",
    "gut health testing",
    "digestive supplements",
    "immune health supplements",
    "food intolerance testing",
    "microbiome testing",
    "digestive health",
    "gut microbiome analysis",
    "food sensitivity complete",
    "gut zoomer test",
    "wheat zoomer test",
    "probiotic supplements",
    "digestive enzymes",
    "selenium supplements"
  ],
  authors: [{ name: "IMB Therapies" }],
  creator: "IMB Therapies",
  publisher: "IMB Therapies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://imbtherapies.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "IMB Therapies - Vibrant Wellness Gut Zoomer, Wheat Zoomer & Food Sensitivity Complete Tests",
    description: "Professional Vibrant Wellness Gut Zoomer, Wheat Zoomer, and Food Sensitivity Complete tests with personalized Fullscript supplements. Get comprehensive at-home digestive and food sensitivity testing delivered to your door.",
    url: 'https://imbtherapies.com',
    siteName: 'IMB Therapies',
    images: [
      {
        url: '/images/gut-health.webp',
        width: 1200,
        height: 630,
        alt: 'Vibrant Wellness Gut Zoomer, Wheat Zoomer & Food Sensitivity Complete Tests - IMB Therapies',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IMB Therapies - Vibrant Wellness Gut Zoomer, Wheat Zoomer & Food Sensitivity Complete Tests",
    description: "Professional Vibrant Wellness Gut Zoomer, Wheat Zoomer, and Food Sensitivity Complete tests with personalized Fullscript supplements. Get comprehensive at-home digestive and food sensitivity testing delivered to your door.",
    images: ['/images/gut-health.webp'],
    creator: '@imbtherapies',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'domain-verified',
    yandex: 'not-configured',
    yahoo: 'not-configured',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://imbtherapies.com/#organization",
        "name": "IMB Therapies",
        "url": "https://imbtherapies.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://imbtherapies.com/logo.png"
        },
        "description": "Professional at-home digestive and food sensitivity lab testing kits by Vibrant Wellness with personalized Fullscript supplements for optimal digestive and immune health.",
        "sameAs": [
          "https://www.facebook.com/imbtherapies",
          "https://www.instagram.com/imbtherapies",
          "https://www.linkedin.com/company/imbtherapies"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://imbtherapies.com/#website",
        "url": "https://imbtherapies.com",
        "name": "IMB Therapies",
        "description": "Professional at-home digestive and food sensitivity lab testing kits by Vibrant Wellness with personalized Fullscript supplements for optimal digestive and immune health.",
        "publisher": {
          "@id": "https://imbtherapies.com/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://imbtherapies.com/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://imbtherapies.com/#webpage",
        "url": "https://imbtherapies.com",
        "name": "IMB Therapies - Vibrant Wellness Gut Zoomer, Wheat Zoomer & Food Sensitivity Complete Tests",
        "isPartOf": {
          "@id": "https://imbtherapies.com/#website"
        },
        "about": {
          "@id": "https://imbtherapies.com/#organization"
        },
        "description": "Professional at-home digestive and food sensitivity lab testing kits by Vibrant Wellness with personalized Fullscript supplements for optimal digestive and immune health.",
        "breadcrumb": {
          "@id": "https://imbtherapies.com/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://imbtherapies.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://imbtherapies.com"
          }
        ]
      },
      {
        "@type": "MedicalBusiness",
        "@id": "https://imbtherapies.com/#medicalbusiness",
        "name": "IMB Therapies",
        "description": "Professional at-home digestive and food sensitivity lab testing kits by Vibrant Wellness with personalized Fullscript supplements for optimal digestive and immune health.",
        "url": "https://imbtherapies.com",
        "telephone": "+1-XXX-XXX-XXXX",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "medicalSpecialty": "Digestive Health",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Health Testing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTest",
                "name": "Vibrant Wellness Gut Zoomer Test",
                "description": "Comprehensive Vibrant Wellness gut microbiome analysis"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTest",
                "name": "Vibrant Wellness Food Sensitivity Complete",
                "description": "Complete Vibrant Wellness food sensitivity and intolerance testing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTest",
                "name": "Vibrant Wellness Wheat Zoomer Test",
                "description": "Specialized Vibrant Wellness wheat and gluten sensitivity testing"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics measurementId="G-H0XBDMBPYJ" />
        <PerformanceOptimizations />
        {children}
      </body>
    </html>
  );
}
