import React, { useEffect, useState } from 'react';

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = [];
    // 40 bông tuyết để cân bằng
    for (let i = 0; i < 40; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: Math.random() * 5 + 10, // 10-15s
        size: Math.random() * 3 + 3, // 3-6px - lớn hơn để rõ nét
        delay: Math.random() * 10,
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          {/* Bông tuyết rõ nét với shadow */}
          <div className="w-full h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
               style={{
                 boxShadow: '0 0 8px rgba(255, 255, 255, 0.8), 0 0 4px rgba(255, 255, 255, 0.6)',
                 opacity: 0.9
               }}
          ></div>
        </div>
      ))}
    </div>
  );
};
