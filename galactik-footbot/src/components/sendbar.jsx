import React, { useState } from 'react';
import Icons from '../constants/icons.jsx';


const Sendbar = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      addMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="w-full bg-gray-800 text-white flex justify-center py-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-4 w-full max-w-[200px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[800px] p-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrire votre question..."
          className="flex-grow p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <button type="submit" className="p-2 rounded bg-gray-500 hover:bg-green-500 transition duration-300">
          <Icons.Send className="w-6 h-6 text-white" />
        </button>
      </form>
    </div>
  );
};

export default Sendbar;
