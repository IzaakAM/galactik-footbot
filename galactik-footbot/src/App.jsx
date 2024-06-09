import { useState } from 'react';
import './App.css';
import './index.css';
import Sidebar from './components/sidebar';
import Sendbar from './components/sendbar';
import Messages from './components/messages';
import SuggestionModal from './components/suggestion';
import Notification from './components/notification';
import InformationModal from './components/informations';

function App() {
  const [messages, setMessages] = useState([]);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
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

  const openSuggestionModal = () => {
    setIsSuggestionModalOpen(true);
  };

  const closeSuggestionModal = () => {
    setIsSuggestionModalOpen(false);
  };

  const openInformationModal = () => {
    setIsInformationModalOpen(true);
  };

  const closeInformationModal = () => {
    setIsInformationModalOpen(false);
  };

  const handleSendSuggestion = (message) => {
    console.log(message);
    setShowNotification(true); 
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
    closeSuggestionModal(); 
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar clearMessages={clearMessages} openModal={openSuggestionModal} openInformationModal={openInformationModal} />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow min-h-[500px] overflow-hidden">
          <Messages messages={messages} />
        </div>
        <Sendbar addMessage={addMessage} />
      </div>
      <SuggestionModal isOpen={isSuggestionModalOpen} onClose={closeSuggestionModal} onSend={handleSendSuggestion} />
      <InformationModal isOpen={isInformationModalOpen} onClose={closeInformationModal} />
      <Notification show={showNotification} message="Suggestion envoyée avec succès!" />
    </div>
  );
}

export default App;