import React from "react";
import ChatMessage from "./ChatMessage";

function MessageList({messages}) {
  return (
    <div className="message-list">
      {messages.map((message, index) => {
        return <ChatMessage message={message} key={index} />;
      })}
    </div>
  );
}

export default MessageList;
