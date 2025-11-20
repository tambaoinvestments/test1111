import React from 'react';
import { Handshake } from 'lucide-react';

export const Partners: React.FC = () => {
  const partners = [
    { name: 'SSI', fullName: 'Chứng khoán SSI', color: 'from-red-500 to-red-600', logo: '/partners/ssi.png' },
    { name: 'VNDirect', fullName: 'Chứng khoán VNDirect', color: 'from-blue-600 to-blue-700', logo: '/partners/vndirect.png' },
    { name: 'HSC', fullName: 'Chứng khoán HSC', color: 'from-orange-500 to-orange-600', logo: '/partners/hsc.png' },
    { name: 'MBS', fullName: 'Chứng khoán MB', color: 'from-purple-600 to-purple-700', logo: '/partners/mbs.png' },
    { name: 'VPS', fullName: 'Chứng khoán VPS', color: 'from-green-600 to-green-700', logo: '/partners/vps.png' },
    { name: 'VCBS', fullName: 'Chứng khoán Vietcombank', color: 'from-emerald-600 to-emerald-700', logo: '/partners/vcbs.png' },
    { name: 'BSC', fullName: 'Chứng khoán BIDV', color: 'from-blue-500 to-blue-600', logo: '/partners/bsc.png' },
    { name: 'FPTS', fullName: 'Chứng khoán FPT', color: 'from-orange-600 to-orange-700', logo: '/partners/fpts.png' },
    { name: 'VCI', fullName: 'Chứng khoán Vietcap', color: 'from-purple-500 to-purple-600', logo: '/partners/vci.png' },
    { name: 'AGR', fullName: 'Chứng khoán Agribank', color: 'from-green-500 to-green-600', logo: '/partners/agr.png' },
    { name: 'Techcombank', fullName: 'Ngân hàng Techcombank', color: 'from-green-500 to-green-600', logo: '/partners/techcombank.png' },
    { name: 'VPBank', fullName: 'Ngân hàng VPBank', color: 'from-green-600 to-teal-600', logo: '/partners/vpbank.png' },
    { name: 'ACB', fullName: 'Ngân hàng ACB', color: 'from-blue-500 to-blue-600', logo: '/partners/acb.png' },
    { name: 'MB', fullName: 'Ngân hàng MB', color: 'from-indigo-600 to-indigo-700', logo: '/partners/mb.png' },
    { name: 'Vietcombank', fullName: 'Ngân hàng Vietcombank', color: 'from-emerald-500 to-emerald-600', logo: '/partners/vietcombank.png' },
    { name: 'BIDV', fullName: 'Ngân hàng BIDV', color: 'from-blue-600 to-cyan-600', logo: '/partners/bidv.png' },
    { name: 'Vietinbank', fullName: 'Ngân hàng Vietinbank', color: 'from-blue-500 to-blue-600', logo: '/partners/vietinbank.png' },
    { name: 'Sacombank', fullName: 'Ngân hàng Sacombank', color: 'from-blue-600 to-blue-700', logo: '/partners/sacombank.png' },
    { name: 'TPBank', fullName: 'Ngân hàng TPBank', color: 'from-purple-500 to-purple-600', logo: '/partners/tpbank.png' },
    { name: 'HDBank', fullName: 'Ngân hàng HDBank', color: 'from-yellow-500 to-orange-500', logo: '/partners/hdbank.png' },
  ];

  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-tambao-green/10 rounded-full mb-3 md:mb-4">
            <Handshake className="w-6 h-6 md:w-8 md:h-8 text-tambao-green" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4">
            Đối Tác Của Chúng Tôi
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
            Tam Bảo Group tự hào hợp tác cùng các tổ chức tài chính uy tín hàng đầu Việt Nam
          </p>
        </div>

        {/* Partners Slider - Auto scroll */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling container */}
          <div className="flex gap-4 md:gap-6 animate-scroll-partners">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-36 md:w-48 bg-white border-2 border-slate-100 rounded-xl p-4 md:p-6 hover:border-tambao-green hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  {/* Logo hoặc Icon fallback */}
                  <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 md:mb-3 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      onError={(e) => {
                        // Fallback to gradient icon if logo not found
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div 
                      className={`hidden w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${partner.color} items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <span className="text-lg md:text-xl font-bold text-white">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-slate-800 mb-0.5 md:mb-1 group-hover:text-tambao-green transition-colors truncate">
                    {partner.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-slate-600 line-clamp-2">{partner.fullName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="text-center p-3 md:p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-xl md:text-2xl font-bold text-tambao-green mb-0.5 md:mb-1">20+</div>
            <div className="text-[10px] md:text-xs text-slate-600">Đối tác chiến lược</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
            <div className="text-xl md:text-2xl font-bold text-tambao-purple mb-0.5 md:mb-1">5+</div>
            <div className="text-[10px] md:text-xs text-slate-600">Năm hợp tác</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
            <div className="text-xl md:text-2xl font-bold text-tambao-yellow mb-0.5 md:mb-1">100%</div>
            <div className="text-[10px] md:text-xs text-slate-600">Uy tín & Tin cậy</div>
          </div>
          <div className="text-center p-3 md:p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-xl md:text-2xl font-bold text-blue-600 mb-0.5 md:mb-1">24/7</div>
            <div className="text-[10px] md:text-xs text-slate-600">Hỗ trợ liên tục</div>
          </div>
        </div>
      </div>
    </div>
  );
};
