import React from 'react';

export const Cake: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-end h-72 w-72">
      {/* Candles */}
      <div className="absolute -top-16 flex space-x-6 z-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
             {/* Flame */}
            <div className="w-4 h-6 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(255,215,0,0.9)] scale-110" />
             {/* Wick */}
            <div className="w-1 h-3 bg-gray-800" />
             {/* Candle Body */}
            <div className="w-5 h-14 bg-gradient-to-b from-blue-200 to-blue-400 rounded-sm border border-blue-300" />
          </div>
        ))}
      </div>

      {/* Age Number - Moved Higher and Styled */}
      <div className="absolute top-10 z-40 flex items-center justify-center w-full">
        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-red-600 drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] animate-bounce-slow">21</div>
      </div>

      {/* Top Layer */}
      <div className="w-56 h-28 bg-pink-300 rounded-t-full relative z-10 shadow-inner flex flex-col items-center justify-start pt-8 border-b-4 border-pink-400/20">
        <div className="text-white font-bold opacity-30 text-2xl tracking-[0.2em] mt-8 drop-shadow-md">HAPPY</div>
      </div>

      {/* Middle Decoration Ring */}
      <div className="w-60 h-5 bg-pink-500 rounded-full absolute top-[135px] z-20 shadow-md"></div>

      {/* Bottom Layer */}
      <div className="w-72 h-32 bg-pink-400 rounded-b-3xl relative shadow-xl flex items-center justify-center border-t border-white/30">
          <div className="text-white font-bold opacity-30 text-3xl tracking-[0.2em] mb-4 drop-shadow-md">BIRTHDAY</div>
          
           {/* Decorations */}
           <div className="absolute bottom-6 flex w-full justify-around px-6">
             <div className="w-5 h-5 bg-yellow-200 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0s' }}></div>
             <div className="w-5 h-5 bg-blue-200 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.2s' }}></div>
             <div className="w-5 h-5 bg-green-200 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.4s' }}></div>
             <div className="w-5 h-5 bg-purple-200 rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.6s' }}></div>
           </div>
      </div>

      {/* Plate */}
      <div className="absolute -bottom-5 w-80 h-8 bg-gray-100 rounded-[50%] shadow-2xl z-0 border border-gray-300"></div>
    </div>
  );
};