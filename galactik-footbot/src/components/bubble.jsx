import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icons from '../constants/icons.jsx';

const Bubble = ({ type, text }) => {
  const isQuestion = type === 'question';

  const [vote, setVote] = useState(null); 
  
  const handleUpVote = () => {
    setVote(vote === 'up' ? null : 'up');
  };

  const handleDownVote = () => {
    setVote(vote === 'down' ? null : 'down');
  };

  return (
    <div className={`flex space-x-2 ${isQuestion ? 'justify-end' : 'justify-start'} my-2`}>
      <div
        className={`max-w-[80%] sm:max-w-[80%] lg:max-w-[60%] p-4 ${
          isQuestion 
        ? 'bg-black text-white text-[20px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-none text-right'
            : 'bg-white text-black text-[20px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-none rounded-br-[20px] text-left'
        }`}
      >
        {text}
      </div>
      {!isQuestion && (
          <div className="flex items-center">
            <button onClick={handleUpVote} className="focus:outline-none bg-transparent">
              {vote === 'up' ? (
                <Icons.ThumbUp className="text-green-200" />
              ) : (
                <Icons.ThumbUpAltOutlined className="text-gray-300" />
              )}
            </button>
            <button onClick={handleDownVote} className="focus:outline-none bg-transparent">
              {vote === 'down' ? (
                <Icons.ThumbDown className="text-red-200" />
              ) : (
                <Icons.ThumbDownAltOutlined className="text-gray-300" />
              )}
            </button>
          </div>
        )}
    </div>
  );
};

Bubble.propTypes = {
  type: PropTypes.oneOf(['question', 'answer']).isRequired,
  text: PropTypes.string.isRequired,
};

export default Bubble;
