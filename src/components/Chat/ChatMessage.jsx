import React from "react";
import { useUser } from "../../context/UserContext";

const ChatMessage = ({ message }) => {
  const { user } = useUser();
  const CHAT_AVATAR =
    "https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png";

  return (
    <div
      className={`d-flex flex-row mb-4 ${
        message.role === "user"
          ? "justify-content-end"
          : "justify-content-start"
      }`}
    >
      <img
        src={message.role === "user" ? user.avatar : CHAT_AVATAR}
        alt="avatar 1"
        className="avatar-img"
      />
      <div
        className={`p-3 ms-3 ${
          message.role === "user" ? "message-bg-user" : "message-bg-api"
        }`}
      >
        <p className="small mb-0">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
