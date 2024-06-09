import React, { useEffect, useRef } from 'react';
import Bubble from './bubble';
import robot from '../assets/robot.png';

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="relative flex flex-col h-full border rounded-lg bg-gray-700 border-gray-300">
      <div className="flex justify-center items-center mt-[12px]">
        <img src={robot} alt="Robot" className="h-[128px] w-[128px]" />
      </div>
      <div className="flex-grow p-4 overflow-y-auto" style={{ borderRadius: '20px' }}>
        <div className="flex flex-col justify-end min-h-full">
          {messages.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-gray-600 text-[64px] text-center">Bienvenue sur Galactik Footbot !</p>
            </div>
          ) : (
            <>
              {messages.map((msg, index) => (
                <Bubble key={index} type={msg.type} text={msg.text} />
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
