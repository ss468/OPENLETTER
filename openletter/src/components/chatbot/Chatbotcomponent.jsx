import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./Actionprovider";
import { FaRobot } from "react-icons/fa";

const ChatbotComponent = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <>
      {/* Floating Robot Icon */}
      <div
        onClick={() => setShowChat((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#00FFFF",
          borderRadius: "50%",
          padding: "15px",
          cursor: "pointer",
          zIndex: 9999,
          boxShadow: "0 0 20px #00FFFF",
        }}
      >
        <div style={{ fontSize: "35px", cursor: "pointer", backgroundColor: "transparent" }}>🤖</div>

        

      </div>

      {/* Chatbot Box */}
      {showChat && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "30px",
            zIndex: 9999,
            width: "350px",
          }}
        >
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {/* Style override for dark theme */}
      <style>
        {`
          .react-chatbot-kit-chat-container {
            background-color: #0d0d0d !important;
            border: 2px solid #00ffff;
            box-shadow: 0 0 20px #00ffff;
            border-radius: 12px;
          }

          .react-chatbot-kit-chat-bot-message {
            background-color: #1a1a1a !important;
            color: white !important;
            border-radius: 8px;
          }

          .react-chatbot-kit-chat-input {
            background-color: #121212 !important;
            color: white !important;
            border: 1px solid #00ffff;
            border-radius: 8px;
          }

          .react-chatbot-kit-chat-btn-send {
            background-color: #00ffff !important;
            border-radius: 8px;
          }
        `}
      </style>
    </>
  );
};

export default ChatbotComponent;
