import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Izaak from '../assets/izaak.jpeg';
import Yasmine from '../assets/yasmine.png';
import Yann from '../assets/yann.jpeg';
import Amine from '../assets/amine.jpeg';



  const InformationModal = ({ isOpen, onClose }) => {
    const [animationClass, setAnimationClass] = useState('');

    const teamMembers = [
        { name: 'Izaak', image: Izaak, linkedin: 'https://www.linkedin.com/in/izaak-aubert-m%C3%A9cibah/' },
        { name: 'Yasmine', image: Yasmine, linkedin: 'https://www.linkedin.com/in/yasmine-el-mimouni/' },
        { name: 'Yann', image: Yann, linkedin: 'https://www.linkedin.com/in/yann-verkimpe-43437b234/' },
        { name: 'Amine', image: Amine, linkedin: 'https://www.linkedin.com/in/amine-benayada-4997111a9/' },
      ];
  
    useEffect(() => {
      if (isOpen) {
        setAnimationClass('opacity-25 scale-75');
        setTimeout(() => {
          setAnimationClass('opacity-100 scale-100');
        }, 1);
      } else {
        setAnimationClass('opacity-25 scale-75');
        setTimeout(onClose, 300);
      }
    }, [isOpen, onClose]);
  
    if (!isOpen) return null;
  
    return createPortal(
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300">
        <div className={`bg-gray-900 border border-gray-300 rounded-lg p-6 w-full max-w-3xl h-grow max-h-[500px] flex flex-col space-y-[20px] transform transition-transform duration-300 ${animationClass}`}>
          <p className="text-xl bg-gray-600 border border-gray-300 rounded-lg p-4 h-full text-center">
            Ce projet consiste à créer un chatbot pour répondre aux questions des utilisateurs sur le foot à l'international. Il est réalisé dans le cadre du cours de projet de 4A à l'INSA de l'ambiance par Izaak, Yasmine, Yann et Amine.
          </p>
          <div className="flex justify-around">
            {teamMembers.map((member) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:bg-gray-700 p-4 rounded-lg space-y-[12px] transition duration-300"
                key={member.name}
              >
                <img src={member.image} alt={member.name} className="rounded-full w-28 h-28" />
                <span className="text-white text-lg">{member.name}</span>
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="bg-gray-600 border border-gray-300 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition-colors duration-300"
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