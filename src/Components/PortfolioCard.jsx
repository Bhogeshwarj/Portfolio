import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const PortfolioCard = () => {
  return (
    <div
      data-aos="zoom-out-down"
      className="flex justify-center items-center mt-8"
    >
      <div className="px-5 text-white w-full md:w-[80vw] lg:w-[60vw] backdrop-blur-2xl select-none rounded-2xl my-10 shadow-gray-900 hover:border-gray-200 hover:scale-110 transition-all delay-100 shadow-lg">
        <h3 className="pb-2 flex flex-col md:flex-row md:items-center text-xl md:text-3xl lg:text-4xl font-bold pt-3 border-2 border-transparent border-b-gray-300">
          <span className="mr-1.5">I&apos;m</span>
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer .",
                "App Developer .",
                "Software Engineer .",
                "Cloud Engineer .",
                "DevOps Engineer .",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          {/* <span className="ml-auto flex "> */}
          <span className="flex items-center mt-2 md:ml-auto md:">
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-300 mr-3"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-slate-300 mx-3"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:bhogeshwarj@gmail.com"
              className="text-white hover:text-slate-300 mx-3"
            >
              <FaEnvelope size={20} />
            </a>
          </span>
        </h3>
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl py-3">
            Computer Engineer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

// import React from 'react'
// import { FaGithub, FaEnvelope,FaLinkedin } from 'react-icons/fa';
// import Typewriter from 'typewriter-effect';

// const PortfolioCard = () => {
//   return (
//     <div>

//        <div className='px-5  text-white w-[80vw] backdrop-blur-2xl  select-none rounded-2xl my-10 shadow-gray-900  hover:border-gray-200 hover:scale-110 transition-all delay-100  shadow-lg'>
//       <h3 className='pb-2  flex items-center text-3xl font-bold pt-3 border-2 border-transparent border-b-gray-300'>
//         I'm&nbsp;
//         <Typewriter
//           options={{
//             strings: ['FrontEnd Developer .', 'Backend Developer .', 'Software Engineer .', 'Cloud Engineer .', 'Devops Engineer .'],
//             autoStart: true,
//             loop: true,
//           }}
//         />
//         <span className="ml-auto flex">
//           <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">
//             <FaGithub />
//           </a>
//           <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 mx-2">
//             <FaLinkedin />
//           </a>
//           <a href="mailto:your.email@example.com" className="text-blue-500 hover:text-blue-700 mx-2">
//             <FaEnvelope />
//           </a>
//         </span>
//       </h3>
//       <div>

// <h3 className="text-xl py-3">Computer Engineer</h3>

// </div>
//     </div>

//     </div>
//     )
// }

// export default PortfolioCard
