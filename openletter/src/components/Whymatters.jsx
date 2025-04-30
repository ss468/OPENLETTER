import { FaChartLine, FaUserTie, FaGlobeAsia, FaRobot ,FaLock,FaWrench,FaRecycle,FaTheaterMasks} from "react-icons/fa";

export default function WhyItMatters() {
  const points = [
    {
      icon: <FaChartLine size={40} color="#00FFFF" />,
      title: "Economic Boost",
      description:
        "Deep-tech innovation drives GDP growth, startups, and national prosperity.",
      color: "#00FFFF",
    },
    {
      icon: <FaUserTie size={60} />,
      title: "Job Creation",
      description:
        "Massive employment across AI, robotics, quantum, space and energy sectors.",
      color: "#FF00FF",
    },
    {
      icon: <FaGlobeAsia size={60} />,
      title: "Global Leadership",
      description:
        "Positions India at the forefront of future technologies worldwide.",
      color: "#00FF7F",
    },
    {
      icon: <FaRobot size={60} />,
      title: "Tech Dominance",
      description:
        "Secures India's role in shaping humanity’s next big frontiers.",
      color: "#FFFF00",
    },
    {
      icon: <FaLock size={60} color="#FFA500" />,
      title: "National Security",
      description:
        "Advanced tech strengthens cyber defense, surveillance, and strategic capabilities.",
      color: "#FFA500",
    },
    {
      icon: <FaWrench size={60} color="#1E90FF" />,
      title: "Self-Reliance",
      description:
        "Reduces dependency on imports by fostering innovation within Indian borders.",
      color: "#1E90FF",
    }
,
    {
      icon: <FaRecycle size={60} color="#FF4500" />,
      title: "Sustainable Future",
      description:
        "Innovations in energy and environment lead to a greener planet.",
      color: "#FF4500",
    },
    {
      icon: <FaTheaterMasks size={60} color="#8A2BE2" />,
      title: "Cultural Renaissance",
      description:
        "Fosters a culture of innovation, creativity, and scientific inquiry.",
      color: "#8A2BE2",
    },    
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
    <section
      id="why"
      style={{
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          color: "#00FFFF",
          marginBottom: "40px",
          fontFamily: "'Rajdhani', sans-serif",
          textAlign: "center",
        }}
      >
        Why It Matters
      </h1>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          maxWidth: "1400px",
        }}
      >
        {points.map((point, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#111111",
              borderRadius: "20px",
              padding: "30px",
              width: "300px",
              height: "380px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              boxShadow: `0 0 20px ${point.color}`,
              animation: "float 3s ease-in-out infinite",
              animationDelay: `${index * 0.3}s`, // 👉 NEW LINE for wave delay
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.08)";
              e.currentTarget.style.boxShadow = `0 0 30px ${point.color}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = `0 0 20px ${point.color}`;
            }}
          >
            <div
              style={{
                color: point.color,
                marginBottom: "20px",
                textShadow: `0 0 10px ${point.color}, 0 0 20px ${point.color}`,
              }}
            >
              {point.icon}
            </div>
            <h2
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "1.8rem",
                marginBottom: "10px",
                backgroundColor: "transparent",
               
                textShadow: `
    0 0 5px ${point.color},
    0 0 10px ${point.color},
    0 0 20px ${point.color},
    0 0 40px ${point.color}
  `,
              }}
            >
              {point.title}
            </h2>
            <p
              style={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                color: "lightgray",
                lineHeight: "1.5",
                backgroundColor: "transparent",
                maxWidth: "80%",
              }}
            >
              {point.description}
            </p>
          </div>
        ))}
      </div>
      

      
      
      
      
      

      {/* Floating Animation */}
      <style>
        {`
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0px);
      }
    }
      


  `}
      </style>
      
    </section>
    </div>
   
  );
}
