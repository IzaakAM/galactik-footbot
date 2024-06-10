import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Messages from './components/messages';
import Sendbar from './components/sendbar';
import SuggestionModal from './components/suggestion';
import InformationModal from './components/informations';
import Notification from './components/notification';
import { darkModeColors, lightModeColors } from './constants/styles';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [isSuggestionModalOpen, setIsSuggestionModalOpen] = useState(false);
  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

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
    console.log(message); // Affiche le message dans le terminal
    setShowNotification(true); // Affiche la notification
    setTimeout(() => {
      setShowNotification(false); // Cache la notification après 2 secondes
    }, 2000);
    closeSuggestionModal(); // Fermer la modal après l'envoi
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentColors = isDarkMode ? darkModeColors : lightModeColors;

  return (
    <div className={`flex h-screen w-screen ${currentColors.background}`}>
      <Sidebar clearMessages={clearMessages} openModal={openSuggestionModal} openInformationModal={openInformationModal} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="flex flex-col flex-grow">
        <div className="flex-grow min-h-[500px] overflow-hidden">
          <Messages messages={messages} isDarkMode={isDarkMode} />
        </div>
        <Sendbar addMessage={addMessage} isDarkMode={isDarkMode} />
      </div>
      <SuggestionModal isOpen={isSuggestionModalOpen} onClose={closeSuggestionModal} onSend={handleSendSuggestion} isDarkMode={isDarkMode} />
      <InformationModal isOpen={isInformationModalOpen} onClose={closeInformationModal} isDarkMode={isDarkMode} />
      <Notification show={showNotification} message="Suggestion envoyée avec succès!" />
    </div>
  );
};

export default App;
