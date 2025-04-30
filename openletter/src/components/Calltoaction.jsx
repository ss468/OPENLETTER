import React, { useEffect, useState } from "react";

const Calltoaction = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the element should be visible before triggering
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      });
    }, options);

    // Observe the section containing the cards
    const section = document.getElementById("action");
    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="action"
      style={{
        padding: "100px 20px",
        backgroundColor: "black",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: "#00FFFF",
          textShadow: "0 0 20px #00FFFF",
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: "50px",
        }}
      >
        CALL TO ACTION 🚀
      </h2>

      {/* Heading */}
      <h2
        style={{
          fontSize: "2.8rem",
          fontWeight: "bold",
          color: "#FF00FF",
          textShadow: "0 0 20px #FF00FF",
          fontFamily: "'Rajdhani', sans-serif",
          marginBottom: "50px",
        }}
      >
        The Roadmap to India's Tech Power
      </h2>

      {/* Roadmap Cards with Arrows */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {[
          { title: "Ignite Innovation", delay: "0s" },
          { title: "Upskill Talent", delay: "0.2s" },
          { title: "Launch Moonshots", delay: "0.4s" },
          { title: "Scale Globally", delay: "0.6s" },
          { title: "Achieve Excellence", delay: "0.8s" },
        ].map((step, index, arr) => (
          <>
            {/* Card */}
            <div
              key={index}
              style={{
                backgroundColor: "rgba(255, 0, 255, 0.1)",
                border: "2px solid #FF00FF",
                borderRadius: "12px",
                padding: "30px",
                width: "250px",
                color: "white",
                fontFamily: "'Rajdhani', sans-serif",
                fontSize: "1.4rem",
                boxShadow: "0 0 8px #FF00FF, 0 0 20px #FF00FF",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(50px)",
                transition: `transform 1s ease-out, opacity 1s ease-out`, // Slowed down transition
                animation: inView ? `floatUp 3s ease ${step.delay} forwards` : "", // Slower animation
              }}
            >
              {step.title}
            </div>

            {/* Arrow (but not after last card) */}
            {index !== arr.length - 1 && (
              <div
                style={{
                  fontSize: "2rem",
                  color: "#00FFFF",
                  textShadow: "0 0 10px #00FFFF",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(50px)",
                  transition: `transform 3s ease-out, opacity 3s ease-out`, // Slower transition
                  animation: inView ? `floatUp 5s ease ${step.delay} forwards` : "", // Slower animation
                }}
              >
                ➔
              </div>
            )}
          </>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px" }}>
  {/* Card 1 */}
  <div style={{
    backgroundColor: "rgba(0, 255, 255, 0.1)",
    border: "2px solid #00FFFF",
    borderRadius: "12px",
    padding: "30px",
    width: "300px",
    color: "#00FFFF",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1.4rem",
    textAlign: "center",
    boxShadow: "0 0 8px #00FFFF, 0 0 20px #00FFFF",
    animation: "floatUp 2s ease 0.2s forwards",
    opacity: 0,
    transform: "translateY(50px)",
  }}>
    This roadmap is not just a plan; it’s a journey that will shape the future of India’s tech landscape.
  </div>

  {/* Card 2 */}
  <div style={{
    backgroundColor: "rgba(255, 0, 255, 0.1)",
    border: "2px solid #FF00FF",
    borderRadius: "12px",
    padding: "30px",
    width: "300px",
    color: "#FF00FF",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1.4rem",
    textAlign: "center",
    boxShadow: "0 0 8px #FF00FF, 0 0 20px #FF00FF",
    animation: "floatUp 2s ease 0.4s forwards",
    opacity: 0,
    transform: "translateY(50px)",
  }}>
    Each milestone represents the passion, innovation, and hard work of our people.
  </div>

  {/* Card 3 */}
  <div style={{
    backgroundColor: "rgba(255, 255, 0, 0.1)",
    border: "2px solid #FFFF00",
    borderRadius: "12px",
    padding: "30px",
    width: "300px",
    color: "#FFFF00",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1.4rem",
    textAlign: "center",
    boxShadow: "0 0 8px #FFFF00, 0 0 20px #FFFF00",
    animation: "floatUp 2s ease 0.6s forwards",
    opacity: 0,
    transform: "translateY(50px)",
  }}>
    The future of India’s technology ecosystem is in our hands. Let’s push boundaries and redefine what's possible.
  </div>

  {/* Card 4 */}
  <div style={{
    backgroundColor: "rgba(0, 255, 0, 0.1)",
    border: "2px solid #00FF00",
    borderRadius: "12px",
    padding: "30px",
    width: "300px",
    color: "#00FF00",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1.4rem",
    textAlign: "center",
    boxShadow: "0 0 8px #00FF00, 0 0 20px #00FF00",
    animation: "floatUp 2s ease 0.8s forwards",
    opacity: 0,
    transform: "translateY(50px)",
  }}>
    Let’s fuel our ambitions with action, upskill our talent with knowledge, and create solutions that impact lives.
  </div>

  {/* Card 5 */}
  <div style={{
    backgroundColor: "rgba(255, 165, 0, 0.1)",
    border: "2px solid #FFA500",
    borderRadius: "12px",
    padding: "30px",
    width: "300px",
    color: "#FFA500",
    fontFamily: "'Rajdhani', sans-serif",
    fontSize: "1.4rem",
    textAlign: "center",
    boxShadow: "0 0 8px #FFA500, 0 0 20px #FFA500",
    animation: "floatUp 2s ease 1s forwards",
    opacity: 0,
    transform: "translateY(50px)",
  }}>
    From igniting innovation to achieving excellence, the path we follow today will determine tomorrow's future.
  </div>
</div>




      {/* Animations */}
      <style>
        {`
          @keyframes floatUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Calltoaction;
