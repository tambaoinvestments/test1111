import React from 'react';
import { Logo } from './Logo';
import { MapPin, Mail, Globe, CreditCard, Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-8 relative overflow-hidden border-t border-slate-800">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-tambao-green via-tambao-purple to-tambao-yellow"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo className="h-12 w-auto" />
            <div>
              <span className="font-bold text-lg block">TAM BẢO GROUP</span>
              <span className="text-xs text-slate-400">Vững Tâm Đức - Sáng Tầm Nhìn</span>
            </div>
          </div>

          {/* Contact Info - Compact */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="tel:0339009699" className="flex items-center gap-2 text-slate-300 hover:text-tambao-green transition-colors">
              <Phone className="w-4 h-4" />
              <span>0339 009 699</span>
            </a>
            <a href="mailto:support@tambaogroup.asia" className="flex items-center gap-2 text-slate-300 hover:text-tambao-green transition-colors">
              <Mail className="w-4 h-4" />
              <span>support@tambaogroup.asia</span>
            </a>
            <a href="https://zalo.me/306351576255816539" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              <MessageCircle className="w-4 h-4" />
              <span>Zalo OA</span>
            </a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-slate-800 text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              88 Láng Hạ, Đống Đa, Hà Nội
            </span>
            <span className="flex items-center gap-2">
              <CreditCard className="w-3 h-3" />
              MST: 0110046173
            </span>
          </div>
          <p>
            &copy; {new Date().getFullYear()} <span className="text-white font-medium">Tam Bảo Group</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};