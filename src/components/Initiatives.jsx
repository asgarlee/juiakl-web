'use client';

import Link from 'next/link';
import Image from 'next/image';
import { initiatives } from '../data/initiatives';

const Initiatives = () => {
  // Show only first 6 initiatives
  const displayedInitiatives = initiatives.slice(0, 6);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
            Our Initiatives
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our diverse range of organizations dedicated to serving the community through various initiatives and programs.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedInitiatives.map((initiative) => (
            <Link 
              key={initiative.id} 
              href={initiative.link}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 opacity-5 ${initiative.color || 'bg-blue-500'}`} />
              
              {/* Content */}
              <div className="relative p-6">
                {/* Organization Logo */}
                <div className="relative w-full h-20 mb-4">
                  <Image
                    src={initiative.imageUrl}
                    alt={`${initiative.title} logo`}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  {initiative.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {initiative.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <span className="text-sm font-medium">Learn More</span>
                  <svg 
                    className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 ${initiative.color || 'bg-blue-500'} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </Link>
          ))}
        </div>

        {/* See All Link */}
        <div className="text-center mt-12">
          <Link 
            href="/ourInitiatives"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <span className="font-cinzel-bold">See All Initiatives</span>
            <svg 
              className="w-5 h-5 ml-2" 
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

export default Initiatives; 