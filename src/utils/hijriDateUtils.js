import hijriCalendar from '../data/hijriCalendar.json';

/**
 * Get current date in IST (Indian Standard Time)
 * @returns {Date} Current date in IST
 */
function getCurrentISTDate() {
  const now = new Date();
  // IST is UTC+5:30
  const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
  return new Date(now.getTime() + istOffset);
}

/**
 * Format date to YYYY-MM-DD
 * @param {Date} date - Date to format
 * @returns {string} Formatted date string
 */
function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get the Hijri date corresponding to a selected Gregorian date.
 *
 * @param {Date} selectedDate - The Gregorian date selected by the user.
 * @returns {Object|null} An object with hijriYear, hijriMonth, hijriMonthName, and hijriDay, or null if not found.
 */
export function getHijriDate(selectedDate) {
  const months = hijriCalendar.months;
  let currentMonthData = null;
  
  // Format the selected date to YYYY-MM-DD for comparison
  const selectedDateStr = formatDateToYYYYMMDD(selectedDate);
  
  // Find the latest month whose Gregorian start is <= selectedDate
  for (let i = 0; i < months.length; i++) {
    const monthData = months[i];
    if (selectedDateStr >= monthData.gregorianStart) {
      currentMonthData = monthData;
    } else {
      break;
    }
  }
  
  if (!currentMonthData) {
    return null;
  }
  
  // Calculate the difference in days
  const gregStart = new Date(currentMonthData.gregorianStart);
  const diffMs = selectedDate - gregStart;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  let hijriDay = diffDays + 1;
  
  if (hijriDay > currentMonthData.days) {
    hijriDay = currentMonthData.days;
  }
  
  return {
    hijriYear: hijriCalendar.year,
    hijriMonth: currentMonthData.month,
    hijriMonthName: currentMonthData.name,
    hijriDay: hijriDay
  };
}

/**
 * Format the Hijri date object into a string.
 *
 * @param {Object} hijriDate - The Hijri date object.
 * @returns {string} Formatted Hijri date string.
 */
export function formatHijriDate(hijriDate) {
  if (!hijriDate) return '';
  return `${hijriDate.hijriDay} ${hijriDate.hijriMonthName} ${hijriDate.hijriYear}`;
}

/**
 * Get the current Hijri date.
 *
 * @returns {string} Formatted current Hijri date.
 */
export function getCurrentHijriDate() {
  const today = getCurrentISTDate();
  const hijriDate = getHijriDate(today);
  return formatHijriDate(hijriDate);
} 