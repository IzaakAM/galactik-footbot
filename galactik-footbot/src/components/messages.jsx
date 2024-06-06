import React from 'react';
import Bubble from './bubble';
import robot from '../assets/robot.png';

const Messages = ({ messages }) => {
  return (
    <div className="relative flex flex-col h-full border rounded-lg bg-gray-700">
      <div className="flex justify-center items-center mb-4">
        <img src={robot} alt="Robot" className="h-[128px] w-[128px]" />
      </div>
      <div className="p-4 flex flex-col h-full justify-end" style={{ borderRadius: '20px', position: 'relative' }}>
        {messages.length === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-600 text-[64px] text-center">Bienvenue sur Galactik Footbot !</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <Bubble key={index} type={msg.type} text={msg.text} />
          ))
        )}
      </div>
    </div>
  );
};

export default Messages;
