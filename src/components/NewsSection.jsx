'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cinzel_Decorative, Roboto } from 'next/font/google';
import { newsData } from '@/data/newsData';

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

const NewsSection = ({ news = newsData }) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (news.length === 0) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className={`${cinzelDecorative.className} text-3xl font-bold mb-6`}>
              Latest News
            </h2>
            <p className={`${roboto.className} text-gray-600 dark:text-gray-400`}>
              No news articles available at this time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Separate the first news item for the featured card
  const [featuredNews, ...otherNews] = news;

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800/50 ${roboto.className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className={`${cinzelDecorative.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest News
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured News Card (Left) */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
          >
            <Link href={`/news/${featuredNews.id}`} className="block h-full">
              <div className="relative h-[500px] lg:h-full min-h-[500px] overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-4">
                    {featuredNews.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors tracking-tight">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2 font-normal">
                    {featuredNews.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <span className="font-medium">{featuredNews.author}</span>
                    <time className="text-gray-300/90">{formatDate(featuredNews.date)}</time>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Grid of 4 Square Cards (Right) */}
          <div className="grid grid-cols-2 gap-6">
            {otherNews.slice(0, 4).map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Link href={`/news/${article.id}`}>
                  <div className="relative">
                    {/* Square aspect ratio container */}
                    <div className="relative aspect-square">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Enhanced gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-300" />
                      
                      {/* Content overlay with extra gradient for text */}
                      <div className="absolute inset-0 p-4 flex flex-col justify-end">
                        {/* Additional gradient specifically behind text */}
                        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                        
                        <div className="relative z-10">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-2 w-fit">
                            {article.category}
                          </span>
                          <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 mb-2 tracking-tight">
                            {article.title}
                          </h3>
                          <div className="flex items-center justify-between text-xs text-gray-300">
                            <time className="text-gray-300/90">{formatDate(article.date)}</time>
                            <span className="font-medium">{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* More News Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/news" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View More News
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 