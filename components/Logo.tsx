import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      src="/tambao-logo.png" 
      alt="Tam Bảo Group Logo" 
      className={`object-contain ${className}`}
    />
  );
};