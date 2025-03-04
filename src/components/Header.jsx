'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getCurrentHijriDate, getHijriDate } from '../utils/hijriDateUtils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    gregorian: new Date().toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric',
      timeZone: 'Asia/Kolkata' // Set timezone to IST
    }),
    hijri: getCurrentHijriDate()
  });

  useEffect(() => {
    // Check scroll position immediately on mount
    const initialScroll = window.scrollY > 10;
    
    if (initialScroll !== scrolled) {
      setScrolled(initialScroll);
    }

    // Update dates at midnight IST
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow - now;

    const midnightTimer = setTimeout(() => {
      setCurrentDate({
        gregorian: new Date().toLocaleDateString('en-US', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric',
          timeZone: 'Asia/Kolkata' // Set timezone to IST
        }),
        hijri: getCurrentHijriDate()
      });
      // Set up daily interval after first midnight
      const dailyTimer = setInterval(() => {
        setCurrentDate({
          gregorian: new Date().toLocaleDateString('en-US', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric',
            timeZone: 'Asia/Kolkata' // Set timezone to IST
          }),
          hijri: getCurrentHijriDate()
        });
      }, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyTimer);
    }, timeUntilMidnight);

    // Scroll event listener
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(midnightTimer);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`}>
      {/* Social Media Links and Date - Above navigation, right aligned */}
      <div className={`container mx-auto px-4 ${
        scrolled ? 'h-0 opacity-0' : 'h-8 opacity-100'
      } transition-all duration-300`}>
        <div className="flex justify-end items-center h-full">
          <div className="flex items-center space-x-4">
            <div className={`text-sm font-cinzel-regular ${
              scrolled 
                ? 'text-gray-600 dark:text-gray-200' 
                : 'text-gray-200'
            } transition-colors flex items-center space-x-2`}>
              <span>{currentDate.gregorian}</span>
              <span className="mx-2">|</span>
              <span>{currentDate.hijri}</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${scrolled ? 'text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white' : 'text-gray-200 hover:text-white'} transition-colors`}>
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${scrolled ? 'text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-white' : 'text-gray-200 hover:text-white'} transition-colors`}>
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${scrolled ? 'text-gray-600 dark:text-gray-200 hover:text-red-600 dark:hover:text-white' : 'text-gray-200 hover:text-white'} transition-colors`}>
                <span className="sr-only">YouTube</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header with Logo and Navigation */}
      <div className={`container mx-auto px-4 transition-all duration-300 ${
        scrolled 
          ? 'py-2' 
          : 'py-4 sm:py-5 md:py-6 lg:py-7'
      }`}>
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo - Left aligned */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center relative">
              {/* Logo switching based on scroll position and theme */}
              <div className={`relative transition-all duration-300 ${
                scrolled
                  ? 'w-[150px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[40px] sm:h-[48px] md:h-[53px] lg:h-[58px]'
                  : 'w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px] h-[53px] sm:h-[66px] md:h-[74px] lg:h-[80px]'
              }`}>
                <Image 
                  src="/logo/juiakllogo.png" 
                  alt="JUIAKL Logo" 
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    scrolled ? 'opacity-0 dark:opacity-100' : 'opacity-100'
                  }`}
                />
                <Image 
                  src="/logo/logo-dark.png" 
                  alt="JUIAKL Logo" 
                  fill
                  className={`object-contain transition-opacity duration-300 ${
                    scrolled ? 'opacity-100 dark:opacity-0' : 'opacity-0'
                  }`}
                />
              </div>
            </Link>
          </div>
          
          {/* Hamburger Menu Button - Visible on mobile and tablets */}
          <div className="lg:hidden">
            <button 
              type="button" 
              className={`${
                scrolled 
                  ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                  : 'text-white hover:text-gray-200'
              } focus:outline-none p-2 rounded-md transition-colors`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                // X icon for open menu
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon for closed menu
                <svg 
                  className="h-6 w-6" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Desktop Navigation - Right aligned, hidden on mobile and tablets */}
          <nav className="hidden lg:flex">
            <ul className={`flex flex-wrap space-x-8 items-center transition-all duration-300 ${
              scrolled ? 'text-base' : 'text-lg'
            }`}>
              <li>
                <Link 
                  href="/" 
                  className={`font-cinzel-bold relative inline-block group pb-1 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative">Home</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-600 dark:bg-gray-200' : 'bg-white'
                  }`}></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`font-cinzel-regular relative inline-block group pb-1 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative">About</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-600 dark:bg-gray-200' : 'bg-white'
                  }`}></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className={`font-cinzel-regular relative inline-block group pb-1 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative">Events</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-600 dark:bg-gray-200' : 'bg-white'
                  }`}></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/sermons" 
                  className={`font-cinzel-regular relative inline-block group pb-1 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative">Friday Sermons</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-600 dark:bg-gray-200' : 'bg-white'
                  }`}></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className={`font-cinzel-regular relative inline-block group pb-1 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative">Gallery</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-600 dark:bg-gray-200' : 'bg-white'
                  }`}></span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`font-cinzel-regular relative inline-block group pb-1 ${
                    scrolled 
                      ? 'text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200' 
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  <span className="relative">Contact</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    scrolled ? 'bg-blue-600 dark:bg-gray-200' : 'bg-white'
                  }`}></span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu - Full width dropdown with animation, visible on mobile and tablets */}
      <div 
        className={`lg:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <ul className="divide-y divide-gray-100 dark:divide-gray-700">
            <li>
              <Link 
                href="/" 
                className="font-cinzel-bold block py-3 px-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="font-cinzel-regular block py-3 px-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/events" 
                className="font-cinzel-regular block py-3 px-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                href="/sermons" 
                className="font-cinzel-regular block py-3 px-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Friday Sermons
              </Link>
            </li>
            <li>
              <Link 
                href="/gallery" 
                className="font-cinzel-regular block py-3 px-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="font-cinzel-regular block py-3 px-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 