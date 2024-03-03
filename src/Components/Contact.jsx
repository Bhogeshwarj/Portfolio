import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div data-aos = "fade-up" className="w-full flex flex-col items-center text-center py-8">
      <h2 className="text-3xl gradient-text font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out and connect with me on social media or drop me an email. I'd love to hear from you!
      </p>
      <div className="flex">
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 mx-2">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 mx-2">
          <FaLinkedin size={24} />
        </a>
        <a href="mailto:your.email@example.com" className="text-white hover:text-slate-300 mx-2">
          <FaEnvelope size={24} />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-slate-300 mx-2">
          <FaTwitter size={24} />
        </a>
      </div>
      <p className="text-gray-500 mt-6">
        "The only way to do great work is to love what you do." - Steve Jobs
      </p>
    </div>
  );
}

export default ContactMe;
