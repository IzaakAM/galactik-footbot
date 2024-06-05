import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Sendbar from './components/sendbar';

function App() {

  return (
    <div className="flex h-screen w-screen">

      <Sidebar />
      <div className="flex flex-col w-screen">
        <Sendbar />
      </div>
    </div>
  );
}

export default App;
