import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Sendbar from './components/sendbar';
import Messages from './components/messages';
import SuggestionModal from './components/suggestion';
import Notification from './components/notification';

function App() {
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSendSuggestion = (message) => {
    console.log(message); // Affiche le message dans le terminal
    setShowNotification(true); // Affiche la notification
    setTimeout(() => {
      setShowNotification(false); // Cache la notification après 2 secondes
    }, 2000);
    closeModal();
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar clearMessages={clearMessages} openModal={openModal} />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow min-h-[500px] overflow-hidden">
          <Messages messages={messages} />
        </div>
        <Sendbar addMessage={addMessage} />
      </div>
      <SuggestionModal isOpen={isModalOpen} onClose={closeModal} onSend={handleSendSuggestion} />
      <Notification show={showNotification} message="Suggestion envoyée avec succès!" />
    </div>
  );
}

export default App;
