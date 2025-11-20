import React from 'react';
import { Logo } from './Logo';
import { MapPin, Mail, Globe, CreditCard } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <Logo className="h-10 w-auto" />
              <span className="font-bold text-xl">TAM BẢO GROUP</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 text-balance">
              Kiến tạo Thịnh vượng – Phụng sự Cộng đồng. <br/>
              Vững Tâm Đức - Sáng Tầm Nhìn.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              {/* Social place holders */}
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-tambao-green cursor-pointer transition-colors">
                 <span className="font-bold text-xs">FB</span>
              </div>
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-tambao-green cursor-pointer transition-colors">
                 <span className="font-bold text-xs">LN</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 border-l-4 border-tambao-green pl-3 text-center md:text-left">Thông Tin Liên Hệ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tambao-green shrink-0 mt-1" />
                <span className="text-slate-300 text-sm text-pretty">
                  88 Láng Hạ, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-tambao-green shrink-0" />
                <span className="text-slate-300 text-sm">
                  Mã số thuế: 0110046173
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-tambao-green shrink-0" />
                <a href="mailto:support@tambaogroup.asia" className="text-slate-300 text-sm hover:text-white transition-colors break-all">
                  support@tambaogroup.asia
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-tambao-green shrink-0" />
                <a href="https://tambaogroup.asia" className="text-slate-300 text-sm hover:text-white transition-colors break-all">
                  tambaogroup.asia
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CÔNG TY CỔ PHẦN TAM BẢO GROUP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};