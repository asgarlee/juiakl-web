'use client';

import Image from 'next/image';

const HeroBanner = ({
  title = 'Jamiat ul Ulama Isna Asharia Kargil Ladakh',
  subtitle = 'Serving the community with faith and dedication',
  imageUrl = '/images/hero-banner.jpg', // Default hero image
  buttonText = 'Learn More',
  buttonUrl = '/about',
  todayEvent
}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* We're using a div with background image as a fallback until the Image loads */}
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        
        {/* Next.js Image for optimized image loading */}
        {/* Note: In production, use a real image with appropriate dimensions */}
        {/* <div className="absolute inset-0 bg-black opacity-50" /> Overlay for better text visibility */}
      </div>
    </div>
  );
};

export default HeroBanner; 