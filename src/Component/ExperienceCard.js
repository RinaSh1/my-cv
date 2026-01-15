import React from "react";
import { Briefcase, Building2, Clock } from "lucide-react";

export default function ExperienceCard({ company, role, duration, description }) {
  return (
    <div className="experience-card">
      <div className="experience-role">
        <Briefcase size={18} className="icon" />
        <h3 className="role">{role}</h3>
      </div>

      <div className="experience-header">
        <div className="company-wrapper">
          <Building2 size={16} className="icon" />
          <h5 className="company">{company}</h5>
        </div>

        <div className="duration-wrapper">
          <Clock size={16} className="icon" />
          <span className="duration">{duration}</span>
        </div>
      </div>

      {Array.isArray(description) ? (
        <ul>
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
