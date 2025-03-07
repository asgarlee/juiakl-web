'use client';

import { motion } from 'framer-motion';
import { Cinzel_Decorative, Roboto } from 'next/font/google';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Timer } from 'lucide-react';
import { PrayerTimes, Coordinates, CalculationMethod, PrayerTimeAdjustment } from 'adhan';

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

// Kargil coordinates
const coordinates = new Coordinates(34.5539, 76.1349);

const prayerNames = {
  imsak: { name: "Imsak (Sehar)", arabicName: "الإمساك" },
  fajr: { name: "Fajr", arabicName: "الفجر" },
  sunrise: { name: "Sunrise", arabicName: "الشروق" },
  dhuhr: { name: "Dhuhr", arabicName: "الظهر" },
  sunset: { name: "Sunset", arabicName: "الغروب" },
  maghrib: { name: "Maghrib", arabicName: "المغرب" },
  midnight: { name: "Midnight", arabicName: "منتصف الليل" }
};

export default function PrayerTime() {
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerData, setPrayerData] = useState(null);
  const [nextPrayer, setNextPrayer] = useState({ name: "", time: null, timeString: "" });
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    setMounted(true);
    // Update current time every second for countdown
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      updatePrayerTimes();
      updateNextPrayer();
    }, 1000);

    // Initial calculations
    updatePrayerTimes();
    updateNextPrayer();

    return () => clearInterval(timer);
  }, []);

  const updatePrayerTimes = () => {
    // Configure calculation parameters for Shia Ithna-Ashari method
    const params = CalculationMethod.Tehran();
    params.fajrAngle = 16; // Shia Fajr angle
    params.maghribAngle = 4; // Shia Maghrib angle
    
    // Add specific adjustments for Kargil
    params.adjustments = {
      fajr: 2,
      sunrise: 0,
      dhuhr: 1,
      maghrib: 3
    };

    const date = new Date();
    const prayerTimes = new PrayerTimes(coordinates, date, params);
    
    // Calculate Imsak time (10 minutes before Fajr)
    const imsakTime = new Date(prayerTimes.fajr);
    imsakTime.setMinutes(imsakTime.getMinutes() - 10);

    // Calculate Midnight (halfway between Sunset and Fajr)
    const sunset = new Date(prayerTimes.maghrib);
    const nextFajr = new Date(prayerTimes.fajr);
    if (nextFajr < sunset) {
      nextFajr.setDate(nextFajr.getDate() + 1);
    }
    const midnightTime = new Date((sunset.getTime() + nextFajr.getTime()) / 2);

    // Create prayer data in the specified JSON format
    const prayerData = {
      date: formatDate(date),
      location: {
        city: "Kargil",
        region: "Ladakh",
        country: "India",
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      times: {
        Imsak: formatTime(imsakTime),
        Fajr: formatTime(prayerTimes.fajr),
        Sunrise: formatTime(prayerTimes.sunrise),
        Dhuhr: formatTime(prayerTimes.dhuhr),
        Sunset: formatTime(prayerTimes.sunset),
        Maghrib: formatTime(prayerTimes.maghrib),
        Midnight: formatTime(midnightTime)
      },
      adjustments: {
        Imsak: "+2 min",
        Fajr: "+2 min",
        Dhuhr: "+1 min",
        Maghrib: "+3 min"
      },
      method: {
        name: "Shia Ithna-Ashari",
        params: {
          fajr_angle: 16,
          maghrib_angle: 4
        }
      },
      lastUpdated: new Date().toISOString()
    };

    setPrayerData(prayerData);
  };

  const updateNextPrayer = () => {
    if (!prayerData) return;

    const now = new Date();
    const prayers = [
      { name: 'imsak', time: parseTime(prayerData.times.Imsak) },
      { name: 'fajr', time: parseTime(prayerData.times.Fajr) },
      { name: 'sunrise', time: parseTime(prayerData.times.Sunrise) },
      { name: 'dhuhr', time: parseTime(prayerData.times.Dhuhr) },
      { name: 'sunset', time: parseTime(prayerData.times.Sunset) },
      { name: 'maghrib', time: parseTime(prayerData.times.Maghrib) },
      { name: 'midnight', time: parseTime(prayerData.times.Midnight) }
    ];

    let next = prayers.find(prayer => prayer.time > now);
    if (!next) {
      // If no next prayer today, get tomorrow's Imsak
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const tomorrowPrayers = new PrayerTimes(coordinates, tomorrow, params);
      const tomorrowImsak = new Date(tomorrowPrayers.fajr);
      tomorrowImsak.setMinutes(tomorrowImsak.getMinutes() - 10);
      next = { name: 'imsak', time: tomorrowImsak };
    }

    // Store both the display name and the key for accurate comparison
    setNextPrayer({
      name: prayerNames[next.name].name,
      key: next.name,
      time: next.time,
      timeString: formatTime(next.time)
    });

    // Update countdown
    const diff = next.time - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    setCountdown(`${hours}h ${minutes}m ${seconds}s`);
  };

  const parseTime = (timeStr) => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(
      period === 'PM' ? 
        (parseInt(hours) === 12 ? 12 : parseInt(hours) + 12) : 
        (parseInt(hours) === 12 ? 0 : parseInt(hours))
    );
    date.setMinutes(parseInt(minutes));
    date.setSeconds(0);
    return date;
  };

  const formatTime = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  if (!prayerData) {
    return <div>Loading...</div>;
  }

  const prayers = [
    { key: 'imsak', time: parseTime(prayerData.times.Imsak) },
    { key: 'fajr', time: parseTime(prayerData.times.Fajr) },
    { key: 'sunrise', time: parseTime(prayerData.times.Sunrise) },
    { key: 'dhuhr', time: parseTime(prayerData.times.Dhuhr) },
    { key: 'sunset', time: parseTime(prayerData.times.Sunset) },
    { key: 'maghrib', time: parseTime(prayerData.times.Maghrib) },
    { key: 'midnight', time: parseTime(prayerData.times.Midnight) }
  ];

  return (
    <section className={`py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ${roboto.className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className={`${cinzelDecorative.className} text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Prayer Times
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {formatDate(currentTime)}
            </p>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <p className="text-lg">
                Kargil, Ladakh
              </p>
            </div>
          </motion.div>
        </div>

        {/* Prayer Times Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {prayers.map(({ key, time }, index) => {
            const prayerInfo = prayerNames[key];
            const isNext = mounted && nextPrayer.key === key;
            const adjustment = prayerData.adjustments[prayerInfo.name];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ${
                  isNext ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {prayerInfo.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {prayerInfo.arabicName}
                    </p>
                    {adjustment && (
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        Adjusted {adjustment}
                      </p>
                    )}
                    {isNext && (
                      <span className="text-xs text-blue-500 dark:text-blue-400 font-medium">
                        Next prayer
                      </span>
                    )}
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {formatTime(time)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>Calculation Method: {prayerData.method.name}</span>
            </div>
            {mounted && nextPrayer.name && (
              <div className="flex flex-col items-center gap-2">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Next prayer: {nextPrayer.name} at {nextPrayer.timeString}
                </div>
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Timer className="w-4 h-4" />
                  Time remaining: {countdown}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 