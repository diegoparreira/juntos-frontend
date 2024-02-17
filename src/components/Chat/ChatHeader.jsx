import React from "react";

const ChatHeader = ({toogleChat}) => {
  return (
    <div
      className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
      id="card-header"
      onClick={toogleChat}
    >
      <p className="mb-0 fw-bold">Assistente ChatGPT</p>
    </div>
  );
};

export default ChatHeader;
