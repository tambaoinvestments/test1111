import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Commitment: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <div className="bg-gradient-to-r from-tambao-green to-emerald-600 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-bold mb-8 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Cam Kết Của Chúng Tôi
        </h2>
        <p 
          className={`text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-balance leading-relaxed transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Trong thế giới tài chính nhiều biến động, tài sản quý giá nhất mà Tam Bảo Group trao gửi đến Quý Đối tác chính là <span className="font-bold text-tambao-yellow whitespace-nowrap">SỰ AN TÂM</span>.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          <div 
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/20 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            <div className="font-bold text-lg mb-2">Minh Bạch & Đạo Đức</div>
            <div className="text-white/80 text-sm text-pretty">An tâm về sự chính trực trong mọi hoạt động</div>
          </div>
          <div 
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/20 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="font-bold text-lg mb-2">Năng Lực Chuyên Môn</div>
            <div className="text-white/80 text-sm text-pretty">An tâm về hiệu quả đầu tư và quản trị</div>
          </div>
          <div 
            className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 transition-all duration-700 hover:scale-105 hover:bg-white/20 ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="font-bold text-lg mb-2">Đồng Hành Bền Vững</div>
            <div className="text-white/80 text-sm text-pretty">An tâm về mối quan hệ hợp tác lâu dài</div>
          </div>
        </div>
      </div>
    </div>
  );
};