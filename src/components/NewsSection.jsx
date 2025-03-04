"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cinzel_Decorative } from 'next/font/google';

const cinzelDecorative = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const NewsSection = ({ 
  featuredNews,
  news = [] // Add default value
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    if (dateString === "Every Friday") return dateString;
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const categoryColors = {
    Events: 'bg-purple-100 text-purple-800',
    Healthcare: 'bg-blue-100 text-blue-800',
    Education: 'bg-green-100 text-green-800',
    Community: 'bg-orange-100 text-orange-800',
    Prayer: 'bg-indigo-100 text-indigo-800'
  };

  // If no featured news, show a message
  if (!featuredNews && (!news || news.length === 0)) {
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2 
              className={`${cinzelDecorative.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Latest News
            </motion.h2>
          </div>
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>No news articles available at this time. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className={`${cinzelDecorative.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest News
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/news/${featuredNews.id}`} className="block group">
                <div className="relative h-[450px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    priority
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                    className="object-cover z-0"
                  />
                  <div 
                    className="absolute inset-0 z-10" 
                    style={{ 
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)' 
                    }}
                  >
                    <div className="absolute bottom-0 p-6 text-white">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${categoryColors[featuredNews.category]}`}>
                        {featuredNews.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {featuredNews.title}
                      </h3>
                      <p className="text-gray-200 mb-4 line-clamp-2">
                        {featuredNews.description}
                      </p>
                      <div className="flex items-center text-sm">
                        <span>{featuredNews.author}</span>
                        <span className="mx-2">•</span>
                        <span>{formatDate(featuredNews.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* News Column */}
          {news && news.length > 0 && (
            <div className="flex flex-col gap-4">
              {news.slice(0, 3).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-1"
                >
                  <Link href={`/news/${item.id}`} className="block group h-full">
                    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-[142px] flex">
                      <div className="relative w-1/3">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="w-2/3 p-4 flex flex-col justify-between">
                        <div>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-2 ${categoryColors[item.category]}`}>
                            {item.category}
                          </span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
                          <span>{formatDate(item.date)}</span>
                          <span className="mx-2">•</span>
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 