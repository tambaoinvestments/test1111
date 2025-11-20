import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Tầm Nhìn', href: '#vision' },
  { label: 'Hệ Sinh Thái', href: '#ecosystem' },
  { label: 'Giá Trị Cốt Lõi', href: '#values' },
  { label: 'Liên Hệ', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial calculation
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="h-14 w-auto md:h-16 drop-shadow-sm group-hover:scale-105 transition-transform duration-300" />
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'} `}>
              TAM BẢO GROUP
            </span>
            <span className={`text-[0.65rem] font-medium tracking-widest uppercase ${isScrolled ? 'text-tambao-green' : 'text-tambao-green md:text-slate-200'}`}>
              Tam Bao Investments
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-tambao-yellow ${
                isScrolled ? 'text-slate-600' : 'text-slate-100 shadow-black/20 drop-shadow-sm'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 font-medium py-2 border-b border-slate-50 last:border-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-tambao-green to-tambao-yellow transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
};