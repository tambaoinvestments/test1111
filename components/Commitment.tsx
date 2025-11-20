import React from 'react';

export const Commitment: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-tambao-green to-emerald-600 py-20 px-4">
      <div className="max-w-5xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Cam Kết Của Chúng Tôi</h2>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto text-balance leading-relaxed">
          Trong thế giới tài chính nhiều biến động, tài sản quý giá nhất mà Tam Bảo Group trao gửi đến Quý Đối tác chính là <span className="font-bold text-tambao-yellow whitespace-nowrap">SỰ AN TÂM</span>.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="font-bold text-lg mb-2">Minh Bạch & Đạo Đức</div>
            <div className="text-white/80 text-sm text-pretty">An tâm về sự chính trực trong mọi hoạt động</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="font-bold text-lg mb-2">Năng Lực Chuyên Môn</div>
            <div className="text-white/80 text-sm text-pretty">An tâm về hiệu quả đầu tư và quản trị</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
            <div className="font-bold text-lg mb-2">Đồng Hành Bền Vững</div>
            <div className="text-white/80 text-sm text-pretty">An tâm về mối quan hệ hợp tác lâu dài</div>
          </div>
        </div>
      </div>
    </div>
  );
};