import React from 'react';

const Spirit = () => {
  return (
    <section
      id="spirit"
      style={{
        padding: "80px 20px",
        backgroundColor: "black",
        textAlign: "center",
        color: "#00FFFF",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "0 0 20px #FF00FF",
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: "40px",
        }}
      >
        THE SPIRIT OF INDIA'S TECH JOURNEY
      </h2>
      <img src='/spirit.png' alt="motivation pic" style={{width:"1250px",height:"1000px"}}/>

      {/* Motivational Quote */}
      <blockquote
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#FFFFFF",
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: "30px",
          fontStyle: "italic",
          textShadow: "0 0 10px #00FFFF",
        }}
      >
        "The future belongs to those who believe in the beauty of their dreams."
      </blockquote>

      {/* Quote Author */}
      <p
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          color: "#FF00FF",
          fontFamily: "'Rajdhani', sans-serif",
        }}
      >
        – Eleanor Roosevelt
      </p>
    </section>
  );
};

export default Spirit;
