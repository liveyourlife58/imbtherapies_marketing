'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://imbtherapies.com"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": `https://imbtherapies.com${item.href}`
      }))
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center space-x-2 text-sm" style={{ color: 'rgba(0, 67, 110, 0.7)' }}>
          <li>
            <Link 
              href="/" 
              className="hover:text-primary transition-colors flex items-center"
              style={{ color: 'rgba(0, 67, 110, 0.7)' }}
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2" style={{ color: 'rgba(0, 67, 110, 0.5)' }} />
              {index === items.length - 1 ? (
                <span style={{ color: '#00436E' }} className="font-medium">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-primary transition-colors"
                  style={{ color: 'rgba(0, 67, 110, 0.7)' }}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

