// src/components/Sidebar.jsx

import React from 'react';
import Icons from '../constants/icons.jsx';
import logo from '../assets/logo.png';

const Sidebar = ({ clearMessages, openModal }) => {
  return (
    <div className="h-screen max-w-[225px] flex flex-col items-center bg-gray-800 p-[12px]">
      <div className="my-8">
        <img src={logo} alt="Logo" className="rounded-[20px] max-h-[128px] max-w-[128px] hover:opacity-75 transition-opacity duration-300" />
      </div>

      <div className="flex-grow flex flex-col justify-between items-center">
        <div className="flex flex-col space-y-12 mt-4">
          <button onClick={openModal} className="text-white hover:opacity-75 transition-opacity duration-300 bg-gray-900">
            <Icons.TipsAndUpdates style={{ fontSize: '48px' }} />
          </button>
          <button className="text-white hover:opacity-75 transition-opacity duration-300 bg-gray-900">
            <Icons.LightMode style={{ fontSize: '48px' }} />
          </button>
          <button onClick={clearMessages} className="text-white hover:opacity-75 transition-opacity duration-300 bg-gray-900">
            <Icons.DeleteForever style={{ fontSize: '48px' }} />
          </button>
        </div>
        <div className="mb-12">
          <button className="text-white hover:opacity-75 transition-opacity duration-300 bg-gray-900">
            <Icons.Quiz style={{ fontSize: '48px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
