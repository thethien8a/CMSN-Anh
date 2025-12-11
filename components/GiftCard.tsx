import React, { useState } from 'react';
import { createPortal } from 'react-dom';

export const GiftCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* The Envelope - clickable to open */}
      <div 
        className="relative w-80 h-64 md:w-96 md:h-72 perspective-1000 mx-auto cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        {/* Instruction Tooltip */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full shadow-lg animate-bounce z-50 whitespace-nowrap">
          <span className="text-pink-500 font-bold text-sm">👇 Chạm để mở thiệp nha!</span>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/90"></div>
        </div>

        <div className="relative w-full h-full transition-transform duration-700 transform-style-3d">
          {/* Envelope Back */}
          <div className="absolute inset-0 bg-red-100 rounded-lg shadow-xl border-2 border-red-200 flex items-center justify-center z-10 overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffadad 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
          </div>

          {/* Envelope Front Flap (Bottom) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-red-50 z-30 rounded-b-lg border-t-2 border-red-100 shadow-md"></div>
          
          {/* Envelope Front Flap (Left/Right) */}
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[160px] md:border-l-[192px] border-b-[130px] md:border-b-[144px] border-l-red-100/80 border-b-transparent z-30 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[160px] md:border-r-[192px] border-b-[130px] md:border-b-[144px] border-r-red-100/80 border-b-transparent z-30 rounded-br-lg"></div>

          {/* Envelope Top Flap */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/2 bg-red-200 z-30 rounded-t-lg border-b-2 border-white/20 shadow-md"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          ></div>
          
          {/* Seal */}
          <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold-400 rounded-full z-40 flex items-center justify-center shadow-lg">
            <div className="w-10 h-10 bg-yellow-400 rounded-full border-2 border-yellow-200 flex items-center justify-center text-red-500 font-bold text-xs">
              OPEN
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay using Portal to escape parent transforms */}
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          {/* Blurred Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
          
          {/* The Letter Card - centered modal */}
          <div 
            className="relative w-full max-w-md md:max-w-lg bg-white shadow-2xl rounded-2xl p-4 md:p-8 z-10 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative corner ribbons */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
            
            <div className="border-2 border-dashed border-pink-300 p-4 md:p-6 rounded-xl">
              <h3 className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-pink-600 mb-4 md:mb-6 font-bold text-center">
                Thân gửi chị Ánh,
              </h3>
              <p className="font-handwriting text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
                "Chúc chị Ánh sinh nhật vui vẻ, tuổi mới luôn vui tươi và hạnh phúc bên người yêu và gia đình. Khi nào cưới em sẽ bảo Tuấn gửi cho 5 chỉ."
              </p>
              <div className="mt-6 md:mt-8 flex justify-end">
                <p className="font-handwriting text-lg md:text-2xl text-pink-500 font-bold transform -rotate-6">
                  Thân ái, Thiện
                </p>
              </div>
            </div>
            
            {/* Close hint */}
            <div className="mt-4 text-center text-pink-400 text-sm font-medium animate-pulse">
              👆 Chạm ra ngoài để đóng
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};