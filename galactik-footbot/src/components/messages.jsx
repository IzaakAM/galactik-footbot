// src/components/Messages.jsx

import React from 'react';
import Bubble from './bubble';

const Messages = () => {
  const messages = [
    { type: 'question', text: 'Qui est le responsable pédagogique des ICY ?' },
    {
      type: 'answer',
      text:
        'Antoine Gallais. Voici ses coordonnées :\n01 23 45 67 89\nantoine.gallais@uphf.fr\nBureau 175, Abel de Pujol 2',
    },
    { type: 'question', text: 'Quelles sont les horaires d\'ouverture de la BU ?' },
    {
      type: 'answer',
      text:
        'La bibliothèque universitaire est un endroit où tu peux travailler, trouver des ressources pédagogiques, imprimer des copies et bien d’autres encore !\nElle ouvre de 9h à 17h toute la semaine.',
    },
  ];

  return (
    <div className="p-4 flex flex-col h-full border rounded-lg bg-gray-700 justify-end" style={{ borderRadius: '20px' }}>
      {messages.map((msg, index) => (
        <Bubble key={index} type={msg.type} text={msg.text} />
      ))}
    </div>
  );
};

export default Messages;
