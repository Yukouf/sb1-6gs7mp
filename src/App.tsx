import React, { useState } from 'react';
import { Skull } from 'lucide-react';

function App() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div 
        className="text-center cursor-pointer"
        onClick={handleClick}
      >
        {visible ? (
          <div className="animate-fade-in">
            <Skull className="w-20 h-20 text-red-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 tracking-wider font-horror">
              DOOMS
            </h1>
            <p className="mt-4 text-gray-400 text-sm">Click anywhere to vanquish</p>
          </div>
        ) : (
          <div className="animate-fade-out">
            <p className="text-gray-400 text-lg">Peace restored...</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setVisible(true);
              }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-red-600 to-orange-400 text-white rounded-lg hover:from-red-700 hover:to-orange-500 transition-all duration-300 ease-in-out"
            >
              Summon Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;