import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatProps> = ({ icon, end, label, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-tambao-green/10 rounded-full mb-4">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-medium">{label}</div>
    </div>
  );
};

export const CounterStats: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Con Số Ấn Tượng
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Những thành tựu đáng tự hào trong hành trình phát triển của Tam Bảo Group
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatCounter
            icon={<Users className="w-8 h-8 text-tambao-green" />}
            end={1000}
            suffix="+"
            label="Khách Hàng Tin Tưởng"
          />
          <StatCounter
            icon={<Briefcase className="w-8 h-8 text-tambao-purple" />}
            end={50}
            suffix="+"
            label="Dự Án Thành Công"
          />
          <StatCounter
            icon={<Award className="w-8 h-8 text-tambao-yellow" />}
            end={5}
            suffix="+"
            label="Năm Kinh Nghiệm"
          />
          <StatCounter
            icon={<TrendingUp className="w-8 h-8 text-tambao-green" />}
            end={95}
            suffix="%"
            label="Tỷ Lệ Hài Lòng"
          />
        </div>
      </div>
    </div>
  );
};
