import React from 'react';
import { Section } from './Section';
import { TrendingUp, BookOpen, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PillarCard: React.FC<{
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  color: 'green' | 'purple' | 'red';
}> = ({ title, subtitle, icon, description, features, color }) => {
  
  const colorStyles = {
    green: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-100',
      iconBg: 'bg-green-100',
      bullet: 'bg-green-500'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-700',
      border: 'border-purple-100',
      iconBg: 'bg-purple-100',
      bullet: 'bg-purple-500'
    },
    red: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-100',
      iconBg: 'bg-rose-100',
      bullet: 'bg-rose-500'
    }
  };

  const style = colorStyles[color];

  return (
    <div className={`h-full rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-xl bg-white ${style.border} flex flex-col`}>
      <div className={`w-16 h-16 rounded-2xl ${style.iconBg} ${style.text} flex items-center justify-center mb-6 flex-shrink-0`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1 uppercase text-balance">{title}</h3>
      <p className={`text-sm font-semibold ${style.text} mb-4`}>{subtitle}</p>
      <p className="text-slate-600 mb-6 flex-grow text-pretty leading-relaxed">{description}</p>
      <ul className="space-y-3 mt-auto border-t border-slate-100 pt-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${style.bullet} flex-shrink-0`} />
            <span className="text-pretty">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Ecosystem: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  return (
    <Section id="ecosystem" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-green-50/30 to-purple-50/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-tambao-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tambao-purple/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-tambao-yellow/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10">
      <div 
        ref={titleRef}
        className={`text-center mb-16 px-4 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-tambao-green to-emerald-500 text-white rounded-full text-sm font-semibold mb-4 shadow-lg animate-pulse">
          ⭐ Mô Hình Hoạt Động Độc Đáo
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 text-balance">
          <span className="bg-gradient-to-r from-tambao-green via-tambao-purple to-tambao-yellow bg-clip-text text-transparent">
            Hệ Sinh Thái 3 Trụ Cột Chiến Lược
          </span>
        </h2>
        <p className="text-slate-600 text-lg mt-6 max-w-2xl mx-auto text-pretty leading-relaxed">
          Sức mạnh của Tam Bảo Group nằm ở thế <strong className="text-tambao-green">"kiềng ba chân"</strong> vững chãi, bổ trợ lẫn nhau, tạo nên một chu trình giá trị khép kín.
        </p>
        <div className="flex justify-center gap-3 mt-6">
          <div className="w-3 h-3 rounded-full bg-tambao-green animate-bounce"></div>
          <div className="w-3 h-3 rounded-full bg-tambao-purple animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-3 h-3 rounded-full bg-tambao-yellow animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>

      <div 
        ref={cardsRef}
        className="grid lg:grid-cols-3 gap-8"
      >
        <div 
          className={`transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0ms' }}
        >
          <PillarCard 
          color="green"
          icon={<TrendingUp size={32} />}
          title="Tam Bảo Investments"
          subtitle="Đầu tư & Kiến tạo"
          description="Tập trung phân tích giá trị chuyên sâu, lựa chọn danh mục an toàn và minh bạch."
          features={[
            "Lĩnh vực: Chứng khoán & Khởi nghiệp (Start-up)",
            "Chiến lược: Đầu tư vào giá trị thực & Tiềm năng đột phá",
            "Cam kết: An toàn vốn - Lợi nhuận bền vững"
          ]}
        />

        </div>

        <div 
          className={`transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <PillarCard 
            color="purple"
            icon={<BookOpen size={32} />}
            title="Tam Bảo Academy"
            subtitle="Giáo dục & Khai phóng"
            description="Đào tạo thế hệ nhà đầu tư toàn diện cả về tư duy (IQ) lẫn cảm xúc (EQ)."
            features={[
              "Sự khác biệt: Kết hợp Kiến thức Tài chính & Thiền định",
              "Mục tiêu: Tâm lý giao dịch ổn định, tránh tham lam - sợ hãi",
              "Kết quả: Hiệu quả đầu tư cao nhất"
            ]}
          />
        </div>

        <div 
          className={`transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <PillarCard 
            color="red"
            icon={<Heart size={32} />}
            title="Tam Bảo Charity"
            subtitle="Phụng sự & Sẻ chia"
            description="Đây là 'trái tim' của Tam Bảo Group. Lợi nhuận kinh doanh được trích lập cho quỹ thiện nguyện."
            features={[
              "Nguồn quỹ: Trích từ lợi nhuận kinh doanh",
              "Hoạt động: Bài bản, Minh bạch",
              "Hướng tới: Xã hội văn minh, giàu lòng nhân ái"
            ]}
          />
        </div>
      </div>
      </div>
    </Section>
  );
};