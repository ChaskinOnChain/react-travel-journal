import React from "react";
import Globe from "./globe.png";

export default function Navbar() {
  return (
    <nav>
      <img className="globe" src={Globe} alt="Pic of Globe" />
      <p>my travel journal.</p>
    </nav>
  );
}
