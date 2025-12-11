import React, { useState } from 'react';

export const GiftCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-80 h-64 md:w-96 md:h-72 perspective-1000 mx-auto cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
       {/* Instruction Tooltip */}
       {!isOpen && (
         <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full shadow-lg animate-bounce z-50 whitespace-nowrap">
           <span className="text-pink-500 font-bold text-sm">👇 Chạm để mở thiệp nha!</span>
           <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/90"></div>
         </div>
       )}

      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isOpen ? 'translate-y-24' : ''}`}>
        
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-red-100 rounded-lg shadow-xl border-2 border-red-200 flex items-center justify-center z-10 overflow-hidden">
             {/* Pattern on envelope */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffadad 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        </div>

        {/* The Letter/Card Inside */}
        <div className={`absolute left-4 right-4 bg-white shadow-md p-6 rounded-lg z-20 transition-all duration-1000 ease-in-out origin-bottom
            ${isOpen ? '-translate-y-48 md:-translate-y-56 rotate-2 scale-105' : 'translate-y-0 scale-95'}`}>
            
            <div className="h-full border-2 border-dashed border-pink-300 p-4 rounded flex flex-col items-center justify-center text-center overflow-y-auto max-h-[300px] scrollbar-hide">
                <h3 className="font-handwriting text-2xl text-pink-600 mb-2 font-bold">Thân gửi chị Ánh,</h3>
                <p className="font-handwriting text-xl text-gray-700 leading-relaxed">
                "Chúc chị Ánh sinh nhật vui vẻ, tuổi mới luôn vui tươi và hạnh phúc bên người yêu và gia đình. Khi nào cưới em sẽ bảo Tuấn gửi cho 5 chỉ."
                </p>
                <div className="mt-4 w-full flex justify-end">
                    <p className="font-handwriting text-lg text-pink-500 font-bold transform -rotate-6">Thân ái, Thiện</p>
                </div>
            </div>
        </div>

        {/* Envelope Front Flap (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-red-50 z-30 rounded-b-lg border-t-2 border-red-100 shadow-md"></div>
        
        {/* Envelope Front Flap (Left/Right) - Cosmetic triangle look */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] md:border-l-[192px] border-b-[130px] md:border-b-[144px] border-l-red-100/80 border-b-transparent z-30 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[160px] md:border-r-[192px] border-b-[130px] md:border-b-[144px] border-r-red-100/80 border-b-transparent z-30 rounded-br-lg"></div>

        {/* Envelope Top Flap (The opening part) */}
        <div className={`absolute top-0 left-0 right-0 h-1/2 bg-red-200 z-30 origin-top transition-transform duration-700 ease-in-out border-b-2 border-white/20 shadow-md
            ${isOpen ? 'rotate-x-180 -z-10 opacity-0' : 'rotate-x-0 rounded-t-lg'}`}
            style={{ 
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformStyle: 'preserve-3d'
             }}>
        </div>
        
        {/* Seal */}
        <div className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-400 rounded-full z-40 flex items-center justify-center shadow-lg transition-opacity duration-500 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-200 flex items-center justify-center text-red-500 font-bold text-xs">
                OPEN
            </div>
        </div>

      </div>
    </div>
  );
};