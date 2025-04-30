import React from 'react';

const Globalvision = () => {
    return (
        <div>
            <section id="global" style={{
  padding: "100px 20px",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "black", // if needed, or else remove
}}>
  
  {/* Heading */}
  <h2 style={{
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#00FFFF",
    textShadow: "0 0 20px #00FFFF",
    animation: "fadeInUp 1.5s ease",
    marginBottom: "20px",
    fontFamily: "'Rajdhani', sans-serif",
    letterSpacing: "2px",
  }}>
    Launch Global Moonshots 🌍
  </h2>

  {/* Subheading */}
  <p style={{
    fontSize: "1.6rem",
    color: "white",
    opacity: "0.8",
    marginTop: "10px",
    fontFamily: "'Rajdhani', sans-serif",
  }}>
    Don't settle for local wins.
  </p>

  {/* Optional: Rotating Earth image */}
  <img
    src="/earth.png" // replace this with your earth image path
    alt="Earth Rotating"
    style={{
      position: "absolute",
      bottom: "30px",
      right: "30px",
      width: "200px",
      opacity: "0.5",
      animation: "spinEarth 25s linear infinite",
    }}
  />

  {/* Floating stars optional (background stars moving) */}
  {/* You can add animated background later if you want */}

  {/* Animations Keyframes */}
  <style>
    {`
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes spinEarth {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}
  </style>

</section>

        </div>
    );
};

export default Globalvision;