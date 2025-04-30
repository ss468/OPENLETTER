import React, { useState } from "react";

export default function DeepTech() {
  const techFields = [
    {
      id: "ai",
      title: "Artificial Intelligence & Machine Learning",
      description: "The brain behind tomorrow’s world.AI is transforming industries — from autonomous vehicles and personalized healthcare to intelligent finance.It’s not just automation, it's human-level reasoning at machine speed.",
      image: "/ai.jpg",
    },
    {
      id: "semiconductors",
      title: "Semiconductors",
      description: "The silent powerhouse of the digital age.Semiconductors are the foundation of every device — smartphones, computers, satellites, even electric cars.Innovation here means faster, smarter, and greener technology for the future.",
      image: "/semiconductor.jpg",
    },
    {
      id: "robotics",
      title: "Robotics",
      description: "Machines that think, move, and work alongside humans.Robotics is revolutionizing industries like healthcare (surgical robots), space (rovers), and manufacturing (automation).Building robots = Building the workforce of the future.",
      image: "/robotics.png",
    },
    {
      id: "quantum",
      title: "Quantum Computing",
      description: "Beyond the limits of classical computers.Quantum Computing unlocks a world where drugs are designed atom-by-atom, cryptography is unbreakable, and simulations recreate the universe itself.It’s not faster computers — it’s a new kind of intelligence.",
      image: "/quantum.jpg",
    },
    {
      id: "space",
      title: "Space Tech",
      description: "Pushing boundaries beyond Earth.Satellites connecting the globe, Mars missions, lunar bases — space tech is unlocking navigation, communication, defense, and exploration at cosmic levels.Humanity's next frontier is the stars.",
      image: "/space.jpg",
    },
    {
      id: "sustainable",
      title: "Sustainable Energy",
      description: "Powering the future without harming the planet.From solar panels and wind turbines to next-gen nuclear fusion, sustainable energy is the key to solving the climate crisis while fueling innovation.Clean energy isn’t optional — it’s destiny.",
      image: "/sustainable.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? techFields.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === techFields.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      id="deeptech"
      style={{
        minHeight: "100vh",
        background: "transparent",
        backgroundImage: "url('/space-bg.jpg')",
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "4rem",
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: "20px",
          color: "#00FFFF",
          textAlign: "center",
        }}
      >
        "Where to Focus 🤔?!..."
      </h1>

      {/* Card Container */}
      <div
        style={{
          width: "100vw",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.7s ease",
            transform: `translateX(-${currentIndex * 80}vw)`,
          }}
        >
          {techFields.map((field) => (
            <div
              key={field.id}
              className="card"
              style={{
                width: "75vw",
                minWidth: "75vw",
                height: "60vh",
                backgroundImage: `url(${field.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 2.5vw",
                boxShadow: "0 6px 20px rgba(0,0,0,0.8)",
                position: "relative",
                overflow: "hidden",
                backgroundColor:"transparent"
              }}
            >
              {/* Dark Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                }}
              ></div>

              {/* Text on top of overlay */}
              <h2
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: "3rem",
                  color: "#00FFFF",
                  marginBottom: "10px",
                  background: "transparent",

                  zIndex: 1,
                }}
              >
                {field.title}
              </h2>
              <p
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: "1.5rem",
                  color: "white",
                  maxWidth: "600px",
                  textAlign: "center",
                  background: "transparent",

                  zIndex: 1,
                }}
              >
                {field.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            background: "transparent",
            border: "2px solid #00FFFF",
            borderRadius: "50%",
            color: "#00FFFF",
            fontSize: "2rem",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#00FFFF";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#00FFFF";
          }}
        >
          &lt;
        </button>

        <button
          onClick={handleNext}
          style={{
            background: "transparent",
            border: "2px solid #00FFFF",
            borderRadius: "50%",
            color: "#00FFFF",
            fontSize: "2rem",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            transition: "all 0.4s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#00FFFF";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#00FFFF";
          }}
        >
          &gt;
        </button>
      </div>
      <div style={{
  width: "100%",    // Make it full width
  display: "flex",
  justifyContent: "flex-end",  // Push child to right
  alignItems: "center",
  marginTop: "0px",  // Adjust vertical space
  
}}>
  <button
    style={{
      padding: "14px 28px",
      backgroundColor: "#00FFFF",
      border: "none",
      color: "black",
      fontSize: "1.2rem",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "10px",
      letterSpacing: "1px",
      boxShadow: "0 0 10px #00FFFF, 0 0 20px #00FFFF",
      marginRight: "50px", // 👈 extra push from right wall (optional)
      
    }}
    onClick={() => {
      document.getElementById("why").scrollIntoView({ behavior: "smooth" });
    }}
  >
    READ MORE ⬇️
  </button>
</div>



    </section>
  );
}
