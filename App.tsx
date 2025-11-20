import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { VisionMission } from './components/VisionMission';
import { Ecosystem } from './components/Ecosystem';
import { Values } from './components/Values';
import { Commitment } from './components/Commitment';
import { CounterStats } from './components/CounterStats';
import { Testimonials } from './components/Testimonials';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { ZaloButton } from './components/ZaloButton';
import { BackToTop } from './components/BackToTop';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { MobileBottomNav } from './components/MobileBottomNav';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      <Header />
      <main className="flex-grow pb-16 md:pb-0">
        {/* 1. Hero - Giới thiệu chính */}
        <Hero />
        
        {/* 2. Về chúng tôi - Câu chuyện & Triết lý */}
        <About />
        
        {/* 3. Tầm nhìn & Sứ mệnh */}
        <VisionMission />
        
        {/* 4. Hệ sinh thái - Trụ cột chính (HIGHLIGHT) */}
        <Ecosystem />
        
        {/* 5. Giá trị cốt lõi */}
        <Values />
        
        {/* 6. Con số ấn tượng */}
        <CounterStats />
        
        {/* 7. Cam kết */}
        <Commitment />
        
        {/* 8. Đánh giá khách hàng */}
        <Testimonials />
        
        {/* 9. Đối tác */}
        <Partners />
      </main>
      <Footer />
      <ZaloButton />
      <BackToTop />
      <MobileBottomNav />
    </div>
  );
}

export default App;