import React,{useState} from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <nav data-aos="fade-down" className="flex bg-black sticky bg-opacity-30 top-0 backdrop-filter backdrop-blur-sm items-center justify-between flex-wrap p-6 -mb-2">
        <div className="flex text-2xl items-center flex-shrink-0 font-bold mr-6 lg:mr-72 ">
          {/* <img src={locofy} className="w-100 h-10 mr-2" alt="Logo" /> */}Bhogeshwar Jadhav
        </div>
        <br />
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
        >
          <div className="text-sm lg:flex-grow">
          <Link activeClass="active"
      to="project"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
       className="block cursor-pointer mt-4 lg:inline-block text-lg lg:mt-0 text-white-200 mr-5">
                Projects
      </Link>
        
            <Link smooth to="" className="block cursor-pointer mt-4 lg:inline-block text-lg lg:mt-0 text-white-200 mr-5">
                Blogs
            </Link>
            <Link to="contact"
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={500}
      delay={500}
      isDynamic={true}
      ignoreCancelEvents={false}
      spyThrottle={500}
       className="block cursor-pointer mt-4 lg:inline-block text-lg lg:mt-0 text-white-200 mr-5">
              Contact Me
            </Link>
            {/* <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-0">
              Fourth Link
            </a> */}
          </div>
        </div>
      </nav>
    );
}

export default Navbar

