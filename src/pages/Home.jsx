import React from 'react'
import PortfolioCard from '../Components/PortfolioCard'
import HomeCard from '../Components/HomeCard'
import About from '../Components/About'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
        
  
    <div>

    <Navbar className='z-[9999] sticky top-0' /> 
    </div>
    <div className='w-[80vw] mx-auto '>
        <PortfolioCard />
        <HomeCard />
        <About />
        <SkillSection />
        <ProjectSection />
    </div>
    </div>
  )
}

export default Home