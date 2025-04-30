import { motion } from "framer-motion";

export default function Section({ id, text }) {
  return (
    <motion.div 
      id={id}
      style={{ 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: "2rem", 
        textAlign: "center",
      }}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 style={{ fontSize: "2.8rem", textShadow: "0px 0px 10px #ffffff" }}>
        {text}
      </h1>
    </motion.div>
  );
}
