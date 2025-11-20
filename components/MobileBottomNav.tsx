import React, { useState } from 'react';
import { Home, Info, Target, Briefcase, Phone } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Trang chủ', href: '#' },
    { id: 'about', icon: Info, label: 'Về chúng tôi', href: '#about' },
    { id: 'vision', icon: Target, label: 'Tầm nhìn', href: '#vision' },
    { id: 'ecosystem', icon: Briefcase, label: 'Hệ sinh thái', href: '#ecosystem' },
    { id: 'contact', icon: Phone, label: 'Liên hệ', href: '#contact' },
  ];

  const handleClick = (id: string, href: string) => {
    setActive(id);
    window.location.hash = href;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-lg">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id, item.href)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
                isActive ? 'text-tambao-green' : 'text-slate-500'
              }`}
            >
              <Icon 
                className={`w-5 h-5 mb-1 transition-transform ${
                  isActive ? 'scale-110' : 'scale-100'
                }`} 
              />
              <span className={`text-[10px] font-medium ${
                isActive ? 'opacity-100' : 'opacity-70'
              }`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-tambao-green rounded-b-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
