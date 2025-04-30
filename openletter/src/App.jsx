import Introduction from "./components/Introduction.jsx";
import Navbar from "./components/navbar.jsx";
import Section from "./components/section.jsx";
import "./App.css";
import DeepTech from "./components/Deeptech.jsx";
import WhyItMatters from "./components/Whymatters.jsx";
import Globalvision from "./components/Globalvision.jsx";
import Calltoaction from "./components/Calltoaction.jsx";
import Spirit from "./components/Spirit.jsx";
import ChatbotComponent from "./components/chatbot/Chatbotcomponent.jsx";


import "./components/Animatedbackground.css";

function App() {
  return (
    <>
      <div className="stars"></div>
      
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <Introduction/>
      <DeepTech />
      <WhyItMatters />
      
      <Calltoaction />
    

     <Spirit />
     <ChatbotComponent />
    </div> 
    </>
     
    
  );
}

export default App;
