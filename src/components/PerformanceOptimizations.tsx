'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload hero image
      const heroImage = document.createElement('link');
      heroImage.rel = 'preload';
      heroImage.as = 'image';
      heroImage.href = '/images/gut-health.webp';
      document.head.appendChild(heroImage);

      // Preload fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      fontPreload.href = '/fonts/geist-sans.woff2';
      document.head.appendChild(fontPreload);
    };

    // Optimize images loading
    const optimizeImageLoading = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImageLoading();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null;
}
