import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-slate-50',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};