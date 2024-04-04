import React from 'react'
import myImage from "../assets/Pasted Graphic 1.png"

const HomeCard = () => {
  return (
    <div  className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mt-10 mb-14 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-3xl lg:text-4xl mb-6 font-semibold">Hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          My name is Bhogeshwar Jadhav, and I am a Full Stack Developer. I am 20 years old
          from India , currently studying Computer Science . I have 2 years of work exprience, focusing and creating
          web applications . Over these years, I have developed various websites and collaborated on diverse projects
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={myImage}
          alt="profile"
          className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto"
        />
      </div>
    </div>
  )
}

export default HomeCard