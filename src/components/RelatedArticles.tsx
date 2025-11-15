'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface RelatedArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

interface RelatedArticlesProps {
  currentPostId: string;
  articles: RelatedArticle[];
}

export default function RelatedArticles({ currentPostId, articles }: RelatedArticlesProps) {
  // Filter out current post and limit to 3
  const relatedArticles = articles
    .filter(article => article.id !== currentPostId)
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-12 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8" style={{ color: '#00436E' }}>
          Related Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${article.id}`}>
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs mb-3 text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2" style={{ color: '#00436E' }}>
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

