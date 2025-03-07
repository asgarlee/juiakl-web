'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Cinzel_Decorative, Roboto } from 'next/font/google';
import { newsData } from '@/data/newsData';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { use } from 'react';

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

export default function NewsArticle({ params }) {
  const resolvedParams = use(params);
  const article = newsData.find(news => news.id === resolvedParams.id);

  if (!article) {
    return (
      <>
        <Header />
        <main className={`min-h-screen py-24 ${roboto.className}`}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className={`${cinzelDecorative.className} text-3xl font-bold mb-6`}>
                Article Not Found
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                The article you're looking for doesn't exist or has been removed.
              </p>
              <Link 
                href="/news"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to News
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Sample gallery images (you'll need to add these to your newsData)
  const galleryImages = [
    { src: article.image, alt: article.title },
    { src: article.image, alt: article.title },
    { src: article.image, alt: article.title },
    { src: article.image, alt: article.title },
    
  ];

  
  return (
    <>
      <Header />
      <main className={`min-h-screen ${roboto.className}`}>
        {/* Article Hero */}
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-12">
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-4">
                  {article.category}
                </span>
                <h1 className={`${cinzelDecorative.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6`}>
                  {article.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-200">
                  {article.author && (
                    <span className="font-medium">{article.author}</span>
                  )}
                  <time>{formatDate(article.date)}</time>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/news"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose dark:prose-invert lg:prose-lg mx-auto">
              {/* Description as lead paragraph */}
              <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                {article.description}
              </p>
              
              {/* Main content */}
              <div className="text-gray-600 dark:text-gray-300 space-y-6 whitespace-pre-wrap">
                {article.content}
              </div>

              {/* Photo Gallery */}
              {article.hasGallery && galleryImages.length > 0 && (
                <div className="mt-12">
                  <h2 className={`${cinzelDecorative.className} text-2xl font-bold text-gray-900 dark:text-white mb-6`}>
                    Photo Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {galleryImages.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative aspect-[4/3] rounded-xl overflow-hidden"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Share and Tags Section */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-gray-400">Share:</span>
                  {/* Add your social share buttons here */}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 