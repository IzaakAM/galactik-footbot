import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Sendbar from './components/sendbar';
import Messages from './components/messages';

function App() {

  const [messages, setMessages] = useState([
    { type: 'question', text: 'Qui est le responsable pédagogique des ICY ?' },
    {
      type: 'answer',
      text: 'Antoine Gallais. Voici ses coordonnées :\n01 23 45 67 89\nantoine.gallais@uphf.fr\nBureau 175, Abel de Pujol 2',
    },
    { type: 'question', text: 'Quelles sont les horaires d\'ouverture de la BU ?' },
    {
      type: 'answer',
      text: 'La bibliothèque universitaire est un endroit où tu peux travailler, trouver des ressources pédagogiques, imprimer des copies et bien d’autres encore !\nElle ouvre de 9h à 17h toute la semaine.',
    },
  ]);

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
