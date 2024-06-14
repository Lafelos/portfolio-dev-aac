'use client';

import { useState } from 'react';
import ChatBox from '../ui/ChatBox';

const ChatButton: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div
        className="rounded-full w-12 h-12 bg-blue-500 flex items-center justify-center text-white cursor-pointer"
        onClick={handleChatToggle}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
      {showChat && <ChatBox />}
    </div>
  );
};

export default ChatButton;