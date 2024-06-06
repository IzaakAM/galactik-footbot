// src/components/Bubble.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Bubble = ({ type, text }) => {
  const isQuestion = type === 'question';

  return (
    <div className={`flex ${isQuestion ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`max-w-[80%] sm:max-w-[80%] lg:max-w-[60%] p-4 ${
            isQuestion 
          ? 'bg-black text-white rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none text-right'
          : 'bg-white text-black rounded-tl-[20px] rounded-tr-[20px] rounded-bl-none rounded-br-[20px] text-left'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

Bubble.propTypes = {
  type: PropTypes.oneOf(['question', 'answer']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Bubble;
