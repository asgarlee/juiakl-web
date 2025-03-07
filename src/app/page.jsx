import Header from "@/components/Header.jsx";
import HeroBanner from "@/components/HeroBanner.jsx";
import Footer from "@/components/Footer.jsx";
import NewsSection from "@/components/NewsSection";
import Initiatives from "../components/Initiatives";

export default function Home() {
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
          gregorianDate: "March 14, 2024",
        }}
      />
      <NewsSection />
      <Initiatives />
      <Footer />
    </main>
  );
}
