import React, { useState } from 'react';
import {BsFillSendFill} from "react-icons/bs"

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue('');
      setTimeout(sendBotResponse, 500); // Simulate delay before bot responds
    }
  };

  const sendBotResponse = () => {
    setMessages([
      ...messages,
      { text: getBotResponse(inputValue), isUser: false },
    ]);
  };

  const getBotResponse = (message) => {
    // Simple logic to generate a bot response based on user message
    if (message.toLowerCase().includes('hello')) {
      return 'Hello! How can I assist you?';
    } else if (message.toLowerCase().includes('help')) {
      return 'Sure! I can help you with that.';
    } else if (message.toLowerCase().includes('bye')) {
      return 'Goodbye! Have a great day.';
    } else {
      return "I'm sorry, I didn't understand that.";
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <header className="bg-violet-600 text-white py-4 px-6 flex gap-2 items-center">
        <img src="https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-filled-color/300/141453384Untitled-3-1024.png" className='h-12 w-12 rounded-full' alt="" />
        <div className="grid">
            <h1 className="text-2xl font-bold">Bot</h1>
            <h3 className='text-white'>Full Time Support</h3>
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="max-w-lg mx-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.isUser ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`${
                  message.isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                } p-4 rounded-lg max-w-xs break-words`}
              >
                {!message.isUser && (
                  <img
                    className="w-6 h-6 rounded-full mb-2"
                    src="https://cdn3.iconfinder.com/data/icons/chat-bot-emoji-filled-color/300/141453384Untitled-3-1024.png"
                    alt="User Avatar"
                  />
                )}
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-200 py-4 px-4">
        <div className="max-w-lg mx-auto flex">
          <input
            type="text"
            className="flex-1 py-2 px-4 rounded-full bg-white focus:outline-none"
            placeholder="Type your message..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="ml-2 bg-violet-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
            onClick={handleSendMessage}
          >
            <BsFillSendFill/>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
