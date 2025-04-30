import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "XNOR-BOT",
  initialMessages: [
    createChatBotMessage("Hello! I'm here to help you 🚀", {
      widget: "options",
    }),
  ],

  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => (
        <div>
          <button style={{color:"#00FFFF",cursor:"pointer",textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF",border: "1px solid #00FFFF",backgroundColor: "transparent",padding: "8px 12px",borderRadius: "10px",}} onClick={() => props.actionProvider.handleSiteInfo()}>
            What is this website?
          </button>
          <button style={{color:"#00FFFF",cursor:"pointer",textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF",border: "1px solid #00FFFF",backgroundColor: "transparent",padding: "8px 12px",borderRadius: "10px",}} onClick={() => props.actionProvider.handleTechStack()}>
            From which language is it built?
          </button>
          <button style={{color:"#00FFFF",cursor:"pointer",textShadow: "0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF",border: "1px solid #00FFFF",backgroundColor: "transparent",padding: "8px 12px",borderRadius: "10px",}} onClick={() => props.actionProvider.handleAboutUs()}>
            About ME
          </button>
          
        </div>
      ),
    },
  ],

  customComponents: {
    botAvatar: () => (
      <div
        style={{
          fontSize: "2rem",
          background: "transparent",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        🤖
      </div>
    ),
  },

  customStyles: {
    botMessageBox: {
      backgroundColor: "#111", // or match your site's dark neon look
    },
    chatButton: {
      backgroundColor: "#00FFFF",
    },
    botMessage: {
        color: "#00FFFF", // neon blue text color
      },
  },
};

export default config;
