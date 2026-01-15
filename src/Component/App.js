import React from "react";
import rinaData from "../Data/data";
import "../Style/Variables.css";
import EducationCard from "./EducationCard";

import ProfileCard from "./ProfileCard";
import ExperienceCard from "./ExperienceCard";
import SkillsCard from "./SkillsCard";
import LanguagesCard from "./LanguageCard";

export default function App() {
  const experiencesToShow = [5, 3, 4];
  console.log("ProfileCard:", ProfileCard);
  console.log("ExperienceCard:", ExperienceCard);
  console.log("SkillsCard:", SkillsCard);
  console.log("LanguagesCard:", LanguagesCard);

  return (
    <div className="cv-container">
      <div className="profile-card-wrapper">
        <ProfileCard
          name={rinaData.name}
          adress={rinaData.adress}
          email={rinaData.email}
          phoneNumber={rinaData.phoneNumber}
        />
      </div>

      <div className="main-section">
        <div className="left-column card">
          <h2>Experience</h2>
          {rinaData.experience
            .filter((exp) => experiencesToShow.includes(exp.id))
            .map((exp) => (
              <ExperienceCard
                key={exp.id}
                company={exp.company}
                role={exp.role}
                duration={exp.duration}
                description={exp.description}
              />
            ))}

          <h2>Education</h2>
          {rinaData.education.map((edu, index) => (
            <EducationCard
              key={index}
              institution={edu.institution}
              degree={edu.degree}
              courseWork={edu.courseWork}
              duration={edu.duration}
            />
          ))}
        </div>

        <div className="right-column">
          <div className="right-top card">
            <h2>Languages</h2>
            {rinaData.languages.map((lang) => (
              <LanguagesCard key={lang.id} name={lang.name} level={lang.level} />
            ))}
          </div>

          <div className="right-bottom card">
            <h2>Skills</h2>
            <SkillsCard skills={rinaData.skills} />

          </div>
        </div>
      </div>
    </div>
  );
}
