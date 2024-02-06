import React, { useContext, useEffect, useState } from "react";
import "../../styles/logout.css";

export const Message = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "Tom", content: "Hey there!" },
    { id: 2, sender: "You", content: "Hi Tom! How are you?" },
    { id: 3, sender: "Tom", content: "I'm good, thanks. Just enjoying the day." },
  ]);

  const [lastResponse, setLastResponse] = useState("no"); 
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sendMessage = async () => {
    if (messageInput.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      content: messageInput,
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");

    setIsTyping(true);
    await delay(2000); 

    const nextResponse = lastResponse === "yes" ? "no" : "yes"; 
    const randomMessage = {
      id: messages.length + 2,
      sender: "Tom",
      content: nextResponse,
    };

    setMessages((prevMessages) => [...prevMessages, randomMessage]);
    setLastResponse(nextResponse);
    setIsTyping(false);
  };

  return (
    <div className="full-page-container">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`chat-bubble ${message.sender === "You" ? "sent" : "received"}`}>
              <span className="sender">{message.sender}:</span> {message.content}
            </div>
          ))}
          {isTyping && (
            <div className="chat-bubble received">
              <span className="sender">Tom:</span> <span className="typing-indicator">...</span>
            </div>
          )}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={messageInput}
            onChange={handleInputChange}
          />
          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
