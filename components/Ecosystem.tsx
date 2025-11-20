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
    <Section id="ecosystem">
      <div 
        ref={titleRef}
        className={`text-center mb-16 px-4 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <span className="text-tambao-green font-semibold tracking-wider uppercase text-sm">Mô Hình Hoạt Động</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 text-balance">Hệ Sinh Thái 3 Trụ Cột Chiến Lược</h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-pretty">
          Sức mạnh của Tam Bảo Group nằm ở thế "kiềng ba chân" vững chãi, bổ trợ lẫn nhau, tạo nên một chu trình giá trị khép kín.
        </p>
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
    </Section>
  );
};