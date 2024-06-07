// src/components/SuggestionModal.jsx

import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const SuggestionModal = ({ isOpen, onClose, onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    onSend(message);
    setMessage('');
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-300 rounded-lg p-6 w-full max-w-md relative">
        <h2 className="text-2xl mb-4">Envoyer une suggestion</h2>
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded bg-gray-600"
          placeholder="Écrivez votre suggestion ici..."
          value={message}
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded hover:opacity-75 transition-opacity duration-300"
            onClick={onClose}
          >
            Fermer
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 ml-2 rounded hover:opacity-75 transition-opacity duration-300"
            onClick={handleSend}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SuggestionModal;
