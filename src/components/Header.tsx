import logoSrc from '../assets/logo.svg';
import {useState, useEffect} from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (windowWidth >= 640) {
            setIsOpen(false);
        }
    }, [windowWidth]);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            className={`header-container ${isOpen ? 'h-40' : 'h-20'} bg-primaryColor text-textColorPrimary font-bold flex border-b border-b-textFaded items-center justify-between transition-height duration-300`}>
            <div className="mx-auto flex justify-between p-4 items-center w-full">
                <div className="flex-shrink-0">
                    <img src={logoSrc} className="h-10 w-auto" alt="logo"/>
                </div>
                <nav className="flex-grow left-nav-group hidden md:flex space-x-14 pl-16">
                    <a href="#" className="hover:text-textFaded">Home</a>
                    <a href="#" className="hover:text-textFaded">Stories</a>
                    <a href="#" className="hover:text-textFaded">Music</a>
                </nav>
                <nav className="right-nav-group hidden md:flex space-x-4">
                    <a href="#" className="hover:text-textFaded">Login</a>
                    <a href="#" className="hover:text-textFaded">Sign Up</a>
                </nav>
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
        </header>
    );
};

export default Header;
