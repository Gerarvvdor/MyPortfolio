import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import '../Style/ContactSection.css';

const ContactSection = () => {
    return (
        <div className="contact-section">
            <button className="contact-button">
                Contact me
            </button>
            <ul className="contact-list g-6">
                <li className="contact-item">
                    <FaGithub className="contact-icon" />
                </li>
                <li className="contact-item">
                    <FaLinkedin className="contact-icon" />
                </li>
                <li className="contact-item">
                    <SiLinktree className="contact-icon" />
                </li>
            </ul>
        </div>
    );
};

export default ContactSection;
