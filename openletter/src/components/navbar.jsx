import React from "react";
import "./navbar.css"; // 

export default function Navbar() {
  const sections = [
    { id: "intro", title: "INTRODUCTION" },
    { id: "deeptech", title: "DEEP TECH" },
    { id: "why", title: "WHY IT MATTERS" },
    //{ id: "global", title: "GLOBAL VISION" },
    { id: "action", title: "CALL TO ACTION" },
    { id: "spirit", title: "THE SPIRIT" },
  ];

  return (
    <nav className="navbar">
      {sections.map((section) => (
        <a 
          key={section.id} 
          href={`#${section.id}`} 
          className="nav-link"
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
}
