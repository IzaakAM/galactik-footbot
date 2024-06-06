import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Sendbar from './components/sendbar';
import Messages from './components/messages';

function App() {

  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'question', text: message },
      { type: 'answer', text: 'Merci pour votre question. Nous reviendrons vers vous bientôt.' },
    ]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar clearMessages={clearMessages}/>
      <div className="flex flex-col flex-grow">
        <div className="flex-grow">
          <Messages messages={messages}/>
        </div>
        <Sendbar addMessage={addMessage} />
      </div>
    </div>
  );
}

export default App;
