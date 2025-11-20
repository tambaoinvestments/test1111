import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Nguyễn Minh Tuấn',
      role: 'Giám đốc Công ty TNHH Đầu tư Minh Tuấn',
      content: 'Tam Bảo Group đã giúp tôi hiểu rõ hơn về đầu tư chứng khoán và xây dựng danh mục đầu tư hiệu quả. Đội ngũ tư vấn rất chuyên nghiệp và tận tâm. Tôi đặc biệt ấn tượng với cách tiếp cận kết hợp giữa phân tích kỹ thuật và tâm lý đầu tư.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Phạm Thu Hương',
      role: 'CEO Startup Công nghệ EduTech',
      content: 'Tôi rất ấn tượng với triết lý kinh doanh của Tam Bảo Group. Không chỉ tập trung vào lợi nhuận mà còn quan tâm đến giá trị cộng đồng. Sự hỗ trợ từ Tam Bảo Investments đã giúp startup của tôi vượt qua giai đoạn khó khăn nhất.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=47',
    },
    {
      name: 'Trần Đức Anh',
      role: 'Học viên Tam Bảo Academy - Khóa 3',
      content: 'Khóa học tại Tam Bảo Academy đã thay đổi hoàn toàn tư duy đầu tư của tôi. Sự kết hợp giữa kiến thức tài chính và thiền định rất độc đáo. Sau 6 tháng học, tôi đã tự tin hơn rất nhiều trong các quyết định đầu tư của mình.',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=33',
    },
    {
      name: 'Lê Thị Mai',
      role: 'Nhà đầu tư cá nhân',
      content: 'Trước khi biết đến Tam Bảo Group, tôi luôn lo lắng và căng thẳng khi đầu tư. Nhưng giờ đây, với những kiến thức và phương pháp được học, tôi cảm thấy bình an và tự tin hơn nhiều. Cảm ơn Tam Bảo Group!',
      rating: 5,
      avatar: 'https://i.pravatar.cc/150?img=45',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="bg-slate-900 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Khách Hàng Nói Gì Về Chúng Tôi
          </h2>
          <p className="text-slate-400 text-sm">
            Những phản hồi chân thực từ khách hàng và đối tác
          </p>
        </div>

        <div className="relative bg-slate-800 rounded-xl p-6 md:p-8">
          <Quote className="absolute top-6 left-6 w-12 h-12 text-tambao-green/20" />
          
          <div className="relative z-10">
            {/* Avatar & Info */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={current.avatar} 
                alt={current.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-tambao-green/20"
              />
              <div>
                <h3 className="text-lg font-bold text-white">{current.name}</h3>
                <p className="text-slate-400 text-xs">{current.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-tambao-yellow text-tambao-yellow" />
              ))}
            </div>

            {/* Content */}
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              "{current.content}"
            </p>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={prevTestimonial}
                className="p-1.5 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <div className="flex gap-1.5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-tambao-green w-6' : 'bg-slate-600'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-1.5 hover:bg-slate-700 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
