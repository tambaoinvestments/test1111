import React from 'react';
import { Section } from './Section';
import { Eye, Target, Users, Globe } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <Section id="vision" bg="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tầm Nhìn & Sứ Mệnh</h2>
        <div className="w-20 h-1 bg-tambao-green mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative overflow-hidden group h-full">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Eye size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
              <Eye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tầm Nhìn</h3>
            <div className="text-slate-600 leading-relaxed text-pretty space-y-4 flex-grow">
              <p>
                Phấn đấu trở thành Tập đoàn Đầu tư & Giáo dục uy tín hàng đầu, nơi dòng tiền thịnh vượng được kiến tạo để tái đầu tư cho những giá trị tốt đẹp.
              </p>
              <p>
                Chúng tôi hướng tới hình ảnh một doanh nghiệp xã hội hóa, là điểm tựa vững chắc cho cộng đồng thông qua các hoạt động thiện nguyện quy mô và ý nghĩa.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 relative overflow-hidden group h-full">
           <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Target size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Sứ Mệnh</h3>
            
            <div className="space-y-6 flex-grow">
              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Users className="text-tambao-purple w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Với Khách hàng</h4>
                  <p className="text-slate-600 text-sm text-pretty">Mang lại sự an tâm tuyệt đối về tài chính và sự bình an trong tâm hồn.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <Globe className="text-tambao-green w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Với Xã hội</h4>
                  <p className="text-slate-600 text-sm text-pretty">Lan tỏa lối sống đẹp, sẻ chia trách nhiệm cộng đồng.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};