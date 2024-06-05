import { useState } from 'react';
import './App.css';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="flex flex-col items-center justify-center space-y-4 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold">Bienvenue sur mon application React</h1>
        <p className="text-lg text-red-600">Cliquez sur le bouton pour incrémenter le compteur</p>
        <button
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
          onClick={() => setCount(count + 1)}
        >
          Compteur : {count}
        </button>
      </header>
    </div>
  );
}

export default App;
