'use client';

import { useState, useEffect } from 'react';
import { getHijriDate, formatHijriDate } from '../utils/hijriDateUtils';

const HijriDatePicker = ({ onDateSelect, className = '' }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hijriDate, setHijriDate] = useState(null);

  useEffect(() => {
    const date = getHijriDate(selectedDate);
    setHijriDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  }, [selectedDate, onDateSelect]);

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="flex items-center space-x-4">
        <input
          type="date"
          value={selectedDate.toISOString().split('T')[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="text-lg font-semibold">
          {hijriDate ? formatHijriDate(hijriDate) : 'Loading...'}
        </div>
      </div>
      {hijriDate && (
        <div className="text-sm text-gray-600">
          {hijriDate.hijriMonthName} {hijriDate.hijriYear}
        </div>
      )}
    </div>
  );
};

export default HijriDatePicker; 