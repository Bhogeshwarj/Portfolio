import React from 'react'
import Typewriter from 'typewriter-effect';

const PortfolioCard = () => {
  return (
    <div className='px-5  text-white w-[80vw] backdrop-blur-2xl  select-none rounded-2xl my-10 shadow-gray-900  hover:border-gray-200 hover:scale-110 transition-all delay-100  shadow-lg'>

    <div className=''>
    <h3 className='flex  text-3xl font-bold pt-3 border-2 border-transparent border-b-gray-300'> I'm&nbsp;
     <Typewriter
  options={{
      strings: ['FrontEnd Developer .', 'Backend Developer .' ,'Software Engineer .' , 'Cloud Engineer .','Devops Engineer .'],
      autoStart: true,
      loop: true,
    }}
/>
</h3>
    </div>

      <h3 className="text-xl py-3">Computer Engineer</h3>
    
    </div>
    )
}


export default PortfolioCard