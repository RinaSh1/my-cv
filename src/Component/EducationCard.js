import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

export default function EducationCard({ institution, degree, courseWork, duration }) {
    return (
        <div className="education-card">
            <div className="education-header">
                <GraduationCap size={16} className="icon" />
                <h3 className="degree">{degree}</h3>
            </div>

            <div className="education-meta">
                <p className="institution">{institution}</p>
                <p className="duration">
                    <Calendar size={14} className="icon" /> {duration}
                </p>
            </div>

            {Array.isArray(courseWork) ? (
                <ul>
                    {courseWork.map((item, idx) => (
                        <li key={idx}>{item}</li>
   