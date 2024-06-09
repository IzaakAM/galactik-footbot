import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const SuggestionModal = ({ isOpen, onClose, onSend }) => {
  const [message, setMessage] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  useEffect(() => {
    if (isOpen) {
      setAnimationClass('opacity-25 scale-75');
      setTimeout(() => {
        setAnimationClass('opacity-100 scale-100');
      }, 100);
    } else {
      setAnimationClass('opacity-25 scale-75');
      setTimeout(onClose, 300);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className={`bg-gray-900 border border-gray-300 rounded-lg p-6 w-full max-w-xl h-[500px] space-y-[20px] flex flex-col transform transition-transform duration-300 ${animationClass}`}>
        <p className="text-2xl">Envoyer une suggestion</p>
        <textarea
          className="w-full flex-grow p-2 border border-gray-300 rounded bg-gray-600 resize-none"
          placeholder="Écrivez votre suggestion ici..."
          value={message}
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end space-x-[20px]">
          <button
            className="bg-gray-600 border border-gray-300 text-white rounded-lg hover:bg-red-500 transition-colors duration-300 px-4 py-2"
            onClick={onClose}
          >
            Fermer
          </button>
          <button
            className={`bg-gray-600 hover:bg-green-600 border border-gray-300 rounded-lg text-white transition-colors duration-300 px-4 py-2 ${message.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleSend}
            disabled={message.trim() === ''}
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
