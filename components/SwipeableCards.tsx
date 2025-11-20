import React, { useState } from 'react';
import { useSwipe } from '../hooks/useSwipe';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  title: string;
  content: string;
  color: string;
}

interface SwipeableCardsProps {
  cards: Card[];
}

export const SwipeableCards: React.FC<SwipeableCardsProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrev,
  });

  return (
    <div className="relative w-full">
      {/* Cards Container */}
      <div
        className="overflow-hidden touch-pan-y"
        {...swipeHandlers}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-4"
            >
              <div className={`${card.color} p-6 rounded-2xl shadow-lg min-h-[200px] flex flex-col justify-center`}>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm leading-relaxed">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 text-slate-700" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 text-slate-700" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-tambao-green w-6'
                : 'bg-slate-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
