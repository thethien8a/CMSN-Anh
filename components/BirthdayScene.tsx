import React, { useEffect, useState } from 'react';
import { Cake } from './Cake';
import { GiftCard } from './GiftCard';
import { Confetti } from './Confetti';

export const BirthdayScene: React.FC = () => {
  const [showCard, setShowCard] = useState(false);

  // Trigger card entrance animation after a slight delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-between py-10 overflow-hidden">
      <Confetti />
      
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl z-20 space-y-12">
        {/* Title Section */}
        <div className="text-center space-y-2 animate-float">
            <h1 className="text-4xl md:text-6xl font-handwriting font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 drop-shadow-sm">
            Chúc Mừng Sinh Nhật
            </h1>
            <h2 className="text-5xl md:text-7xl font-handwriting font-bold text-pink-600 drop-shadow-md mt-2">
            Ánh
            </h2>
        </div>

        {/* Cake Section */}
        <div className="transform scale-75 md:scale-100 transition-transform duration-500">
          <Cake />
        </div>

        {/* Gift Section */}
        <div className={`transition-all duration-1000 transform ${showCard ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative">
                <GiftCard />
            </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-gray-400 text-xs font-sans">
        Made with ❤️ for Ánh
      </div>
    </div>
  );
};