import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Profile from "./Profile";

export default function ProfileCard({ name, email, phoneNumber, adress }) {
  return (
    <div className="profile-card">
      <div className="profile-left">
        <h1 className="name">{name}</h1>
        <p className="job-title">Software Engineer</p>

        <div className="contact-horizontal">
          <div className="contact-item">
            <Phone size={16} />
            <span>{phoneNumber}</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        </div>

        <div className="contact-horizontal">
          <div className="contact-item">
            <Linkedin size={16} />
            <a
              href="https://www.linkedin.com/in/rina-sulejmani-8b436b325/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>{adress}</span>
          </div>
        </div>
      </div>

      <div className="profile-right">
        <Profile />
      </div>
    </div>
  );
}
