class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("hey") || lowercase.includes("greetings")) {
        this.actionProvider.handleHello();
      }
  
      else if (
        lowercase.includes("what is this website") ||
        lowercase.includes("what's this site about") ||
        lowercase.includes("what is this site") ||
        lowercase.includes("purpose") ||
        lowercase.includes("what is this") ||
        lowercase.includes("what is this website about") ||
        lowercase.includes("what is this site about") ||
        lowercase.includes("what is this site") 
        
      ) {
        this.actionProvider.handleSiteInfo();
      }
      
      else if(lowercase.includes("who is piyush goyal") || lowercase.includes("who is piyush") || lowercase.includes("who is goyal") || lowercase.includes("who is minister of industry and supply of india")  ) {
        this.actionProvider.handlepiyush();
      }

      
      else{
        this.actionProvider.handleUnknown();
      }

      
    }

    
  }
  
  export default MessageParser;
  