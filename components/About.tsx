import React from 'react';
import { Section } from './Section';
import { Leaf, Scale, HeartHandshake } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Leaf className="w-8 h-8 text-tambao-yellow" />,
      title: "Phật - Sự Giác Ngộ & Đạo Đức",
      desc: "Là kim chỉ nam để kinh doanh tử tế, giữ gìn sự chính trực trong mọi quyết định đầu tư.",
      color: "bg-amber-50 border-amber-100"
    },
    {
      icon: <Scale className="w-8 h-8 text-tambao-purple" />,
      title: "Pháp - Phương Pháp & Chân Lý",
      desc: "Sự chuyên nghiệp, áp dụng công nghệ tiên tiến và tri thức đúng đắn vào quản trị.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-tambao-green" />,
      title: "Tăng - Cộng Đồng & Sự Hòa Hợp",
      desc: "Sự gắn kết, yêu thương giữa đội ngũ nhân sự, đối tác và trách nhiệm phụng sự xã hội.",
      color: "bg-green-50 border-green-100"
    }
  ];

  return (
    <Section id="about" className="relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold mb-4">
            Về Chúng Tôi
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-balance">
            Câu Chuyện Về <span className="text-tambao-green">Tam Bảo</span>
          </h2>
          <div className="text-slate-600 mb-6 leading-relaxed text-pretty text-justify md:text-left">
            <p className="mb-4">
              Được thành lập với khát vọng kiến tạo sự thịnh vượng bền vững, 
              <strong> Tam Bảo Group</strong> không chỉ đơn thuần là một tổ chức kinh doanh, 
              mà là một hệ sinh thái kết hợp hài hòa giữa <strong>Tài chính, Công nghệ và Giá trị nhân văn</strong>.
            </p>
            <p>
              Lấy cảm hứng từ triết lý sâu sắc của Phật giáo về Tam Bảo (Phật - Pháp - Tăng), 
              chúng tôi xây dựng doanh nghiệp dựa trên ba nền tảng bất biến.
              Tại Tam Bảo Group, chúng tôi tin rằng một nhà đầu tư thành công không chỉ cần tư duy sắc bén, 
              mà còn cần một tâm thái bình an.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${pillar.color} transition-transform hover:-translate-y-1`}>
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-white rounded-lg shadow-sm flex-shrink-0">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{pillar.title}</h3>
                  <p className="text-slate-600 text-sm text-pretty">{pillar.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};