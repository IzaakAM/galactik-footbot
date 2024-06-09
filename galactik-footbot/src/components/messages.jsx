import React, { useEffect, useRef, useState } from 'react';
import Bubble from './bubble';
import robot from '../assets/robot.png';
import robot2 from '../assets/robot2.png';

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);
  const [isRobot2Visible, setIsRobot2Visible] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRobotClick = () => {
    setIsRobot2Visible(true);
    setTimeout(() => {
      setIsRobot2Visible(false);
    }, 300);
  };

  return (
    <div className="relative flex flex-col h-full border rounded-lg bg-gray-700 border-gray-300">
      <div className="flex justify-center items-center mt-[12px] z-10">
        <button className="bg-gray-700 focus:outline-none" onClick={handleRobotClick}>  
          <img
            src={isRobot2Visible ? robot2 : robot}
            alt="Robot"
            className="h-[128px] w-[128px] cursor-pointer"
          />
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto" style={{ borderRadius: '20px' }}>
        <div className="flex flex-col justify-end min-h-full relative">
          {messages.length === 0 ? (
            <div className="absolute inset-0 flex items-center justify-center p-4 z-0">
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
