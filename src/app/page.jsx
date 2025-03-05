import Header from '@/components/Header.jsx'
import HeroBanner from '@/components/HeroBanner.jsx'
import Footer from '@/components/Footer.jsx'
import NewsSection from '@/components/NewsSection'
import Initiatives from '../components/Initiatives'

export default function Home() {
  // Sample news data
  const featuredNews = {
    id: '1',
    title: 'Annual Community Iftar Gathering',
    description: 'Join us for our annual community iftar gathering, featuring special guest speakers, traditional food, and spiritual reflection.',
    date: '2024-03-15',
    category: 'Events',
    image: '/images/news2.jpg',
    author: 'JUIAKL Team',
    readTime: '5 min read'
  };

  const news = [
    {
      id: '2',
      title: 'New Healthcare Initiative Launched',
      description: 'We are excited to announce the launch of our new healthcare initiative aimed at serving the community.',
      date: '2024-03-10',
      category: 'Healthcare',
      image: '/images/news2.jpg',
      author: 'JUIAKL Team',
      readTime: '3 min read'
    },
    {
      id: '3',
      title: 'Educational Workshop Series',
      description: 'Join our upcoming educational workshop series focusing on Islamic studies and contemporary issues.',
      date: '2024-03-08',
      category: 'Education',
      image: '/images/news2.jpg',
      author: 'JUIAKL Team',
      readTime: '4 min read'
    },
    {
      id: '4',
      title: 'Community Service Day',
      description: 'Our community service day brought together volunteers to make a positive impact in our neighborhood.',
      date: '2024-03-05',
      category: 'Community',
      image: '/images/news2.jpg',
      author: 'JUIAKL Team',
      readTime: '3 min read'
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner
        title="Welcome to JUIAKL"
        subtitle="Empowering the Muslim Community"
        imageUrl="/images/hero-banner.jpg"
        buttonText="Learn More"
        buttonUrl="/about"
        todayEvent={{
          hijriDate: "2 Ramadan 1446",
          gregorianDate: "March 14, 2024"
        }}
      />
      <NewsSection featuredNews={featuredNews} news={news} />
      <div className="pt-32">
        <Initiatives />
      </div>
      <Footer />
    </main>
  )
} 