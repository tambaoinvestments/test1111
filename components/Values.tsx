import React from 'react';
import { Section } from './Section';
import { ShieldCheck, Zap, Heart } from 'lucide-react';

export const Values: React.FC = () => {
  return (
    <Section id="values" bg="dark" className="relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#4CAF50_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-balance">Giá Trị Cốt Lõi</h2>
          <p className="text-slate-400 mt-4 text-balance">Mọi hành động của người Tam Bảo đều soi chiếu qua 3 giá trị</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-tambao-green/50 transition-colors">
            <ShieldCheck className="w-12 h-12 text-tambao-green mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Đạo đức và Chính trực</h3>
            <p className="text-slate-400 text-pretty">
              Làm đúng ngay cả khi không ai giám sát. Đặt đạo đức nghề nghiệp và lợi ích khách hàng lên hàng đầu.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-tambao-purple/50 transition-colors">
            <Zap className="w-12 h-12 text-tambao-purple mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Công nghệ và Chuyên nghiệp</h3>
            <p className="text-slate-400 text-pretty">
              Không ngừng đổi mới, áp dụng công nghệ vào quản lý và đầu tư để mang lại hiệu suất tối ưu và dịch vụ đẳng cấp.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-tambao-yellow/50 transition-colors">
            <Heart className="w-12 h-12 text-tambao-yellow mb-6" />
            <h3 className="text-xl font-bold text-white mb-3">Đồng hành và Yêu thương</h3>
            <p className="text-slate-400 text-pretty">
              Xây dựng mối quan hệ Tin cậy - Uy tín với Đối tác. Xây dựng môi trường Tôn trọng - Sẻ chia cho Nhân viên.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};