// src/components/Messages.jsx

import React from 'react';
import Bubble from './bubble';

const Messages = ({ messages }) => {
  return (
    <div className="p-4 flex flex-col h-full border rounded-lg bg-gray-700 justify-end" style={{ borderRadius: '20px' }}>
      {messages.map((msg, index) => (
        <Bubble key={index} type={msg.type} text={msg.text} />
      ))}
    </div>
  );
};

export default Messages;
