'use client';

import { initiatives } from '@/data/initiatives';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';

export default function InitiativePage({ params }) {
  const [initiative, setInitiative] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const foundInitiative = initiatives.find(i => i.id === params.id);
    setInitiative(foundInitiative);
    if (foundInitiative?.gallery?.categories?.[0]?.name) {
      setSelectedCategory(foundInitiative.gallery.categories[0].name);
    }
  }, [params.id]);

  if (!initiative) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
            Initiative Not Found
          </h1>
          <Link 
            href="/" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <Image
                src={initiative.imageUrl}
                alt={initiative.title}
                fill
                className="object-contain p-4"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-white mb-6">
              {initiative.title}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              {initiative.description}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {initiative.stats?.map((stat, index) => (
              <div 
                key={index}
                className={`${initiative.color} bg-opacity-10 rounded-xl p-6 text-center`}
              >
                <div className="text-3xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      {initiative.introduction && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {initiative.introduction}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Structure Section */}
      {initiative.structure && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Institution Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Lower Wing */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    Lower Wing
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Location:</span> {initiative.structure.lowerWing.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Grades:</span> {initiative.structure.lowerWing.grades}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Students:</span> {initiative.structure.lowerWing.students}
                    </p>
                  </div>
                </div>

                {/* Higher Wing */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    Higher Wing
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Location:</span> {initiative.structure.higherWing.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Grades:</span> {initiative.structure.higherWing.grades}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Students:</span> {initiative.structure.higherWing.students}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Achievements Section */}
      {initiative.achievements && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Achievements
              </h2>
              
              {/* Timeline Achievements */}
              {initiative.achievements.timeline && (
                <div className="space-y-8">
                  {initiative.achievements.timeline.map((year, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
                      <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${initiative.color} transform -translate-x-[9px]`} />
                      <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                        {year.year}
                      </h3>
                      <ul className="space-y-2">
                        {year.events.map((event, eventIndex) => (
                          <li key={eventIndex} className="text-gray-600 dark:text-gray-300">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Academic Achievements */}
              {initiative.achievements.academic && (
                <div className="mt-8">
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    Academic Excellence
                  </h3>
                  {initiative.achievements.academic.map((year, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        {year.year}
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {year.highlights.map((highlight, hIndex) => (
                          <li key={hIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Extracurricular Achievements */}
              {initiative.achievements.extracurricular && (
                <div className="mt-8">
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    Extracurricular Activities
                  </h3>
                  {initiative.achievements.extracurricular.map((year, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                        {year.year}
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                        {year.events.map((event, eIndex) => (
                          <li key={eIndex}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* NCC Section */}
              {initiative.achievements.ncc && (
                <div className="mt-8">
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    NCC Activities
                  </h3>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Established in {initiative.achievements.ncc.establishment}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {initiative.achievements.ncc.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Objectives Section */}
      {initiative.objectives && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Our Objectives
              </h2>
              <ul className="space-y-4">
                {initiative.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className={`${initiative.color} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Executive Body Section */}
      {initiative.executiveBody && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Executive Body
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {initiative.executiveBody.map((member, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                    <h3 className="font-medium text-gray-900 dark:text-white">{member.position}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{member.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Future Plans Section */}
      {initiative.futurePlans && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Future Plans
              </h2>
              
              {/* Unified Campus */}
              {initiative.futurePlans.unifiedCampus && (
                <div className="mb-8">
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    Unified Campus
                  </h3>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      <span className="font-medium">Location:</span> {initiative.futurePlans.unifiedCampus.location}
                    </p>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {initiative.futurePlans.unifiedCampus.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Long Term Vision */}
              {initiative.futurePlans.longTermVision && (
                <div>
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-4">
                    Long Term Vision
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {initiative.futurePlans.longTermVision.map((vision, index) => (
                      <li key={index}>{vision}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery Section */}
      {initiative.gallery && (
        <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
                Photo Gallery
              </h2>
              
              {/* Gallery Categories */}
              <div className="flex flex-wrap gap-4 mb-6">
                {initiative.gallery.categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? `${initiative.color} text-white`
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Gallery Images */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {initiative.gallery.categories
                  .find(cat => cat.name === selectedCategory)
                  ?.images.map((image, index) => (
                    <div 
                      key={index}
                      className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Services/Programs Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {initiative.services?.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <div className={`${initiative.color} w-8 h-8 rounded-full flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
              Contact Us
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">{initiative.contactInfo?.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">{initiative.contactInfo?.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">{initiative.contactInfo?.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Selected gallery image"
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 