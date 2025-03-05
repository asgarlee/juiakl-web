'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { initiatives } from '@/data/initiatives';

export default function OurInitiativesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src="/images/initiatives-hero.jpg"
            alt="Our Initiatives"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-white text-center mb-6">
            Our Initiatives
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 text-center max-w-3xl mx-auto">
            Discover our diverse range of initiatives dedicated to serving the community through healthcare, education, and social welfare.
          </p>
        </div>
      </div>

      {/* Initiatives Grid */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative) => (
            <Link 
              key={initiative.id} 
              href={`/organizations/${initiative.id}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Square Image Section */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  <div className="relative w-40 h-40 rounded-lg overflow-hidden">
                    <Image
                      src={initiative.imageUrl}
                      alt={initiative.title}
                      fill
                      className="object-contain p-3 transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-cinzel-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {initiative.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                  {initiative.description}
                </p>
                
                {/* Key Stat */}
                {initiative.stats[0] && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {initiative.stats[0].label}: {initiative.stats[0].value}
                  </div>
                )}

                {/* Learn More Button */}
                <div className="flex justify-end">
                  <span className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
} 