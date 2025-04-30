// src/ActionProvider.js
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleHello = () => {
      const message = this.createChatBotMessage("Hi there! How can I help you?");
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    handleSiteInfo = () => {
      const message = this.createChatBotMessage(
        "This website is a open letter for all techies out there to build some extrodinary stuff and fostering communication.💪"
      );
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    handleTechStack = () => {
      const message = this.createChatBotMessage(
        "This website is built using React.js 😎"
      );
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    handleAboutUs = () => {
      const message = this.createChatBotMessage(
        "Hi, I’m Srikanth Joshi — a passionate developer who loves to build, learn, and share knowledge. 💻 I'm deeply into web development and specialize in the MERN stack. Always exploring, always evolving. 😊"
      );
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    

    handlepiyush = () => {
      const message = this.createChatBotMessage(
        "Piyush Goyal is the Minister of Commerce and Industry, Consumer Affairs, Food and Public Distribution, and Textiles in India. He is a member of the Bharatiya Janata Party (BJP) and has been serving in various capacities in the Indian government."
      );
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };

    handleUnknown = () => {
      const message = this.createChatBotMessage(
        "I'm not sure how to respond to that. Can you please rephrase?"
      );
      this.setState(prev => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    };
  }
  
  export default ActionProvider;
  