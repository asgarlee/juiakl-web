'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { initiatives } from '@/data/initiatives';

export default function InitiativePage({ params }) {
  const [initiative, setInitiative] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundInitiative = initiatives.find(i => i.id === params.id);
    setInitiative(foundInitiative);
    if (foundInitiative?.gallery?.categories?.[0]?.name) {
      setSelectedCategory(foundInitiative.gallery.categories[0].name);
    }
  }, [params.id]);

  if (!initiative) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-cinzel-bold text-white mb-4">
              Initiative Not Found
            </h1>
            <p className="text-gray-400">
              The initiative you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <Image
            src={initiative.imageUrl}
            alt={initiative.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-white text-center mb-6">
            {initiative.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 text-center max-w-3xl mx-auto">
            {initiative.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        {initiative.introduction && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-6">Introduction</h2>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <p className="text-gray-300 leading-relaxed">
                {initiative.introduction}
              </p>
            </div>
          </div>
        )}

        {/* Objectives Section */}
        {initiative.objectives && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-6">Objectives</h2>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <ul className="space-y-4">
                {initiative.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span className="text-gray-300">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Stats Section */}
        {initiative.stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {initiative.stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-cinzel-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Services Section */}
        {initiative.services && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiative.services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="text-lg font-cinzel-bold text-white mb-2">
                    {service}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Structure Section */}
        {initiative.structure && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-8">Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(initiative.structure).map(([key, value]) => (
                <div key={key} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-cinzel-bold text-white mb-4 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  {typeof value === 'object' ? (
                    <ul className="space-y-2">
                      {Object.entries(value).map(([subKey, subValue]) => (
                        <li key={subKey} className="text-gray-300">
                          <span className="font-medium capitalize">{subKey.replace(/([A-Z])/g, ' $1').trim()}:</span> {subValue}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Section */}
        {initiative.achievements && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-8">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(initiative.achievements).map(([key, value]) => (
                <div key={key} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-cinzel-bold text-white mb-4 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  {Array.isArray(value) ? (
                    <ul className="space-y-4">
                      {value.map((item, index) => (
                        <li key={index} className="text-gray-300">
                          {item.year && (
                            <span className="font-bold text-blue-400">{item.year}:</span>
                          )}
                          {item.highlights && (
                            <ul className="mt-2 space-y-2">
                              {item.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-blue-400 mr-2">•</span>
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          )}
                          {item.events && (
                            <ul className="mt-2 space-y-2">
                              {item.events.map((event, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-blue-400 mr-2">•</span>
                                  {event}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-300">
                      {value.establishment && (
                        <p className="mb-4">
                          <span className="font-bold text-blue-400">Established:</span> {value.establishment}
                        </p>
                      )}
                      {value.details && (
                        <ul className="space-y-2">
                          {value.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-400 mr-2">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Future Plans Section */}
        {initiative.futurePlans && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-8">Future Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(initiative.futurePlans).map(([key, value]) => (
                <div key={key} className="bg-gray-800 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-cinzel-bold text-white mb-4 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  {Array.isArray(value) ? (
                    <ul className="space-y-2">
                      {value.map((item, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      {value.location && (
                        <p className="text-gray-300 mb-4">
                          <span className="font-bold text-blue-400">Location:</span> {value.location}
                        </p>
                      )}
                      {value.features && (
                        <ul className="space-y-2">
                          {value.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <span className="text-blue-400 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info Section */}
        {initiative.contactInfo && (
          <div className="mb-16">
            <h2 className="text-3xl font-cinzel-bold text-white mb-8">Contact Information</h2>
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-cinzel-bold text-white mb-4">Address</h3>
                  <p className="text-gray-300">{initiative.contactInfo.address}</p>
                </div>
                <div>
                  <h3 className="text-xl font-cinzel-bold text-white mb-4">Contact Details</h3>
                  <p className="text-gray-300">Email: {initiative.contactInfo.email}</p>
                  <p className="text-gray-300">Phone: {initiative.contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {initiative.gallery && (
          <div>
            <h2 className="text-3xl font-cinzel-bold text-white mb-8">Gallery</h2>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-4 mb-8">
              {initiative.gallery.categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {initiative.gallery.categories
                .find((cat) => cat.name === selectedCategory)
                ?.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-medium">View Image</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
} 