import React from 'react';

export const Cake: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-end h-64 w-64">
      {/* Candles */}
      <div className="absolute -top-12 flex space-x-4 z-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative flex flex-col items-center">
             {/* Flame */}
            <div className="w-4 h-6 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(255,215,0,0.8)]" />
             {/* Wick */}
            <div className="w-1 h-3 bg-gray-800" />
             {/* Candle Body */}
            <div className="w-4 h-12 bg-gradient-to-b from-blue-200 to-blue-400 rounded-sm border border-blue-300" />
          </div>
        ))}
      </div>

      {/* Top Layer */}
      <div className="w-48 h-24 bg-pink-300 rounded-t-full relative z-10 shadow-inner flex items-center justify-center border-b-4 border-pink-400/20">
        {/* Icing Drips */}
        <div className="absolute top-0 w-full flex justify-center space-x-1">
           {Array.from({ length: 7 }).map((_, i) => (
               <div key={i} className="w-6 h-8 bg-white rounded-b-full shadow-sm" />
           ))}
        </div>
        <div className="text-white font-bold opacity-20 text-xl tracking-widest mt-4">HAPPY</div>
      </div>

      {/* Middle Decoration Ring */}
      <div className="w-52 h-4 bg-pink-500 rounded-full absolute top-[108px] z-20 shadow-md"></div>

      {/* Bottom Layer */}
      <div className="w-64 h-28 bg-pink-400 rounded-b-3xl relative shadow-xl flex items-center justify-center border-t border-white/30">
          <div className="text-white font-bold opacity-20 text-2xl tracking-widest">BIRTHDAY</div>
          
           {/* Decorations */}
           <div className="absolute bottom-4 flex w-full justify-around px-4">
             <div className="w-4 h-4 bg-yellow-200 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
             <div className="w-4 h-4 bg-blue-200 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
             <div className="w-4 h-4 bg-green-200 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
             <div className="w-4 h-4 bg-purple-200 rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
           </div>
      </div>

      {/* Plate */}
      <div className="absolute -bottom-4 w-72 h-6 bg-gray-200 rounded-[50%] shadow-2xl z-0 border border-gray-300"></div>
    </div>
  );
};