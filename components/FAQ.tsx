import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Tam Bảo Group hoạt động trong lĩnh vực gì?',
      answer: 'Tam Bảo Group hoạt động trong 3 lĩnh vực chính: Đầu tư tài chính (Tam Bảo Investments), Giáo dục đào tạo (Tam Bảo Academy), và Hoạt động thiện nguyện (Tam Bảo Charity).',
    },
    {
      question: 'Làm thế nào để tham gia khóa học tại Tam Bảo Academy?',
      answer: 'Bạn có thể liên hệ với chúng tôi qua số điện thoại 0339 009 699 hoặc email support@tambaogroup.asia để được tư vấn chi tiết về các khóa học phù hợp.',
    },
    {
      question: 'Tam Bảo Group có những dịch vụ đầu tư nào?',
      answer: 'Chúng tôi cung cấp dịch vụ tư vấn đầu tư chứng khoán, đầu tư vào startup, và quản lý danh mục đầu tư với chiến lược an toàn và bền vững.',
    },
    {
      question: 'Triết lý "Tam Bảo" có ý nghĩa gì?',
      answer: 'Tam Bảo (Phật - Pháp - Tăng) là nền tảng triết lý của chúng tôi: Phật đại diện cho đạo đức và giác ngộ, Pháp là phương pháp chuyên nghiệp, Tăng là sự hòa hợp cộng đồng.',
    },
    {
      question: 'Làm thế nào để trở thành đối tác của Tam Bảo Group?',
      answer: 'Vui lòng liên hệ với chúng tôi qua form liên hệ hoặc Zalo OA để được tư vấn về các cơ hội hợp tác phù hợp.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-tambao-green/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-tambao-green" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-slate-600">
            Những câu hỏi phổ biến về Tam Bảo Group
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-tambao-green flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-slate-50 rounded-xl">
          <p className="text-slate-700 mb-4">
            Không tìm thấy câu trả lời bạn cần?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-tambao-green hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Liên Hệ Với Chúng Tôi
          </a>
        </div>
      </div>
    </div>
  );
};
