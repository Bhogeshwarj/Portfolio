import React from 'react'
import PortfolioCard from '../Components/PortfolioCard'
import HomeCard from '../Components/HomeCard'
import About from '../Components/About'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'

const Home = () => {
  return (
    <div className='w-[80vw] mx-auto '>
        <PortfolioCard />
        <HomeCard />
        <About />
        <SkillSection />
        {/* <ProjectSection /> */}
    </div>
  )
}

export default Home