import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Sendbar from './components/sendbar';
import Messages from './components/messages';

function App() {

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          <Messages />
        </div>
        <Sendbar />
      </div>
    </div>
  );
}

export default App;
