import React, { useState } from "react";
import OpenAI from "openai";
import "./chat.css";
import { MDBBtn, MDBSpinner } from "mdb-react-ui-kit";
import ChatIcon from "@mui/icons-material/Chat";
import { useUser } from "../../context/UserContext";

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const CHAT_AVATAR =
  "https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png";

function Chat() {
  const { user } = useUser();
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", content: "No que posso te ajudar hoje?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputSend = async () => {
    setIsLoading(true);
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: message },
    ]);

    const chatCompletion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: "assistant", content: message }],
      model: "gpt-3.5-turbo",
    });

    setChatHistory((prevChat) => [
      ...prevChat,
      {
        role: "assistant",
        content: chatCompletion.choices[0].message.content,
      },
    ]);

    setMessage("");
    setIsLoading(false);
  };

  const ChatHeader = () => {
    return (
      <div
        className="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
        id="card-header"
      >
        <i className="fas fa-angle-left"></i>
        <p className="mb-0 fw-bold">Assistente ChatGPT</p>
        <i className="fas fa-times"></i>
      </div>
    );
  };

  const ChatMessage = ({ message }) => {
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

  const ChatInput = () => {
    const [userMessage, setUserMessage] = useState("");

    const handleMessage = (e) => {
      setUserMessage(e.target.value);
    };

    const handleMessageSend = async () => {
      setMessage(userMessage);
      await handleInputSend();
      setUserMessage("");
    };

    return (
      <div className="form-outline">
        <textarea
          className="form-control"
          id="textAreaExample"
          rows="4"
          value={userMessage}
          onChange={handleMessage}
        ></textarea>
        <label className="form-label" for="textAreaExample">
          Type your message
        </label>

        <MDBBtn
          className="me-2"
          disabled={isLoading}
          onClick={handleMessageSend}
        >
          {isLoading ? (
            <>
              <MDBSpinner size="sm" role="status" tag="span" />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            "Perguntar"
          )}
        </MDBBtn>
      </div>
    );
  };

  return (
    <section id="chat-section">
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card" id="chat1">
              <ChatHeader />
              <div className="card-body">
                {chatHistory.map((message, index) => {
                  return <ChatMessage message={message} key={index} />;
                })}
              </div>
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
