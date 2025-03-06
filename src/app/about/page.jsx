'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTheme } from 'next-themes';

export default function About() {
  const { theme } = useTheme();
  
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm">
              <Image
                src="/images/logo/juiakl-logo.png"
                alt="JUIAKL Logo"
                fill
                className="object-contain p-4"
                priority
                onError={(e) => {
                  e.currentTarget.src = theme === 'dark' 
                    ? '/images/logo/juiakllogo.png' 
                    : '/images/logo/logo-dark.png';
                }}
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cinzel-bold text-white mb-6">
              About JUIAKL
            </h1>
            <p className="text-lg sm:text-xl text-gray-200">
              Serving the community with faith and dedication since 1953
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-6">
              Our History
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Jamiat-ul-Ulama Isna Asharia, Kargil-Ladakh was founded in 1953 and has since become a cornerstone institution for the region's socio-religious life. As the largest and oldest body of Islamic leadership in Ladakh, it unites a distinguished group of Ághas and Sheikhs committed to guiding the mainly Shia Muslim community. The institution not only oversees the activities of local Ulemas—deputing them to various villages to provide religious counsel, manage madrasas, and monitor prayer routines—but also takes charge of organizing the weekly Friday prayers in Kargil town.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In response to the evolving needs of the community, the organization continues to strengthen its leadership. Notably, on 11 September 2021, Hojjatul Islam Sheikh Nazir Mehdi Mohammadi was re-elected as president, reinforcing the institution's longstanding commitment to spiritual guidance and community service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-500 bg-opacity-10 rounded-xl p-6 text-center">
              <div className="text-3xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                71+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Years of Service
              </div>
            </div>
            <div className="bg-blue-500 bg-opacity-10 rounded-xl p-6 text-center">
              <div className="text-3xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Villages Served
              </div>
            </div>
            <div className="bg-blue-500 bg-opacity-10 rounded-xl p-6 text-center">
              <div className="text-3xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                6+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Major Initiatives
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white">
                    Religious Guidance
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Providing spiritual leadership and religious guidance to the Shia Muslim community in Ladakh through weekly sermons and religious counseling.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white">
                    Educational Institutions
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Managing madrasas and educational initiatives that blend religious teachings with modern education to serve the community's needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white">
                    Community Support
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Organizing social welfare programs, healthcare initiatives, and community support systems for vulnerable populations in the region.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white">
                    Cultural Preservation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Safeguarding and promoting the rich cultural heritage and traditions of the Ladakh region through cultural events and initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Leadership Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-8 text-center">
              Current Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* President */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/leadership/sheikh-nazir.webp"
                    alt="Hojjatul Islam Sheikh Nazir Mehdi Mohammadi"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Hojjatul Islam Sheikh Nazir Mehdi Mohammadi
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  President
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Re-elected on September 11, 2021
                </p>
              </div>

              {/* Vice President */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/leadership/sheikh-khalili.webp"
                    alt="Hojjatul Islam Sheikh Mohammad Hussain Moqaddas"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Hojjatul Islam Sheikh Mohammad Hussain Moqaddas
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Vice President
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Leading community initiatives
                </p>
              </div>

              {/* General Secretary */}
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-toha.webp"
                    alt="Hojjatul Islam Sheikh Mohammad Taha Barvi"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Hojjatul Islam Sheikh Mohammad Taha Barvi
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  General Secretary
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Managing organizational affairs
                </p>
              </div>

              {/* Qazi (Judge) */}
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-hassan-waizi.webp"
                    alt="Hojjatul Islam Sheikh Ibrahim Khalili"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Hojjatul Islam Sheikh Ibrahim Khalili
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Qazi-ul-Quzat
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Head of the judicial and legal system
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="pt-16 pb-16 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Key Figures
            </h2>

            {/* Founder Card */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 shadow-sm mb-12 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/key-figures/photo1.webp"
                    alt="Late Hujjatul-Islam Wal-Muslimeen Sheikh Mohammad Mufeed (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                    Late Hujjatul-Islam Wal-Muslimeen Sheikh Mohammad Mufeed (r.a)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Founder of Jamiat Ulama Isna Asharia Kargil (JUIAK)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    In 1954, Late Hujjatul-Islam Wal-Muslimeen Sheikh Mohammad Mufeed (r.a) laid the foundation of the first socio-religious organization of the region—Jamiat Ulama Isna Asharia Kargil (JUIAK). His vision and leadership established the cornerstone of religious and social development in the region.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Leaders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Leader Card 1 */}
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-ibrahim-khalili.webp"
                    alt="Late Hojatul Islam Walmuslimeen Sheikh Ibrahim Khalili (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojatul Islam Walmuslimeen Sheikh Ibrahim Khalili (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former Qazi-ul-Quzat. The head of the judicial and legal system of Islamic law (Sharia).
                </p>
              </div>

              {/* Leader Card 2 */}
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-mokaddas.webp"
                    alt="Hojjatul Islam Walmuslimeen Sheikh Mohammad Hussain Moqaddas"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Hojjatul Islam Walmuslimeen Sheikh Mohammad Hussain Moqaddas
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former Vice President of Jamiat ul Ulama Isna Asharai Kargil-Ladakh
                </p>
              </div>

              {/* Leader Card 3 */}
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-hassan-waizi.webp"
                    alt="Late Hojjatul Islam Walmuslimeen Sheikh Ghulam Hassan Waizi (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojjatul Islam Walmuslimeen Sheikh Ghulam Hassan Waizi (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former Markazi Imam Al Jummah Kargil and Mutawalli JUIAKL
                </p>
              </div>

              {/* Leader Card 4 */}
              <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/syed-nizamdeen-rizwi.webp"
                    alt="Late Hojjatul Islam Walmuslimeen Syed Mohammad Nizam ud Deen Razavi (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojjatul Islam Walmuslimeen Syed Mohammad Nizam ud Deen Razavi (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former Qazi-ul-Quzat. The head of the judicial and legal system of Islamic law (Sharia).
                </p>
              </div>

              {/* Leader Card 5 */}
              <div className="bg-cyan-50 dark:bg-cyan-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-ahmad.webp"
                    alt="Late Hojjatul Islam Walmuslimeen Sheikh Ahmad Mohammadi (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojjatul Islam Walmuslimeen Sheikh Ahmad Mohammadi (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former President of Jamiat ul Ulama Isna Asharia Kargil-Ladakh
                </p>
              </div>

              {/* Leader Card 6 */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/Sheikh-mussa.webp"
                    alt="Late Hojatul Islam Walmuslimeen Sheikh Mussa Sharifee (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojatul Islam Walmuslimeen Sheikh Mussa Sharifee (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former Leader of the Friday Prayer, Markazi Imam Al Jummah Kargil-Ladakh
                </p>
              </div>

              {/* Leader Card 7 */}
              <div className="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-toha.webp"
                    alt="Late Hojjatul Islam Walmuslimeen Sheikh Mohammad Taha Barvi (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojjatul Islam Walmuslimeen Sheikh Mohammad Taha Barvi (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former General Secretary of Jamiat ul Ulama Isna Asharia Kargil-Ldakh
                </p>
              </div>

              {/* Leader Card 8 */}
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/syed-hussain-musi.webp"
                    alt="Late Hojjatul Islam Walmuslimeen Syed Hussain Musavi (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojjatul Islam Walmuslimeen Syed Hussain Musavi (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former President of Jamiat ul Ulama Isna Asharia Kargil-Ladakh
                </p>
              </div>

              {/* Leader Card 9 */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="relative w-full h-70 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/images/key-figures/sheikh-rehmatullah.webp"
                    alt="Late Hojjatul Islam Walmuslimeen Sheikh Rehmatullah (r.a)"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-cinzel-bold text-gray-900 dark:text-white mb-2">
                  Late Hojjatul Islam Walmuslimeen Sheikh Rehmatullah (r.a)
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Former President of Jamiat ul Ulama Isna Asharia Kargil-Ladakh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}