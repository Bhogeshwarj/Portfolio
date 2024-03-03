import React,{useEffect} from 'react'
import PortfolioCard from '../Components/PortfolioCard'
import HomeCard from '../Components/HomeCard'
import About from '../Components/About'
import SkillSection from '../Components/SkillSection'
import ProjectSection from '../Components/ProjectSection'
import Navbar from '../Components/Navbar'
import Contact from '../Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// AOS.init();
const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500,  // Note: Adjust the duration as needed
        });
      }, []);
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
        <Contact />
    </div>
    </div>
  )
}

export default Home