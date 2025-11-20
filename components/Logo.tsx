import React, { useState } from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12 w-auto" }) => {
  const [imageError, setImageError] = useState(false);

  // Logic:
  // 1. Cố gắng hiển thị file /logo.png (đường dẫn tuyệt đối từ root)
  // 2. Nếu lỗi (không tìm thấy file), hiển thị SVG mặc định
  
  if (imageError) {
    return (
      <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield Background */}
        <path d="M10 10 Q 50 0 90 10 L 85 60 Q 50 120 15 60 Z" fill="white" />
        
        {/* Green Figure (Left) */}
        <circle cx="35" cy="40" r="12" fill="#4CAF50" />
        <path d="M35 55 Q 15 70 25 90 L 40 70 Z" fill="#4CAF50" />

        {/* Purple Figure (Right) */}
        <circle cx="65" cy="40" r="12" fill="#7E57C2" />
        <path d="M65 55 Q 85 70 75 90 L 60 70 Z" fill="#7E57C2" />

        {/* Yellow Figure (Bottom) */}
        <circle cx="50" cy="75" r="12" fill="#FFC107" />
        <path d="M50 90 Q 30 110 50 115 Q 70 110 50 90 Z" fill="#FFC107" />
      </svg>
    );
  }

  return (
    <img 
      src="/logo.png" 
      alt="Tam Bảo Group Logo" 
      className={`object-contain ${className}`}
      onError={() => setImageError(true)}
    />
  );
};