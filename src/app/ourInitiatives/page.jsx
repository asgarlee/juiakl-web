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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <Link 
              key={initiative.id} 
              href={`/organizations/${initiative.id}`}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Square Image Section */}
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="relative w-full h-full flex items-center justify-center p-6">
                  <div className="relative w-56 h-56 rounded-lg overflow-hidden">
                    <Image
                      src={initiative.imageUrl}
                      alt={initiative.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title and Description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-base line-clamp-2">
                    {initiative.description}
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {initiative.stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg"
                    >
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {typeof stat === 'object' ? stat.label : 'Statistic'}
                      </div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">
                        {typeof stat === 'object' ? stat.value : stat}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services */}
                {initiative.services && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                      Services
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {initiative.services.slice(0, 3).map((service, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        >
                          {service}
                        </span>
                      ))}
                      {initiative.services.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                          +{initiative.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Learn More Button */}
                <div className="flex justify-end">
                  <span className="inline-flex items-center px-4 py-2 rounded-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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