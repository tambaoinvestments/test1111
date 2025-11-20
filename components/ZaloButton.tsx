import React from 'react';

export const ZaloButton: React.FC = () => {
  return (
    <a
      href="https://zalo.me/306351576255816539"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat với chúng tôi qua Zalo"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group-hover:scale-110 border-2 border-blue-500">
          {/* Zalo icon - using image if available, fallback to text */}
          <img 
            src="/zalo-icon.png" 
            alt="Zalo"
            className="w-10 h-10 object-contain"
            onError={(e) => {
              // Fallback to text if image not found
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const fallback = document.createElement('div');
                fallback.className = 'text-2xl font-bold text-blue-600';
                fallback.textContent = 'Z';
                parent.appendChild(fallback);
              }
            }}
          />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat với chúng tôi
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-8 border-transparent border-l-slate-900"></div>
        </div>
      </div>
    </a>
  );
};
