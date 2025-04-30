import React from "react";

export default function Introduction() {
  const scrollToDeepTech = () => {
    const element = document.getElementById("deeptech");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="intro"
      style={{
        height: "100vh",
        background: "url('/space-bg.jpg') center/cover no-repeat black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 2rem",
      }}
    >
      <img
        src="/rocket.png"
        alt="rocket"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50px",
          width: "250px",
          animation: "floatRocket  4s ease-in-out infinite",
        }}
      />
      <img
        src="/sat.png"
        alt="Satellite"
        className="satellite"
      />
       <img
        //src="/neonearth.jpg"
        //alt="earth"
        //style={{
            //position: "absolute",
            //bottom: "50px",
            //right: "10px",
            //width: "350px",
            //animation: "floatRocket  4s ease-in-out infinite",
            //transform: "scaleY(-1)",
          //}}
      />
       

      <h1 style={{ fontSize: "3rem", fontFamily: "'Rajdhani', sans-serif" }}>
        "It's time to aim beyond the stars."
      </h1>

      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "1.5rem",
          maxWidth: "800px",
          fontFamily: "'Rajdhani', sans-serif",
          lineHeight: "1.6",
        }}
      >
        The next frontier for India’s startups isn’t just faster deliveries —
        it's pioneering deep tech: AI, Robotics, Space, Quantum Computing, EVs,
        and Global Moonshots.
      </p>

      <button
        onClick={scrollToDeepTech}
        style={{
          marginTop: "3rem",
          padding: "0.8rem 2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "black",
          backgroundColor: "#00FFFF",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          transition: "transform 0.3s",
          boxShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF",
        }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        Read the Open Letter ↓
      </button>
    </section>
  );
}
