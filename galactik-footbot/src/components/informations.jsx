import React from 'react';
import { createPortal } from 'react-dom';

const InformationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-300 rounded-lg p-6 w-full max-w-xl h-full max-h-[500px] flex flex-col">
        <p className="text-2xl mb-4 bg-gray-600 border border-gray-300 rounded-lg p-6 w-full max-w-xl h-full max-h-[500px] flex flex-col">
          Ce projet consiste à créer un chatbot pour répondre aux questions des utilisateurs sur le foot à l'international. Il est réalisé dans le cadre du cours de projet de 4A à l'INSA de l'ambiance par Izaak, Yasmine, Yann et Amine.
        </p>
        <div className="flex justify-center mt-4">
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded hover:opacity-75 transition-opacity duration-300"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default InformationModal;
