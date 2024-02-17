import React, { useState } from "react";
import OpenAI from "openai";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import "./chat.css";

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const welcomeMessage = {
  role: "assistant",
  content: "No que posso te ajudar hoje?",
};

function Chat() {
  const [chatHistory, setChatHistory] = useState([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleInputSend = async (userMessage) => {
    setIsLoading(true);
    setChatHistory((prevChat) => [
      ...prevChat,
      { role: "user", content: userMessage },
    ]);

    const chatCompletion = await openai.chat.completions.create({
      messages: [...chatHistory, { role: "assistant", content: userMessage }],
      model: "gpt-3.5-turbo",
    });

    setChatHistory((prevChat) => [
      ...prevChat,
      {
        role: "assistant",
        content: chatCompletion.choices[0].message.content,
      },
    ]);

    setIsLoading(false);
  };

  const toggleChat = () => {
    setShow(!show);
  };

  return (
    <section id="chat-section">
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4 w-100">
          <div id="chat1">
            <ChatHeader toogleChat={toggleChat} />
            {show && (
              <div className="p-3">
                <MessageList className="position-relative overflow-scroll h-30" messages={chatHistory} />
                <ChatInput
                  handleSendMessage={handleInputSend}
                  isLoading={isLoading}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chat;
