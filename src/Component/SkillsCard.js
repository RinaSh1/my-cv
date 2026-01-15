import React from "react";

export default function SkillsCard({ skills }) {
  return (
    <div className="skills-card">
      <ul className="skills-container">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
