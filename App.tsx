import React, { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { BirthdayScene } from './components/BirthdayScene';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="z-10 w-full h-full flex flex-col items-center justify-center">
        {!isLoggedIn ? (
          <LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <BirthdayScene />
        )}
      </div>
    </div>
  );
};

export default App;