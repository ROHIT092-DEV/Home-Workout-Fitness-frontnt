import Header from '@/components/Header';
import HeroSection from '@/components/Hero';
import LandingPage from '@/components/Landing';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />

      <HeroSection />
      <LandingPage />
    </div>
  );
}
