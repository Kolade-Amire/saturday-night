import logoSrc from '../assets/logo.svg'
import {useState, useEffect} from 'react'

export default function NavBar(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (windowWidth >= 640) {
            setIsOpen(false)
        }
    }, [windowWidth])

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav
            className={`header-container ${isOpen ? 'h-40' : 'h-20'} ${props.darkMode ? "dark" : ""} bg-primaryColor text-textColorPrimary font-bold flex border-b border-b-textFaded items-center justify-between transition-height duration-300`}>
            <div className="mx-auto flex justify-between p-4 items-center w-full">
                <img src={logoSrc} className="h-10 w-auto flex-shrink-0" alt="logo"/>

                <div className="flex-grow left-nav-group hidden md:flex space-x-5 pl-6">
                    <a href="#" className="hover:text-textFaded">Home</a>
                    <a href="#" className="hover:text-textFaded">Stories</a>
                    <a href="#" className="hover:text-textFaded">Music</a>
                </div>
                <div className="right-nav-group hidden md:flex space-x-4">
                    <a href="#" className="hover:text-textFaded">Login</a>
                    <div className="toggler md:flex mt-1 space-x-1">
                        <p className="toggler--light">Light</p>
                        <div className="toggler--slider" onClick={props.toggleDarkMode}>
                            <div className="toggler--slider--circle"></div>
                        </div>
                        <p className="toggler--dark">Dark</p>
                    </div>

                </div>
                <div className="menu-icon md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col items-center space-y-4 p-4">
                        <a href="#" className="hover:text-gray-400">Home</a>
                        <a href="#" className="hover:text-gray-400">Stories</a>
                        <a href="#" className="hover:text-gray-400">Music</a>
                        <a href="#" className="hover:text-gray-400">Contact</a>
                    </nav>
                </div>
            )}
        </nav>
    )
}