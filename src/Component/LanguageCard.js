import React from "react";

export default function LanguagesCard({ name, level }) {
  const getRating = (lvl) => {
    switch (lvl.toLowerCase()) {
      case "native":
        return 5;
      case "fluent":
        return 4;
      case "intermediate":
        return 3;
      case "basic (a2)":
        return 2;
      default:
        return 1;
    }
  };

  const filledDots = getRating(level);

  return (
    <div className="language-card">
      <div className="language-header">
        <span className="language-name">{name}</span>
        <span className="language-level">{level}</span>
      </div>

      <div className="dots">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index < filledDots ? "filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
