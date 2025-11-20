import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-tambao-purple via-slate-800 to-tambao-green opacity-90 z-0"></div>
      
      {/* Parallax Background Image */}
      <div 
        className="absolute -top-[20%] left-0 w-full h-[140%] bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20 z-0 pointer-events-none"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      ></div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto mt-16 md:mt-0">
        <h2 className="text-tambao-yellow font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
          Công Ty Cổ Phần Tam Bảo Group
        </h2>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
          Vững Tâm Đức <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tambao-green to-tambao-yellow block md:inline mt-2 md:mt-0">
            Sáng Tầm Nhìn
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light text-balance leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
          Kiến tạo Thịnh vượng – Phụng sự Cộng đồng
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
          <a 
            href="#about" 
            className="w-full sm:w-auto px-8 py-4 bg-tambao-green hover:bg-green-600 text-white rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
          >
            Câu Chuyện Của Chúng Tôi
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium transition-all text-center hover:scale-105"
          >
            Liên Hệ Hợp Tác
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </div>
  );
};