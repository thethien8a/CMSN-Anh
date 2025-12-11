import React, { useState } from 'react';
import { Lock, Heart } from 'lucide-react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [errorCount, setErrorCount] = useState(0);
  const [isShake, setIsShake] = useState(false);
  
  const CORRECT_PASS = '11122004';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASS) {
      onLoginSuccess();
    } else {
      setErrorCount(prev => prev + 1);
      setIsShake(true);
      setTimeout(() => setIsShake(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="max-w-md w-full mx-4 bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/50">
      <div className="flex flex-col items-center mb-6">
        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4 text-pink-500">
          <Lock size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Xin chào!</h1>
        <p className="text-gray-500 text-center">Vui lòng nhập mật khẩu để mở quà nhé.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`transition-transform duration-100 ${isShake ? 'translate-x-[-10px]' : ''} ${isShake ? 'translate-x-[10px]' : ''}`}>
           {/* Simple css animation logic handled by re-renders or css keyframes is better, but this simple shake works for logic */}
           <style>{`
             @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-8px); }
                75% { transform: translateX(8px); }
             }
             .animate-shake-input {
                animation: shake 0.4s ease-in-out;
             }
           `}</style>
          <input
            type="password" // Changed to password type for security feeling, but could be text
            inputMode="numeric"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            className={`w-full px-6 py-4 rounded-xl border-2 bg-white/50 outline-none text-center text-xl tracking-widest text-gray-700 placeholder-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all ${isShake ? 'animate-shake-input border-red-400' : 'border-gray-200'}`}
          />
        </div>

        <div className="min-h-[60px] flex items-center justify-center text-center">
            {errorCount > 0 && errorCount < 3 && (
                <p className="text-yellow-600 text-sm font-medium animate-pulse">
                    ⚠️ Gợi ý: Mật khẩu gồm 8 chữ số
                </p>
            )}
            {errorCount >= 3 && (
                <p className="text-pink-600 text-sm font-medium animate-bounce">
                     💖 Gợi ý: Mật khẩu liên quan đến ngày tháng năm sinh
                </p>
            )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white font-bold py-4 rounded-xl shadow-lg transform transition-transform duration-200 active:scale-95 flex items-center justify-center gap-2"
        >
          <span>Mở Quà</span>
          <Heart size={20} fill="currentColor" />
        </button>
      </form>
    </div>
  );
};