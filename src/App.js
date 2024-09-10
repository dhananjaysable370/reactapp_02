import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('');

  const changeColor = (newColor) => {
    console.log(newColor);
    setColor(newColor);
  };

  return (
    <div
      className={`w-full h-screen flex gap-4 items-center justify-center 
        ${color === 'zinc'
          ? 'bg-zinc-600'
          : color === 'blue'
          ? 'bg-blue-600'
          : color === 'purple'
          ? 'bg-purple-600'
          : ''
        }`}
    >
      <button
        onClick={() => changeColor('zinc')}
        className="px-4 py-2 bg-zinc-700 rounded-md text-white"
      >
        Zinc
      </button>
      <button
        onClick={() => changeColor('purple')}
        className="px-4 py-2 bg-purple-700 rounded-md text-white"
      >
        Purple
      </button>
      <button
        onClick={() => changeColor('blue')}
        className="px-4 py-2 bg-blue-700 rounded-md text-white"
      >
        Blue
      </button>
    </div>
  );
}

export default App;
