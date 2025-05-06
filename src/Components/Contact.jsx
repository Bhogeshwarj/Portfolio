import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactMe = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-full flex flex-col items-center text-center py-8"
    >
      <h2 className="text-3xl gradient-text font-bold mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6">
        Feel free to reach out and connect with me on social media or drop me an
        email. I would love to hear from you!
      </p>
      <div className="flex">
        <a
          href="https://github.com/Bhogeshwarj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-slate-300 mx-2"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/bhogeshwarj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-slate-300 mx-2"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:bhogeshwarj@gmail.com"
          className="text-white hover:text-slate-300 mx-2"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://x.com/Bhogeshwar7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-slate-300 mx-2"
        >
          <FaXTwitter size={24} />
        </a>
      </div>
      <p className="text-gray-500 mt-6">
        &quot;The only way to do great work is to love what you do.&quot; -
        Steve Jobs
      </p>
    </div>
  );
};

export default ContactMe;
